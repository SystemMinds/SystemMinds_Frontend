import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation.jsx'
import logoImage from '../assets/images/logo.png'

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
        paddingTop: '56px',
        paddingBottom: '96px',
        overflow: 'hidden',
        scrollMarginTop: '90px'
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[32%_68%] items-center lg:items-start px-6 md:px-12 lg:px-12 w-full gap-12 lg:gap-14 about-inner" style={{ paddingTop: '0px' }}>
        <div className="relative flex justify-center lg:justify-start items-center order-2 lg:order-1 about-illustration" style={{ width: '100%', paddingTop: '56px', position: 'relative', zIndex: 1, marginTop: '0' }}>
          <img
            src={logoImage}
            alt="SystemMinds logo"
            className="about-bot"
          />
        </div>

        <div className="flex flex-col items-start justify-start text-left order-1 lg:order-2 about-content" style={{ width: '100%', gap: '18px', paddingRight: '48px', position: 'relative', zIndex: 2, marginTop: '0' }}>
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
            About{' '}
            <span className="relative inline-block">
              Us
              <svg
                className="absolute"
                style={{ bottom: '-6px', left: 0, width: '100%', height: '12px' }}
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
            </span>
          </h2>
        <p 
          className="hero-tagline font-light"
            style={{ 
              fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
            fontWeight: 300,
            fontSize: '19px',
            lineHeight: '1.6',
            marginTop: '8px',
            marginBottom: '20px',
            color: 'rgba(255, 255, 255, 0.9)'
            }}
          >
            Transform Your Ideas Into Reality. Professional Services & Innovative Products.
          </p>
          <p 
            className="about-description font-normal"
            style={{ 
              fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: 400,
              fontSize: '17px',
              lineHeight: '1.5',
              color: 'rgba(255, 255, 255, 0.7)'
            }}
          >
          At SystemMinds, we build digital products that help businesses grow. Our designers, engineers, and cloud specialists modernise old systems, craft beautiful customer journeys, and keep everything running smoothly. From the first workshop to launch and support, we stay beside you so ideas go live quickly and scale with confidence.
          </p>
          <div className="flex gap-3">
            <a
              href="#services"
              className="hero-link transition-all duration-200 inline-block px-5 py-2 rounded-full"
              style={{ 
                fontFamily: '"Poppins", sans-serif',
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '1.5',
                backgroundColor: '#F1A501',
                color: '#ffffff',
                textDecoration: 'none',
                border: 'none',
                boxShadow: '0 15px 25px rgba(241, 165, 1, 0.15)',
                borderRadius: '10px',
                padding: '14px 28px'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#d48e01';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#F1A501';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="hero-link transition-all duration-200 inline-block px-5 py-2 rounded-full"
              style={{ 
                fontFamily: '"Poppins", sans-serif',
                fontSize: '15px',
                fontWeight: 500,
                paddingTop: '12px',
                lineHeight: '1.5',
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                textDecoration: 'none',
              border: '2px solid rgba(255,255,255,0.35)',
                borderRadius: '9999px'
              }}
              onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(255,255,255,0.14)';
              e.target.style.borderColor = 'rgba(255,255,255,0.55)';
              e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
              e.target.style.borderColor = 'rgba(255,255,255,0.35)';
              e.target.style.transform = 'translateY(0)';
              }}
            >
              Contact Us
            </a>
          </div>
        </div>

        
      </div>
      <style jsx="true">{`
        .about-inner {
          width: 100%;
        }
        .about-content {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .about-illustration {
          max-width: 480px;
        }
        .about-bot {
          max-width: 360px;
          width: 100%;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 24px 45px rgba(0, 0, 0, 0.35));
          animation: floatBot 8s ease-in-out infinite;
        }
        @media (max-width: 1200px) {
          #about {
            min-height: auto !important;
          }
          .about-inner {
            gap: 3rem;
          }
        }
        @media (max-width: 1024px) {
          #about {
            padding-top: 48px !important;
            padding-bottom: 80px !important;
          }
          .about-inner {
            padding-left: 2rem !important;
            padding-right: 2rem !important;
            gap: 2.75rem !important;
          }
          .about-illustration {
            order: 2 !important;
            justify-content: center !important;
            display: flex !important;
            margin: 0 auto !important;
          }
          .about-illustration .about-bot {
            max-width: 320px !important;
          }
          .about-content {
            max-width: 640px !important;
            margin: 0 auto !important;
            align-items: center !important;
            text-align: center !important;
            padding-right: 0 !important;
          }
          .about-content p {
            text-align: center !important;
          }
        }
        @media (max-width: 820px) {
          .about-inner {
            padding-left: 1.75rem !important;
            padding-right: 1.75rem !important;
            gap: 2.5rem !important;
          }
          .about-illustration {
            order: 2 !important;
            justify-content: center !important;
            margin: 0 auto !important;
          }
        }
        @media (max-width: 768px) {
          #about {
            padding-top: 32px !important;
            padding-bottom: 48px !important;
          }
          .about-inner {
            gap: 2rem !important;
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
          }
          .about-content {
            text-align: center !important;
            align-items: center !important;
            margin-top: -14px !important;
          }
          .about-content p {
            text-align: center !important;
          }
          .about-bot {
            max-width: 260px !important;
            margin-top: -28px !important;
            animation: floatBot 6s ease-in-out infinite;
          }
        }
        @media (max-width: 540px) {
          .about-content h2 {
            font-size: 46px !important;
            line-height: 1.15 !important;
          }
          .about-content .hero-tagline {
            font-size: 18px !important;
          }
          .about-bot {
            max-width: 220px !important;
            margin-top: -20px !important;
          }
        }
        @media (max-width: 480px) {
          .about-inner {
            gap: 1.5rem !important;
          }
          .about-bot {
            max-width: 280px !important;
          }
        }
        @keyframes floatBot {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
      `}</style>
    </section>
  )
}

export default AboutUs

