import Image from "next/image"
import logo from "../public/images/logo_demerys.svg"
import { berkeleyMono } from "./styles/fonts"

const linksLeft = [
  {
    name: "Notre équipe",
    url: "/fr/team",
  },
  {
    name: "Nos solutions",
    url: "#",
  },
  {
    name: "Nos services",
    url: "#",
  },
]

const linksRight = [
  {
    name: "Blog",
    url: "#",
  },
  {
    name: "Contact",
    url: "#",
  },
]

export default function Nav() {
  return(
    <div className="flex justify-between text-sm">
      <ul className={`flex items-center space-x-6`}>
        <li><a href="/">
          <Image src={logo} alt="Logo Demerys" className="w-16 h-16" />
        </a></li>
        
        <li><a href="#" className={`${berkeleyMono.className} text-xl font-black`}>DEMERYS</a></li>

        {linksLeft.map((link) => (
          <li key={link.name}><a href={link.url} className={`hover:underline text-stone-700 hover:text-black ${berkeleyMono.className}`}>{link.name}</a></li>
        ))}
      </ul>

      <ul className={`flex items-center space-x-6`}>
        {linksRight.map((link) => (
          <li key={link.name}><a href={link.url} className={`hover:underline text-stone-700 hover:text-black ${berkeleyMono.className}`}>{link.name}</a></li>
        ))}
      </ul>
    </div>
  )
}