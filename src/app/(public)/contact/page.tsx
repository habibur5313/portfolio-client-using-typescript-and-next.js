import Contact from "@/components/modules/contact/Contact";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact MD Habibur Rahman | Full-Stack Developer",
  description: "Get in touch with MD Habibur Rahman, a full-stack developer specializing in MERN stack and modern web development. Reach out for projects, collaborations, or inquiries.",
};


export default function ContactPage() {
  return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 sm:px-6 py-12">
      <Contact />
    </section>
  );
}
