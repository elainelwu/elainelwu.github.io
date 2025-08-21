"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Aurora from "@/app/ui/aurora.js";
import NavBar from "@/app/ui/nav-bar.js";
import AboutContent from "@/app/ui/about.js";
import Skills from "@/app/ui/skills.js";
import Projects from "@/app/ui/projects.js";

function SnapSection({ id, children }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.6 } // 60% of section visible to count as "active"
    );

    const el = document.getElementById(id);
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [id]);

  return (
    <section
      id={id}
      className={`snap-start flex items-center justify-center h-screen w-screen transition-opacity duration-600 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <>
      {/* fixed background */}
      <div className="fixed inset-0 -z-10">
        <Aurora />
      </div>

      {/* fixed navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <NavBar />
      </div>

      <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <SnapSection id="home">
          <div className="relative max-w-4xl px-6 font-semibold">
            <h1 className="text-8xl font-semibold">
              Hi! I&apos;m{" "}
              <Link
                href="#about"
                className="hover:invert hover:opacity-75 transition ease-in-out delay-100 cursor-pointer"
              >
                Elaine Wu
              </Link>
              ,
            </h1>
            <p className="text-4xl">
              a senior studying computer science at Cornell.
            </p>
          </div>
          <div className="absolute bottom-8 text-lg text-white animate-bounce select-none">
            <Link href="#about">
              <button>↓</button>
            </Link>
          </div>
        </SnapSection>

        <SnapSection id="about">
          <div className="flex flex-col items-center max-w-5xl px-6">
            <h1 className="text-6xl mb-12 font-semibold">About</h1>
            <AboutContent />
            <div className="mt-12">
              <Skills />
            </div>
          </div>
        </SnapSection>

        <SnapSection id="work">
          <div className="flex flex-col items-center max-w-7xl px-6">
            {/* <h1 className="text-6xl mb-12 font-semibold">Projects</h1> */}
            <Projects />
          </div>
        </SnapSection>
      </main>
    </>
  );
}
