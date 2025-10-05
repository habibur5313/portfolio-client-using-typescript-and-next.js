import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manage Users | MD Habibur Rahman Portfolio Dashboard",
  description: "Manage all users in MD Habibur Rahman's portfolio dashboard. View, edit, and control access for contributors and registered users efficiently.",
};

import ManageAllUsersWrapper from "./ManageAllUsersWrapper";

export default async function ManageUsersPage() {
  let users = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user`, {
      cache: "no-store", 
    });

    if (!res.ok) throw new Error("Failed to fetch users");

    const data = await res.json();
    users = data || [];
  } catch (error) {
    console.error("Error fetching users:", error);
  }
  
  // Pass fetched data to client component wrapper
  return <ManageAllUsersWrapper users={users} />;
}

