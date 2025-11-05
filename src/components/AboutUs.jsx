import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation.jsx'

function AboutUs() {
  const [aboutRef] = useScrollAnimation({ threshold: 0.1, once: true })

  return (
    <section
      id="about"
      ref={aboutRef}
      className="relative bg-white text-black overflow-hidden"
      style={{ 
        paddingTop: '80px',
        paddingBottom: '80px'
      }}
    >
      <div className="relative z-10 flex flex-col items-start justify-center px-8 md:px-16 lg:px-24 py-12">
        <h2 
          className="hero-title font-semibold tracking-tight"
          style={{ 
            fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
            fontWeight: 600,
            fontSize: '56px',
            letterSpacing: '-0.005em',
            lineHeight: '1.07143',
            marginBottom: '12px',
            color: '#1d1d1f'
          }}
        >
          About Us
        </h2>
        <p 
          className="hero-tagline font-light max-w-2xl"
          style={{ 
            fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
            fontWeight: 400,
            fontSize: '21px',
            lineHeight: '1.381',
            marginTop: '6px',
            marginBottom: '24px',
            color: '#1d1d1f'
          }}
        >
          Transform Your Ideas Into Reality. Professional Services & Innovative Products.
        </p>
        <p 
          className="about-description font-normal max-w-2xl"
          style={{ 
            fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
            fontWeight: 400,
            fontSize: '17px',
            lineHeight: '1.5',
            marginBottom: '32px',
            color: '#6e6e73'
          }}
        >
          At SystemMinds, we are dedicated to delivering exceptional solutions that drive innovation and growth. Our team combines expertise, creativity, and cutting-edge technology to help businesses achieve their goals.
        </p>
        <div className="flex gap-6">
          <a
            href="#services"
            className="hero-link transition-all duration-200 inline-block px-6 py-2.5 rounded-full"
            style={{ 
              fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontSize: '17px',
              fontWeight: 500,
              letterSpacing: '-0.01em',
              backgroundColor: '#006EDB',
              color: '#ffffff',
              textDecoration: 'none',
              border: 'none'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#0056b3';
              e.target.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#006EDB';
              e.target.style.transform = 'scale(1)';
            }}
          >
            Learn More
          </a>
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
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutUs

