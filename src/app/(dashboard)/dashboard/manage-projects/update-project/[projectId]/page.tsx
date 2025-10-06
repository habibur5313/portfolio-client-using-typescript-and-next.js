import UpdateProjectForm from "@/components/modules/Projects/UpdateProjectForm";
import { getProjectById } from "@/services/projectServices";
import React from "react";

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

const UpdateProjectPage = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) => {
  const { projectId } = await params;
  const project = await getProjectById(projectId);

  return <div className="w-full flex justify-center items-center"><UpdateProjectForm project={project}></UpdateProjectForm></div>;
};

export default UpdateProjectPage;
