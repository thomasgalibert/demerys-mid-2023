import { berkeleyMono } from '@/app/styles/fonts'
import Image from 'next/image'
import ban from '@/public/images/ban_demerys.jpg'
import happy from '@/public/images/happy.jpg'
import developer from '@/public/images/developper.jpg'
import privacy from '@/public/images/privacy.jpg'
import relations from '@/public/images/relations.jpg'
import Divider from '@/app/divider'
import ContactForm from '@/app/contact_form_en'

const features = [
  {
    name: "Our goal",
    description: "Our mission is to bring real value to your business. We use event storming and domain-driven design to create custom software solutions that meet your specific needs.",
    image: happy,
    cta: "More about us",
    cta_url: "/en/team",
  },

  {
    name: "Solutions",
    description: "Discover how our ERP software can transform your business. Designed to be intuitive and easy to use, they help you manage your business operations efficiently, save time, and improve your profitability.",
    image: developer,
    cta: "More about our solutions",
    cta_url: "/en/solutions",
  },

  {
    name: "Services",
    description: "In addition to our software solutions, we offer a range of consulting services to help you optimize your information systems. Whether you need help with software architecture, development consulting, or data privacy compliance, we are here for you.",
    image: relations,
    cta: "More about our services",
    cta_url: "/en/services",
  },

  {
    name: "Data Privacy",
    description: "We are also here to advise you on all data privacy compliance issues, thanks to our partnership with law firms specializing in labor law and intellectual property.",
    image: privacy,
    cta: "Contactez nos experts",
    cta_url: "/en/contact",
  },

]

export default function HomeEn() {
  return (
    <article>
      <h1 className={`${berkeleyMono.className} text-2xl text-center`}>
        Take your business to the next level with DEMERYS, your trusted partner for ERP solutions and customized consulting services.
      </h1>

      <div className='aspect-w-16 aspect-h-9 lg:aspect-none'>
        <Image src={ban} alt={"Développement et architecture logicielle"} 
                className='my-8 w-full h-full object-center object-cover lg:w-full lg:h-full' />
      </div>

      <h2 className={`text-lg text-stone-500 text-center mt-20 lg:mt-0`}>
        For almost 10 years, we have been helping small and medium-sized businesses (SMEs) optimize their business operations with our innovative ERP software and software architecture expertise.
      </h2>

      <Divider title="Our products and services" />

      <div className='grid sm:grid-cols-2 gap-4'>
        {features.map((feature) => (
          <div key={feature.name} className='border border-stone-300 p-10 hover:shadow-md transition-shadow'>
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

      <Divider title="Send us a message" />

      <ContactForm />

    </article>
  )
}