import Image from 'next/image'

export default function ValueProposition() {
  const values = [
    {
      title: "La transparence",
      description: "Une relation de confiance basée sur une communication sincère et directe pour une collaboration efficace.",
      icon: "/icons/transparency.svg"
    },
    {
      title: "L'expertise",
      description: "Des conseils avisés et un accompagnement personnalisé à chaque étape de votre projet immobilier.",
      icon: "/icons/expertise.svg"
    },
    {
      title: "La performance",
      description: "Bien plus que des chiffres, nous visons votre satisfaction et la concrétisation de vos projets immobiliers.",
      icon: "/icons/performance.svg"
    },
    {
      title: "L'innovation",
      description: "Des outils digitaux intégrés et une approche originale pour réinventer l'immobilier de manière professionnelle et efficace.",
      icon: "/icons/innovation.svg"
    }
  ]

  return (
    <section className="bg-white w-full">
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-[150px] py-[50px] overflow-visible flex flex-row gap-0 z-[3]">
        {/* Carte bleue principale - 65% width */}
        <div className="bg-[#1B2A3B] text-white rounded-[25px] p-[55px_60px] flex flex-col gap-7 w-[65%] relative z-10">
          {/* Titre */}
          <div className="flex flex-row items-end">
            <h2 className="text-[60px] font-semibold">
              L'immobilier autrement avec{' '}
              <span className="text-[80px] text-[#40E0D0] font-handwriting">We Invest</span>
            </h2>
          </div>
          
          {/* Liste des valeurs */}
          <div className="flex flex-col gap-6 px-[30px] max-w-[448px]">
            {values.map((value) => (
              <div key={value.title} className="flex gap-[25px] items-center">
                <div className="w-[42px] aspect-[42/41]">
                  <Image
                    src={value.icon}
                    alt=""
                    width={42}
                    height={41}
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <h3 className="text-[30px] font-medium text-white">{value.title}</h3>
                  <p className="text-[17px] leading-[1.17] text-white/80">{value.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bouton */}
          <button className="mt-4 bg-gradient-to-r from-[#FF8C42] to-[#ff7a24] text-white text-[18px] font-semibold tracking-[0.54px] px-5 py-3 rounded-[10px] h-[55px] w-fit">
            Prenez rendez-vous
          </button>
        </div>

        {/* Image et logo à droite */}
        <div className="flex-1 flex flex-col items-end relative">
          <Image
            src="/images/logo-weinvest.png"
            alt="WeInvest Logo"
            width={290}
            height={137}
            className="relative z-20 -mr-[25px] -mb-5"
          />
          <div 
            className="w-full h-[609px] -ml-[100px] rounded-[15px] bg-cover bg-center"
            style={{
              backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F6383ed181c2e9c476e6ec321784a3311.cdn.bubble.io%2Ff1713784443872x676567701376742700%2FWeInvestWebsite-29.jpg?w=512&h=&auto=compress&dpr=1.5&fit=max')"
            }}
          />
        </div>
      </div>
    </section>
  )
} 