import { berkeleyMono } from "@/app/styles/fonts"
import Image from "next/image"
import type { Metadata } from 'next'
import illustration from "@/public/images/licence_gnu.jpg"

export const metadata: Metadata = {
  title: 'Solutions open-source - Demerys',
  description: "Explorez nos solutions open-source : CRM, Avocat et Association Syndicale Libre",
}

const projects = [
  {
    name: "Hammurabi",
    features: "Logiciel de gestion de cabinet d'avocats",
    techStack: "Partage aisée des dossiers avec vos correspondant et entièrement utilisable depuis votre téléphone."
  },

  {
    name: "Hajme",
    features: "CRM focalisé sur la psychologie des prospects",
    techStack: "Gérer simplement et véritablement la conversion de vos prospects en vous concentrant sur leur état émotionnel.",
  },

  {
    name: "Libersync",
    features: "Logiciel de gestion des associations syndicales libres",
    techStack: "Gestion administrative et comptable pour les ASL : PV AG, budgets, communication ds pièces, etc.",
  }
]

export default function OpenSource() {
  return(
    <article>
      <h1 className={`${berkeleyMono.className} text-2xl text-center mb-4`}>
        Nos solutions Open-Source
      </h1>  

      <p lang='fr'>
        Chez Demerys, nous croyons que du moment où vous payez pour un logiciel, vous devriez savoir ce qu'il y a dedans.
        Pour paraphraser Richard Stallman, imaginez-vous acheter une voiture sans pouvoir ouvrir le capot ou une boîte de
        céréales sans pouvoir lire la liste des ingrédients. 
        C'est pourquoi nous avons décidé de rendre open-source nos réalisations internes. 
      </p>

      <p lang="fr">
        Elles seront distribuées sous <a href="https://www.gnu.org/licenses/quick-guide-gplv3.fr.html" target="_blank"> licence GNU GPL v.3 </a>
         et permettront à tout un chacun de consulter le code source. En effet, nous croyons que la transparence est un gage de confiance 
        et que le partage de connaissance ne peut aller qu'en faveur de l'innovation.
      </p>

      <p lang="fr">
        En outre, cela permet aux sociétés, associations et particuliers souhaitant s'émanciper du modèle SaaS de pouvoir le faire 
        en toute indépendance et de redevenir maître de leur système d'information et de leurs données.
      </p>

      <Image src={illustration} alt={"Licence GNU gplv3"} className='my-8' />

      <p lang="fr">
        Par contre, open-source ne veut pas dire gratuit. En effet, pour utiliser et installer ces logiciels, 
        il faut des compétences techniques. Ces applications étant destinées à tourner sur un serveur web, l'appel à un
        professionnel du déploiement est nécessaire.
      </p>

      <p lang="fr">
        Cependant, nous faisons tout notre possible pour rendre cela abordable et nos applications sont déjà pré-configurées
        sous forme de container (Docker) pour faciliter leur installation. <strong className="bg-yellow-200 font-black">Nous proposons évidemment également des services de support et de maintenance
        pour ceux qui souhaitent que l'on s'occupe de tout.</strong>
      </p>

      <ul className="grid grid-cols-3 gap-6 mt-6">
        {projects.map((project) => (
          <li key={project.name} className="sm:col-span-1 col-span-3 text-center border p-6 flex flex-col hover:rotate-3 transition-transform">
            <h4 className={`text-lg ${berkeleyMono.className}`}>{project.name}</h4>
            <p className="italic text-sm flex-grow text-stone-600">{project.features}</p>
            <p className={`text-sm ${berkeleyMono.className}`}>{project.techStack}</p>
          </li>
        ))}
      </ul>

      <p lang="fr">
        Les logiciels seront publiés au cours de cette année 2024 en commençant par Hammurabi qui est en phase de test.
      </p>

      <p>
        <a href={'https://3r45y0ga40v.typeform.com/to/zQ5D9jaK'}
          target="_blank" 
          className={`${berkeleyMono.className} bg-stone-950 text-white text-lg py-3 px-5 flex items-center hover:pr-4 transition-all`}>
          <span className='inline-flex'>ÊTRE INFORMÉ DE LA DISPONIBILITÉ DE NOS SOLUTIONS.</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-2 w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
          </svg>
        </a>
      </p>
      
      
    </article>
  )
}