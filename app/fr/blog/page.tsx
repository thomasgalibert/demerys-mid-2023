import { berkeleyMono } from "@/app/styles/fonts"
import Image from "next/image"
import underConstruction from "@/public/images/sections/under_construction.jpg"

export default function Blog() {
  return (
    <div>
      <h1 className={`${berkeleyMono.className} text-2xl text-center mb-4`}>Blog</h1>

      <h3>Nous sommes en train de compiler toutes nos publications pour les intégrer dans cette page. Patience, ...</h3>

      <Image src={underConstruction} alt={"Page en construction"} className='my-8' />

      <p className="text-center mt-6"><a href="/">Revenir à l'accueil</a></p>
    </div>
  )
}