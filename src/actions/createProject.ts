/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { getUserSession } from "@/helpers/getUserSession";
import { revalidatePath, revalidateTag } from "next/cache";

/**
 * Handles project creation via FormData and posts it to external API.
 * Automatically revalidates cache & redirects after success.
 */
export const createProject = async (formData: FormData) => {
  try {
    // ✅ 1. Verify user session
    const session = await getUserSession();
    if (!session?.user?.id) {
      throw new Error("Unauthorized — user not logged in");
    }

    // ✅ 2. Convert form data into a plain object
    const projectInfo = Object.fromEntries(formData.entries());

    const actionKey = Object.keys(projectInfo).find((key) =>
      key.startsWith("$ACTION_ID_")
    );

    if (actionKey) {
      delete projectInfo[actionKey];
    }

    // ✅ 3. Format and sanitize data before sending to API
    const modifiedData = {
      ...projectInfo,
      // Convert comma-separated values → array
      technologyUsed: projectInfo.technologyUsed
        ? projectInfo.technologyUsed
            .toString()
            .split(",")
            .map((tech) => tech.trim())
        : [],
      npmPackageUsed: projectInfo.npmPackageUsed
        ? projectInfo.npmPackageUsed
            .toString()
            .split(",")
            .map((pkg) => pkg.trim())
        : [],
      isFeatured: projectInfo.isFeatured === "true",
      authorId: session.user.id,
    };

    // ✅ 4. Send POST request to backend API
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(modifiedData),
    });

    if (!res.ok) throw new Error("Failed to create project");

    revalidateTag("PROJECTS");
    revalidatePath("/projects");

    return { success: true, message: "Project created successfully!" };
  } catch (err: any) {
    return { success: false, message: err.message || "Something went wrong" };
  }
};
