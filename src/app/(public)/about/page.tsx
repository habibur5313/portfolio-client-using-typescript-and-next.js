import About from "@/components/modules/About/About";
import Skill from "@/components/modules/Skills/Skill";

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
