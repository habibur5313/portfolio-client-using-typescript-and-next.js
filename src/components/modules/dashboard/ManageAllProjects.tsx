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
import { Edit, Eye, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";

export interface IAuthor {
  id: number | string;
  name: string;
  email: string;
  password?: string;
  role: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IProject {
  id: number | string;
  projectName: string;
  projectCategory: string;
  description: string;
  feature: string;
  technologyUsed: string[];
  npmPackageUsed: string[];
  startDate: string; 
  endDate: string; 
  image: string;
  githubLink: string;
  githubLinkServer?: string;
  liveLink: string;
  isFeatured: boolean;
  views: number;
  authorId: number | string;
  author: IAuthor;
  createdAt: string;
  updatedAt: string;
}

interface ManageAllProjectsProps {
  projects: IProject[];
}

export const ManageAllProjects = ({ projects }: ManageAllProjectsProps) => {
  const handleDelete = (id: string | number) => {
    console.log(id);
  };
  return (
    <div className="w-full p-6 rounded-2xl shadow-md bg-white dark:bg-gray-900">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
         Manage All Projects
      </h1>

      <Table>
        <TableCaption>A list of all projects.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Project Name</TableHead>
            <TableHead>Project Category</TableHead>
            <TableHead>Author</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {projects.length > 0 ? (
            projects.map((project) => (
              <TableRow key={project?.id}>
                <TableCell className="font-medium">
                  {project.projectName}
                </TableCell>
                <TableCell>{project.projectCategory}</TableCell>
                <TableCell>{project?.author?.email}</TableCell>
                <TableCell className="px-4 py-3 flex flex-wrap sm:flex-nowrap gap-2 justify-center">
                  <Link href={`/projects/${project.id}`}>
                    <Button
                      size="icon"
                      className="h-8 w-8 bg-blue-100 text-blue-600 hover:bg-blue-200"
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href={`/dashboard/manage-projects/update-projects/${project.id}`}>
                    <Button
                      size="icon"
                      className="h-8 w-8 bg-yellow-100 text-yellow-600 hover:bg-yellow-200"
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Button
                    onClick={() => handleDelete(project?.id)}
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
