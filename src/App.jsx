import { useState } from 'react'
import { useFavorites } from './hooks/useFavorites'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import CategoryGrid from './components/CategoryGrid'
import BusinessesSection from './components/BusinessesSection'
import ListingsSection from './components/ListingsSection'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import PublishModal from './components/PublishModal'

export default function App() {
  const favorites = useFavorites()
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('todo')
  const [publishOpen, setPublishOpen] = useState(false)

  const openPublish = () => setPublishOpen(true)
  const clearFilters = () => {
    setSearch('')
    setActiveCategory('todo')
  }

  // when a category is selected in CategoryGrid, jump to the listings
  const handleSelectCategory = (slug) => {
    setActiveCategory(slug)
    if (slug !== 'todo') {
      document
        .getElementById('anuncios')
        ?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <Header
        favoritesCount={favorites.count}
        onOpenPublish={openPublish}
        search={search}
        setSearch={setSearch}
        onSearch={() => setActiveCategory('todo')}
      />

      <main>
        <Hero onOpenPublish={openPublish} />
        <TrustBar />
        <CategoryGrid active={activeCategory} onSelect={handleSelectCategory} />
        <BusinessesSection favorites={favorites} />
        <ListingsSection
          search={search}
          activeCategory={activeCategory}
          favorites={favorites}
          onClearFilters={clearFilters}
        />
        <HowItWorks />
        <Testimonials />
        <CTASection onOpenPublish={openPublish} />
      </main>

      <Footer />
      <FloatingWhatsApp />
      <PublishModal open={publishOpen} onClose={() => setPublishOpen(false)} />
    </div>
  )
}
