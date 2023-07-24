import Image from "next/image"
import { berkeleyMono } from "@/app/styles/fonts"
import ccProfile from "../../../public/images/team/cg.jpg"
import tgProfile from "../../../public/images/team/tg.jpg"
import zazProfile from "../../../public/images/team/zaz.jpg"
import calProfile from "../../../public/images/team/cal.jpg"
import acprProfile from "../../../public/images/team/acpr.jpg"
import team from "../../../public/images/sections/team.jpg"
import Divider from "@/app/divider"

const people = [
  {
    name: "Camille CERVERA",
    role: "Chef de projet",
    imageUrl: ccProfile,
    bio: "Camille est la chef de projet. Diplômée de l'ECE Lyon (Groupe INSEEC) et d'un Master en Finance, elle veille à ce que chaque projet respecte les délais et le budget fixés.",
  },

  {
    name: "Thomas GALIBERT",
    role: "CTO",
    imageUrl: tgProfile,
    bio: "Thomas développe des logiciels depuis 2018. Après un master en Droit et Informatique, il part travailler au Japon avant de revenir en France pour fonder Demerys avec Camille.",
  },

  {
    name: "Cabinet d'avocats Zaïna AZZABI",
    role: "Cabinet spécialiste en données personnelles",
    imageUrl: zazProfile,
    bio: "Maître AZZABI est avocate, titulaire d'un master en propriété intectuelle, d'un doctorat en droit, d'un diplôme universirtaire sur le RGPD et membre de l'inter-Pacific Bar association. Elle parle couramment l'anglais et l'arabe.",
  },

  {
    name: "Cabinet d'avocats Calistavocats",
    role: "Cabinet spécialiste en droit social",
    imageUrl: calProfile,
    bio: "Maître Checri et Chlala sont avocates spécialisées en droit social et bénificient d'une grande expérience dans les problématiques de données personnelles des salariés. Elles parlent aussi couramment l'anglais et l'arabe.",
  },

  {
    name: "ACPR Occitanie",
    role: "Organisme de formations spécialisé en management",
    imageUrl: acprProfile,
    bio: "Sébastien BERG est spécialisée dans l'accompagnement des entreprises dans leur transformation digitale. Il les aide à mettre en place des processus de management et de gestion adaptés à leurs besoins.",
  },
]

export default function Team() {
  return(
    <div>
      <h1 className={`${berkeleyMono.className} text-2xl text-center mb-4`}>Une combinaison de talents</h1>

      <p>DEMERYS est plus qu'une entreprise - nous sommes une équipe. Nous réunissons des experts de divers domaines, unis par une passion commune pour l'innovation et la résolution de problèmes.</p>
      <p>Nous avons dans notre équipe des développeurs dédiés qui maîtrisent à la perfection les techniques d'event storming et de domain driven design. Ils conçoivent et peaufinent nos logiciels ERP pour qu'ils soient parfaitement adaptés aux besoins spécifiques de votre entreprise.</p>

      <Image src={team} alt="Notre équipe" className="my-8" />

      <p>Notre directrice de projet, titulaire d'un master en finance, apporte une précieuse expertise en matière de gestion de projet et d'analyse financière. Elle veille à ce que chaque projet que nous entreprenons respecte les délais et le budget fixés.</p>
      <p>Nous collaborons également étroitement avec des cabinets d'avocats spécialisés en droit social et en droit de la propriété intellectuelle, afin de garantir que toutes nos solutions respectent les normes de conformité les plus strictes en matière de data privacy.</p>
      <p>Récemment, nous avons intégré également un organisme de formation spécialiste des processus de management et de gestion afin de s'immerger dans les entreprises de nos clients.</p>
      <p>C'est cette combinaison de compétences et d'expertise qui nous permet de vous offrir les meilleures solutions logicielles et les conseils les plus avisés. Quel que soit le défi auquel votre entreprise est confrontée, vous pouvez être sûr que l'équipe de DEMERYS est prête à vous aider.</p>

      <Divider title="Notre équipe" />

      <div className={`grid grid-cols-2 gap-6 mt-6`}>
        {people.map((person) => (
          <div key={person.name} className="col-span-1 flex flex-col text-center border bg-white divide-y divide-gray-200">
            <div className="flex-1 flex flex-col p-8">
              <Image className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full" src={person.imageUrl} alt={person.name} />
              <h3 className="mt-6 text-gray-900 text-sm font-medium">{person.name}</h3>
              <dl className="mt-1 flex-grow flex flex-col justify-between">
                <dt className="sr-only">Role</dt>
                <dd className="text-gray-500 text-sm">{person.role}</dd>
                <dt className="sr-only">Bio</dt>
                <dd className="mt-3">
                  <p className="text-gray-500 text-sm">{person.bio}</p>
                </dd>
              </dl>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}