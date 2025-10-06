import { ManageAllProjects } from "@/components/modules/dashboard/ManageAllProjects";
import { IProject } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manage Projects | MD Habibur Rahman Portfolio Dashboard",
  description:
    "Manage all projects in MD Habibur Rahman's portfolio dashboard. Edit, update, and organize web development projects and MERN stack work efficiently.",
};

export default async function ManageProjectsPage () {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
      cache: "no-store",
    });
  
    let projects: IProject[] = [];
    try {
      const json = await res.json();
      projects = json.data || [];
    } catch (err) {
      console.error("Error parsing blogs JSON:", err);
    }

  // Pass fetched data to client component wrapper
  return <ManageAllProjects projects={projects} />;
}
