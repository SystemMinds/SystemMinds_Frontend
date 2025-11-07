import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation.jsx'

const technologyCards = [
  {
    name: 'React',
    icon: '⚛️',
    headline: 'Component-Driven Interfaces'
  },
  {
    name: 'Next.js',
    icon: '🚀',
    headline: 'Hybrid Rendering Engine'
  },
  {
    name: 'TypeScript',
    icon: '🌀',
    headline: 'Strong Typing & Tooling'
  },
  {
    name: 'Tailwind CSS',
    icon: '🎨',
    headline: 'Utility-First Styling'
  },
  {
    name: 'Node.js',
    icon: '🟢',
    headline: 'Event-Driven APIs'
  },
  {
    name: 'NestJS',
    icon: '🧭',
    headline: 'Structured Backends'
  },
  {
    name: 'GraphQL',
    icon: '🕸️',
    headline: 'Flexible Data Layer'
  },
  {
    name: 'PostgreSQL',
    icon: '🗄️',
    headline: 'Relational Data Core'
  },
  {
    name: 'AWS',
    icon: '☁️',
    headline: 'Global Cloud Footprint'
  },
  {
    name: 'Docker',
    icon: '🐳',
    headline: 'Portable Environments'
  },
  {
    name: 'Kubernetes',
    icon: '⚓',
    headline: 'Self-Healing Clusters'
  },
  {
    name: 'Terraform',
    icon: '🧱',
    headline: 'Infrastructure as Code'
  },
  {
    name: 'Python',
    icon: '🐍',
    headline: 'Automation & AI'
  },
  {
    name: 'TensorFlow',
    icon: '🧠',
    headline: 'Production ML Models'
  },
  {
    name: 'LangChain',
    icon: '🔗',
    headline: 'Generative AI Agents'
  },
  {
    name: 'Power BI',
    icon: '📊',
    headline: 'Business Intelligence'
  }
]

const firstRow = technologyCards.filter((_, index) => index % 2 === 0)
const secondRow = technologyCards.filter((_, index) => index % 2 === 1)

function Technologies() {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.2, once: true })

  return (
    <section
      id="technologies"
      ref={sectionRef}
      className="relative"
      style={{
        backgroundColor: 'transparent',
        paddingTop: '80px',
        paddingBottom: '80px',
        overflow: 'hidden',
        scrollMarginTop: '90px',
        height: '100vh',
        minHeight: '600px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 text-white flex flex-col items-center">
        <div
          className="flex flex-col items-center text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.7s ease-out'
          }}
        >
          <h2
            style={{
              fontFamily: '"Volkhov", "Georgia", serif',
              fontWeight: 700,
              fontSize: '52px',
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              marginBottom: '10px'
            }}
          >
            Technologies
          </h2>
          <p
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: '16px',
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.62)',
              maxWidth: '560px'
            }}
          >
            Tools and platforms we rely on to build intuitive experiences, scalable architectures, and intelligent products.
          </p>
        </div>

        <div className="relative w-full mt-16 space-y-10">
          {[firstRow, secondRow].map((row, rowIndex) => (
            <div key={rowIndex} className="relative overflow-hidden">
              <div className={`marquee-layer ${rowIndex === 1 ? 'reverse' : ''}`} style={{ animationPlayState: isVisible ? 'running' : 'paused' }}>
                {[...row, ...row].map((card, index) => (
                  <div className="tech-pill" key={`${rowIndex}-${card.name}-${index}`}>
                    <div className="tech-icon-wrapper">
                      <span className="tech-icon">{card.icon}</span>
                    </div>
                    <div className="tech-text">
                      <span className="tech-name">{card.name}</span>
                      <span className="tech-headline">{card.headline}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="fade-left" />
              <div className="fade-right" />
            </div>
          ))}
          <style jsx="true">{`
            @keyframes marqueeForward {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }

            @keyframes marqueeReverse {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }

            .marquee-layer {
              display: flex;
              gap: 24px;
              width: 220%;
              animation: marqueeForward 38s linear infinite;
              padding: 12px 0;
              position: relative;
            }

            .marquee-layer.reverse {
              animation: marqueeReverse 40s linear infinite;
            }

            .tech-pill {
              display: flex;
              align-items: center;
              gap: 18px;
              min-width: 360px;
              max-width: 360px;
              padding: 20px 24px;
              border-radius: 24px;
              border: 1px solid rgba(148, 163, 184, 0.12);
              background: rgba(15, 23, 42, 0.76);
              backdrop-filter: blur(10px);
            }

            .tech-icon-wrapper {
              width: 62px;
              height: 62px;
              border-radius: 18px;
              background: #1E293B;
              display: flex;
              align-items: center;
              justify-content: center;
              border: 1px solid rgba(148, 163, 184, 0.16);
            }

            .tech-icon {
              font-size: 28px;
            }

            .tech-text {
              display: flex;
              flex-direction: column;
              gap: 4px;
            }

            .tech-name {
              font-family: "Poppins", sans-serif;
              font-size: 14px;
              font-weight: 600;
              letter-spacing: 0.18em;
              text-transform: uppercase;
              color: rgba(148, 181, 231, 0.85);
            }

            .tech-headline {
              font-family: "Volkhov", "Georgia", serif;
              font-size: 19px;
              color: #ffffff;
              letter-spacing: -0.01em;
            }

            .fade-left,
            .fade-right {
              position: absolute;
              top: 0;
              bottom: 0;
              width: 120px;
              pointer-events: none;
              z-index: 2;
            }

            .fade-left {
              left: 0;
              background: linear-gradient(90deg, rgba(10, 10, 10, 1) 0%, rgba(10, 10, 10, 0) 100%);
            }

            .fade-right {
              right: 0;
              background: linear-gradient(270deg, rgba(10, 10, 10, 1) 0%, rgba(10, 10, 10, 0) 100%);
            }

            @media (max-width: 1024px) {
              .tech-pill {
                min-width: 320px;
                max-width: 320px;
                padding: 18px 20px;
              }

              .tech-headline {
                font-size: 17px;
              }
            }

            @media (max-width: 640px) {
              .tech-pill {
                min-width: 260px;
                max-width: 260px;
              }

              .tech-name {
                font-size: 12px;
                letter-spacing: 0.12em;
              }

              .tech-headline {
                font-size: 15px;
              }

              .fade-left,
              .fade-right {
                width: 80px;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  )
}

export default Technologies
