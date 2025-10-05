import { ManageAllBlogs } from "@/components/modules/dashboard/ManageAllBlogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manage Blogs | MD Habibur Rahman Portfolio Dashboard",
  description:
    "View, edit, and manage all blogs in MD Habibur Rahman's portfolio dashboard. Keep your web development articles and tutorials organized and up-to-date.",
};

export default async function ManageBlogsPage() {
  let blogs = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch blogs");

    const data = await res.json();
    blogs = data?.data || [];
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }

  // Pass fetched data to client component wrapper
  return <ManageAllBlogs blogs={blogs} />;
}
