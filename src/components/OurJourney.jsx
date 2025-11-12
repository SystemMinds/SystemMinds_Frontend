import React from 'react'

const brandFont = '"Poppins", sans-serif'
const serifFont = '"Volkhov", "Georgia", serif'

function OurJourney() {
  const journeySteps = [
    {
      year: '2024',
      title: 'The Idea',
      description: 'The startup idea was conceived with a vision to bridge the gap between innovative ideas and scalable digital solutions. We envisioned building a company that would transform how businesses approach technology.',
      quote: 'Every great journey begins with a single idea. We envisioned a future where technology meets innovation.'
    },
    {
      year: '2025',
      title: 'Building & Launching',
      description: 'We started working on our vision, building our first products and services. We launched our online presence and began serving clients, turning our idea into reality. This year marked our official entry into the market.',
      quote: 'Ideas become reality through action. We built, launched, and started making an impact.'
    },
    {
      year: '2026',
      title: 'Formalizing & Growing',
      description: 'We are on track to register SystemMinds as a Private Limited Company, formalizing our operations and setting the foundation for long-term growth. This milestone represents our commitment to building a sustainable and scalable business.',
      quote: 'Formalizing our vision is just the beginning. We\'re building for the future, one step at a time.'
    }
  ]

  const values = [
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We constantly explore new technologies and methodologies to deliver cutting-edge solutions.'
    },
    {
      icon: '🤝',
      title: 'Partnership',
      description: 'We build long-term relationships with our clients, treating their success as our own.'
    },
    {
      icon: '⚡',
      title: 'Excellence',
      description: 'We strive for excellence in every project, ensuring quality, performance, and reliability.'
    },
    {
      icon: '🌱',
      title: 'Growth',
      description: 'We believe in continuous learning and growth, both as individuals and as a team.'
    }
  ]

  return (
    <section 
      id="our-journey" 
      className="py-16 px-5 sm:px-10 lg:px-16"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            style={{ 
              fontFamily: serifFont,
              color: '#ffffff',
              lineHeight: '1.1',
              letterSpacing: '-0.02em'
            }}
          >
            Our Journey
          </h2>
          <p 
            className="text-base sm:text-lg max-w-3xl mx-auto"
            style={{ 
              fontFamily: brandFont,
              color: 'rgba(255,255,255,0.8)',
              lineHeight: '1.5',
              fontSize: '17px'
            }}
          >
            From a startup vision to a trusted technology partner—here's how SystemMinds came to be.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-12">
          {/* Timeline Line */}
          <div 
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2"
            style={{ backgroundColor: 'rgba(255,138,61,0.3)' }}
          />
          
          {/* Journey Steps */}
          <div className="space-y-10 md:space-y-16">
            {journeySteps.map((step, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div 
                  className="absolute hidden md:block left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full z-10"
                  style={{ 
                    backgroundColor: '#FF8A3D',
                    boxShadow: '0 0 0 4px rgba(255,138,61,0.2), 0 0 0 8px rgba(255,138,61,0.1)'
                  }}
                />
                
                {/* Content Card */}
                <div 
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}
                >
                  <div 
                    className="p-4 rounded-lg border transition-all duration-300 hover:border-orange-500/50"
                    style={{ 
                      backgroundColor: 'rgba(255,255,255,0.02)',
                      borderColor: 'rgba(255,255,255,0.1)'
                    }}
                  >
                    <div 
                      className="text-2xl font-bold mb-2"
                      style={{ 
                        fontFamily: serifFont,
                        color: '#FF8A3D'
                      }}
                    >
                      {step.year}
                    </div>
                    <h3 
                      className="text-xl font-bold mb-2"
                      style={{ 
                        fontFamily: serifFont,
                        color: '#ffffff'
                      }}
                    >
                      {step.title}
                    </h3>
                    <p 
                      className="mb-3"
                      style={{ 
                        fontFamily: brandFont,
                        color: 'rgba(255,255,255,0.7)',
                        lineHeight: '1.5',
                        fontSize: '14px'
                      }}
                    >
                      {step.description}
                    </p>
                    <div 
                      className="pl-2 border-l-2"
                      style={{ 
                        borderColor: '#FF8A3D',
                        fontStyle: 'italic'
                      }}
                    >
                      <p 
                        style={{ 
                          fontFamily: brandFont,
                          color: 'rgba(255,255,255,0.6)',
                          lineHeight: '1.4',
                          fontSize: '13px'
                        }}
                      >
                        "{step.quote}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-2/12" />
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-12">
          <h3 
            className="text-2xl sm:text-3xl font-bold mb-8 text-center"
            style={{ 
              fontFamily: serifFont,
              color: '#ffffff'
            }}
          >
            What Drives Us
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl border text-center transition-all duration-300 hover:border-orange-500/50 hover:transform hover:scale-105"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  borderColor: 'rgba(255,255,255,0.1)'
                }}
              >
                <div 
                  className="text-5xl mb-4"
                  style={{ fontSize: '48px' }}
                >
                  {value.icon}
                </div>
                <h4 
                  className="text-xl font-semibold mb-3"
                  style={{ 
                    fontFamily: brandFont,
                    color: '#FF8A3D'
                  }}
                >
                  {value.title}
                </h4>
                <p 
                  style={{ 
                    fontFamily: brandFont,
                    color: 'rgba(255,255,255,0.7)',
                    lineHeight: '1.6',
                    fontSize: '14px'
                  }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default OurJourney

