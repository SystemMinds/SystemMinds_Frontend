import React from 'react'
import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx'
import AboutUs from './components/AboutUs.jsx'
import WorkWeDo from './components/WorkWeDo.jsx'
import ProductGrid from './components/ProductGrid.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main className="w-full">
        <HeroSection />
        <AboutUs />
        <WorkWeDo />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App

