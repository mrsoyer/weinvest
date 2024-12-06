import Hero from '@/components/molecules/Hero'
import Features from '@/components/organisms/Features'
import dynamic from 'next/dynamic'
import { Metadata } from 'next'

const ValueProposition = dynamic(() => import('@/components/organisms/ValueProposition'), {
  ssr: true
})

export const metadata: Metadata = {
  title: 'WeInvest | Investissement Immobilier de Prestige',
  description: 'Découvrez des opportunités d\'investissement immobilier uniques avec WeInvest. Biens d\'exception et accompagnement personnalisé.',
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <ValueProposition />
    </main>
  )
} 