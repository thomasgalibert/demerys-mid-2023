import { berkeleyMono } from "@/app/styles/fonts"
import Divider from "@/app/divider"
import Image from "next/image"
import solutions from "../../../public/images/sections/solutions.jpg"

const projects = [
  {
    name: "Permanence téléphonique",
    features: "gestion des appels, gestion des dossiers clients, agenda en ligne, système de rappels par email / sms",
    techStack: "Ruby on Rails, React, PostgreSQL",
  },

  {
    name: "Gestion de cabinet d'avocats",
    features: "Suivi admsinitratif des dossiers, gestion des factures, gestion des rendez-vous, gestion des documents, time tracking",
    techStack: "C# Dotnet, Angular, SQL Server",
  },

  {
    name: "Entreprise du bâtiment",
    features: "CRM, gestion des devis, factures, stocks, et chantiers",
    techStack: "Ruby on Rails, Javascript, PostgreSQL",
  },

  {
    name: "Vente solutions aux entreprises",
    features: "CRM, gestion des propositions commerciales, devis, factures, stocks, suivi des tickets",
    techStack: "Ruby on Rails, Javascript, PostgreSQL",
  },

  {
    name: "Pointeuse digitale",
    features: "Pointage des employés, gestion des tâches, relevés d'heures.",
    techStack: "C# Dotnet, Angular, SQL Server",
  },

  {
    name: "CRM pour les société du Bâtiment",
    features: "Gestion des processus de vente, facturation et chantiers selon le principe du kanban",
    techStack: "Elixir, Phoenix, PostgreSQL",
  },
]

export default function Solutions(){
  return(
    <article>
      <h1 className={`${berkeleyMono.className} text-2xl text-center mb-4`}>Transformez votre entreprise <br /> avec nos solutions ERP innovantes</h1>

      <p lang="fr">
        Dans le monde des affaires d'aujourd'hui, la technologie est un levier de croissance incontournable. Chez DEMERYS, nous l'avons compris depuis longtemps. C'est pourquoi nous développons des solutions ERP avancées, conçues pour vous aider à piloter votre entreprise plus efficacement et à accélérer votre croissance.
      </p>

      <Image src={solutions} alt={"Solutions ERP Demerys"} className='my-8' />

      <p lang="fr">
      Nos solutions ERP sont plus que de simples outils ; ce sont des catalyseurs pour votre réussite. Construits sur les principes d'event storming et de domain driven design, nos logiciels sont personnalisables, intuitifs et évolutifs. Que vous ayez besoin de gérer vos ressources humaines, votre chaîne logistique, vos finances ou vos relations client, nous avons la solution qu'il vous faut.
      </p>

      <h3>Pourquoi choisir nos logiciels ?</h3>

      <p lang="fr">Nous comprenons que chaque entreprise est unique, avec ses propres défis et ses propres opportunités. C'est pourquoi nous vous offrons non seulement un logiciel, mais aussi une solution complète qui comprend l'installation, la formation, le support technique et les mises à jour régulières. De plus, notre partenariat avec des cabinets d'avocats en droit social et en droit de la propriété intellectuelle vous garantit une conformité optimale en matière de data privacy.</p>

      <h3>Votre réussite est notre mission</h3>

      <p lang="fr">
      Nous croyons fermement qu'en mettant à votre disposition les outils appropriés et en vous conseillant au mieux, nous contribuons à votre succès. Notre engagement ne se limite pas à vous fournir un logiciel. Nous nous considérons comme vos partenaires, dédiés à vous aider à atteindre vos objectifs d'affaires.
      </p>

      <Divider title="Exemples de projets récents" />

      <ul className="grid grid-cols-3 gap-6 mt-6">
        {projects.map((project) => (
          <li className="sm:col-span-1 col-span-3 text-center border p-6 flex flex-col">
            <h4 className={`text-lg ${berkeleyMono.className}`}>{project.name}</h4>
            <p className="italic text-sm flex-grow text-stone-600">{project.features}</p>
            <p className={`text-sm ${berkeleyMono.className}`}>Tech Stack : {project.techStack}</p>
          </li>
        ))}
      </ul>
    </article>
  )
}