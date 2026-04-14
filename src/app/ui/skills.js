export default function Skills() {
  const sectionClasses = "flex flex-col items-center flex-1 px-4";
  const listClasses = "font-medium flex flex-wrap justify-center items-center";

  return (
    <div className="w-full grid gap-8 
                    grid-cols-1 
                    sm:grid-cols-2 
                    md:grid-cols-3 
                    lg:grid-cols-4 
                    text-center">
      <div className={sectionClasses}>
        <h2 className="text-3xl font-semibold mb-4">Languages</h2>
        <ul className={listClasses}>
          {["Python", "JavaScript", "TypeScript", "Java", "C", "C++", "C#","OCaml", "HTML", "CSS"].map(lang => (
            <li key={lang} className="bg-white bg-opacity-90 px-2 py-1 rounded-md text-gray-800 mr-2 mb-2">
              {lang}
            </li>
          ))}
        </ul>
      </div>

      <div className={sectionClasses}>
        <h2 className="text-3xl font-semibold mb-4">Frameworks</h2>
        <ul className={listClasses}>
          {["React.js", "Tailwind CSS", "Flask", "Next.js", "Node.js"].map(fw => (
            <li key={fw} className="bg-white bg-opacity-90 px-2 py-1 rounded-md text-gray-800 mr-2 mb-2">
              {fw}
            </li>
          ))}
        </ul>
      </div>

      <div className={sectionClasses}>
        <h2 className="text-3xl font-semibold mb-4">Libraries</h2>
        <ul className={listClasses}>
          {["D3.js", "Three.js", "NumPy", "Matplotlib", "pandas", "PyTorch", "scikit-learn", "CVXPY", "Gurobi"].map(lib => (
            <li key={lib} className="bg-white bg-opacity-90 px-2 py-1 rounded-md text-gray-800 mr-2 mb-2">
              {lib}
            </li>
          ))}
        </ul>
      </div>

      <div className={sectionClasses}>
        <h2 className="text-3xl font-semibold mb-4">Tools</h2>
        <ul className={listClasses}>
          {["GitHub", "Figma", "Adobe Photoshop", "Adobe Premiere Pro", "Canva"].map(tool => (
            <li key={tool} className="bg-white bg-opacity-90 px-2 py-1 rounded-md text-gray-800 mr-2 mb-2">
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
