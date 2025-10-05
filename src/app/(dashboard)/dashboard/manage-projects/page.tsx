import { ManageAllProjects } from "@/components/modules/dashboard/ManageAllProjects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manage Projects | MD Habibur Rahman Portfolio Dashboard",
  description:
    "Manage all projects in MD Habibur Rahman's portfolio dashboard. Edit, update, and organize web development projects and MERN stack work efficiently.",
};

export default async function ManageProjectsPage () {
  let projects = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch projects");

    const data = await res.json();
    projects = data?.data || [];
  } catch (error) {
    console.error("Error fetching projects:", error);
  }

  // Pass fetched data to client component wrapper
  return <ManageAllProjects projects={projects} />;
}
