import CreateProjectForm from "@/components/modules/Projects/CreateProjectForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Create Project | MD Habibur Rahman Portfolio Dashboard",
  description: "Add a new project to MD Habibur Rahman's portfolio. Use the dashboard to showcase your latest web development projects and MERN stack work.",
};


const CreateProject = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <CreateProjectForm />
    </div>
  );
};

export default CreateProject;
