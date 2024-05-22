import Divider from "@/app/divider"
import { berkeleyMono } from "@/app/styles/fonts"
import { url } from "inspector"

const formations = [
  {
    name: "Rédaction de documents juridiques complexes avec LaTeX",
    description: "Découvrez la puissance de LaTeX, l'outil incontournable des professionnels pour la création de documents juridiques complexes.",
    target: "Avocats, juristes, étudiants en droit et toute personne impliquée dans la rédaction de documents juridiques longs et structurés.",
    trainer: "Thomas GALIBERT",
    url: "/fr/formations/latex",
    url_target: "_self"
  },

  {
    name: "Les bases de l'intelligence artificielle",
    description: "Cette formation permettra de découvrir les principes de fonctionnement de l’IA et les principaux outils pour les mettre en application dans votre structure.",
    target: "Toute personne souhaitant comprendre les bases de l'intelligence artificielle.",
    trainer: "Thomas GALIBERT",
    url: "/fr/formations/ia",
    url_target: "_self"
  }
]

export default function Formations() {
  return(
    <div>
      <h1 className={`${berkeleyMono.className} text-2xl text-center mb-4`}>Nos formations</h1>
      <h2 className="text-xl text-center font-semibold mt-2 mb-2">Formations en Intelligence, ... réelle.</h2>

      <Divider title="Notre catalogue de formation" />

      <ul className="grid grid-cols-2 gap-6 mt-6">
        {formations.map((formation) => (
          <li key={formation.name} className="sm:col-span-1 col-span-3 text-center border p-6 flex flex-col hover:rotate-3 transition-transform">
            <h4 className={`text-lg ${berkeleyMono.className}`}>{formation.name}</h4>
            <p className="italic text-sm flex-grow text-stone-600">{formation.description}</p>
            <p className={`text-sm ${berkeleyMono.className}`}>Public cible : {formation.target}</p>

            <div className="flex justify-end mt-6">
              <a href={formation.url} target={formation.url_target}
                className={`${berkeleyMono.className} bg-stone-950 text-white text-sm py-1 px-2 flex items-center hover:pr-4 transition-all`}>
                <span className='inline-flex'>Voir plus d'informations</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-2 w-3 h-3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                </svg>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}