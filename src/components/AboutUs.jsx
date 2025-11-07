import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation.jsx'
import botIllustration from '../assets/images/bot-removebg-preview.png'

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
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[30%_70%] items-center lg:items-start px-8 md:px-16 lg:px-12 w-full gap-12 lg:gap-16 about-inner" style={{ paddingTop: '0px' }}>
        <div className="relative flex justify-center lg:justify-start items-center order-2 lg:order-1 about-illustration" style={{ width: '100%' }}>
          <img
            src={botIllustration}
            alt="SystemMinds assistant illustration"
            className="about-bot"
          />
        </div>

        <div className="flex flex-col items-start justify-start text-left order-1 lg:order-2 about-content" style={{ width: '100%', maxWidth: '560px', gap: '18px' }}>
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
        @media (max-width: 1024px) {
          #about {
            padding-bottom: 80px !important;
          }
        }

        @media (max-width: 768px) {
          #about {
            min-height: auto !important;
            padding-top: 48px !important;
            padding-bottom: 64px !important;
          }

          .about-inner {
            padding-left: 20px !important;
            padding-right: 20px !important;
            gap: 28px !important;
          }

          .about-content {
            padding-left: 0 !important;
            text-align: center !important;
            align-items: center !important;
          }

          .about-content p {
            text-align: center !important;
          }

          .about-bot {
            max-width: 340px !important;
            animation: floatBot 6s ease-in-out infinite;
          }
        }

        @media (max-width: 480px) {
          .about-inner {
            gap: 20px !important;
          }

          .about-bot {
            max-width: 260px !important;
          }
        }

        .about-bot {
          max-width: 460px;
          width: 100%;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 24px 45px rgba(0, 0, 0, 0.35));
          animation: floatBot 8s ease-in-out infinite;
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

