// app/skills/page.tsx (Next.js 13+ App Router)
// or pages/skills.tsx (Pages Router)

"use client";

import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiFigma,
  SiCanva,
  SiEslint,
  SiNpm,
  SiFirebase,
  SiJsonwebtokens,
  SiPassport,
  SiAuth0,
  SiNotion,
  SiGnubash,
  SiAxios,
  SiSwiper,
  SiGoogle,
  SiShadcnui,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export default function Skill() {
  const skills = {
    Languages: [
      { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
      },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "SQL", icon: <SiPostgresql className="text-blue-800" /> },
    ],
    Libraries: [
      { name: "React", icon: <SiReact className="text-cyan-400" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
      { name: "Mongoose", icon: <SiMongodb className="text-green-600" /> },
      { name: "Prisma", icon: <SiPrisma className="text-black" /> },
      { name: "Axios", icon: <SiAxios className="text-sky-600" /> },
      { name: "Swiper.js", icon: <SiSwiper className="text-pink-500" /> },
    ],
    Frameworks: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
      { name: "Express.js", icon: <SiExpress className="text-black" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-500" />,
      },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-700" /> },
      { name: "Shadcn UI", icon: <SiShadcnui className="text-gray-700" /> },
    ],
    Database: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800" /> },
    ],
    Tools: [
      { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
      { name: "Git", icon: <SiGit className="text-orange-600" /> },
      { name: "GitHub", icon: <SiGithub className="text-black" /> },
      { name: "ESLint", icon: <SiEslint className="text-purple-600" /> },
      { name: "Bash", icon: <SiGnubash className="text-gray-700" /> },
      { name: "npm", icon: <SiNpm className="text-red-600" /> },
      { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
      { name: "Canva", icon: <SiCanva className="text-blue-400" /> },
      { name: "Notion", icon: <SiNotion className="text-black" /> },
    ],
    Authentication: [
      { name: "JWT", icon: <SiJsonwebtokens className="text-green-600" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
      { name: "Google Auth", icon: <SiGoogle className="text-red-500" /> },
      { name: "Passport.js", icon: <SiPassport className="text-gray-800" /> },
      { name: "NextAuth", icon: <SiAuth0 className="text-orange-500" /> },
    ],
  };

  return (
    <div className="max-w-4xl w-full">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-center text-gray-800 mb-4"
      >
        My Skills
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-xl mx-auto text-center text-gray-600 mb-8"
      >
        A diverse set of skills, crafted through learning and practice — from
        front-end design to back-end development, tools, and authentication.
      </motion.p>

      <div className="grid gap-8 md:grid-cols-2">
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
              {category}
            </h2>
            <ul className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <motion.li
                  key={skill.name}
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-2 bg-indigo-50 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-100 transition"
                >
                  <span className="text-lg">{skill.icon}</span>
                  {skill.name}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
