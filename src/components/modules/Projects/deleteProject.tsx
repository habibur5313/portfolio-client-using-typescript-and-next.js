// src/actions/projectActions.ts
"use server";

import { revalidateTag } from "next/cache";

export async function deleteProject(id: number | string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete project");
  }

  revalidateTag("PROJECTS");
}
