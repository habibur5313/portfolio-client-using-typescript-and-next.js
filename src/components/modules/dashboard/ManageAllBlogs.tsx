"use client"

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IBlog } from "@/types";
import { Edit, Eye, Trash2 } from "lucide-react";
import Link from "next/link";



interface ManageAllBlogsProps {
  blogs: IBlog[];
}

export const ManageAllBlogs = ({blogs} : ManageAllBlogsProps) => {
  const handleDelete = (id: string | number) => {
  };
  return (
    <div className="w-full p-6 rounded-2xl shadow-md bg-white dark:bg-gray-900">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
         Manage All Blogs
      </h1>

      <Table>
        <TableCaption>A list of all Blogs.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Author</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <TableRow key={blog?.id}>
                <TableCell className="font-medium">
                  {blog.title}
                </TableCell>
                <TableCell>{blog.content.length > 30 ? `${(blog.content).slice(0,30)}...` : blog.content}</TableCell>
                <TableCell>{blog?.author?.email}</TableCell>
                <TableCell className="px-4 py-3 flex flex-wrap sm:flex-nowrap gap-2 justify-center">
                  <Link href={`/blogs/${blog.id}`}>
                    <Button
                      size="icon"
                      className="h-8 w-8 bg-blue-100 text-blue-600 hover:bg-blue-200"
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href={`/dashboard/manage-blogs/update-blog/${blog.id}`}>
                    <Button
                      size="icon"
                      className="h-8 w-8 bg-yellow-100 text-yellow-600 hover:bg-yellow-200"
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Button
                    onClick={() => handleDelete(blog?.id)}
                    variant="destructive"
                    size="icon"
                    className="h-8 w-8"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center text-gray-500">
                No users found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
