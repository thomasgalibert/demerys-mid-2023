import { berkeleyMono } from '@/app/styles/fonts'
import Image from 'next/image'
import ban from '@/public/images/ban_demerys.jpg'
import happy from '@/public/images/happy.jpg'
import developer from '@/public/images/developper.jpg'
import privacy from '@/public/images/privacy.jpg'
import relations from '@/public/images/relations.jpg'
import Divider from '@/app/divider'
import ContactForm from '@/app/contact_form'
import Footer from '@/app/footer'
import Flags from '@/app/flags'
import Nav from '@/app/nav'

const features = [
  {
    name: "Notre mission",
    description: "Notre mission est d'apporter une réelle valeur ajoutée à votre entreprise. Nous utilisons l'event storming et le domain driven design pour créer des solutions logicielles personnalisées qui répondent à vos besoins spécifiques.",
    image: happy,
    cta: "Nous connaître",
    cta_url: "/fr/team",
  },

  {
    name: "Solutions",
    description: "Découvrez comment nos logiciels ERP peuvent transformer votre entreprise. Conçus pour être intuitifs et faciles à utiliser, ils vous aident à gérer efficacement vos opérations commerciales, à économiser du temps et à améliorer votre rentabilité.",
    image: developer,
    cta: "Découvrez nos solutions",
    cta_url: "/fr/solutions",
  },

  {
    name: "Services",
    description: "Outre nos solutions logicielles, nous offrons une gamme de services de conseil pour vous aider à optimiser vos systèmes d'information. Que vous ayez besoin d'aide pour l'architecture logicielle, le conseil en développement, ou la conformité en matière de data privacy, nous sommes là pour vous.",
    image: relations,
    cta: "Découvrir nos services",
    cta_url: "/fr/services",
  },

  {
    name: "Data Privacy",
    description: "Nous sommes également ici pour vous conseiller sur toutes les questions de conformité en matière de data privacy, grâce à notre partenariat avec des cabinets d'avocat spécialisés en droit social et en propriété intellectuelle.",
    image: privacy,
    cta: "Contactez nos experts",
    cta_url: "/fr/contact",
  },

]

export default function Home() {
  return (
    <div>
      <Flags />
      <Nav />
      <main className='py-8'>
      <article>
        <h1 className={`${berkeleyMono.className} text-2xl text-center`}>
          Faites passer votre entreprise au niveau supérieur avec DEMERYS, 
          votre partenaire de confiance pour des solutions ERP et des 
          services de conseil personnalisés.
        </h1>

        <div className='aspect-w-16 aspect-h-9 lg:aspect-none'>
          <Image src={ban} alt={"Développement et architecture logicielle"} 
                 className='my-8 w-full h-full object-center object-cover lg:w-full lg:h-full' />
        </div>

        <h2 className={`text-lg text-stone-500 text-center mt-20 lg:mt-0`}>
          <a href={'/fr/solutions/open-source'} 
            className={`${berkeleyMono.className} bg-stone-950 text-white text-lg py-3 px-5 flex items-center hover:pr-4 transition-all`}>
            <span className='inline-flex'>Découvrer nos solutions open-source</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-2 w-3 h-3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
            </svg>
          </a>
        </h2>

        <Divider title="Nos produits & services" />

        <div className='grid sm:grid-cols-2 gap-4'>
          {features.map((feature) => (
            <div key={feature.name} className='border border-stone-300 p-10 hover:shadow-md transition-shadow'>
              <div className="flex flex-col h-full justify-between">
                <div>
                  <Image src={feature.image} alt={feature.name} className='max-h-full m-auto' />
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

      </article>
      </main>
      <Footer />
    </div>
    
    
    
    
  )
}
