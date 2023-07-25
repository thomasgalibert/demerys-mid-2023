import { berkeleyMono } from '@/app/styles/fonts'
import Image from 'next/image'
import services from '../../../public/images/sections/services.jpg'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nos services - Demerys',
  description: "Découvrez comment nos services de conseil en architecture logicielle, en développement et en data privacy peuvent vous aider à exploiter pleinement le potentiel de votre entreprise.",
}

export default function Services () {
  return (
    <article>
      <h1 className={`${berkeleyMono.className} text-2xl text-center mb-4`}>Exploitez pleinement votre potentiel <br /> avec nos services de conseil personnalisés</h1>

      <p>Chez DEMERYS, nous allons au-delà des solutions logicielles. Nous proposons une gamme complète de services de conseil conçus pour vous aider à optimiser vos systèmes d'information et à naviguer avec confiance dans le paysage réglementaire.</p>

      <h3>Architecture logicielle</h3>

      <p>Notre équipe d'experts en architecture logicielle peut vous aider à concevoir des systèmes robustes et évolutifs qui soutiennent vos objectifs commerciaux et s'adaptent à vos besoins changeants. Nous utilisons des techniques d'event storming et de domain driven design pour créer des architectures qui sont à la fois efficaces et faciles à maintenir.</p>

      <h3>Conseil en développement</h3>

      <p>Que vous cherchiez à développer une nouvelle application ou à améliorer une solution existante, notre équipe de développement peut vous fournir des conseils précieux. Nous nous appuyons sur notre expérience et nos compétences techniques pour vous aider à prendre les bonnes décisions et à mettre en place les meilleures pratiques de développement.</p>

      <Image src={services} alt={"Services Data Privacy Demerys"} className='my-8' />

      <h3>Expertise en data privacy et gestion de bases de données</h3>

      <p>L'ère numérique a permis de recueillir et d'analyser des données à une échelle sans précédent, ouvrant de nouvelles opportunités mais aussi de nouveaux défis en termes de protection des données. Chez DEMERYS, nous comprenons la complexité de la gestion des bases de données et l'importance cruciale de la data privacy.</p>

      <p>Nous possédons une expertise technique approfondie dans le fonctionnement des bases de données, et nous sommes capables de mettre en place des mesures de sécurité robustes pour protéger vos données sensibles. De la conception des systèmes à l'implémentation des protocoles de sécurité, en passant par le chiffrement des données et le respect des normes réglementaires, nous assurons que votre base de données est non seulement performante, mais aussi sécurisée.</p>

      <p>De plus, grâce à notre partenariat avec des cabinets d'avocats spécialisés en droit social et en propriété intellectuelle, nous offrons des services de conseil en data privacy. Nous vous aidons à comprendre et à naviguer dans le paysage réglementaire en constante évolution, pour vous assurer que votre entreprise respecte toutes les obligations légales en matière de protection des données.</p>

      <p>Avec DEMERYS, vous pouvez être sûr que vos données sont entre de bonnes mains.</p>
    </article>
  )
}