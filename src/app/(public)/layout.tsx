import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";

export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="min-h-dvh">{children}</main>
      <Footer />
    </>
  );
}
