import PropertyCard from '@/components/molecules/PropertyCard'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WeInvest | Acheter un bien immobilier',
  description: 'Découvrez notre sélection de biens immobiliers d\'exception à vendre.',
}

// Données mockées pour l'exemple
const properties = [
  {
    id: '1',
    title: 'Villa contemporaine avec piscine',
    price: 850000,
    location: 'Aix-en-Provence',
    surface: 180,
    rooms: 5,
    imageUrl: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800',
  },
  {
    id: '2',
    title: 'Appartement de standing vue mer',
    price: 650000,
    location: 'Marseille 7ème',
    surface: 120,
    rooms: 4,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800',
  },
  {
    id: '3',
    title: 'Maison de charme avec jardin',
    price: 495000,
    location: 'Cassis',
    surface: 150,
    rooms: 4,
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800',
  },
]

export default function BuyPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Acheter un bien immobilier</h1>
          <p className="text-xl text-gray-600">
            Découvrez notre sélection de biens d'exception
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </main>
  )
} 