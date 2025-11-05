import React from 'react'
import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation.jsx'

function HeroSection() {
  const heroProducts = [
    {
      title: 'iPhone 17 Pro',
      tagline: 'All out Pro.',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=1920&h=1080&fit=crop&q=100',
      link: '#',
      bgColor: 'bg-black',
    },
    {
      title: 'iPhone Air',
      tagline: 'The thinnest iPhone ever. With the power of pro inside.',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1920&h=1080&fit=crop&q=100',
      link: '#',
      bgColor: 'bg-white',
      textColor: 'text-black',
    },
    {
      title: 'MacBook Pro 14"',
      tagline: 'Supercharged by M5.',
      image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=1920&h=1080&fit=crop&q=100',
      link: '#',
      bgColor: 'bg-black',
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
              minHeight: '692px',
              maxHeight: '100vh'
            }}
          >
            <div
              ref={parallaxRef}
              className="parallax-bg absolute inset-0"
              style={{
                backgroundImage: `url(${product.image})`,
                transform: `translate3d(0, ${parallaxOffset}px, 0) scale(1.1)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
            <div className={`relative z-10 flex flex-col items-center justify-center h-full px-4 text-center ${product.textColor || 'text-white'}`}>
              <h2 
                className="hero-title font-semibold tracking-tight"
                style={{ 
                  fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                  fontWeight: 600,
                  fontSize: '56px',
                  letterSpacing: '-0.005em',
                  lineHeight: '1.07143',
                  marginBottom: '6px'
                }}
              >
                {product.title}
              </h2>
              <p 
                className="hero-tagline font-light"
                style={{ 
                  fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                  fontWeight: 400,
                  fontSize: '21px',
                  lineHeight: '1.381',
                  marginTop: '6px',
                  marginBottom: '14px',
                  color: product.textColor === 'text-black' ? '#1d1d1f' : 'rgba(255, 255, 255, 0.8)'
                }}
              >
                {product.tagline}
              </p>
              <div className="flex gap-6" style={{ marginTop: '8px' }}>
                <a
                  href={product.link}
                  className="hero-link transition-colors underline decoration-1 underline-offset-2"
                  style={{ 
                    fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                    fontSize: '17px',
                    letterSpacing: '-0.022em',
                    color: '#0071e3',
                    textDecorationColor: '#0071e3'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#0077ed'}
                  onMouseLeave={(e) => e.target.style.color = '#0071e3'}
                >
                  Learn more
                </a>
                <a
                  href={product.link}
                  className="hero-link transition-colors underline decoration-1 underline-offset-2"
                  style={{ 
                    fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                    fontSize: '17px',
                    letterSpacing: '-0.022em',
                    color: '#0071e3',
                    textDecorationColor: '#0071e3'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#0077ed'}
                  onMouseLeave={(e) => e.target.style.color = '#0071e3'}
                >
                  Buy
                </a>
              </div>
            </div>
          </section>
        )
      })}
    </div>
  )
}

export default HeroSection
