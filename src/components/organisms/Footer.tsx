import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const legalLinks = [
    { title: 'Mentions légales', href: '/mentions-legales' },
    { title: 'Politique de confidentialité', href: '/politique-confidentialite' },
    { title: 'CGU', href: '/conditions-utilisation' },
    { title: 'Cookies', href: '/cookies' }
  ]

  const companyLinks = [
    { title: 'À propos', href: '/a-propos' },
    { title: 'Nos services', href: '/services' },
    { title: 'Contact', href: '/contact' },
    { title: 'Blog', href: '/blog' }
  ]

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-xl mb-4">WeInvest</h3>
            <p className="text-gray-600 mb-4">
              Votre partenaire de confiance pour l'investissement immobilier de prestige.
            </p>
            <p className="text-gray-600">
              123 Avenue des Champs-Élysées<br />
              75008 Paris, France
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Notre entreprise</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Informations légales</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t pt-8 text-center text-gray-600">
          <p>© {currentYear} WeInvest. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
} 