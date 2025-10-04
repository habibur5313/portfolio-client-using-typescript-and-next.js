/* eslint-disable @typescript-eslint/no-explicit-any */

import ProjectCard from "@/components/modules/Projects/ProjectCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MD Habibur Rahman Projects | Full-Stack Developer Portfolio",
  description: "Explore the projects of MD Habibur Rahman, a full-stack developer specializing in MERN stack and Next.js. Discover web apps, portfolio work, and real-world coding projects.",
};


const AllProjectsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
    cache: "no-store",
  });

  let projects: any[] = [];
  try {
    const json = await res.json();
    projects = json.data || [];
  } catch (err) {
    console.error("Error parsing projects JSON:", err);
  }

  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl">All Projects</h2>
      <p className="text-center text-gray-600 mt-2 mb-10 text-lg">
        ✨ All Projects I’ve built with love and code
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto max-w-6xl my-5">
        {projects.map((project: any) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default AllProjectsPage;