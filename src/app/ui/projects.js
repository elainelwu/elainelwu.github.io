export default function Projects() {
  return (
    <div className="flex flex-col text-center max-w-5xl">
      <h2 className="text-4xl">coming soon...</h2>
      <h2 className="text-4xl">Projects</h2>
      <div className="flex flex-col space-y-4">
        <div className="text-left">
          <h3 className="text-2xl">Super Hamster Party!</h3>
          <h4 className="text-xl">Turn-based Multi-player Game</h4>
          <ul className="ml-6 list-disc font-normal">
            <li>Tools: OCaml, Bogue (OCaml GUI Library), Git, GitHub </li>
            <li>Built a 2200+ LoC board game featuring mini-games, items, and currency from scratch in a four-person team for CS 3110: Data Structures and Functional Programming.</li>
            <li>Coded back-end of player moves, player inventory, currency, and items.</li>
            <li>Created front-end GUI for items, item management/player inventory, and mini-game rewards and contributed to player status tracker GUI.</li>
            <li>Practiced agile software development and rigorous black-box, glass-box, and visual testing.</li>
          </ul>
        </div>
        <div className="text-left">
          <h3 className="text-2xl">Portfolio Website</h3>
          <h4 className="text-xl">The website you&apos;re looking at right now!</h4>
          <ul className="ml-6 list-disc font-normal">
            <li>Tools: React, Next.js, Tailwind CSS, Git, GitHub</li>
            <li>Explored different portfolio designs through creating high-fidelity prototypes in Figma.</li>
            <li>Self-taught how to use React, Next.js, and Tailwind CSS frameworks by building portfolio website.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
