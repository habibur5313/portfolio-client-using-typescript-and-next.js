"use client";

import { startTransition, useState, useTransition } from "react";
import Form from "next/form";
import { updateProject } from "@/actions/updateProject";
import { IProject } from "@/types";
import { toast } from "sonner";
import { redirect } from "next/navigation";

export default function UpdateProjectForm({ project }: { project: IProject }) {
  const [isFeatured, setIsFeatured] = useState(
    project?.isFeatured ? "true" : "false"
  );
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const res = await updateProject(formData);

      if (res.success) {
        toast.success(res.message || "Project updated successfully!");
        redirect("/dashboard/manage-projects");
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
        Update Project
      </h2>

      {/* Hidden ID field */}
      <input type="hidden" name="id" value={project?.id} />

      {/* Project Name */}
      <div>
        <label className="block text-sm font-medium mb-1">Project Name</label>
        <input
          type="text"
          name="projectName"
          defaultValue={project?.projectName}
          required
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Project Category */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Project Category
        </label>
        <input
          type="text"
          name="projectCategory"
          defaultValue={project?.projectCategory}
          required
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          name="description"
          rows={4}
          defaultValue={project?.description}
          required
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Live Link */}
      <div>
        <label className="block text-sm font-medium mb-1">Live Link</label>
        <input
          type="url"
          name="liveLink"
          defaultValue={project?.liveLink}
          required
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* GitHub Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            GitHub (Client)
          </label>
          <input
            type="url"
            name="githubLink"
            defaultValue={project?.githubLink}
            required
            className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            GitHub (Server)
          </label>
          <input
            type="url"
            name="githubLinkServer"
            defaultValue={project?.githubLinkServer || ""}
            className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
          />
        </div>
      </div>

      {/* Image */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Project Image URL
        </label>
        <input
          type="url"
          name="image"
          defaultValue={project?.image}
          required
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Feature */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Project Feature
        </label>
        <input
          type="text"
          name="feature"
          defaultValue={project?.feature}
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Technologies */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Technologies Used
        </label>
        <input
          type="text"
          name="technologyUsed"
          defaultValue={project?.technologyUsed?.join(", ")}
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* NPM Packages */}
      <div>
        <label className="block text-sm font-medium mb-1">
          NPM Packages Used
        </label>
        <input
          type="text"
          name="npmPackageUsed"
          defaultValue={project?.npmPackageUsed?.join(", ")}
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Duration */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Start Date</label>
          <input
            type="date"
            name="startDate"
            defaultValue={project?.startDate?.split("T")[0]}
            required
            className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">End Date</label>
          <input
            type="date"
            name="endDate"
            defaultValue={project?.endDate?.split("T")[0]}
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
        {isPending ? "Updating..." : "Update Project"}
      </button>
    </Form>
  );
}
