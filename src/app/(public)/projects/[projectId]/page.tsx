import React from "react";

import { IProject } from "@/types";
import { getProjectById } from "@/services/projectServices";
import ProjectDetailsCard from "@/components/modules/Projects/ProjectDetailsCard";

export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`);
  const { data: projects } = await res.json();

  return projects.slice(0, 2).map((project: IProject) => ({
    projectId: String(project.id),
  }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) => {
  const { projectId } = await params;
  const project = await getProjectById(projectId);

  return {
    title: project?.projectName,
    description: project?.description,
  };
};

const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) => {
  const { projectId } = await params;
  const project = await getProjectById(projectId);

  console.log(project);

  return <div className="py-30 px-4 max-w-7xl mx-auto"><ProjectDetailsCard project={project}></ProjectDetailsCard></div>;
};

export default ProjectDetailsPage;
