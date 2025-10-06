// src/actions/projectActions.ts
"use server";

import { revalidateTag } from "next/cache";

export async function deleteBlog(id: number | string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete Blog");
  }

  revalidateTag("BLOGS");
}
