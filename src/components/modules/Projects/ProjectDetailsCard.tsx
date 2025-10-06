"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { IProject } from "@/types";



export default function ProjectDetailsCard({ project }: { project: IProject }) {
  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg rounded-2xl border border-gray-200">
      {/* Project Image */}
      <div className="relative w-full h-64 rounded-t-2xl overflow-hidden">
        <Image
          src={project.image}
          alt={project.projectName}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-semibold">{project.projectName}</CardTitle>
        <Badge variant="secondary" className="text-sm">
          {project.projectCategory}
        </Badge>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Description */}
        <p className="text-gray-700 leading-relaxed">{project.description}</p>

        {/* Features */}
        <div>
          <h3 className="text-lg font-semibold mb-1">✨ Key Features</h3>
          <p className="text-gray-700">{project.feature}</p>
        </div>

        {/* Technology Used */}
        <div>
          <h3 className="text-lg font-semibold mb-2">🛠 Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologyUsed.map((tech) => (
              <Badge key={tech} className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* NPM Packages Used */}
        <div>
          <h3 className="text-lg font-semibold mb-2">📦 NPM Packages</h3>
          <div className="flex flex-wrap gap-2">
            {project.npmPackageUsed.map((pkg) => (
              <Badge key={pkg} className="bg-green-100 text-green-700 hover:bg-green-200">
                {pkg}
              </Badge>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-3 pt-3">
          <Link href={project.liveLink} target="_blank">
            <Button variant="default" className="flex items-center gap-2">
              <ExternalLink size={18} /> Live Site
            </Button>
          </Link>

          <Link href={project.githubLink} target="_blank">
            <Button variant="secondary" className="flex items-center gap-2">
              <Github size={18} /> Client Repo
            </Button>
          </Link>

          {project.githubLinkServer && (
            <Link href={project.githubLinkServer} target="_blank">
              <Button variant="outline" className="flex items-center gap-2">
                <Github size={18} /> Server Repo
              </Button>
            </Link>
          )}
        </div>

        {/* Dates */}
        <div className="text-sm text-gray-600 pt-4">
          <p>📅 Start Date: {new Date(project.startDate).toLocaleDateString()}</p>
          <p>📅 End Date: {new Date(project.endDate).toLocaleDateString()}</p>
        </div>

        {/* Author Info */}
        <div className="pt-4 border-t mt-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            {project.author.picture ? (
              <Image
                src={project.author.picture}
                alt={project.author.name}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
            ) : (
              <span className="text-gray-600 font-medium">
                {project.author.name.charAt(0)}
              </span>
            )}
          </div>
          <div>
            <p className="font-medium">{project.author.name}</p>
            <p className="text-xs text-gray-500">{project.author.email}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
