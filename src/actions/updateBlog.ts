/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { getUserSession } from "@/helpers/getUserSession";
import { revalidateTag, revalidatePath } from "next/cache";

export const updateBlog = async (formData: FormData) => {
  try {
    const session = await getUserSession();
    if (!session?.user?.id) {
      throw new Error("Unauthorized — user not logged in");
    }

    const blogInfo = Object.fromEntries(formData.entries());
    const blogId = blogInfo.id || blogInfo.blogId;

    const modifiedData = {
      title: blogInfo.title,
      content: blogInfo.content,
      thumbnail: blogInfo.thumbnail,
      tags: blogInfo.tags
        ? blogInfo.tags.toString().split(",").map((t) => t.trim())
        : [],
      isFeatured: Boolean(blogInfo.isFeatured),
      authorId: session.user.id,
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(modifiedData),
    });

    if (!res.ok) throw new Error("Failed to update blog");

    revalidateTag("BLOGS");
    revalidatePath("/dashboard/manage-blogs");

    return { success: true, message: "Blog updated successfully!" };
  } catch (err: any) {
    return { success: false, message: err.message || "Something went wrong" };
  }
};
