import React from 'react'
import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation.jsx'
import heroImage from '../assets/images/hero.jpg'

function HeroSection() {
  const heroProducts = [
    {
      title: 'SystemMinds',
      tagline: 'Transform Your Ideas Into Reality. Professional Services & Innovative Products.',
      image: heroImage,
      link: '#',
      bgColor: 'bg-black',
      ctaPrimary: 'View Services',
      ctaSecondary: 'Get Started',
    },
  ]

  return (
    <div>
      {heroProducts.map((product, index) => {
        const [heroRef, isVisible] = useScrollAnimation({ threshold: 0.1, once: true })
        const [parallaxRef, parallaxOffset] = useParallax(0.2)
        
        return (
          <section
            key={index}
            ref={heroRef}
            className={`relative ${product.bgColor || 'bg-black'} text-white overflow-hidden`}
            style={{ 
              height: '100vh',
              minHeight: '100vh',
              maxHeight: '100vh',
              marginBottom: 0,
              overflow: 'hidden'
            }}
          >
            <div
              ref={parallaxRef}
              className="parallax-bg absolute inset-0"
              style={{
                backgroundImage: `url(${product.image})`,
                transform: `translate3d(0, ${parallaxOffset + 20}px, 0) scale(1.1)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
            <div className={`relative z-10 flex flex-col items-center justify-start h-full px-4 text-center ${product.textColor || 'text-white'}`} style={{ paddingTop: '120px' }}>
              <h2 
                className="hero-title font-semibold tracking-tight"
                style={{ 
                  fontFamily: '"Poppins", "Montserrat", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
                  fontWeight: 700,
                  fontSize: '56px',
                  letterSpacing: '-0.02em',
                  lineHeight: '1.1',
                  marginBottom: '6px'
                }}
              >
                {product.title}
              </h2>
              <p 
                className="hero-tagline font-light"
                style={{ 
                  fontFamily: '"Inter", "Roboto", "Open Sans", -apple-system, BlinkMacSystemFont, sans-serif',
                  fontWeight: 300,
                  fontSize: '21px',
                  lineHeight: '1.5',
                  marginTop: '6px',
                  marginBottom: '24px',
                  letterSpacing: '0.01em',
                  color: product.textColor === 'text-black' ? '#1d1d1f' : 'rgba(255, 255, 255, 0.9)'
                }}
              >
                {product.tagline}
              </p>
              <a
                href="#contact"
                className="hero-link transition-all duration-200 inline-block px-6 py-2.5 rounded-full"
                style={{ 
                  fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontSize: '17px',
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                  backgroundColor: 'transparent',
                  color: '#006EDB',
                  textDecoration: 'none',
                  border: '1px solid #006EDB'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#006EDB';
                  e.target.style.color = '#ffffff';
                  e.target.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#006EDB';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                Get Started
              </a>
            </div>
          </section>
        )
      })}
    </div>
  )
}

export default HeroSection
