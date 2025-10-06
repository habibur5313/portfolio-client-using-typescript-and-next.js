import UpdateBlogForm from "@/components/modules/Blogs/UpdateBlogForm";
import { getBlogById } from "@/services/PostServices";
import { IBlog } from "@/types";
import React from "react";

export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`);
  const { data: blogs } = await res.json();

  return blogs.slice(0, 2).map((blog: IBlog) => ({
    blogId: String(blog.id),
  }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  const blog = await getBlogById(blogId);

  return {
    title: blog?.title,
    description: blog?.content,
  };
};

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;

  const blog = await getBlogById(blogId);

  return (
    <div className="w-full flex justify-center items-center">
      <UpdateBlogForm blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;
