import React, { useState, useEffect } from 'react'
import SystemMindsLogo from './SystemMindsLogo.jsx'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const menuItems = [
    'Home',
    'About us',
    'Services',
    'Technologies',
    'works',
    'Contact',
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-200/50' 
          : 'bg-white/80 backdrop-blur-md border-b border-gray-200/30'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          {/* SystemMinds Logo */}
          <div className="flex items-center">
            <SystemMindsLogo className="w-6 h-6" color="#1d1d1f" />
            <span 
              className="ml-2 font-semibold"
              style={{
                fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                fontWeight: 600,
                fontSize: '18px',
                letterSpacing: '-0.01em',
                color: '#1d1d1f'
              }}
            >
              SystemMinds
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center" style={{ gap: '44px' }}>
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="transition-colors duration-200"
                style={{ 
                  fontFamily: '"Inter", "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 500,
                  fontSize: '14px',
                  letterSpacing: '0.01em',
                  color: '#1d1d1f',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => e.target.style.color = '#6e6e73'}
                onMouseLeave={(e) => e.target.style.color = '#1d1d1f'}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 animate-in slide-in-from-top-2 duration-200">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="block text-sm text-gray-800 hover:text-gray-600 transition-colors"
                style={{ 
                  fontFamily: '"Inter", "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 500
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

