import type { Metadata } from 'next'
import { Inter, Dancing_Script } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const handwriting = Dancing_Script({ 
  subsets: ['latin'],
  variable: '--font-handwriting'
})

export const metadata: Metadata = {
  title: 'WeInvest',
  description: 'Plateforme d\'investissement immobilier',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} ${handwriting.variable}`}>
        {children}
      </body>
    </html>
  )
}
