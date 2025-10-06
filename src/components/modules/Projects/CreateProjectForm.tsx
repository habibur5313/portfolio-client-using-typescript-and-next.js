"use client";

import { useState, useTransition } from "react";
import Form from "next/form";
import { createProject } from "@/actions/createProject";
import { toast } from "sonner";
import { redirect } from "next/navigation";

export default function CreateProjectForm() {
  const [isFeatured, setIsFeatured] = useState("false");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const res = await createProject(formData);

      if (res.success) {
        toast.success(res.message || "Project updated successfully!");
        redirect("/projects");
      } else {
        toast.error(res.message || "Something went wrong!");
      }
    });
  };

  return (
    <Form
      action={handleSubmit}
      className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-4 w-full"
    >
      <h2 className="text-xl font-semibold mb-4 ml-12 md:ml-0">
        Create Project
      </h2>

      {/* Project Name */}
      <div>
        <label htmlFor="projectName" className="block text-sm font-medium mb-1">
          Project Name
        </label>
        <input
          type="text"
          id="projectName"
          name="projectName"
          required
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Project Category */}
      <div>
        <label
          htmlFor="projectCategory"
          className="block text-sm font-medium mb-1"
        >
          Project Category
        </label>
        <input
          type="text"
          id="projectCategory"
          name="projectCategory"
          placeholder="Web App, E-commerce, Portfolio..."
          required
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-1">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          required
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Live Link */}
      <div>
        <label htmlFor="liveLink" className="block text-sm font-medium mb-1">
          Live Link
        </label>
        <input
          type="url"
          id="liveLink"
          name="liveLink"
          required
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* GitHub Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="githubLink"
            className="block text-sm font-medium mb-1"
          >
            GitHub (Client)
          </label>
          <input
            type="url"
            id="githubLink"
            name="githubLink"
            required
            className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label
            htmlFor="githubLinkServer"
            className="block text-sm font-medium mb-1"
          >
            GitHub (Server)
          </label>
          <input
            type="url"
            id="githubLinkServer"
            name="githubLinkServer"
            className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
          />
        </div>
      </div>

      {/* Image */}
      <div>
        <label htmlFor="image" className="block text-sm font-medium mb-1">
          Project Image URL
        </label>
        <input
          type="url"
          id="image"
          name="image"
          required
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Feature */}
      <div>
        <label htmlFor="feature" className="block text-sm font-medium mb-1">
          Project Feature
        </label>
        <input
          type="text"
          id="feature"
          name="feature"
          placeholder="User Auth, Dashboard, API Integration"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Technology Used */}
      <div>
        <label
          htmlFor="technologyUsed"
          className="block text-sm font-medium mb-1"
        >
          Technologies Used (comma separated)
        </label>
        <input
          type="text"
          id="technologyUsed"
          name="technologyUsed"
          placeholder="React, Node.js, MongoDB, Tailwind"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* NPM Packages Used */}
      <div>
        <label
          htmlFor="npmPackageUsed"
          className="block text-sm font-medium mb-1"
        >
          NPM Packages Used (comma separated)
        </label>
        <input
          type="text"
          id="npmPackageUsed"
          name="npmPackageUsed"
          placeholder="axios, react-hook-form, zod"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Project Duration */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="startDate" className="block text-sm font-medium mb-1">
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            required
            className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <label htmlFor="endDate" className="block text-sm font-medium mb-1">
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            required
            className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
          />
        </div>
      </div>

      {/* Featured */}
      <div>
        <p className="block text-sm font-medium mb-1">Featured Project</p>
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
        {isPending ? "creating..." : "create Project"}
      </button>
    </Form>
  );
}
