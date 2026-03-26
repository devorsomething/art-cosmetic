import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Art Cosmetic | Ästhetische Kosmetik & Hautpflege Bregenz',
  description: 'Ihr Studio für ästhetische Kosmetik und professionelle Hautpflege in Bregenz. Anti-Aging, Chemical Peeling, Permanent Make-up, HydraFacial & mehr. Jetzt Beratung vereinbaren.',
  keywords: 'Kosmetik Bregenz, ästhetische Kosmetik, Anti-Aging, Chemical Peeling, Permanent Make-up, HydraFacial, Mikrodermabrasion, Vorarlberg',
  openGraph: {
    title: 'Art Cosmetic Bregenz',
    description: 'Ästhetische Kosmetik & professionelle Hautpflege in Bregenz',
    images: [
      {
        url: '/og?name=Art%20Cosmetic&tagline=%C3%84sthetische%20Kosmetik%20%C2%B7%20Bregenz&color=%23E8B4B8',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
    locale: 'de_AT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Art Cosmetic Bregenz',
    description: 'Ästhetische Kosmetik & professionelle Hautpflege in Bregenz',
    images: ['/og'],
  },
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>✨</text></svg>",
        type: 'image/svg+xml',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
