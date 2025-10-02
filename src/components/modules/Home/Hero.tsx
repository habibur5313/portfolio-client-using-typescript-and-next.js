import Link from "next/link";

export default async function Hero() {
  return (
    <div>
      <div className="max-h-screen w-full relative">
        {/* Crimson Depth */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 100%, #000000 40%, #2b0707 100%)",
          }}
        />

        <section className="relative flex flex-col items-center justify-center text-center py-28 px-6 text-white">
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-5xl leading-tight">
            💻 Let’s Build the Future of Web Together
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg md:text-xl max-w-2xl">
            Hi, I’m Habibur Rahman. A Passionate Web Developer from Sylhet,
            Bangladesh. I build modern, responsive, and user-friendly web
            applications using MERN, Next.js, Prisma & more.
          </p>

          {/* CTA */}
          <div className="mt-10 flex">
            <Link
              href="https://drive.usercontent.google.com/u/0/uc?id=1rub4hCa8zayvcy0Z8xjnmXFNPgvAYQqi&export=download"
              className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 font-medium rounded-l-xl border border-input hover:bg-accent hover:text-accent-foreground transition"
            >
              Download Resume
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 font-medium rounded-r-xl border border-input hover:bg-accent hover:text-accent-foreground transition"
            >
              Explore Projects
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
