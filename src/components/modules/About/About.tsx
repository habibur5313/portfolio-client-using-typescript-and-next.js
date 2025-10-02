import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-8">
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-indigo-500 shadow-md">
            <Image
              src="https://res.cloudinary.com/dcp9nk3bs/image/upload/v1759379841/6264726267194625010_121_oowq6n.jpg"
              alt="Md Habibur Rahman"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Md Habibur Rahman
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              Passionate and dedicated <span className="font-semibold">Web Developer</span> from Sylhet, Bangladesh 🚀
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              I have experience with technologies like <br />
              <span className="font-medium">
                HTML, CSS, JavaScript, TypeScript, React, Node.js, Express.js, Next.js, 
                Mongoose, MongoDB, PostgreSQL, Prisma, Tailwind CSS, and ShadCN UI.
              </span>
              <br />
              As a fresher, I’m eager to keep learning and improving my skills. 
              Although my English isn’t perfect, I’m always working on getting better. 
              In my free time, I love playing <span className="font-medium">cricket</span> and <span className="font-medium">badminton</span>.
            </p>
          </div>
        </div>

        {/* Contact + Social Links */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <p className="text-gray-700">
            📩 Reach me at:{" "}
            <a
              href="mailto:habiburmamun313@gmail.com"
              className="text-indigo-600 font-medium hover:underline"
            >
              habiburmamun313@gmail.com
            </a>
          </p>

          <div className="flex gap-6 mt-4">
            <Link
              href="https://github.com/habibur5313"
              target="_blank"
              className="text-gray-600 hover:text-gray-900 text-lg font-medium"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/habibur-rahman13"
              target="_blank"
              className="text-gray-600 hover:text-gray-900 text-lg font-medium"
            >
              LinkedIn
            </Link>
            <Link
              href="https://www.facebook.com/habibur5231"
              target="_blank"
              className="text-gray-600 hover:text-gray-900 text-lg font-medium"
            >
              Facebook
            </Link>
          </div>
        </div>
      </div>
  );
}
