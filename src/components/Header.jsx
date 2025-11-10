import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import logoImage from '../assets/images/logo1-.png'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showSocialMedia, setShowSocialMedia] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const tooltipTimerRef = React.useRef(null)
  const headerRef = React.useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  const menuItems = [
    'Home',
    'About us',
    'Services',
    'Technologies',
    'Works',
    'Contact',
  ]

  const sectionIds = {
    'Home': 'hero',
    'About us': 'about',
    'Services': 'work-we-do',
    'Technologies': 'technologies',
    'Works': 'works',
    'Contact': 'contact',
  }

  useEffect(() => {
    // Set initial scroll state
    setIsScrolled(window.scrollY > 10)
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Intersection Observer for initial load animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (headerRef.current) {
      observer.observe(headerRef.current)
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current)
      }
    }
  }, [])

  const handleTooltipMouseEnter = () => {
    setShowTooltip(true)
    tooltipTimerRef.current = setTimeout(() => {
      setShowTooltip(false)
    }, 3000)
  }

  const handleTooltipMouseLeave = () => {
    setShowTooltip(false)
    if (tooltipTimerRef.current) {
      clearTimeout(tooltipTimerRef.current)
    }
  }

  const scrollToSection = (sectionId) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const target = document.getElementById(sectionId)
    if (target) {
      const headerHeight = headerRef.current?.offsetHeight || 0
      let extraOffset = 24
      if (sectionId === 'technologies') extraOffset = -12
      else if (sectionId === 'works') extraOffset = 0
      else if (sectionId === 'about') extraOffset = -16
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight - extraOffset
      window.scrollTo({ top: Math.max(targetPosition, 0), behavior: 'smooth' })
    }
  }

  const handleNavClick = (item, event, isMobile = false) => {
    event.preventDefault()

    const sectionId = sectionIds[item]

    if (sectionId) {
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: sectionId } })
      } else {
        scrollToSection(sectionId)
      }
    }

    if (isMobile) {
      setIsMenuOpen(false)
    }
  }

  return (
    <header 
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md border-b border-gray-100' 
          : 'bg-transparent'
      }`}
      style={{
        boxShadow: isScrolled ? '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)' : 'none'
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="flex items-center justify-between h-14">
          {/* Left: SystemMinds Logo */}
          <button
            type="button"
            className="flex items-center gap-2 flex-shrink-0 focus:outline-none"
            onClick={(event) => {
              event.preventDefault()
              handleNavClick('Home', event)
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                handleNavClick('Home', event)
              }
            }}
            style={{ background: 'transparent', border: 'none', padding: 0, cursor: 'pointer' }}
            aria-label="Go to top"
          >
            <img
              src={logoImage}
              alt="SystemMinds logo"
              className="h-12 object-contain transition-all duration-200"
              style={{ width: 'auto', marginLeft: '1px', marginTop: '2px' }}
            />
            <span
              className="inline-flex items-baseline gap-1 font-semibold tracking-tight"
              style={{
                fontFamily: '"Volkhov", "Georgia", serif',
                fontSize: '18px',
                color: isScrolled ? '#1d1d1f' : '#ffffff',
                transition: 'color 0.3s ease',
                flexWrap: 'nowrap',
                whiteSpace: 'nowrap'
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: '2px' }}>
                <span style={{ color: '#FF8A3D', fontSize: '20px', lineHeight: 1 }}>S</span>
                <span
                  style={{
                    color: isScrolled ? '#1d1d1f' : '#ffffff',
                    fontSize: '15px',
                    letterSpacing: '0.04em'
                  }}
                >
                  YSTEM
                </span>
              </span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'baseline',
                  gap: '2px'
                }}
              >
                <span style={{ color: '#FF8A3D', fontSize: '20px', lineHeight: 1 }}>M</span>
                <span
                  style={{
                    color: isScrolled ? '#1d1d1f' : '#ffffff',
                    fontSize: '15px',
                    letterSpacing: '0.04em'
                  }}
                >
                  INDS
                </span>
              </span>
            </span>
          </button>

          {/* Center: Desktop Menu */}
          <div className="hidden lg:flex items-center absolute left-1/2 top-1/2" style={{ gap: '24px', transform: 'translate(-50%, -38%)' }}>
            {menuItems.map((item, index) => (
              <a
                key={item}
                href="#"
                className="nav-link relative transition-all duration-300 ease-out group"
                style={{ 
                  fontFamily: '"Inter", "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 700,
                  fontSize: '12px',
                  letterSpacing: '0.05em',
                  color: isScrolled ? '#000000' : '#ffffff',
                  textDecoration: 'none',
                  display: 'inline-block',
                  textTransform: 'uppercase',
                  position: 'relative',
                  paddingBottom: '6px',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(-10px)',
                  transition: `all 0.6s ease-out ${index * 0.1}s`
                }}
                onClick={(event) => handleNavClick(item, event)}
              >
                <span className="transition-all duration-200 ease-out inline-block group-hover:scale-110 group-hover:tracking-wider">
                  {item}
                </span>
                {/* Animated underline */}
                <span 
                  className="absolute bottom-0 left-0 h-0.5 transition-all duration-200 ease-out group-hover:w-full"
                  style={{
                    width: '0%',
                    transformOrigin: 'left',
                    backgroundColor: isScrolled ? '#000000' : '#ffffff'
                  }}
                />
              </a>
            ))}
          </div>

          {/* Right: Social Media Button and Icons */}
          <div className="hidden lg:flex items-center gap-1 relative">
            {/* Social Media Icons with animation */}
            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/company/systemminds/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-all duration-200 ease-out hover:scale-110 rounded-full"
                style={{ 
                  filter: 'drop-shadow(0 0 0px transparent)',
                  opacity: showSocialMedia ? 1 : 0,
                  transform: showSocialMedia ? 'translateX(0)' : 'translateX(-20px)',
                  transition: showSocialMedia ? 'all 0.5s ease-in-out 0.1s' : 'all 0.5s ease-in-out 0s',
                  pointerEvents: showSocialMedia ? 'auto' : 'none'
                }}
                onMouseEnter={(e) => e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(10, 102, 194, 0.6))'}
                onMouseLeave={(e) => e.currentTarget.style.filter = 'drop-shadow(0 0 0px transparent)'}
              >
                <svg className="w-5 h-5" fill="#0A66C2" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-all duration-200 ease-out hover:scale-110 rounded-full"
                style={{ 
                  filter: 'drop-shadow(0 0 0px transparent)',
                  opacity: showSocialMedia ? 1 : 0,
                  transform: showSocialMedia ? 'translateX(0)' : 'translateX(-20px)',
                  transition: showSocialMedia ? 'all 0.5s ease-in-out 0.2s' : 'all 0.5s ease-in-out 0s',
                  pointerEvents: showSocialMedia ? 'auto' : 'none'
                }}
                onMouseEnter={(e) => e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(24, 119, 242, 0.6))'}
                onMouseLeave={(e) => e.currentTarget.style.filter = 'drop-shadow(0 0 0px transparent)'}
              >
                <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/systemminds.tech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-all duration-200 ease-out hover:scale-110 rounded-full"
                style={{ 
                  filter: 'drop-shadow(0 0 0px transparent)',
                  opacity: showSocialMedia ? 1 : 0,
                  transform: showSocialMedia ? 'translateX(0)' : 'translateX(-20px)',
                  transition: showSocialMedia ? 'all 0.5s ease-in-out 0.3s' : 'all 0.5s ease-in-out 0s',
                  pointerEvents: showSocialMedia ? 'auto' : 'none'
                }}
                onMouseEnter={(e) => e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(214, 36, 159, 0.6))'}
                onMouseLeave={(e) => e.currentTarget.style.filter = 'drop-shadow(0 0 0px transparent)'}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor: '#FD5949'}} />
                      <stop offset="50%" style={{stopColor: '#D6249F'}} />
                      <stop offset="100%" style={{stopColor: '#285AEB'}} />
                    </linearGradient>
                  </defs>
                  <path fill="url(#instagram-gradient)" d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a>
              <a 
                href="https://t.me" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-all duration-500 ease-in-out hover:scale-110 rounded-full"
                style={{ 
                  filter: 'drop-shadow(0 0 0px transparent)',
                  opacity: showSocialMedia ? 1 : 0,
                  transform: showSocialMedia ? 'translateX(0)' : 'translateX(-20px)',
                  transition: showSocialMedia ? 'all 0.5s ease-in-out 0.4s' : 'all 0.5s ease-in-out 0s',
                  pointerEvents: showSocialMedia ? 'auto' : 'none'
                }}
                onMouseEnter={(e) => e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(38, 165, 228, 0.6))'}
                onMouseLeave={(e) => e.currentTarget.style.filter = 'drop-shadow(0 0 0px transparent)'}
              >
                <svg className="w-5 h-5" fill="#26A5E4" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
            </div>
            
            {/* Toggle Button */}
            <div 
              className="relative"
              onMouseEnter={handleTooltipMouseEnter}
              onMouseLeave={handleTooltipMouseLeave}
            >
              <button
                onClick={() => {
                  setShowSocialMedia(!showSocialMedia)
                  setShowTooltip(false)
                }}
                className="transition-all duration-500 ease-in-out hover:scale-110"
                style={{
                  background: 'transparent',
                  border: 'none',
                  padding: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
                aria-label="Toggle social media"
              >
              <svg 
                className="w-5 h-5 transition-all duration-500"
                style={{ transform: showSocialMedia ? 'rotate(180deg)' : 'rotate(0deg)' }}
                fill="none" 
                stroke={isScrolled ? '#000000' : '#ffffff'}
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              </button>
              {/* Tooltip */}
              <div 
                className="absolute top-full right-0 mt-2 pointer-events-none transition-opacity duration-300"
                style={{
                  background: '#ffffff',
                  color: '#4b5563',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '10px',
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                  whiteSpace: 'nowrap',
                  fontFamily: '"Inter", "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                  opacity: showTooltip ? 1 : 0
                }}
              >
                Social Media
              </div>
            </div>
          </div>

          {/* Mobile Social Media and Menu */}
          <div className="lg:hidden flex items-center gap-2 relative">
            {/* Mobile Social Media Icons with animation */}
            <div className="flex items-center gap-2">
              <a 
                href="https://www.linkedin.com/company/systemminds/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-all duration-200 ease-out hover:scale-110"
                style={{
                  opacity: showSocialMedia ? 1 : 0,
                  transform: showSocialMedia ? 'translateX(0)' : 'translateX(-10px)',
                  transition: showSocialMedia ? 'all 0.4s ease-out 0.1s' : 'all 0.4s ease-out 0s',
                  pointerEvents: showSocialMedia ? 'auto' : 'none'
                }}
              >
                <svg className="w-4 h-4" fill="#0A66C2" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-all duration-200 ease-out hover:scale-110"
                style={{
                  opacity: showSocialMedia ? 1 : 0,
                  transform: showSocialMedia ? 'translateX(0)' : 'translateX(-10px)',
                  transition: showSocialMedia ? 'all 0.4s ease-out 0.2s' : 'all 0.4s ease-out 0s',
                  pointerEvents: showSocialMedia ? 'auto' : 'none'
                }}
              >
                <svg className="w-4 h-4" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/systemminds.tech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-all duration-200 ease-out hover:scale-110"
                style={{
                  opacity: showSocialMedia ? 1 : 0,
                  transform: showSocialMedia ? 'translateX(0)' : 'translateX(-10px)',
                  transition: showSocialMedia ? 'all 0.4s ease-out 0.3s' : 'all 0.4s ease-out 0s',
                  pointerEvents: showSocialMedia ? 'auto' : 'none'
                }}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="instagram-gradient-mobile" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor: '#FD5949'}} />
                      <stop offset="50%" style={{stopColor: '#D6249F'}} />
                      <stop offset="100%" style={{stopColor: '#285AEB'}} />
                    </linearGradient>
                  </defs>
                  <path fill="url(#instagram-gradient-mobile)" d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a>
              <a 
                href="https://t.me" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-all duration-200 ease-out hover:scale-110"
                style={{
                  opacity: showSocialMedia ? 1 : 0,
                  transform: showSocialMedia ? 'translateX(0)' : 'translateX(-10px)',
                  transition: showSocialMedia ? 'all 0.4s ease-out 0.4s' : 'all 0.4s ease-out 0s',
                  pointerEvents: showSocialMedia ? 'auto' : 'none'
                }}
              >
                <svg className="w-4 h-4" fill="#26A5E4" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
            </div>
            
            {/* Share Button */}
            <button
              onClick={() => setShowSocialMedia(!showSocialMedia)}
              className="transition-all duration-300 ease-out hover:scale-110"
              style={{
                background: 'transparent',
                border: 'none',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              aria-label="Toggle social media"
            >
              <svg 
                className="w-4 h-4 transition-transform duration-500"
                style={{ transform: showSocialMedia ? 'rotate(180deg)' : 'rotate(0deg)' }}
                fill="none" 
                stroke="#000000" 
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
            
            {/* Hamburger Menu Button */}
            <button
              className="transition-colors duration-300"
              style={{ color: isScrolled ? '#1d1d1f' : '#ffffff' }}
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
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            className="lg:hidden absolute right-3 top-full mt-2 bg-white rounded-lg shadow-lg border border-gray-100"
            style={{
              animation: 'slideIn 0.4s ease-out',
              minWidth: '140px',
              width: 'auto'
            }}
          >
            <style jsx="true">{`
              @keyframes slideIn {
                from {
                  opacity: 0;
                  transform: translateY(-10px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}</style>
            <div className="py-1 space-y-0">
              {menuItems.map((item, index) => (
                <a
                  key={item}
                  href="#"
                  className="block px-3 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-all duration-200"
                  style={{ 
                    fontFamily: '"Inter", "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontSize: '11px',
                    opacity: 0,
                    animation: `fadeIn 0.3s ease-out ${index * 0.05}s forwards`
                  }}
                  onClick={(event) => handleNavClick(item, event, true)}
                >
                  {item}
                </a>
              ))}
            </div>
            <style jsx="true">{`
              @keyframes fadeIn {
                from {
                  opacity: 0;
                  transform: translateX(-5px);
                }
                to {
                  opacity: 1;
                  transform: translateX(0);
                }
              }
            `}</style>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

