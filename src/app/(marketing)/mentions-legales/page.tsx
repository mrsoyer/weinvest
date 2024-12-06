import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WeInvest | Mentions légales',
  description: 'Mentions légales et informations juridiques de WeInvest.',
}

export default function LegalPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Mentions légales</h1>
        
        <div className="prose max-w-none">
          <h2>1. Informations légales</h2>
          <p>
            WeInvest est une SAS au capital de XXX XXX euros<br />
            RCS Paris XXX XXX XXX<br />
            Siège social : 123 Avenue des Champs-Élysées, 75008 Paris
          </p>

          <h2>2. Hébergement</h2>
          <p>
            Ce site est hébergé par Vercel Inc.<br />
            340 S Lemon Ave #4133<br />
            Walnut, CA 91789<br />
            États-Unis
          </p>

          {/* Ajoutez d'autres sections selon vos besoins */}
        </div>
      </div>
    </main>
  )
} 