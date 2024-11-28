import Image from "next/image";
import app from "@/public/images/app.png";

export default function Hero() {
  return (
    <section className="rounded bg-dark text-center my-32 px-8 md:px-16 lg:px-32 py-20">
      <h1 className="h1 uppercase mb-7 md:mb-4 lg:mb-7 text-5xl md:text-6xl lg:text-7xl max-lg:h2 bg-gradient-to-r from-purple to-yellow text-transparent bg-clip-text inline-block">
        Next-Level Productivity
      </h1>
      <p className="body-1 mb-12">
        Organize your tasks, collaborate with your team, and hit deadlines like
        never before.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center mb-8 md:mb-12">
        <button className="text-yellow border border-yellow rounded-xl px-8 py-4 mb-4 md:mb-0 md:mr-8 hover:bg-yellow hover:text-dark">
          Get Started
        </button>
        <button className="border border-light text-light rounded-xl px-8 py-4 hover:bg-yellow hover:text-dark">
          Watch Demo
        </button>
      </div>
      <Image
        src={app}
        alt="app demo image on desktop"
        className="max-w-[90%] h-auto mx-auto my-8 shadow-dark-glow rounded-xl"
        quality={80}
      />
    </section>
  );
}
