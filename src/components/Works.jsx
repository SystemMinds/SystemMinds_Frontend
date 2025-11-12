import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation.jsx'
import projects from '../data/projects.js'

const marqueeRows = [
  projects.filter((_, index) => index % 2 === 0),
  projects.filter((_, index) => index % 2 === 1)
]

function Works() {
  const navigate = useNavigate()
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.2, once: true })

  return (
    <section
      id="works"
      ref={sectionRef}
      className="relative"
      style={{
        backgroundColor: 'transparent',
        paddingTop: '8px',
        paddingBottom: '72px',
        overflow: 'hidden',
        scrollMarginTop: '32px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-12 text-white flex flex-col items-center">
        <div
          className="flex flex-col items-center text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.7s ease-out'
          }}
        >
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
            Works
          </h2>
          <p
            className="works-description"
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: '1.5',
              marginTop: '8px',
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '560px'
            }}
          >
            A showcase of the digital products, platforms, and experiences we craft for our partners.
          </p>
        </div>

        <div className="relative w-full mt-12 space-y-8">
          {marqueeRows.map((row, rowIndex) => {
            const repeatedRow = Array.from({ length: 3 }, () => row).flat()
            return (
            <div key={rowIndex} className="relative overflow-hidden">
              <div
                className={`marquee-layer ${rowIndex === 1 ? 'reverse' : ''}`}
                style={{ animationPlayState: isVisible ? 'running' : 'paused' }}
              >
                {repeatedRow.map((card, index) => (
                  <button
                    type="button"
                    className="tech-pill"
                    key={`${rowIndex}-${card.name}-${index}`}
                    onClick={() => navigate(`/projects/${card.slug}`)}
                  >
                    <div className="tech-icon-wrapper">
                      <span className="tech-icon">{card.icon}</span>
                    </div>
                    <div className="tech-text">
                      <span className="tech-name">{card.name}</span>
                      <span className="tech-headline">{card.headline}</span>
                    </div>
                  </button>
                ))}
              </div>
              <div className="fade-left" />
              <div className="fade-right" />
            </div>
          )})}
          <style jsx="true">{`
            @keyframes marqueeForward {
              0% { transform: translateX(0); }
              100% { transform: translateX(-33.333%); }
            }

            @keyframes marqueeReverse {
              0% { transform: translateX(-33.333%); }
              100% { transform: translateX(0); }
            }

            .marquee-layer {
              display: flex;
              gap: 20px;
              width: max-content;
              animation: marqueeForward 16s linear infinite;
              padding: 1px 0;
              position: relative;
              align-items: center;
            }

            .marquee-layer.reverse {
              animation: marqueeReverse 16s linear infinite;
            }

            .tech-pill {
              display: flex;
              align-items: center;
              gap: 16px;
              min-width: 360px;
              max-width: 360px;
              height: 104px;
              padding: 0 22px;
              border-radius: 24px;
              border: 1px solid rgba(148, 163, 184, 0.16);
              background: rgba(15, 23, 42, 0.78);
              backdrop-filter: blur(12px);
              cursor: pointer;
              transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
              color: inherit;
              outline: none;
            }

            .tech-pill:hover,
            .tech-pill:focus-visible {
              transform: translateY(-4px);
              background: rgba(15, 23, 42, 0.88);
              box-shadow: 0 20px 40px rgba(15, 23, 42, 0.35);
            }

            .tech-pill:focus-visible {
              outline: 2px solid rgba(241, 165, 1, 0.6);
              outline-offset: 4px;
            }

            .tech-icon-wrapper {
              width: 52px;
              height: 52px;
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
                min-width: 340px;
                max-width: 340px;
                padding: 0 20px;
              }

              .tech-headline {
                font-size: 18px;
              }

              .marquee-layer,
              .marquee-layer.reverse {
                animation-duration: 12s;
              }
            }

            @media (max-width: 640px) {
              .tech-pill {
                min-width: 280px;
                max-width: 280px;
                padding: 0 16px;
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

              .marquee-layer,
              .marquee-layer.reverse {
                animation-duration: 9s;
              }
            }
          `}</style>
        </div>
      </div>
      <style jsx="true">{`
        @keyframes responsiveFontSize {
          0%, 100% {
            font-size: 14px;
          }
        }
        .works-description {
          animation: responsiveFontSize 0.1s ease;
        }
        @media (max-width: 1024px) {
          #works {
            padding-top: 44px !important;
            padding-bottom: 60px !important;
          }
          .works-description {
            font-size: 13px !important;
          }
        }
        @media (max-width: 768px) {
          #works {
            min-height: auto !important;
            padding-top: 38px !important;
            padding-bottom: 52px !important;
          }

          #works .px-8 {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .works-description {
            font-size: 12px !important;
          }
        }
        @media (max-width: 480px) {
          .works-description {
            font-size: 11px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Works
