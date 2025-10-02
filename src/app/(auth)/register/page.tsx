import RegisterForm from "@/components/modules/Auth/RegisterForm";
import { Logo } from "@/components/shared/Navbar/logo";
import Image from "next/image";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      {/* Left Side - Portfolio Illustration */}
      <div className="relative hidden bg-muted lg:block">
      <Image
        src="https://res.cloudinary.com/dcp9nk3bs/image/upload/v1759348363/19196943_ha5wb0.jpg"
        alt="Portfolio Register Illustration"
        fill
        className="object-cover"
        priority
      />
        {/* <img
          src="https://res.cloudinary.com/dcp9nk3bs/image/upload/v1759348363/19196943_ha5wb0.jpg"
          alt="Portfolio Register Illustration"
          className="absolute  h-full w-full object-cover"
        /> */}
      </div>

      {/* Right Side - Form */}
      <div className="flex flex-col gap-4 p-6 md:p-10">
        {/* Logo */}
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Logo />
            <span className="hidden sm:inline">Portfolio</span>
          </Link>
        </div>

        {/* Form Area */}
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm bg-card p-6 rounded-2xl shadow-md">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
