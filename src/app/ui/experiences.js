import Link from 'next/link'

export default function Experiences() {
  return (
    <div className="flex flex-col text-center max-w-5xl">
      <h2 className="text-4xl">Experiences</h2>
      <div className="flex flex-col space-y-4">
        <div className="text-left">
          <h3 className="text-2xl">Cornell University</h3>
          <h4 className="text-xl">Undergraduate Teaching Assistant (TA)</h4>
          <ul className="ml-6 list-disc font-normal">
            <li>Assisted CS 2800: Discrete Structures throughout Fall &apos;23 and Spring &apos;24 semesters.</li>
            <li>Lead weekly discussion section of 25 students, facilitate active participation, address questions, and guide engaging discussion on challenging topics in discrete mathematics.</li>
            <li>Provide individualized support to students during office hours, offer guidance on problem-solving strategies, and clarify course concepts.</li>
            <li>Grade assignments and exams promptly to provide constructive feedback to students to help them understand their mistakes and improve their performance.</li>
            <li>Utilize online pslatforms and tools effectively, such as Ed Discussion and Gradescope, to facilitate seamless communication, submission, and grading processes.</li>
            <li>Leverage personal experience as a successful student in CS 2800 to connect to students, provide relatable examples, and inspire them to excel in the course.</li>
          </ul>
        </div>
        <div className="text-left">
          <h3 className="text-2xl hover:invert hover:opacity-75 transition ease-in-out delay-100"><Link href="https://www.cornellnexus.com/">Cornell Nexus Project Team</Link></h3>
          <h4 className="text-xl">Business/Design Sub-team Member</h4>
          <ul className="ml-6 list-disc font-normal">
            <li>Lead an overhaul of the project team&apos;s website, implementing a user-centered design approach resulting in improved functionality and aesthetics.</li>
            <li>Develop high-fidelity prototypes using Figma, contributing to the enhancement of project deliverables and facilitating efficient collaboration within the team.</li>
            <li>Direct, film, and edit compelling promotional videos that effectively highlighted the team&apos;s achievements and initiatives, garnering increased engagement and recognition.</li>
            <li>Produce captivating graphics and strategically managed social media content, fostering a cohesive online presence and amplifying the team&apos;s visibility across multiple platforms.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}