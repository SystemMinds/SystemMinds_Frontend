import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation.jsx'

function WorkWeDo() {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.2, once: true })

  return (
    <section
      id="work-we-do"
      ref={sectionRef}
      className="relative bg-black text-white overflow-hidden"
      style={{ 
        height: '100vh',
        minHeight: '100vh',
        maxHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '48px',
        paddingBottom: '48px'
      }}
    >
      <div className="relative z-10 flex flex-col md:flex-row items-start justify-between px-8 md:px-16 lg:px-24 w-full h-full gap-8 md:gap-12">
        {/* Left Side - Content */}
        <div className="flex flex-col items-start justify-start flex-1 max-w-2xl">
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
            Work We Do
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
            We transform your ideas into powerful digital solutions that drive growth and innovation.
          </p>
          <p 
            className="about-description font-normal max-w-2xl"
            style={{ 
              fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: 400,
              fontSize: '17px',
              lineHeight: '1.5',
              marginBottom: '20px',
              color: 'rgba(255, 255, 255, 0.8)'
            }}
          >
            We make your vision come to execute. Our team combines expertise, creativity, and cutting-edge technology to help businesses achieve their goals.
          </p>
          
          {/* Languages Section - Marquee */}
          <div 
            className="overflow-hidden w-full max-w-2xl relative"
            style={{
              marginTop: '4px',
              whiteSpace: 'nowrap',
              paddingTop: '12px',
              paddingBottom: '12px',
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
                pointerEvents: 'none',
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
                pointerEvents: 'none',
              }}
            />
            <div className="marquee-container inline-flex gap-3">
              {/* First set of tags */}
              {['HTML', 'CSS', 'JavaScript', 'React.js', 'React Native', 'Bootstrap', 'Tailwind CSS', 'Java', 'Python', 'Java Servlet', 'Spring IOC', 'Spring MVC', 'Spring Boot', 'Microservices', 'Hibernate', 'SQL', 'MySQL', 'MongoDB', 'PostgreSQL', 'Spring Security', 'Spring Batch'].map((lang, index) => (
                <span
                  key={`first-${index}`}
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
                    paddingBottom: '0.75rem',
                  }}
                >
                  {lang}
                </span>
              ))}
              {/* Duplicate set for seamless loop */}
              {['HTML', 'CSS', 'JavaScript', 'React.js', 'React Native', 'Bootstrap', 'Tailwind CSS', 'Java', 'Python', 'Java Servlet', 'Spring IOC', 'Spring MVC', 'Spring Boot', 'Microservices', 'Hibernate', 'SQL', 'MySQL', 'MongoDB', 'PostgreSQL', 'Spring Security', 'Spring Batch'].map((lang, index) => (
                <span
                  key={`second-${index}`}
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
                    paddingBottom: '0.75rem',
                  }}
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
          
          {/* Buttons */}
          <div className="flex gap-3 mt-8">
            <a
              href="#projects"
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
              View Project
            </a>
            <a
              href="#clients"
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
              Our Clients
            </a>
          </div>
        </div>
        
        {/* Right Side - SVG Illustration */}
        <div 
          className="relative flex items-center justify-center flex-1 w-full md:w-auto"
          style={{
            height: '100%',
            maxHeight: 'calc(100vh - 100px)',
            minHeight: '280px',
            alignSelf: 'center',
          }}
        >
          <svg
            width="380"
            height="380"
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

            {/* Main Circle - Creative Design Element */}
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
            
            {/* Inner Circles */}
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

            {/* Geometric Shapes */}
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

            {/* Connecting Lines */}
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

            {/* Central Node */}
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
    </section>
  )
}

export default WorkWeDo
