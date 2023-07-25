import '@/app/globals.css'
import type { Metadata } from 'next'
import { universLT } from '@/app/styles/fonts'
import Nav from '@/app/nav'
import Footer from '@/app/footer'
import Flags from '@/app/flags'

export const metadata: Metadata = {
  title: 'DEMERYS',
  description: "DEMERYS, leader en solutions ERP pour TPE et PME, propose une gamme de services de conseil et de logiciels pour transformer votre entreprise.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang={"fr"}>
      <body className={`${universLT.className} max-w-3xl mx-auto py-10`}>
        {children}
      </body>
    </html>
  )
}
