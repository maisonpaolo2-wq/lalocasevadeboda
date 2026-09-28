import type { Metadata, Viewport } from 'next'
import { Caveat, DM_Sans, Fraunces } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ClientRoot from '@/components/ClientRoot'
import JsonLd from '@/components/JsonLd'
import { siteConfig } from '@/content/data'
import { siteUrl } from '@/content/seo'

const serif = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['SOFT', 'WONK', 'opsz'],
  variable: '--font-serif',
  display: 'swap',
})
const sans = DM_Sans({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-sans', display: 'swap' })
const hand = Caveat({ subsets: ['latin'], weight: ['500'], variable: '--font-hand', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} · Wedding planner en Barcelona`,
    template: `%s · ${siteConfig.name}`,
  },
  description:
    'Wedding planner en Barcelona para parejas que quieren salir de lo tradicional. Organización integral, diseño, coordinación del día B y despedidas en Catalunya.',
  openGraph: {
    siteName: siteConfig.name,
    locale: 'es_ES',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: siteConfig.name }],
  },
  icons: { icon: '/icon.svg' },
}

export const viewport: Viewport = {
  themeColor: '#1c1416',
  viewportFit: 'cover',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${serif.variable} ${sans.variable} ${hand.variable}`}>
      <body>
        <a href="#main" className="skip">
          Saltar al contenido
        </a>
        <ClientRoot>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ClientRoot>
        <JsonLd />
      </body>
    </html>
  )
}
