/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { getUserSession } from "@/helpers/getUserSession";
import { revalidatePath, revalidateTag } from "next/cache";

export const createBlog = async (data: FormData) => {
  try{
  const session = await getUserSession();
  const blogInfo = Object.fromEntries(data.entries());
  const modifiedData = {
    ...blogInfo,
    tags: blogInfo.tags
      .toString()
      .split(",")
      .map((tag) => tag.trim()),
      isFeatured: blogInfo.isFeatured === "true",
    authorId: session?.user?.id,
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(modifiedData),
  });

  if (!res.ok) throw new Error("Failed to create blog");

    revalidateTag("BLOGS");
    revalidatePath("/blogs");

    return { success: true, message: "Blog created successfully!" };
  } catch (err: any) {
    return { success: false, message: err.message || "Something went wrong" };
  }
};
