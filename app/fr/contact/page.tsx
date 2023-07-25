import ContactForm from '@/app/contact_form'
import { berkeleyMono } from '@/app/styles/fonts'

export default function Contact() {
  return (
    <article>
      <h1 className={`${berkeleyMono.className} text-2xl text-center mb-4`}>Contactez-nous</h1>
      <ContactForm />
    </article>
  )
}