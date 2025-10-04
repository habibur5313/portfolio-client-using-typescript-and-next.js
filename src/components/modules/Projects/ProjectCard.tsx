"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaServer } from "react-icons/fa";

interface ProjectProps {
  project: any;
}

export default function ProjectCard({ project }: ProjectProps) {
  // Limit description to 50 characters (fixed from 100)
  const slicedDescription =
    project.description.length > 100
      ? project.description.substring(0, 100) + "..."
      : project.description;

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-200 group transform hover:-translate-y-1 transition-transform duration-300">
      {/* Project Image */}
      <Link href={`/projects/${project.id}`} className="block relative w-full h-64">
        <Image
          src={project.image}
          alt={project.projectName}
          fill
          className="object-cover"
        />
      </Link>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title & Category */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="text-2xl font-bold text-gray-800">
            {project.projectName}
          </h2>
          <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full mt-2 md:mt-0">
            {project.projectCategory}
          </span>
        </div>

        {/* Short Description */}
        <p className="text-gray-600">{slicedDescription} <Link href={`/projects/${project.id}`} className="text-blue-600 font-medium">Read More</Link></p>

        {/* Tech Used */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            🛠 Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologyUsed.map((tech: string, i: number) => (
              <span
                key={i}
                className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* NPM Packages */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            📦 NPM Packages
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.npmPackageUsed.map((pkg: string, i: number) => (
              <span
                key={i}
                className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full shadow-sm"
              >
                {pkg}
              </span>
            ))}
          </div>
        </div>

        {/* Links (no nested anchors inside <Link>) */}
        <div className="flex flex-wrap gap-4 mt-4">
          {project.liveLink && (
            <Link
              href={project.liveLink}
              target="_blank"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow transition"
            >
              <FaExternalLinkAlt /> Live Demo
            </Link>
          )}
          {project.githubLink && (
            <Link
              href={project.githubLink}
              target="_blank"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg shadow transition"
            >
              <FaGithub /> Client
            </Link>
          )}
          {project.githubLinkServer && (
            <Link
              href={project.githubLinkServer}
              target="_blank"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow transition"
            >
              <FaServer /> Server
            </Link>
          )}
        </div>

        {/* Footer */}
        <div className="text-sm text-gray-500 mt-4 flex justify-between">
          <p>
            <span className="font-medium">Duration:</span> {project.startDate} - {project.endDate}
          </p>
          <p>
            <span className="font-medium">Author:</span> {project.author.name}
          </p>
        </div>
      </div>
    </div>
  );
}
