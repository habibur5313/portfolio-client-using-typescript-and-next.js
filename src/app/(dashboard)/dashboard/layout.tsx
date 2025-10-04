import Sidebar from "@/components/shared/Sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | MD Habibur Rahman Portfolio Admin",
  description: "Access the admin dashboard of MD Habibur Rahman's portfolio to manage projects, blogs, and user content efficiently.",
};


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-dvh flex gap-4">
      <Sidebar />
      {children}
    </main>
  );
}
