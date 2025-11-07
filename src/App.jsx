import React from 'react'
import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx'
import AboutUs from './components/AboutUs.jsx'
import WorkWeDo from './components/WorkWeDo.jsx'
import Technologies from './components/Technologies.jsx'
import ProductGrid from './components/ProductGrid.jsx'
import Footer from './components/Footer.jsx'
import ContinuousWaves from './components/ContinuousWaves.jsx'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: '#0A0A0A' }}>
      <ContinuousWaves />
      <Header />
      <main className="w-full relative z-10">
        <HeroSection />
        <AboutUs />
        <WorkWeDo />
        <Technologies />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App

