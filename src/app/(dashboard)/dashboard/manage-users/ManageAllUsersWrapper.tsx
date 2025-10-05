"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const ManageAllUsers = dynamic(
  () => import("@/components/modules/dashboard/ManageAllUsers"),
  { loading: () => <p className="p-6 text-center">Loading users...</p> }
);

export default function ManageAllUsersWrapper({ users }: { users: any[] }) {
  return (
    <Suspense fallback={<p className="p-6 text-center">Loading users...</p>}>
      <ManageAllUsers users={users} />
    </Suspense>
  );
}
