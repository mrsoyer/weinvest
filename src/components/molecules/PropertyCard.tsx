import Image from 'next/image'
import Link from 'next/link'

type PropertyCardProps = {
  id: string
  title: string
  price: number
  location: string
  surface: number
  rooms: number
  imageUrl: string
}

export default function PropertyCard({ id, title, price, location, surface, rooms, imageUrl }: PropertyCardProps) {
  return (
    <Link href={`/property/${id}`} className="group">
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        <div className="relative h-64 w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full font-semibold">
            {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price)}
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <div className="flex items-center text-gray-600 mb-4">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            {location}
          </div>

          <div className="flex justify-between text-gray-600">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              {surface} m²
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              {rooms} pièces
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
} 