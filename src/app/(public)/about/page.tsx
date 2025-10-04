import About from "@/components/modules/About/About";
import Skill from "@/components/modules/Skills/Skill";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "About MD Habibur Rahman | Full-Stack Developer",
  description: "Learn more about MD Habibur Rahman, a passionate full-stack developer specializing in MERN stack, Next.js, and modern web development. Discover his journey, skills, and professional experience.",
};

export default function AboutPage() {
  

  return (
    <>
      <section className="pt-32 flex flex-col items-center justify-center bg-gray-50 sm:px-6 ">
        <About />
      </section>
      <section className=" bg-gray-50 sm:px-6 py-12 flex flex-col items-center">
        <Skill />
      </section>
    </>
  );
}
