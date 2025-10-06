import { ManageAllBlogs } from "@/components/modules/dashboard/ManageAllBlogs";
import { IBlog } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manage Blogs | MD Habibur Rahman Portfolio Dashboard",
  description:
    "View, edit, and manage all blogs in MD Habibur Rahman's portfolio dashboard. Keep your web development articles and tutorials organized and up-to-date.",
};

export default async function ManageBlogsPage() {
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

  // Pass fetched data to client component wrapper
  return <ManageAllBlogs blogs={blogs} />;
}
