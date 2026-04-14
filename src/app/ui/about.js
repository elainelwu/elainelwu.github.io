import Image from 'next/image'
import Link from 'next/link'
import { Mail, Linkedin, Github } from 'lucide-react';

export default function AboutContent() {
  return (
    <div className="flex flex-row max-w-screen space-x-8">
      <div className="flex flex-col max-w-3xl space-y-4 text-xl font-normal bg-white bg-opacity-90 text-gray-800 px-6 py-4 rounded-md">
        {/* <p>Hello, I'm Elaine! I am currently a senior enrolled in Cornell University’s College of Computing and Information Science, and I am studying Computer Science with minors in Psychology, and Information Science (concentrating in Ethics, Law, and Policy). My goals lie in creating detailed, meaningful, and functional applications.</p> */}
        {/* <p>My interest in computer science originally started in middle school when I learned how to customize Tumblr blog pages (you surprisingly learn a lot about HTML and CSS in the process). Now in college, I've expanded that interest into passion for creating large-scale applications using the valuable tool-kits and knowledge I have gained from mentors, peers, and the Internet! Aside from coding, I am also enthusiastic about design processes and the intersection between technology and human behavior. (last updated: 03/19/26)</p> */}
        <p>I'm a senior at Cornell University studying Computer Science with minors in Information Science (concentrating in Ethics, Law, and Policy) and Psychology. I'm passionate about building software that combines machine learning, data, and human-centered design to solve real-world problems. My experience lies in full-stack development, data systems, and machine learning, and as an engineer, I value writing clean, scalable code and designing systems that are both technically robust and intuitive for users. Feel free to explore my projects, check out my GitHub, or reach out if you're interested in collaborating.</p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <Image src="/self-photo.png"
          alt="Headshot of Elaine Wu"
          width={180}
          height={180}
          className="rounded-full border-4 border-solid max-w-52 max-h-52"
        />
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-xl">Contact me!</h3>
          {/* <p className="font-normal mt-0">ew457@cornell.edu</p> */}
          <div className="flex flex-row space-x-3 mt-2">
            <Link href="mailto:ew457@cornell.edu">
              <div className="bg-white bg-opacity-90 rounded-md p-2 hover:bg-gray-800 transition">
                <Mail size={32} className="text-slate-800 hover:text-white transition" />
              </div>
            </Link>
            <Link href="https://www.linkedin.com/in/elaine-wu-09440620b/">
              <div className="bg-white bg-opacity-90 rounded-md p-2 hover:bg-gray-800 transition">
                <Linkedin size={32} className="text-slate-800 hover:text-white transition" />
              </div>
            </Link>
            <Link href="https://github.com/elainelwu">
              <div className="bg-white bg-opacity-90 rounded-md p-2 hover:bg-gray-800 transition">
                <Github size={32} className="text-slate-800 hover:text-white transition" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
