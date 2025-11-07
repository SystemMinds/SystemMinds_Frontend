import React from 'react'
import heroImage from '../assets/images/hero.jpg'
import ContinuousWaves from './ContinuousWaves.jsx'

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', minHeight: '600px', backgroundColor: 'transparent', paddingTop: '56px', paddingBottom: '0' }}
    >
      <ContinuousWaves variant="hero" className="absolute inset-0" />
      {/* Left Side - Text Content */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="text-left space-y-6">
              {/* Small Heading */}
              <h3 
                className="uppercase"
                style={{
                  fontFamily: '"Poppins", "Montserrat", sans-serif',
                  fontWeight: 700,
                  fontSize: '14px',
                  letterSpacing: '0.15em',
                  color: '#DF6951'
                }}
              >
                TRANSFORM YOUR IDEAS INTO REALITY
              </h3>

              {/* Main Heading with decorative dash */}
              <h1 
                className="relative"
                style={{
                  fontFamily: '"Volkhov", "Georgia", serif',
                  fontWeight: 700,
                  fontSize: '52px',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                  color: '#FFFFFF'
                }}
              >
                Professional <span className="relative inline-block">Services
                  <svg 
                    className="absolute" 
                    style={{ bottom: '-8px', left: '0', width: '100%', height: '10px' }}
                    viewBox="0 0 350 12"
                    fill="none"
                  >
                    <path 
                      d="M2 7C43.8 3.3 174.5 -1.5 348 7"
                      stroke="#DF6951" 
                      strokeWidth="3" 
                      strokeLinecap="round"
                    />
                  </svg>
                </span> &amp; Innovative Products
              </h1>

              {/* Paragraph */}
              <p 
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '1.7',
                  color: 'rgba(255, 255, 255, 0.7)',
                  maxWidth: '480px'
                }}
              >
                Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
              </p>

              {/* Buttons */}
              <div className="flex items-center gap-6">
                {/* Find out more button */}
                <button
                  className="transition-all duration-300 hover:shadow-lg"
                  style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 500,
                    fontSize: '16px',
                    padding: '14px 28px',
                    backgroundColor: '#F1A501',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    boxShadow: '0 15px 25px rgba(241, 165, 1, 0.15)'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  Find out more
                </button>

                {/* Play Demo button */}
                <div className="flex items-center gap-3 cursor-pointer group">
                  <div 
                    className="flex items-center justify-center transition-all duration-300"
                    style={{
                      width: '45px',
                      height: '45px',
                      backgroundColor: '#DF6951',
                      borderRadius: '50%',
                      boxShadow: '0 12px 24px rgba(223, 105, 81, 0.3)'
                    }}
                  >
                    <svg 
                      width="14" 
                      height="18" 
                      viewBox="0 0 16 20" 
                      fill="none"
                    >
                      <path 
                        d="M15 8.26795C16.3333 9.03775 16.3333 10.9622 15 11.7321L3 18.6603C1.66667 19.4301 1.01267e-06 18.4679 1.07997e-06 16.9282L1.68565e-06 3.0718C1.75295e-06 1.53213 1.66667 0.569922 3 1.33975L15 8.26795Z" 
                        fill="white"
                      />
                    </svg>
                  </div>
                  <span 
                    className="transition-colors duration-300 group-hover:text-white"
                    style={{
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: 500,
                      fontSize: '15px',
                      color: 'rgba(255, 255, 255, 0.7)'
                    }}
                  >
                    Play Demo
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Image (Empty for now, will be styled with CSS) */}
            <div className="relative hidden lg:block">
              {/* This space is for the image section */}
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default HeroSection
