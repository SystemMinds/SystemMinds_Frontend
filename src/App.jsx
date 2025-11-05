import React from 'react'
import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx'
import ProductGrid from './components/ProductGrid.jsx'
import Footer from './components/Footer.jsx'
import Banner from './components/Banner.jsx'

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Banner />
      <Header />
      <main className="w-full">
        <HeroSection />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App

