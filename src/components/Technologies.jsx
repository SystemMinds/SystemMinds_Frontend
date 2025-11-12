import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation.jsx'

function Technologies() {
  const [sectionRef] = useScrollAnimation({ threshold: 0.2, once: true })

  const technologies = [
    'HTML',
    'CSS',
    'JavaScript',
    'React.js',
    'React Native',
    'Bootstrap',
    'Tailwind CSS',
    'Java',
    'Python',
    'Java Servlet',
    'Spring IOC',
    'Spring MVC',
    'Spring Boot',
    'Microservices',
    'Hibernate',
    'SQL',
    'MySQL',
    'MongoDB',
    'PostgreSQL',
    'Spring Security',
    'Spring Batch'
  ]

  return (
    <section
      id="technologies"
      ref={sectionRef}
      className="relative text-white overflow-hidden"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '8px',
        paddingBottom: '72px',
        backgroundColor: '#0A0A0A',
        scrollMarginTop: '32px'
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-12 h-full flex flex-col">
        <div className="w-full flex flex-col items-center text-center mb-10">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold"
            style={{
              fontFamily: '"Volkhov", "Georgia", serif',
              lineHeight: '1.2',
              letterSpacing: '-0.02em',
              marginBottom: '12px',
              color: '#ffffff'
            }}
          >
            Technologies
          </h2>
          <p
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: '1.5',
              marginTop: '8px',
              color: 'rgba(255, 255, 255, 0.8)'
            }}
          >
            What we implement
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12 technologies-body">
          {/* Left Side - Content */}
          <div
            className="flex flex-col justify-start flex-1 technologies-copy"
            style={{ position: 'relative', zIndex: 2, maxWidth: '560px', width: '100%', margin: '0 auto', textAlign: 'left' }}
          >
            <p
              className="hero-tagline font-light tech-description"
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: '1.5',
              marginTop: '8px',
              marginBottom: '16px',
              color: 'rgba(255, 255, 255, 0.8)',
              marginLeft: 'auto',
              marginRight: 'auto',
              textAlign: 'inherit'
            }}
            >
              We transform your ideas into powerful digital solutions that drive growth and innovation.
            </p>

            <p
              className="about-description font-normal tech-description"
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '1.6',
              marginBottom: '20px',
              color: 'rgba(255, 255, 255, 0.85)',
              marginLeft: 'auto',
              marginRight: 'auto',
              textAlign: 'inherit'
            }}
            >
              Our team combines expertise, creativity, and cutting-edge technology to transform your vision into reality. We leverage modern frameworks like React.js and React Native for dynamic interfaces, Spring Boot and Java for robust backend systems, Python for automation, and databases including MySQL, PostgreSQL, and MongoDB to deliver optimal solutions for every project.
            </p>

            {/* Technologies Section - Marquee */}
            <div
              className="overflow-hidden w-full max-w-2xl relative"
              style={{
                marginTop: '4px',
                whiteSpace: 'nowrap',
                paddingTop: '12px',
                paddingBottom: '12px'
              }}
            >
              {/* Left fade gradient */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: '50px',
                  background: 'linear-gradient(to right, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0.1) 70%, rgba(0, 0, 0, 0) 100%)',
                  zIndex: 10,
                  pointerEvents: 'none'
                }}
              />

              {/* Right fade gradient */}
              <div
                style={{
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  bottom: 0,
                  width: '50px',
                  background: 'linear-gradient(to left, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0.1) 70%, rgba(0, 0, 0, 0) 100%)',
                  zIndex: 10,
                  pointerEvents: 'none'
                }}
              />

              <div className="marquee-container inline-flex gap-3">
                {[technologies, technologies].map((list, listIndex) => (
                  list.map((tech, index) => (
                    <span
                      key={`${listIndex}-${tech}-${index}`}
                      className="lang-tag px-5 rounded-full bg-white/10 backdrop-blur-sm border-2 border-transparent transition-all duration-300 cursor-pointer"
                      style={{
                        fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '1.5',
                        color: '#ffffff',
                        display: 'inline-block',
                        boxSizing: 'border-box',
                        margin: '0 4px',
                        flexShrink: 0,
                        paddingTop: '0.75rem',
                        paddingBottom: '0.75rem'
                      }}
                    >
                      {tech}
                    </span>
                  ))
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-8 flex-wrap technologies-cta">
              <a
                href="#projects"
                className="hero-link transition-all duration-300 inline-flex items-center justify-center gap-2 rounded-2xl"
                style={{
                  fontFamily: '"Poppins", "Inter", sans-serif',
                  fontSize: '15px',
                  fontWeight: 500,
                  padding: '12px 26px',
                  background: 'linear-gradient(135deg, #F1A501 0%, #DF6951 100%)',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  border: 'none',
                  boxShadow: '0 18px 40px rgba(223, 105, 81, 0.25)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)'
                  e.target.style.boxShadow = '0 22px 50px rgba(223, 105, 81, 0.35)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = '0 18px 40px rgba(223, 105, 81, 0.25)'
                }}
              >
                View Project
              </a>

              <a
                href="#clients"
                className="hero-link transition-all duration-300 inline-flex items-center justify-center gap-2 rounded-2xl"
                style={{
                  fontFamily: '"Poppins", "Inter", sans-serif',
                  fontSize: '15px',
                  fontWeight: 500,
                  padding: '12px 26px',
                  backgroundColor: 'transparent',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  border: '2px solid rgba(255, 255, 255, 0.35)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.14)'
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.55)'
                  e.target.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent'
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.35)'
                  e.target.style.transform = 'translateY(0)'
                }}
              >
                Our Clients
              </a>
            </div>
          </div>

          {/* Right Side - SVG Illustration */}
          <div
            className="relative flex items-center justify-center flex-1 w-full md:w-auto technologies-visual"
            style={{
              height: '100%',
              maxHeight: 'calc(100vh - 100px)',
              minHeight: '280px',
              alignSelf: 'center',
              marginTop: '-40px',
              position: 'relative',
              zIndex: 1
            }}
          >
            <svg
            width="460"
            height="460"
            viewBox="0 0 400 400"
            className="creative-svg"
            style={{ maxWidth: '100%', height: 'auto' }}
          >
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0071e3" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#00a8ff" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#61DAFB" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0071e3" stopOpacity="0.6" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <circle
              cx="200"
              cy="200"
              r="120"
              fill="none"
              stroke="url(#gradient1)"
              strokeWidth="3"
              opacity="0.6"
              className="pulse-circle"
            />

            <circle
              cx="200"
              cy="200"
              r="80"
              fill="none"
              stroke="url(#gradient2)"
              strokeWidth="2"
              opacity="0.5"
              className="rotate-slow"
            />

            <circle
              cx="200"
              cy="200"
              r="50"
              fill="url(#gradient1)"
              opacity="0.3"
              className="pulse-inner"
            />

            <polygon
              points="200,100 250,150 200,200 150,150"
              fill="none"
              stroke="#0071e3"
              strokeWidth="2"
              opacity="0.7"
              className="rotate-slow"
            />

            <polygon
              points="200,200 280,200 200,280 120,200"
              fill="none"
              stroke="#61DAFB"
              strokeWidth="2"
              opacity="0.7"
              className="rotate-fast"
            />

            <line
              x1="200"
              y1="80"
              x2="200"
              y2="120"
              stroke="#0071e3"
              strokeWidth="2"
              opacity="0.6"
            />

            <line
              x1="200"
              y1="280"
              x2="200"
              y2="320"
              stroke="#0071e3"
              strokeWidth="2"
              opacity="0.6"
            />

            <line
              x1="80"
              y1="200"
              x2="120"
              y2="200"
              stroke="#61DAFB"
              strokeWidth="2"
              opacity="0.6"
            />

            <line
              x1="280"
              y1="200"
              x2="320"
              y2="200"
              stroke="#61DAFB"
              strokeWidth="2"
              opacity="0.6"
            />

            <circle
              cx="200"
              cy="200"
              r="12"
              fill="#0071e3"
              filter="url(#glow)"
              className="pulse-center"
            />
          </svg>
        </div>
      </div>
    </div>
      <style jsx="true">{`
        @keyframes responsiveFontSize {
          0%, 100% {
            font-size: 14px;
          }
        }
        .tech-description {
          animation: responsiveFontSize 0.1s ease;
        }
        @media (max-width: 1280px) {
          .technologies-body {
            gap: 56px;
          }
        }
        @media (max-width: 1024px) {
          #technologies {
            padding-top: 40px !important;
            padding-bottom: 48px !important;
          }
          .technologies-body {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            gap: 40px;
          }
          .technologies-copy {
            align-items: center !important;
            text-align: center !important;
            max-width: 620px;
            order: 1;
          }
          .tech-description {
            font-size: 13px !important;
          }
          .technologies-visual {
            order: 2;
            margin-top: 20px !important;
          }
        }
        @media (max-width: 815px) {
          .technologies-body {
            flex-direction: column !important;
          }
          .technologies-copy {
            order: 1;
          }
          .tech-description {
            font-size: 13px !important;
          }
          .technologies-visual {
            order: 2;
            margin-top: 20px !important;
          }
        }
        @media (max-width: 768px) {
          #technologies {
            min-height: auto !important;
            padding-top: 36px !important;
            padding-bottom: 48px !important;
          }

          #technologies .px-8 {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .technologies-body {
            gap: 24px !important;
            align-items: center !important;
            text-align: center !important;
          }
          .technologies-copy {
            align-items: center !important;
            max-width: 540px !important;
          }
          .tech-description {
            font-size: 12px !important;
          }
          .technologies-copy .hero-tagline,
          .technologies-copy .about-description {
            text-align: center !important;
            max-width: 100% !important;
          }
          .technologies-visual {
            margin-top: 12px !important;
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .technologies-cta {
            justify-content: center;
          }
        }
        @media (max-width: 480px) {
          .tech-description {
            font-size: 11px !important;
          }
        }
      `}</style>
  </section>
  )
}

export default Technologies

