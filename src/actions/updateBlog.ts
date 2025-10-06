"use server";

import { getUserSession } from "@/helpers/getUserSession";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const updateBlog = async (data: FormData) => {
  const session = await getUserSession();
  const blogInfo = Object.fromEntries(data.entries());
  const blogId = blogInfo.id;
  const modifiedData = {
    ...blogInfo,
    tags: blogInfo.tags
      .toString()
      .split(",")
      .map((tag) => tag.trim()),
    authorId: session?.user?.id,
    isFeatured: Boolean(blogInfo.isFeatured),
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/:${blogId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(modifiedData),
  });

  const result = await res.json();

  if (result?.id) {
    revalidateTag("BLOGS");
    revalidatePath("/blogs");
    redirect("/blogs");
  }
  return result;
};
