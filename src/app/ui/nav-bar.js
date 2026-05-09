import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="flex flex-row w-full justify-between px-6 pl-10 pr-12 py-6 z-20 sticky top-0 font-semibold">
      <Link href="#home">
        <Image src="/nav-logo.svg"
          alt="Elaine Wu Portfolio Logo"
          width={50}
          height={50}
          className="hover:invert hover:opacity-75 transition ease-in-out delay-100"
        />
      </Link>
      <ul className="flex flex-row text-white space-x-20">
        <li className="place-self-center hover:invert hover:opacity-75 transition ease-in-out delay-100"><Link href="#home">Home</Link></li>
        <li className="place-self-center hover:invert hover:opacity-75 transition ease-in-out delay-100"><Link href="#about">About</Link></li>
        <li className="place-self-center hover:invert hover:opacity-75 transition ease-in-out delay-100"><Link href="#projects">Projects</Link></li>
      </ul>
    </nav>
  )
}