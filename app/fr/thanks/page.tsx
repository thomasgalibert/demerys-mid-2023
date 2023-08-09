import Image from 'next/image'
import services from '../../../public/images/sections/thanks.jpg'

export default function Thanks() {
  return(
    <div>
      <Image src={services} alt={"Services Data Privacy Demerys"} className='my-8' />
      <p>Nous vous remercions d'avoir pris le temps de remplir notre formulaire de demande de renseignements</p>
      <p>Notre équipe s'engage à examiner votre demande avec soin et diligence. Nous vous répondrons dans les plus brefs délais afin de discuter de vos besoins spécifiques et de vous proposer les solutions les plus adaptées.</p>
      <p>Si vous avez des questions supplémentaires en attendant notre réponse, n'hésitez pas à visiter les autres pages de notre site.</p>
    </div>
  )
}
