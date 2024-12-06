import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative h-[70vh] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Luxury home"
          fill
          className="object-cover brightness-75"
          priority
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-16">
          Trouvez le bien de vos rêves avec les<br />
          annonces immobilières <span className="text-[#40E0D0] font-handwriting">We Invest</span>
        </h1>

        {/* Search Box */}
        <div className="bg-white rounded-xl p-8 max-w-3xl mx-auto shadow-lg">
          {/* Tabs */}
          <div className="inline-flex bg-gray-100 rounded-full p-1 mb-8">
            <button className="px-8 py-2 bg-white text-gray-800 rounded-full shadow-sm font-medium">
              Estimer
            </button>
            <button className="px-8 py-2 text-gray-600">
              Acheter
            </button>
            <button className="px-8 py-2 text-gray-600">
              Louer
            </button>
          </div>

          {/* Search Form */}
          <div>
            <h2 className="text-xl text-gray-800 mb-6">
              <span className="font-semibold">Estimez gratuitement votre bien</span> en moins de 2 minutes !
            </h2>
            
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#40E0D0]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Ville, Code Postal..."
                  className="w-full pl-10 pr-4 py-4 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#40E0D0] text-gray-600"
                />
              </div>
              <button className="bg-[#FF8C42] text-white px-8 py-4 rounded-lg hover:bg-[#ff7a24] transition-colors whitespace-nowrap font-medium">
                Estimez votre bien
              </button>
            </div>

            <button className="text-gray-500 text-sm mt-4 hover:underline">
              Utiliser votre localisation actuelle
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}