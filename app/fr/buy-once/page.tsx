import Image from "next/image"
import { berkeleyMono } from "@/app/styles/fonts"
import carImage from "../../../public/images/car_vs_server.jpg"

export default function BuyOnce() {
  return(
    <div>
      <h1 className={`${berkeleyMono.className} text-2xl text-center mb-4`}>Marre de payer tous les mois pour un logiciel qui ne vous appartient pas ?</h1>
      
      <h2 className="text-xl font-semibold mt-10 mb-2">Chez Demerys, nous transformons votre vision en réalité numérique. 🚀</h2>

      <p>L'indépendance technologique - c'est l'avenir que nous bâtissons pour nos clients avec des logiciels ERP personnalisés créés avec passion et expertise en Ruby on Rails.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Pourquoi choisir un logiciel sur mesure?</h2>

      <p>Imaginez un instant que vous achetiez une voiture. Seriez-vous prêt à payer un abonnement mensuel sans jamais réellement posséder le véhicule ? À ne jamais sentir cette satisfaction de tourner la clé dans une voiture qui est vraiment à vous ?</p>

      <p>C'est exactement ce que vous évitez en investissant dans un logiciel ERP sur mesure avec Demerys. <span className="bg-yellow-200 font-black">Un logiciel qui ne se dépréciera pas comme un véhicule et qui sera rapidement rentabilisé.</span></p>

      <div className='aspect-w-16 aspect-h-9 lg:aspect-none'>
        <Image src={carImage} alt={"Posséder son propre logiciel"} 
                className='mb-8 w-full h-full object-center object-cover lg:w-full lg:h-full' />
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-2">Propriété Vs. Location : Le Grand Débat</h2>

      <p>Avec un logiciel personnalisé, vous êtes au volant. Vous payez une seule fois et le logiciel est à vous pour toujours.</p>

      <ul className="list-decimal">
        <li>Contrôle Total: Votre entreprise mérite un outil qui épouse ses processus uniques, pas l'inverse.</li>
        <li>Un Actif de l'Entreprise: Comme une voiture ajoutée à votre patrimoine, le logiciel sur mesure entre dans vos actifs.</li>
        <li>Économies à Long Terme: Pas de frais mensuels. Avec un tarif entre 10 000 et 50 000 euros, vous maîtrisez votre budget et votre futur.</li>
        <li>Sécurité des Données: Hébergé sur vos propres serveurs, vous détenez les clés de vos données, éliminant les risques liés à des tiers.</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6 mb-2">L'Investissement qui Se Respecte</h2>
      
      <p>Investir dans un ERP sur mesure, c'est choisir une solution qui s'adapte à l'évolution de votre entreprise. <span className="bg-yellow-200 font-black">C'est décider de ne pas dépendre d'un modèle de location où le coût s'accumule indéfiniment, sans jamais contribuer à votre patrimoine.</span></p>

      <p>Votre logiciel personnalisé avec Demerys, c'est :</p>

      <ul className="list-decimal">
        <li>🛠️ Un Outil Unique: Parfaitement adapté à vos besoins, sans fonctionnalités superflues.</li>
        <li>🔒 La Sécurité Renforcée: La confidentialité et l'intégrité de vos données restent sous votre contrôle.</li>
        <li>💼 Un Bilan Embelli: Un actif immobilisé qui valorise votre entreprise.</li>
        <li>💡 Une Technologie Pérenne: Un produit évolutif qui grandit avec votre vision.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Le Moment de Choisir</h2>
      
      <p>Votre logiciel ERP ne devrait pas être une dépense continuelle, mais un investissement stratégique. C'est le moment de passer à la vitesse supérieure avec un partenaire de confiance qui comprend l'importance d'une solution réellement adaptée à votre entreprise.</p>

      <p>Prenez le contrôle de votre futur technologique.</p>

      <p>Remplissez le formulaire pour commencer le dialogue sur votre solution ERP sur mesure et découvrez comment Demerys peut propulser votre entreprise vers de nouveaux horizons numériques.</p>

      <a href={'https://3r45y0ga40v.typeform.com/to/FWHxpQVV'}
        target="_blank" 
        className={`${berkeleyMono.className} bg-stone-950 text-white text-lg py-3 px-5 flex items-center hover:pr-4 transition-all`}>
        <span className='inline-flex'>Recevez votre estimation personnalisée maintenant</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-2 w-3 h-3">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
        </svg>
      </a>
    </div>
  )
}