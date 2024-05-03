import Image from "next/image"
import { berkeleyMono } from "@/app/styles/fonts"
import writeImage from "@/public/images/latex_training.jpg"

export default function Latex() {
  return(
    <div>
      <h1 className={`${berkeleyMono.className} text-2xl text-center mb-4`}>Nos formations</h1>
      <h2 className="text-xl text-center font-semibold mt-2 mb-2">Formations en Intelligence, ... réelle.</h2>
      <h2 className="text-5xl text-center font-black mt-10 mb-5">Rédaction de documents juridiques complexes avec LaTeX</h2>

      <div className='aspect-w-16 aspect-h-9 lg:aspect-none'>
        <Image src={writeImage} alt={"Formation rédaction documents juridiques complexes en LateX"} 
                className='mb-8 w-full h-full object-center object-cover lg:w-full lg:h-full' />
      </div>

      <h3 className="text-2xl font-black mt-6 mb-2">Maîtrisez LaTeX pour la Rédaction Juridique avec Demerys</h3>

      <p>Découvrez la puissance de LaTeX, l'outil incontournable des professionnels pour la création de documents juridiques complexes. La formation Demerys vous plonge au cœur de LaTeX, vous permettant de structurer efficacement vos documents, tout en garantissant une mise en forme impeccable.</p>

      <h4 className="text-xl font-semibold mt-6 mb-2">Pourquoi LaTeX ?</h4>

      <p>Dans l'univers juridique, chaque détail compte. LaTeX offre une précision typographique hors pair et une gestion des références croisées complexe, parfait pour les dossiers juridiques où la rigueur est reine.</p>

      <h4 className="text-xl font-semibold mt-6 mb-2">Ce que vous apprendrez :</h4>

      <ul className="list-decimal">
        <li>Les bases de LaTeX : installation, configuration et premiers pas.</li>
        <li>La structuration avancée de documents : numérotation automatique, table des matières dynamique, indexation.</li>
        <li>La personnalisation des templates : pour des documents qui correspondent à l'identité de votre cabinet ou institution.</li>
        <li>La gestion des bibliographies et des annexes complexes.</li>
        <li>Les bonnes pratiques pour collaborer sur de grands documents.</li>
      </ul>

      <h4 className="text-xl font-semibold mt-6 mb-2">Votre formateur :</h4>

      <p>Thomas GALIBERT, développeur expérimenté et titulaire d'un Master II en droit.</p>

      <h4 className="text-xl font-semibold mt-6 mb-2">Pour qui ?</h4>
      
      <p>Avocats, juristes, étudiants en droit et toute personne impliquée dans la rédaction de documents juridiques longs et structurés.</p>

      <h2 className={`text-lg text-stone-500 text-center mt-20 lg:mt-0`}>
        <a href={'/fr/contact'} 
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