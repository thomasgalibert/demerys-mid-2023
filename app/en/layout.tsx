import '@/app/globals.css'
import type { Metadata } from 'next'
import Nav from '@/app/nav_en'
import Footer from '@/app/footer_en'
import Flags from '@/app/flags'

export const metadata: Metadata = {
  title: 'DEMERYS',
  description: "Custom ERP software for SMEs",
}

export default function EnLayout({
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