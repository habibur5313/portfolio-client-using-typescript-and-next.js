/* eslint-disable @typescript-eslint/no-explicit-any */
import About from "@/components/modules/About/About";
import BlogCard from "@/components/modules/Blogs/BlogCard";
import Contact from "@/components/modules/contact/Contact";
import Hero from "@/components/modules/Home/Hero";
import Skill from "@/components/modules/Skills/Skill";

export default async function HomePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
    next: {
      tags: ["BLOGS"],
    },
  });
  const { data: blogs } = await res.json();

  return (
    <div>
      <Hero />
      <section className="flex flex-col items-center justify-center bg-gray-50 sm:px-6 py-12">
        <About />
      </section>
      <section className=" bg-gray-50 px-6 pb-12 flex flex-col items-center">
        <Skill/>
      </section>
      <h2 className="text-center my-5 text-4xl">Featured Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto my-5">
        {blogs.slice(0, 3).map((blog: any) => (
          <BlogCard key={blog?.id} post={blog} />
        ))}
      </div>
      <section className="flex flex-col items-center justify-center bg-gray-50 sm:px-6 py-12">
        <Contact />
      </section>
    </div>
  );
}
