import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="fixed w-full bg-white z-50 shadow-sm">
      {/* Top bar */}
      <div className="hidden md:flex justify-end items-center px-8 py-2 bg-gray-50 border-b">
        <div className="flex gap-6">
          <Link href="/entreprendre" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <span className="text-cyan-400">🏢</span>
            <span>Entreprendre</span>
          </Link>
          <Link href="/conseils" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <span className="text-cyan-400">📋</span>
            <span>Conseils & actus</span>
          </Link>
          <Link href="/espace-client" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <span className="text-cyan-400">👤</span>
            <span>Mon espace client</span>
          </Link>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="WeInvest Logo"
            width={150}
            height={40}
            priority
          />
        </Link>

        {/* Main menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="relative group">
            <Link href="/acheter" className="flex items-center gap-1 text-gray-700 hover:text-gray-900">
              Acheter
              <span className="text-xs">▼</span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/louer" className="flex items-center gap-1 text-gray-700 hover:text-gray-900">
              Louer
              <span className="text-xs">▼</span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="/vendre" className="flex items-center gap-1 text-gray-700 hover:text-gray-900">
              Vendre
              <span className="text-xs">▼</span>
            </Link>
          </div>
          <Link href="/investir" className="text-gray-700 hover:text-gray-900">
            Investir
          </Link>
          <Link href="/gestion-locative" className="text-gray-700 hover:text-gray-900">
            Gestion locative
          </Link>
          <Link href="/nos-conseillers" className="text-gray-700 hover:text-gray-900">
            Nos conseillers
          </Link>
          <Link href="/a-propos" className="text-gray-700 hover:text-gray-900">
            À propos
          </Link>
        </div>

        {/* CTA Button */}
        <Link 
          href="/estimation"
          className="bg-[#FF8C42] text-white px-6 py-2 rounded-full hover:bg-[#ff7a24] transition-colors"
        >
          Estimez votre bien
        </Link>
      </nav>
    </header>
  )
} 