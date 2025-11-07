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
        minHeight: '100vh',
        paddingTop: '100px',
        paddingBottom: '120px',
        overflow: 'hidden',
        scrollMarginTop: '90px'
      }}
    >
      {/* Plus Signs Pattern - Right Side */}
      <div className="absolute right-8 top-20 hidden lg:block">
        <div className="grid grid-cols-3 gap-8">
          <span style={{ color: '#E8D5FF', fontSize: '24px', opacity: 0.3 }}>+</span>
          <span style={{ color: '#E8D5FF', fontSize: '24px', opacity: 0.3 }}>+</span>
          <span style={{ color: '#7C3AED', fontSize: '24px', opacity: 0.5 }}>+</span>
          <span style={{ color: '#E8D5FF', fontSize: '24px', opacity: 0.3 }}>+</span>
          <span style={{ color: '#F97316', fontSize: '24px', opacity: 0.6 }}>+</span>
          <span style={{ color: '#E8D5FF', fontSize: '24px', opacity: 0.3 }}>+</span>
          <span style={{ color: '#E8D5FF', fontSize: '24px', opacity: 0.3 }}>+</span>
          <span style={{ color: '#E8D5FF', fontSize: '24px', opacity: 0.3 }}>+</span>
          <span style={{ color: '#E8D5FF', fontSize: '24px', opacity: 0.3 }}>+</span>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-start px-8 md:px-16 lg:px-24 w-full h-full text-center" style={{ marginTop: '-80px' }}>
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="uppercase mb-3"
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 600,
              fontSize: '14px',
              letterSpacing: '0.1em',
              color: 'rgba(255, 255, 255, 0.6)'
            }}
          >
            CATEGORY
          </p>
          <h2
            style={{
              fontFamily: '"Volkhov", "Georgia", serif',
              fontWeight: 700,
              fontSize: '42px',
              lineHeight: '1.3',
              letterSpacing: '-0.01em',
              color: '#FFFFFF'
            }}
          >
            We Offer Best Services
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  minHeight: '280px'
                }}
              >
                {/* Icon with background */}
                <div
                  className="mb-6 inline-flex items-center justify-center"
                  style={{
                    width: '80px',
                    height: '80px',
                    background: 'rgba(255, 243, 224, 0.15)',
                    borderRadius: '15px'
                  }}
                >
                  <span style={{ fontSize: '40px' }}>{service.icon}</span>
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
                    fontSize: '14px',
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
    </section>
  )
}

export default WorkWeDo
