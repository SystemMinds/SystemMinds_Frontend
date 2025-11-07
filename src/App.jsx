import React from 'react'
import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx'
import AboutUs from './components/AboutUs.jsx'
import WorkWeDo from './components/WorkWeDo.jsx'
import Technologies from './components/Technologies.jsx'
import Works from './components/Works.jsx'
import ProductGrid from './components/ProductGrid.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: '#0A0A0A' }}>
      <Header />
      <main className="w-full relative z-10">
        <HeroSection />
        <AboutUs />
        <WorkWeDo />
        <Technologies />
        <Works />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App

