import { berkeleyMono } from './styles/fonts'
import Image from 'next/image'
import ban from '../public/images/ban_demerys.jpg'
import happy from '../public/images/happy.jpg'
import developer from '../public/images/developper.jpg'
import privacy from '../public/images/privacy.jpg'
import relations from '../public/images/relations.jpg'
import Divider from './divider'
import ContactForm from './contact_form'

const features = [
  {
    name: "Notre mission",
    description: "Notre mission est d'apporter une réelle valeur ajoutée à votre entreprise. Nous utilisons l'event storming et le domain driven design pour créer des solutions logicielles personnalisées qui répondent à vos besoins spécifiques.",
    image: happy,
    cta: "Nous connaître",
    cta_url: "#",
  },

  {
    name: "Solutions",
    description: "Découvrez comment nos logiciels ERP peuvent transformer votre entreprise. Conçus pour être intuitifs et faciles à utiliser, ils vous aident à gérer efficacement vos opérations commerciales, à économiser du temps et à améliorer votre rentabilité.",
    image: developer,
    cta: "Découvrez nos solutions",
    cta_url: "#",
  },

  {
    name: "Services",
    description: "Outre nos solutions logicielles, nous offrons une gamme de services de conseil pour vous aider à optimiser vos systèmes d'information. Que vous ayez besoin d'aide pour l'architecture logicielle, le conseil en développement, ou la conformité en matière de data privacy, nous sommes là pour vous.",
    image: relations,
    cta: "Découvrir nos services",
    cta_url: "#",
  },

  {
    name: "Data Privacy",
    description: "Nous sommes également ici pour vous conseiller sur toutes les questions de conformité en matière de data privacy, grâce à notre partenariat avec des cabinets d'avocat spécialisés en droit social et en propriété intellectuelle.",
    image: privacy,
    cta: "Contactez nos experts",
    cta_url: "#",
  },

]

export default function Home() {
  return (
    <div>
      <h1 className={`${berkeleyMono.className} text-2xl text-center`}>
        Faites passer votre entreprise au niveau supérieur avec DEMERYS, 
        votre partenaire de confiance pour des solutions ERP et des 
        services de conseil personnalisés.
      </h1>

      <Image src={ban} alt={"Développement et architecture logicielle"} className='my-8' />

      <h2 className={`text-lg text-stone-500 text-center`}>
        Depuis bientôt 10 ans, nous aidons les TPE et PME à optimiser leurs opérations commerciales grâce à nos logiciels ERP innovants et notre expertise en architecture logicielle.
      </h2>

      <Divider title="Nos produits & services" />

      <div className='grid sm:grid-cols-2 gap-4'>
        {features.map((feature) => (
          <div key={feature.name} className='border border-stone-300 p-10'>
            <div className="flex flex-col h-full justify-between">
              <div>
                <Image src={feature.image} alt={feature.name} className='w-full h-48' />
                <h3 className={`${berkeleyMono.className} text-xl text-center mt-3`}>
                  {feature.name}
                </h3>
                <p className={`text-left text-sm hyphens-auto`} lang='fr'>
                  {feature.description}
                </p>
              </div>
              <div className="flex justify-end">
                <a href={feature.cta_url} 
                   className={`${berkeleyMono.className} bg-stone-950 text-white text-sm py-1 px-2 flex items-center hover:pr-4 transition-all`}>
                   <span className='inline-flex'>{feature.cta}</span>
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-2 w-3 h-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Divider title="Envoyez-nous un message" />

      <ContactForm />

    </div>
  )
}
