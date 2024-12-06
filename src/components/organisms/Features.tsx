export default function Features() {
  const features = [
    {
      title: "Biens d'exception",
      description: "Une sélection rigoureuse des meilleures opportunités",
      icon: "🏰"
    },
    {
      title: "Accompagnement",
      description: "Des experts dédiés à votre projet",
      icon: "🤝"
    },
    {
      title: "Investissement",
      description: "Des rendements optimisés et sécurisés",
      icon: "📈"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Pourquoi choisir WeInvest ?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 