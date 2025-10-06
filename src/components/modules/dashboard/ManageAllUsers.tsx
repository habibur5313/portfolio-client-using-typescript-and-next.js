"use client";

import { useState } from "react";
import { toast } from "sonner";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IUser } from "@/types";

interface ManageAllUsersProps {
  users: IUser[];
}

const ManageAllUsers = ({ users: initialUsers }: ManageAllUsersProps) => {
  const [users, setUsers] = useState(initialUsers);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const handleToggle = async (id: string, status: string) => {
    setLoadingId(id);
    const newStatus = status === "ACTIVE" ? "BLOCKED" : "ACTIVE";

    try {
      const res = await fetch(`/api/users/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isActive: newStatus }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success(data.message || "Status updated");
        setUsers((prev) =>
          prev.map((user) =>
            user.id === id ? { ...user, isActive: newStatus } : user
          )
        );
      } else {
        toast.error(data.message || "Failed to update");
      }
    } catch {
      toast.error("Network error");
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="w-full p-6 rounded-2xl shadow-md bg-white dark:bg-gray-900">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100 ml-12 md:ml-0">
        👥 Manage All Users
      </h1>

      <Table>
        <TableCaption>A list of all registered users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {users.length > 0 ? (
            users.map((user) => (
              <TableRow key={user?.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      user.role === "ADMIN" ? "destructive" : "secondary"
                    }
                    className="capitalize"
                  >
                    {user.role}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      user.isActive === "ACTIVE"
                        ? "default"
                        : user.isActive === "BLOCKED"
                        ? "destructive"
                        : "outline"
                    }
                    className="capitalize"
                  >
                    {user.isActive}
                  </Badge>
                </TableCell>
                <TableCell className="text-center">
                  <Button
                    variant={
                      user.isActive === "ACTIVE" ? "destructive" : "default"
                    }
                    size="sm"
                    disabled={loadingId === user.id}
                    onClick={() => handleToggle(user.id, user.isActive)}
                  >
                    {loadingId === user.id
                      ? "Updating..."
                      : user.isActive === "ACTIVE"
                      ? "Block"
                      : "Unblock"}
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

export default ManageAllUsers;
