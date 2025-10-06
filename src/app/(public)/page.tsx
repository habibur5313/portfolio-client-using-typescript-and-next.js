import About from "@/components/modules/About/About";
import BlogCard from "@/components/modules/Blogs/BlogCard";
import Contact from "@/components/modules/contact/Contact";
import Hero from "@/components/modules/Home/Hero";
import ProjectCard from "@/components/modules/Projects/ProjectCard";
import Skill from "@/components/modules/Skills/Skill";
import { IBlog, IProject } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MD Habibur Rahman | Full-Stack Developer Portfolio",
  description: "Explore the projects, blogs, and work of MD Habibur Rahman. A MERN stack developer specializing in React, Next.js, Node.js, and modern web development.",
};

export default async function HomePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post?isFeatured=true`, {
    next: {
      tags: ["BLOGS"],
    },
  });

  const { data: blogs } = await res.json();

  const projectRes = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/project?isFeatured=true`,
    {
      next: {
        tags: ["PROJECTS"],
      },
    }
  );
  const { data: projects } = await projectRes.json();

  return (
    <div>
      <Hero />
      <section className="flex flex-col items-center justify-center bg-gray-50 sm:px-6 py-12">
        <About />
      </section>
      <section className=" bg-gray-50 px-6 pb-12 flex flex-col items-center">
        <Skill />
      </section>
      <h2 className="text-center text-4xl pt-10">Featured Projects</h2>
      <p className="text-center text-gray-600 mt-2 mb-10 text-lg">
        ✨ Highlighted works that showcase my skills and creativity.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto my-5">
        {projects?.slice(0, 3).map((project: IProject) => (
          <ProjectCard key={project?.id} project={project} />
        ))}
      </div>
      <h2 className="text-center text-4xl pt-10">Featured Blogs</h2>
      <p className="text-center text-gray-600 mt-2 mb-10 text-lg">
        ✨ Discover insights from my most impactful articles and tutorials..
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto my-5">
        {blogs?.slice(0, 3).map((blog: IBlog) => (
          <BlogCard key={blog?.id} post={blog} />
        ))}
      </div>
      <section className="flex flex-col items-center justify-center bg-gray-50 sm:px-6 py-12">
        <Contact />
      </section>
    </div>
  );
}
