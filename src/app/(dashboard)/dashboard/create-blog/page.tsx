import CreateBlogForm from "@/components/modules/Blogs/CreateBlogForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Create Blog | MD Habibur Rahman Portfolio Dashboard",
  description: "Publish a new blog on MD Habibur Rahman's portfolio. Share your insights, tutorials, and web development experiences using the dashboard.",
};


const CreateBlog = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <CreateBlogForm />
    </div>
  );
};

export default CreateBlog;
