import './globals.css'
import type { Metadata } from 'next'
import { universLT } from './styles/fonts'
import Nav from './nav'
import Footer from './footer'
import Flags from './flags'

export const metadata: Metadata = {
  title: 'DEMERYS',
  description: "Edition de logiciels ERP sur-mesure pour les PME",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${universLT.className} max-w-3xl mx-auto py-10`}>
        <Flags />
        <Nav />
        <main className='py-8'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
