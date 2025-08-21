import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Projects() {
  const containerRef = useRef(null);

  // wickpick images
  const wickpickImages = [
    "/wickpick_home.svg",
    "/wickpick_details.svg",
    "/wickpick_query.svg"
  ];
  const [wickpickIndex, setWickpickIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWickpickIndex(prev => (prev + 1) % wickpickImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // super hamster party images
  const hamsterImages = [
    "/shp_home.svg",
    "/shp_lobby.svg",
    "/shp_inventory.svg"
  ];
  const [hamsterIndex, setHamsterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHamsterIndex(prev => (prev + 1) % hamsterImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // scroll handler
  const scroll = (direction) => {
    if (!containerRef.current) return;
    const { scrollLeft, clientWidth } = containerRef.current;
    const newScroll =
      direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
    containerRef.current.scrollTo({ left: newScroll, behavior: "smooth" });
  };

  return (
    <div className="relative w-full">
      {/* left arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute -left-6 lg:-left-12 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-90 hover:bg-gray-800 p-2 rounded-full shadow-md transition"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800 hover:text-white transition" />
      </button>

      {/* right arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute -right-6 lg:-right-12 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-90 hover:bg-gray-800  p-2 rounded-full shadow-md transition"
      >
        <ChevronRight className="w-6 h-6 text-gray-800 hover:text-white transition" />
      </button>

      {/* scroll container */}
      <div
        ref={containerRef}
        className="w-full overflow-x-auto flex snap-x snap-mandatory scroll-smooth scrollbar-hide"
      >
        {/* wickpick */}
        <div className="flex flex-col lg:flex-row items-start gap-6 w-full flex-shrink-0 snap-center p-4">
          {/* images */}
          <div className="relative w-[700px] h-[424px] mx-auto lg:mx-0 lg:flex-shrink">
            {wickpickImages.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={`WickPick image ${i + 1}`}
                fill
                className={`object-contain transition-opacity duration-1000 absolute top-0 left-0 w-full h-full ${
                  i === wickpickIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              />
            ))}
          </div>

          {/* scrollable text */}
          <div className="flex-1 lg:max-h-[424px] overflow-y-auto p-6 bg-white bg-opacity-90 rounded-md text-gray-800 space-y-3 text-base">
            <Link href="http://4300showcase.infosci.cornell.edu:5253/">
              <h2 className="text-3xl font-bold hover:text-[#3261c8] transition">🕯️ WickPick </h2>
            </Link>
            <h4 className="text-xl font-medium">Full-Stack Candle Recommender</h4>
            <p>
              WickPick is a final project for CS 4300: Language and Information (Spring 2025) that I built in a team of five to combine
              my love of data science with the surprisingly complex world of candle shopping. We wanted to create a tool
              that could help users discover new Yankee Candle scents tailored to their moods, seasonal preferences, and even
              vague ad hoc natural language descriptions like “cozy winter night” or “fresh citrus morning.”
            </p>
            <ul className="ml-6 list-disc space-y-1">
              <li>
                <span className="font-semibold">Stack:</span> Python, JavaScript, HTML, CSS, scikit-learn, NumPy, D3.js, Flask
              </li>
              <li>
                Partnered with a teammate to design and implement a custom NLP-based recommendation pipeline combining TF-IDF vectorization, truncated SVD, cosine/Jaccard similarity, and fuzzy token matching for ad hoc queries.
              </li>
              <li>
                Developed D3.js visualizations to display scent embeddings as a spiderweb plot, complete with hover tooltips, highlighting, and click-to-focus transitions.
              </li>
              <li>
                Helped implement the "similar to this candle" feature, allowing users to explore recommendations seeded from a specific candle’s scent profile.
              </li>
              <li>
                Collaborated with teammates on backend API endpoints and frontend design, ensuring a cohesive user experience across devices with responsive layouts and smooth animations.
              </li>
            </ul>
          </div>
        </div>

        {/* super hamster party */}
        <div className="flex flex-col lg:flex-row items-start gap-6 w-full flex-shrink-0 snap-center p-4">
          {/* images */}
          <div className="relative w-[700px] h-[424px] mx-auto lg:mx-0 lg:flex-shrink">
            {hamsterImages.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={`Super Hamster Party image ${i + 1}`}
                fill
                className={`object-contain transition-opacity duration-1000 absolute top-0 left-0 w-full h-full ${
                  i === hamsterIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              />
            ))}
          </div>

          {/* scrollable text */}
          <div className="flex-1 lg:max-h-[424px] overflow-y-auto p-6 bg-white bg-opacity-90 rounded-md text-gray-800 space-y-3 text-base">
            <h2 className="text-3xl font-bold">🐹 Super Hamster Party!</h2>
            <h4 className="text-xl font-medium">Turn-based Multi-player Game</h4>
            <p>
              Super Hamster Party is a final project for CS 3110: Data Structures and Functional Programming (Fall 2023) that I built in a team of four. 
              Loosely based on the popular game Super Mario Party, it is a turn-based multiplayer board game featuring mini-games, items,
              and a virtual currency system, all written from scratch in OCaml. 
            </p>
            <ul className="ml-6 list-disc space-y-1">
              <li><span className="font-semibold">Stack:</span> OCaml, Bogue (GUI Library), Git, GitHub</li>
              <li>
                Helped implement core backend game logic and interactive GUI components with Bogue (OCaml GUI library) for item management, player inventory, and mini-game rewards, and contributed to the player status tracker interface.
              </li>
              <li>
                Applied agile development practices with iterative milestones and version control via Git/GitHub, ensuring smooth collaboration and code integration.
              </li>
              <li>
                Conducted comprehensive testing through black-box, glass-box, and visual validation to guarantee correctness, usability, and stability of gameplay.
              </li>
            </ul>
          </div>
        </div>

        {/* wip */}
        <div className="flex-shrink-0 w-full snap-center flex items-center justify-center p-4">
          <h1 className="text-6xl font-semibold">more coming soon...</h1>
        </div>
      </div>
    </div>
  )
}
