import React from 'react'
import { useNavigate } from 'react-router-dom'
import ContinuousWaves from './ContinuousWaves.jsx'
import { useLoading } from '../context/LoadingProvider.jsx'

function HeroSection() {
  const navigate = useNavigate()
  const { isLoading, showLoading } = useLoading()

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{
        minHeight: '100vh',
        backgroundColor: 'transparent',
        paddingTop: '64px',
        paddingBottom: '0',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <ContinuousWaves variant="hero" className="absolute inset-0" />
      <div className="relative z-10 w-full">
        <div className="hero-shell max-w-7xl mx-auto px-6 md:px-12 lg:px-12">
          <div className="hero-layout">
            {/* Left Column - Text */}
            <div className="hero-copy">
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

              <div className="hero-body" style={{ maxWidth: '560px' }}>
                <p 
                  style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '1.7',
                    color: 'rgba(255, 255, 255, 0.75)'
                  }}
                >
                  SystemMinds is a full-stack digital studio delivering robust products, future-ready platforms, and tailor-made enterprise solutions. We blend strategy, UI engineering, and cloud-native development to accelerate growth for ambitious brands.
                </p>
              </div>

              <div className="hero-actions">
                <button
                  className="transition-all duration-300 hover:shadow-lg"
                  disabled={isLoading}
                  style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 500,
                    fontSize: '16px',
                    padding: '14px 28px',
                    backgroundColor: '#F1A501',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '10px',
                    cursor: isLoading ? 'default' : 'pointer',
                    boxShadow: '0 15px 25px rgba(241, 165, 1, 0.15)',
                    opacity: isLoading ? 0.6 : 1,
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => {
                    if (isLoading) return
                    showLoading(2000, () => navigate('/about-company'))
                  }}
                  onMouseEnter={(e) => {
                    if (isLoading) return
                    e.target.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)'
                  }}
                >
                  Find out more
                </button>

                <div className="hero-play group">
                  <div 
                    className="transition-all duration-300"
                    style={{
                      width: '45px',
                      height: '45px',
                      backgroundColor: '#DF6951',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
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

            {/* Right Column - Placeholder for future visual */}
            <div className="hero-visual">
              <div className="hero-visual-placeholder" />
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .hero-shell {
          width: 100%;
          padding-top: 25px;
          padding-bottom: 72px;
        }
        .hero-layout {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          align-items: center;
        }
        .hero-copy {
          display: flex;
          flex-direction: column;
          gap: 1.6rem;
          width: 100%;
          align-items: flex-start;
          text-align: left;
        }
        .hero-body {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .hero-actions {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .hero-play {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
        }
        .hero-visual {
          display: none;
          width: 100%;
          justify-content: center;
          align-items: center;
        }
        .hero-visual-placeholder {
          width: 100%;
          height: 100%;
        }
        .hero-actions button:disabled {
          pointer-events: none;
        }
        .hero-loading-overlay {
          position: fixed;
          inset: 0;
          background: rgba(10, 10, 10, 0.55);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          animation: fadeInOverlay 0.35s ease forwards;
        }
        @keyframes fadeInOverlay {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes eyeGlance {
          0%, 15% {
            transform: translate(1.8px, -0.6px);
          }
          30% {
            transform: translate(-2.4px, 0.9px);
          }
          45% {
            transform: translate(2.2px, -0.2px);
          }
          60% {
            transform: translate(-2px, 0.7px);
          }
          75% {
            transform: translate(1.6px, -0.5px);
          }
          90% {
            transform: translate(-1.4px, 0.6px);
          }
          100% {
            transform: translate(1.8px, -0.6px);
          }
        }
        @media (min-width: 1024px) {
          .hero-layout {
            flex-direction: row;
            align-items: center;
            gap: 3.5rem;
          }
          .hero-copy {
            width: 50%;
            max-width: 560px;
          }
          .hero-visual {
            display: flex;
            width: 50%;
            min-height: 320px;
          }
        }
        @media (max-width: 1024px) {
          #hero {
            min-height: auto !important;
          }
          .hero-shell {
            padding-top: 52px !important;
            padding-bottom: 72px !important;
          }
          .hero-layout {
            align-items: center;
          }
          .hero-copy {
            align-items: center !important;
            text-align: center !important;
            max-width: 640px !important;
          }
          .hero-body {
            align-items: center;
          }
          .hero-body p {
            text-align: center;
          }
          .hero-actions {
            justify-content: center;
          }
        }
        @media (max-width: 820px) {
          .hero-shell {
            padding-left: 1.75rem !important;
            padding-right: 1.75rem !important;
            gap: 0;
          }
          .hero-actions {
            flex-wrap: wrap;
          }
        }
        @media (max-width: 768px) {
          .hero-shell {
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
            padding-top: 52px !important;
            padding-bottom: 56px !important;
          }
          .hero-copy h1 {
            font-size: 48px !important;
            line-height: 1.18 !important;
          }
          .hero-body p {
            max-width: 100% !important;
          }
        }
        @media (max-width: 640px) {
          .hero-copy h1 {
            font-size: 44px !important;
          }
          .hero-actions {
            flex-direction: column;
            align-items: stretch;
            gap: 18px;
          }
          .hero-play {
            justify-content: center;
          }
          .hero-play span {
            text-align: center;
          }
        }
        @media (max-width: 480px) {
          .hero-shell {
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
            padding-top: 44px !important;
            padding-bottom: 48px !important;
          }
          .hero-copy h1 {
            font-size: 38px !important;
          }
          .hero-body p {
            font-size: 14.5px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default HeroSection
