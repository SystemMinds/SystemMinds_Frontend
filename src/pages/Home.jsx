import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header.jsx'
import HeroSection from '../components/HeroSection.jsx'
import AboutUs from '../components/AboutUs.jsx'
import WorkWeDo from '../components/WorkWeDo.jsx'
import Technologies from '../components/Technologies.jsx'
import Works from '../components/Works.jsx'
import ProductGrid from '../components/ProductGrid.jsx'
import Footer from '../components/Footer.jsx'

function Home() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const targetId = location.state?.scrollTo
    if (!targetId) return

    const timeout = setTimeout(() => {
      const header = document.querySelector('header')
      const headerHeight = header?.offsetHeight || 0
      const target = document.getElementById(targetId)
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16
        window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' })
      }
      navigate(location.pathname, { replace: true, state: {} })
    }, 150)

    return () => clearTimeout(timeout)
  }, [location, navigate])

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

export default Home
