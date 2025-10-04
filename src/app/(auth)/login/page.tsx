import LoginForm from "@/components/modules/Auth/LoginForm";
import { Logo } from "@/components/shared/Navbar/logo";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login | MD Habibur Rahman Portfolio Dashboard",
  description: "Access the MD Habibur Rahman portfolio dashboard by logging in. Securely manage projects, blogs, and user content with your account.",
};


const LoginPage = () => {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      {/* Left Side - Form */}
      <div className="flex flex-col gap-4 p-6 md:p-10">
        {/* Logo */}
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Logo />
            <span className="hidden sm:inline">Portfolio</span>
          </Link>
        </div>

        {/* Login Form */}
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm bg-card p-6 rounded-2xl shadow-md">
            <LoginForm />
          </div>
        </div>
      </div>

      {/* Right Side - Illustration */}
      <div className="relative hidden lg:block">
        <Image
          src="https://res.cloudinary.com/dcp9nk3bs/image/upload/v1759348190/20943394_cpvrwg.jpg"
          alt="Portfolio Login Illustration"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default LoginPage;
