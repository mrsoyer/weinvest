import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <div className="pt-[120px]">
        {children}
      </div>
      <Footer />
    </>
  )
} 