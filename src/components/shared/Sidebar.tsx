"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import {
  Home,
  PlusCircle,
  LogOut,
  Users,
  FileText,
  Folder,
  Menu,
  X,
} from "lucide-react";

export default function Sidebar() {
  const session = useSession();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/", icon: <Home className="h-5 w-5" /> },
    {
      name: "Create Project",
      href: "/dashboard/create-project",
      icon: <PlusCircle className="h-5 w-5" />,
    },
    {
      name: "Manage Projects",
      href: "/dashboard/manage-projects",
      icon: <Folder className="h-5 w-5" />,
    },
    {
      name: "Create Blog",
      href: "/dashboard/create-blog",
      icon: <PlusCircle className="h-5 w-5" />,
    },
    {
      name: "Manage Blogs",
      href: "/dashboard/manage-blogs",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      name: "Manage Users",
      href: "/dashboard/manage-users",
      icon: <Users className="h-5 w-5" />,
    },
  ];

  return (
    <>
      {/* Hamburger button for mobile */}
      <button
        className="fixed top-4 left-4 z-50 inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-white md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Sidebar overlay for mobile */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50 w-64 transform bg-gray-900 text-white transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:static md:flex md:flex-col
        `}
      >
        <nav className="flex-1 flex flex-col justify-between p-4 space-y-2">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200
                    ${
                      isActive
                        ? "bg-gray-700 text-white"
                        : "hover:bg-gray-700 hover:text-white"
                    }
                  `}
                  onClick={() => setIsOpen(false)} // Close on mobile when clicking link
                >
                  {item.icon}
                  {item.name}
                </Link>
              );
            })}
          </div>

          {session.status === "authenticated" && (
            <Button
              variant="destructive"
              className="w-full justify-start gap-2 cursor-pointer"
              onClick={() => {
                signOut({ callbackUrl: "/" });
                setIsOpen(false);
              }}
            >
              <LogOut className="h-5 w-5" />
              Logout
            </Button>
          )}
        </nav>
      </aside>
    </>
  );
}
