import Image from "next/image"
import logo from "../public/images/logo_demerys.svg"
import { berkeleyMono } from "./styles/fonts"

const linksLeft = [
  {
    name: "チーム",
    url: "/ja/team",
  },
  {
    name: "製品",
    url: "/ja/solutions",
  },
  {
    name: "サービス",
    url: "/ja/services",
  },
]

const linksRight = [
  {
    name: "ブログ",
    url: "/ja/blog",
  },
  {
    name: "コンタクト",
    url: "/ja/contact",
  },
]

export default function NavJa() {
  return(
    <div>
      <div className="hidden sm:flex justify-between text-sm">
        <ul className={`flex items-center space-x-6`}>
          <li><a href="/">
            <Image src={logo} alt="Logo Demerys" className="w-16 h-16" />
          </a></li>
          
          <li><a href="/" className={`${berkeleyMono.className} text-xl font-black`}>DEMERYS</a></li>

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

      <div className="flex flex-col items-center sm:hidden text-sm">
        <div>
          <a href="/">
            <Image src={logo} alt="Logo Demerys" className="w-16 h-16 mx-auto mb-2" />
          </a>
          
          <a href="/" className={`${berkeleyMono.className} text-xl font-black`}>DEMERYS</a>
        </div>
          

        <ul className={`flex items-center space-x-6 mt-6`}>
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
    </div>
  )
}