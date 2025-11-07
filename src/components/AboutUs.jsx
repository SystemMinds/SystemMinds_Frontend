import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation.jsx'

function AboutUs() {
  const [aboutRef] = useScrollAnimation({ threshold: 0.1, once: true })

  return (
    <section
      id="about"
      ref={aboutRef}
      className="relative text-white"
      style={{ 
        backgroundColor: 'transparent',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        paddingTop: '80px',
        paddingBottom: '100px',
        overflow: 'hidden',
        scrollMarginTop: '90px'
      }}
    >
      <div className="relative z-10 flex flex-col items-start justify-start px-8 md:px-16 lg:px-24 w-full h-full" style={{ paddingTop: '0px' }}>
        <h2 
          className="hero-title font-semibold tracking-tight"
          style={{ 
            fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
            fontWeight: 600,
            fontSize: '56px',
            letterSpacing: '-0.005em',
            lineHeight: '1.07143',
            marginBottom: '12px',
            color: '#ffffff'
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
            color: '#ffffff'
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
            color: 'rgba(255, 255, 255, 0.7)'
          }}
        >
          At SystemMinds, we are dedicated to delivering exceptional solutions that drive innovation and growth. Our team combines expertise, creativity, and cutting-edge technology to help businesses achieve their goals.
        </p>
        <div className="flex gap-3">
          <a
            href="#services"
            className="hero-link transition-all duration-200 inline-block px-5 py-2 rounded-full"
            style={{ 
              fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '1.5',
              backgroundColor: '#006EDB',
              color: '#ffffff',
              textDecoration: 'none',
              border: 'none'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#0056b3';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#006EDB';
            }}
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="hero-link transition-all duration-200 inline-block px-5 py-2 rounded-full"
            style={{ 
              fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '1.5',
              backgroundColor: 'transparent',
              color: '#006EDB',
              textDecoration: 'none',
              border: '2px solid #006EDB'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#006EDB';
              e.target.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#006EDB';
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

