import { berkeleyMono } from '@/app/styles/fonts'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Données personnelles - Demerys',
  description: "Votre vie privée est importante pour nous. Découvrez comment nous recueillons, utilisons et protégeons vos informations personnelles.",
}

export default function Privacy() {
  return(
    <article>
      <h1 className={`${berkeleyMono.className} text-2xl text-center mb-4`}>Politique de confidentialité</h1>

      <p>DEMERYS INVESTMENT, situé au 23 avenue Auguste Albertini, 34500 Béziers, France, respecte votre vie privée et s'engage à la protéger à travers notre conformité avec cette politique.</p>

      <p>Cette politique décrit les types d'informations que nous pouvons recueillir de votre part ou que vous pouvez nous fournir lorsque vous visitez notre site web et nos pratiques pour recueillir, utiliser, protéger et divulguer ces informations.</p>

      <h3>Informations que nous recueillons</h3>

      <p>La seule information que nous recueillons est celle que vous nous fournissez volontairement via notre formulaire de contact. Cela peut inclure des informations telles que votre nom, votre adresse e-mail, votre numéro de téléphone et toute autre information que vous choisissez de nous fournir dans le cadre de votre message.</p>

      <h3>Utilisation de vos informations</h3>

      <p>Nous utilisons les informations que vous nous fournissez exclusivement pour répondre à votre message ou à votre demande. Nous ne partageons pas, ne vendons pas et ne divulguons pas vos informations personnelles à des tiers.</p>

      <h3>Sécurité de vos informations</h3>

      <p>Nous prenons la protection de vos informations personnelles au sérieux et nous utilisons des mesures de sécurité appropriées pour protéger vos informations contre l'accès, la divulgation, l'utilisation et la modification non autorisés. Cependant, veuillez noter qu'aucune transmission de données sur Internet n'est garantie comme étant 100% sécurisée.</p>

      <h3>Modifications de notre politique de confidentialité</h3>

      <p>Toute modification future de notre politique de confidentialité sera postée sur cette page. Vous êtes encouragé à consulter régulièrement notre politique de confidentialité pour tout changement.</p>

      <h3>Contact</h3>

      <p>Si vous avez des questions concernant cette politique de confidentialité, n'hésitez pas à nous contacter à l'adresse indiquée ci-dessus ou en envoyant un email à <a href="mailto:privacy@demerys.com">email demerys privacy</a>.</p>
    </article>
  )
}