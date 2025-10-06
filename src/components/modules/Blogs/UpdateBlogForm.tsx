"use client";

import { updateBlog } from "@/actions/updateBlog";
import { IBlog } from "@/types";
import { redirect } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";

export default function UpdateBlogForm({ blog }: { blog: IBlog }) {
  const [isFeatured, setIsFeatured] = useState(blog?.isFeatured ? "true" : "false");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (formData: FormData) => {
    // Add blog id to formData for server action
    formData.append("id", String(blog?.id));

    startTransition(async () => {
      const res = await updateBlog(formData);

      if (res.success) {
        toast.success(res.message || "Blog updated successfully!");
        redirect("/dashboard/manage-blogs");
      } else {
        toast.error(res.message || "Something went wrong!");
      }
    });
  };

  return (
    <form
      action={handleSubmit}
      className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-4 w-full"
    >
      <h2 className="text-xl font-semibold mb-4 ml-12 md:ml-0">Update Blog</h2>

      {/* Title */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={blog?.title}
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
          required
        />
      </div>

      {/* Content */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="content">
          Content
        </label>
        <textarea
          id="content"
          name="content"
          rows={4}
          defaultValue={blog?.content}
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
          required
        />
      </div>

      {/* Thumbnail */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="thumbnail">
          Thumbnail URL
        </label>
        <input
          type="url"
          id="thumbnail"
          name="thumbnail"
          defaultValue={blog?.thumbnail}
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Tags */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="tags">
          Tags (comma separated)
        </label>
        <input
          type="text"
          id="tags"
          name="tags"
          defaultValue={blog?.tags?.join(", ")}
          placeholder="Next.js, React, Web Development"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Featured */}
      <div>
        <p className="block text-sm font-medium mb-1">Featured</p>
        <div className="flex gap-6">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="isFeatured"
              value="true"
              checked={isFeatured === "true"}
              onChange={(e) => setIsFeatured(e.target.value)}
              className="text-blue-600 focus:ring-blue-500"
            />
            Yes
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="isFeatured"
              value="false"
              checked={isFeatured === "false"}
              onChange={(e) => setIsFeatured(e.target.value)}
              className="text-blue-600 focus:ring-blue-500"
            />
            No
          </label>
        </div>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition"
      >
        {isPending ? "Updating..." : "Update Blog"}
      </button>
    </form>
  );
}
