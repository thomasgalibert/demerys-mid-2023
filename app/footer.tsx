import { berkeleyMono } from "./styles/fonts"
import Image from "next/image"
import logo from "../public/images/logo_demerys.svg"

const year = new Date().getFullYear()

const links = [
  {
    name: "Notre équipe",
    url: "#",
  },
  {
    name: "Nos solutions",
    url: "#",
  },
  {
    name: "Nos services",
    url: "#",
  },
  {
    name: "Blog",
    url: "#",
  },
  {
    name: "Contact",
    url: "#",
  },
  {
    name: "Mentions",
    url: "#",
  },
  {
    name: "Données personnelles",
    url: "#",
  },
]

export default function Footer(){
  return(
    <footer className={`border-t mt-10 pt-6 text-stone-500 text-xs ${berkeleyMono.className}`}>
      <ul className="flex items-center justify-center space-x-6 mb-4">
        {links.map((link) => (
          <li><a href={link.url} className="hover:text-black hover:underline" >{link.name}</a></li>
        ))}
      </ul>
      <div className="flex justify-between">
        <div>© Demerys Investment 2014-{year} tous droits réservés</div>
        <div><span className="bg-green-700 p-1 text-white">PROD</span> | Version 0.9.0</div>
      </div>
      <div className="mt-10"><Image src={logo} alt="logo Demerys" className="mx-auto w-20 h-20 grayscale" /></div>
    </footer>
  )
}