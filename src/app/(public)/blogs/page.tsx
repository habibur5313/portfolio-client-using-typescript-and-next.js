import BlogCard from "@/components/modules/Blogs/BlogCard";
import { IBlog } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MD Habibur Rahman Blogs | Web Development & Projects",
  description: "Read the latest blogs by MD Habibur Rahman on web development, MERN stack projects, Next.js tips, and full-stack programming insights.",
};


const AllBlogsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
    cache: "no-store",
  });

  let blogs: IBlog[] = [];
  try {
    const json = await res.json();
    blogs = json.data || [];
  } catch (err) {
    console.error("Error parsing blogs JSON:", err);
  }

  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl">All Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto max-w-6xl my-5">
        {blogs.map((blog: IBlog) => (
          <BlogCard key={blog.id} post={blog} />
        ))}
      </div>
    </div>
  );
};

export default AllBlogsPage;