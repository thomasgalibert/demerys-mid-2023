import Image from "next/image"
import { berkeleyMono } from "@/app/styles/fonts"
import illustration from "@/public/images/pages/ia_demerys_formation.jpg.png"

export default function Ia() {
  return(
    <div>
      <h1 className={`${berkeleyMono.className} text-2xl text-center mb-4`}>Vous souhaitez comprendre et maîtriser l'Intelligence Artificielle ?</h1>

      <div className='aspect-w-16 aspect-h-9 lg:aspect-none'>
        <Image src={illustration} alt={"Formation rédaction documents juridiques complexes en LateX"} 
                className='mb-2 w-full h-full object-center object-cover lg:w-full lg:h-full' />
      </div>
      
      <h4 className="text-3xl font-black mt-2 mb-2">Objectifs de la Formation</h4>
      
      <ul className="text-xl mt-4">
        <li>Comprendre les principes de l'IA</li>
        <li>Utiliser les outils IA adaptés</li>
        <li>Développer une veille technologique continue</li>
      </ul>
      
      <h4 className="text-3xl font-black mt-10 mb-2">Informations Pratiques</h4>
      
      <ul className="text-xl mt-4">
        <li>Durée : 2 jours (14 heures)</li>
        <li>Lieu : Pézenas, ACPR Occitanie</li>
        <li>Prix : 450€/jour/personne (collectif) ou 900€/jour (individuel)</li>
      </ul>
      
      <h4 className="text-3xl font-black mt-10 mb-2">Programme Détailé</h4>
      
      <ul className="text-xl mt-4 mb-20">
        <li>Jour 1 : Histoire de l'IA, cadre légal, principaux outils</li>
        <li>Jour 2 : Pratique des outils, génération de contenu, analyse des résultats</li>
      </ul>

      <h2 className={`text-lg text-stone-500 text-center mt-20 lg:mt-0`}>
        <a href={'https://acproccitanie.fr/formation-gestion/les-bases-de-lintelligence-artificielle/'} 
           target="_blank"
           className={`${berkeleyMono.className} bg-stone-950 text-white text-lg py-3 px-5 flex items-center hover:pr-4 transition-all`}>
          <span className='inline-flex'>Inscrivez-vous dès maintenant</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-2 w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
          </svg>
        </a>
      </h2>
    </div>
  )
}