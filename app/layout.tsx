import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Art Cosmetic | Ästhetische Kosmetik & Hautpflege Bregenz',
  description: 'Ihr Studio für ästhetische Kosmetik und professionelle Hautpflege in Bregenz. Anti-Aging, Chemical Peeling, Permanent Make-up, HydraFacial & mehr. Jetzt Beratung vereinbaren.',
  keywords: 'Kosmetik Bregenz, ästhetische Kosmetik, Anti-Aging, Chemical Peeling, Permanent Make-up, HydraFacial, Mikrodermabrasion, Vorarlberg',
  openGraph: {
    title: 'Art Cosmetic | Ästhetische Kosmetik Bregenz',
    description: 'Modernste ästhetische Kosmetik und professionelle Hautpflege in Bregenz.',
    type: 'website',
    locale: 'de_AT',
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
