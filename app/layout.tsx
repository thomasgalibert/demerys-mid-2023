import '@/app/globals.css'
import type { Metadata } from 'next'
import { universLT } from '@/app/styles/fonts'
import { Analytics } from '@vercel/analytics/react';

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
      <body className={`${universLT.className} max-w-3xl sm:mx-auto py-10 mx-6`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
