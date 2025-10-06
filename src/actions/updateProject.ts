// "use server";

// import { getUserSession } from "@/helpers/getUserSession";
// import { revalidatePath, revalidateTag } from "next/cache";
// import { redirect } from "next/navigation";
// import { toast } from "sonner";

// export interface IErrorResponse {
//   error: string; // error message like "Something went wrong"
// }


// /**
//  * Handles project creation via FormData and posts it to external API.
//  * Automatically revalidates cache & redirects after success.
//  */
// export const updateProject = async (formData: FormData) => {
//   try {
//     // ✅ 1. Verify user session
//     const session = await getUserSession();
//     if (!session?.user?.id) {
//       throw new Error("Unauthorized — user not logged in");
//     }

//     // ✅ 2. Convert form data into a plain object
//     const projectInfo = Object.fromEntries(formData.entries());

//     const actionKey = Object.keys(projectInfo).find((key) =>
//       key.startsWith("$ACTION_ID_")
//     );

//     if (actionKey) {
//       delete projectInfo[actionKey];
//     }

//     // ✅ 3. Format and sanitize data before sending to API
//     const modifiedData = {
//       ...projectInfo,
//       // Convert comma-separated values → array
//       technologyUsed: projectInfo.technologyUsed
//         ? projectInfo.technologyUsed
//             .toString()
//             .split(",")
//             .map((tech) => tech.trim())
//         : [],
//       npmPackageUsed: projectInfo.npmPackageUsed
//         ? projectInfo.npmPackageUsed
//             .toString()
//             .split(",")
//             .map((pkg) => pkg.trim())
//         : [],
//       isFeatured: Boolean(projectInfo.isFeatured),
//       authorId: session.user.id,
//     };

//     // ✅ 4. Send POST request to backend API
//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_BASE_API}/project`,
//       {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(modifiedData),
//       }
//     );

//     // ✅ 5. Parse and handle response
//     const result = await response.json();


//     // ✅ 6. Revalidate & redirect if successful
//      if (result?.id) {
//       // ✅ Revalidate cache and safely redirect
//       revalidateTag("PROJECTS");
//       revalidatePath("/projects");
//       return redirect("/projects"); // Important: return, not just call
//     }

//     return result;
//   } catch (error: unknown) {
//   // 🧠 Ignore Next.js redirect errors
//   if ((error as any)?.digest?.startsWith("NEXT_REDIRECT")) throw error;

//   console.error("❌ Error creating project:", error);

//   const message =
//     error instanceof Error ? error.message : "Something went wrong";

//   toast.error(message);

//   const response: IErrorResponse = { error: message };
//   return response;
// }

// };

"use server";

import { getUserSession } from "@/helpers/getUserSession";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export interface IErrorResponse {
  error: string;
}

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
      isFeatured: Boolean(projectInfo.isFeatured),
      authorId: session.user.id, 
    };

    // console.log(JSON.stringify(modifiedData))

    // ✅ 6. API PATCH request
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/project/${projectId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(modifiedData),
      }
    );
    console.log(response)

    const result = await response.json();

    // ✅ 7. Revalidate cache & redirect
    if (response.ok) {
      revalidateTag("PROJECTS");
      revalidatePath("/dashboard/manage-projects");
      redirect("/dashboard/manage-projects");
    }

    return result;
  } catch (error: unknown) {
    if ((error as any)?.digest?.startsWith("NEXT_REDIRECT")) throw error;
    console.error("❌ Error updating project:", error);
    const message =
      error instanceof Error ? error.message : "Something went wrong";
    return { error: message } as IErrorResponse;
  }
};
