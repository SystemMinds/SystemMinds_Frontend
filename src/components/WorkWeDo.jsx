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
        paddingTop: '84px',
        paddingBottom: '96px',
        overflow: 'hidden',
        scrollMarginTop: '90px'
      }}
    >
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
