import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation.jsx'

function WorkWeDo() {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.2, once: true })

  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Building responsive and scalable web applications tailored to your business needs.'
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Creating innovative mobile solutions for iOS and Android platforms.',
      hasDecor: true
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Implementing robust cloud infrastructure and services for seamless operations.'
    },
    {
      icon: '⚙️',
      title: 'API Integration',
      description: 'Connecting systems through efficient and secure API development.'
    }
  ]

  return (
    <section
      id="work-we-do"
      ref={sectionRef}
      className="relative"
      style={{
        backgroundColor: 'transparent',
        minHeight: '600px',
        paddingTop: '18px',
        paddingBottom: '96px',
        overflow: 'hidden',
        scrollMarginTop: '40px'
      }}
    >
      {/* Background Star/Glow */}
      <div
        className="absolute right-0 top-0 pointer-events-none"
        style={{ zIndex: 0, width: '360px', height: '320px', transform: 'translate(80px, -110px)' }}
      >
        <svg
          width="360"
          height="320"
          viewBox="0 0 360 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: 0.45 }}
        >
          <defs>
            <radialGradient id="services-star-spark" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F1A501" stopOpacity="0.45" />
              <stop offset="75%" stopColor="#DF6951" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#0A0A0A" stopOpacity="0" />
            </radialGradient>
          </defs>
          <g stroke="rgba(255, 243, 224, 0.55)" strokeWidth="1.2" strokeLinecap="round">
            <g transform="translate(40 40)">
              <line x1="16" y1="0" x2="16" y2="32" />
              <line x1="0" y1="16" x2="32" y2="16" />
            </g>
            <g transform="translate(120 20) scale(0.75)">
              <line x1="16" y1="0" x2="16" y2="32" />
              <line x1="0" y1="16" x2="32" y2="16" />
            </g>
            <g transform="translate(210 60) scale(0.6)">
              <line x1="16" y1="0" x2="16" y2="32" />
              <line x1="0" y1="16" x2="32" y2="16" />
            </g>
            <g transform="translate(280 30) scale(0.8)">
              <line x1="16" y1="0" x2="16" y2="32" />
              <line x1="0" y1="16" x2="32" y2="16" />
            </g>
            <g transform="translate(240 140) scale(0.65)">
              <line x1="16" y1="0" x2="16" y2="32" />
              <line x1="0" y1="16" x2="32" y2="16" />
            </g>
            <g transform="translate(310 180) scale(0.5)">
              <line x1="16" y1="0" x2="16" y2="32" />
              <line x1="0" y1="16" x2="32" y2="16" />
            </g>
          </g>
          <g fill="url(#services-star-spark)">
            <circle cx="120" cy="50" r="14" />
            <circle cx="220" cy="90" r="18" />
            <circle cx="300" cy="60" r="16" />
            <circle cx="260" cy="180" r="12" />
            <circle cx="320" cy="150" r="10" />
            <circle cx="290" cy="230" r="13" />
          </g>
          <g fill="rgba(255, 255, 255, 0.6)">
            <circle cx="180" cy="40" r="1.5" />
            <circle cx="150" cy="120" r="1.5" />
            <circle cx="260" cy="220" r="1.5" />
            <circle cx="230" cy="260" r="1.5" />
            <circle cx="310" cy="210" r="1.5" />
            <circle cx="330" cy="120" r="1.5" />
          </g>
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto flex flex-col items-center justify-start px-8 md:px-16 lg:px-12 w-full h-full text-center services-wrapper" style={{ marginTop: '0' }}>
        {/* Header */}
        <div className="text-center mb-16" style={{ position: 'relative', zIndex: 2 }}>
          <h2
            className="mb-3 services-title"
            style={{
              fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: 700,
              fontSize: '64px',
              letterSpacing: '-0.005em',
              lineHeight: '1.08',
              color: '#FFFFFF',
              textTransform: 'none'
            }}
          >
            Services
          </h2>
          <p
            className="services-subtitle"
            style={{
              fontFamily: '"Volkhov", "Georgia", serif',
              fontWeight: 500,
              fontSize: '26px',
              letterSpacing: '-0.01em',
              lineHeight: '1.35',
              color: 'rgba(255, 255, 255, 0.88)',
              marginBottom: '8px'
            }}
          >
            We Offer Best{' '}
            <span className="relative inline-block">
              Services
              <svg
                className="absolute"
                style={{ bottom: '-8px', left: 0, width: '100%', height: '12px' }}
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
          </p>
        </div>

        {/* Service Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          style={{ position: 'relative', zIndex: 2 }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group transition-all duration-300"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s ease-out ${index * 0.15}s`
              }}
            >
              {/* Decorative shape for second card */}
              {service.hasDecor && (
                <div
                  className="absolute -bottom-8 -left-8 z-0"
                  style={{
                    width: '120px',
                    height: '120px',
                    background: '#DF6951',
                    borderRadius: '25px 0px 15px 5px',
                    opacity: 0.9,
                    transform: 'rotate(-10deg)'
                  }}
                />
              )}

              {/* Card */}
              <div
                className="relative bg-white/5 backdrop-blur-sm rounded-3xl transition-all duration-300 hover:bg-white/8 hover:shadow-2xl hover:-translate-y-1"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  minHeight: '220px',
                  padding: '24px'
                }}
              >
                {/* Icon with background */}
                <div
                  className="mb-6 inline-flex items-center justify-center"
                  style={{
                    width: '64px',
                    height: '64px',
                    background: 'rgba(255, 243, 224, 0.12)',
                    borderRadius: '14px'
                  }}
                >
                  <span style={{ fontSize: '32px' }}>{service.icon}</span>
                </div>

                {/* Title */}
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 600,
                    fontSize: '18px',
                    lineHeight: '1.4',
                    color: '#FFFFFF'
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 400,
                    fontSize: '13px',
                    lineHeight: '1.7',
                    color: 'rgba(255, 255, 255, 0.6)'
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx="true">{`
        @media (max-width: 1024px) {
          #work-we-do {
            padding-top: 52px !important;
            padding-bottom: 64px !important;
          }
          #work-we-do .services-title {
            font-size: 52px !important;
          }
          #work-we-do .services-subtitle {
            font-size: 24px !important;
          }
        }
        @media (max-width: 768px) {
          #work-we-do {
            padding-top: 40px !important;
            padding-bottom: 52px !important;
          }
          #work-we-do .w-full {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          #work-we-do .services-title {
            font-size: 42px !important;
          }
          #work-we-do .services-subtitle {
            font-size: 21px !important;
          }
          #work-we-do .grid {
            gap: 18px !important;
          }
          #work-we-do .grid > div .relative {
            min-height: 200px !important;
            padding: 18px !important;
          }
          #work-we-do .grid > div .relative div {
            width: 54px !important;
            height: 54px !important;
          }
          #work-we-do .grid > div .relative div span {
            font-size: 26px !important;
          }
        }
        @media (max-width: 600px) {
          #work-we-do .grid {
            grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
            gap: 16px !important;
          }
          #work-we-do .grid > div .relative {
            min-height: 185px !important;
            padding: 16px !important;
          }
          #work-we-do .grid > div .relative div {
            width: 52px !important;
            height: 52px !important;
          }
          #work-we-do .grid > div .relative div span {
            font-size: 24px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default WorkWeDo
