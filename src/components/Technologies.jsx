import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation.jsx'

const technologyCards = [
  {
    name: 'React',
    icon: '⚛️',
    headline: 'Component-Driven Interfaces',
    blurb: 'Reusable UI blocks for fast, maintainable frontends.'
  },
  {
    name: 'Next.js',
    icon: '🚀',
    headline: 'Hybrid Rendering',
    blurb: 'SSR, SSG and edge-ready apps with blazing performance.'
  },
  {
    name: 'TypeScript',
    icon: '🔐',
    headline: 'Typed JavaScript',
    blurb: 'Catch bugs early with powerful developer tooling.'
  },
  {
    name: 'Tailwind CSS',
    icon: '🎨',
    headline: 'Utility-First Styling',
    blurb: 'Ship pixel-perfect responsive layouts rapidly.'
  },
  {
    name: 'Node.js',
    icon: '🟢',
    headline: 'Event-Driven APIs',
    blurb: 'Lightweight, scalable services using modern runtimes.'
  },
  {
    name: 'NestJS',
    icon: '🧭',
    headline: 'Structured Backends',
    blurb: 'Opinionated architecture for enterprise-ready APIs.'
  },
  {
    name: 'PostgreSQL',
    icon: '🗄️',
    headline: 'Relational Backbone',
    blurb: 'Dependable data integrity with advanced features.'
  },
  {
    name: 'GraphQL',
    icon: '🕸️',
    headline: 'Query What You Need',
    blurb: 'Single endpoint delivering tailored responses.'
  },
  {
    name: 'AWS',
    icon: '☁️',
    headline: 'Cloud Infrastructure',
    blurb: 'Elastic compute, managed services, global reach.'
  },
  {
    name: 'Docker',
    icon: '🐳',
    headline: 'Portable Environments',
    blurb: 'Consistent builds and deployments everywhere.'
  },
  {
    name: 'Kubernetes',
    icon: '⚓',
    headline: 'Cluster Orchestration',
    blurb: 'Auto-healing, scalable workloads for mission-critical apps.'
  },
  {
    name: 'Terraform',
    icon: '🧱',
    headline: 'Infrastructure as Code',
    blurb: 'Declarative provisioning across multiple clouds.'
  },
  {
    name: 'Python',
    icon: '🐍',
    headline: 'Rapid Automation',
    blurb: 'Scripting, AI and pipelines built with efficiency.'
  },
  {
    name: 'TensorFlow',
    icon: '🧠',
    headline: 'Production AI Models',
    blurb: 'Train, deploy and scale intelligent experiences.'
  },
  {
    name: 'LangChain',
    icon: '🔗',
    headline: 'Generative AI Workflows',
    blurb: 'Compose LLM-powered agents tailored to your data.'
  }
]

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
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 text-white flex flex-col items-center">
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
              fontSize: '48px',
              letterSpacing: '-0.02em',
              color: '#FFFFFF'
            }}
          >
            Technologies
          </h2>
        </div>

        <div className="relative w-full overflow-hidden mt-14 flex justify-center">
          <div
            className="flex gap-6 marquee-track"
            style={{
              animationPlayState: isVisible ? 'running' : 'paused',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease-out 0.3s, transform 0.6s ease-out 0.3s'
            }}
          >
            {[...technologyCards, ...technologyCards].map((card, index) => (
              <div
                key={`${card.name}-${index}`}
                className="technology-card"
                style={{
                  animationDelay: `${(index % technologyCards.length) * 0.08}s`
                }}
              >
                <div className="diamond">
                  <span className="diamond-icon">{card.icon}</span>
                </div>
                <h3>{card.name}</h3>
                <strong>{card.headline}</strong>
                <p>{card.blurb}</p>
              </div>
            ))}
          </div>
          <style jsx="true">{`
            @keyframes marqueeScroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }

            .marquee-track {
              width: calc(200%);
              animation: marqueeScroll 35s linear infinite;
            }

            .technology-card {
              min-width: 210px;
              max-width: 210px;
              background: rgba(15, 23, 42, 0.45);
              border: 1px solid rgba(148, 163, 184, 0.18);
              border-radius: 20px;
              padding: 64px 24px 28px;
              position: relative;
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
              gap: 12px;
              box-shadow: 0 18px 40px rgba(8, 47, 73, 0.35);
              backdrop-filter: blur(14px);
            }

            .technology-card h3 {
              font-family: "Poppins", sans-serif;
              font-size: 15px;
              font-weight: 700;
              letter-spacing: 0.08em;
              text-transform: uppercase;
              color: #F8FAFC;
              margin: 0;
            }

            .technology-card strong {
              font-family: "Volkhov", "Georgia", serif;
              font-size: 17px;
              line-height: 1.4;
              color: #ffffff;
            }

            .technology-card p {
              font-family: "Poppins", sans-serif;
              font-size: 13px;
              line-height: 1.6;
              color: rgba(226, 232, 240, 0.78);
              margin: 0;
            }

            .diamond {
              width: 72px;
              height: 72px;
              position: absolute;
              top: -20px;
              display: flex;
              align-items: center;
              justify-content: center;
              background: linear-gradient(135deg, #0EA5E9 0%, #38BDF8 100%);
              border-radius: 18px;
              transform: rotate(45deg);
              border: 6px solid #0B1220;
              box-shadow: 0 10px 25px rgba(14, 165, 233, 0.45);
            }

            .diamond-icon {
              font-size: 28px;
              transform: rotate(-45deg);
            }

            @media (max-width: 768px) {
              .technology-card {
                min-width: 180px;
                max-width: 180px;
                padding: 48px 20px 24px;
              }

              .marquee-track {
                animation-duration: 28s;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  )
}

export default Technologies
