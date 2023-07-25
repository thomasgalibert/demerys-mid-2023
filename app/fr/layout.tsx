import '@/app/globals.css'
import type { Metadata } from 'next'
import Nav from '@/app/nav'
import Footer from '@/app/footer'
import Flags from '@/app/flags'

export const metadata: Metadata = {
  title: 'DEMERYS',
  description: "Edition de logiciels ERP sur-mesure pour les PME",
}

export default function FrLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <div>
      <Flags />
      <Nav />
      <main className='py-8'>{children}</main>
      <Footer />
    </div>
  )
}
