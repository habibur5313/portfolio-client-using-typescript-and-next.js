/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { getUserSession } from "@/helpers/getUserSession";
import { revalidatePath, revalidateTag } from "next/cache";

export const updateProject = async (formData: FormData) => {
  try {
    // ✅ 1. Verify session
    const session = await getUserSession();
    if (!session?.user?.id) {
      throw new Error("Unauthorized — user not logged in");
    }

    // ✅ 2. Convert formData to object
    const projectInfo = Object.fromEntries(formData.entries());

    // ✅ 3. Remove Next.js internal form keys
    const actionKey = Object.keys(projectInfo).find((key) =>
      key.startsWith("$ACTION_ID_")
    );
    if (actionKey) delete projectInfo[actionKey];

    // ✅ 4. Extract projectId for PATCH URL
    const projectId = projectInfo.id || projectInfo.projectId;
    if (!projectId) {
      throw new Error("Project ID is missing for update");
    }

    // ✅ 5. Format before sending to backend
    const modifiedData = {
      projectName: projectInfo.projectName,
      projectCategory: projectInfo.projectCategory,
      description: projectInfo.description,
      liveLink: projectInfo.liveLink,
      githubLink: projectInfo.githubLink,
      githubLinkServer: projectInfo.githubLinkServer,
      image: projectInfo.image,
      feature: projectInfo.feature,
      technologyUsed: projectInfo.technologyUsed
        ? projectInfo.technologyUsed.toString().split(",").map((t) => t.trim())
        : [],
      npmPackageUsed: projectInfo.npmPackageUsed
        ? projectInfo.npmPackageUsed.toString().split(",").map((t) => t.trim())
        : [],
      startDate: projectInfo.startDate,
      endDate: projectInfo.endDate,
      isFeatured: projectInfo.isFeatured === "true",
      authorId: session.user.id, 
    };

    console.log(modifiedData)

    // console.log(JSON.stringify(modifiedData))

    // ✅ 6. API PATCH request
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/project/${projectId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(modifiedData),
      }
    );

if (!res.ok) throw new Error("Failed to update project");

    revalidateTag("PROJECTS");
    revalidatePath("/dashboard/manage-projects");

    return { success: true, message: "Project updated successfully!" };
  } catch (err: any) {
    return { success: false, message: err.message || "Something went wrong" };
  }
};
