"use server";

import { getUserSession } from "@/helpers/getUserSession";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { toast } from "sonner";

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
      isFeatured: Boolean(projectInfo.isFeatured),
      authorId: session.user.id,
    };

    console.log(JSON.stringify(modifiedData));
    // ✅ 4. Send POST request to backend API
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/project`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(modifiedData),
      }
    );

    // ✅ 5. Parse and handle response
    const result = await response.json();

    console.log(result);

    // ✅ 6. Revalidate & redirect if successful
     if (result?.id) {
      // ✅ Revalidate cache and safely redirect
      revalidateTag("PROJECTS");
      revalidatePath("/projects");
      return redirect("/projects"); // Important: return, not just call
    }

    return result;
  } catch (error: any) {
    // 🧠 Ignore Next.js redirect errors
    if (error?.digest?.startsWith("NEXT_REDIRECT")) throw error;

    console.error("❌ Error creating project:", error);
    toast.error( error.message || "Something went wrong")
    return { error: error.message || "Something went wrong" };
  }
};
