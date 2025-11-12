import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { getProject } from '../data/projects.js'

function ProjectDetails() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = getProject(slug)

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [slug])

  if (!project) {
    return (
      <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: '#0A0A0A', color: '#ffffff' }}>
        <Header />
        <main
          className="px-6 py-24 md:px-12 lg:px-16 flex flex-col items-center justify-center text-center gap-6"
          style={{ minHeight: '60vh' }}
        >
          <h1 style={{ fontFamily: '"Volkhov", "Georgia", serif', fontSize: '48px' }}>Project not found</h1>
          <p style={{ fontFamily: '"Poppins", sans-serif', fontSize: '18px', color: 'rgba(255,255,255,0.72)', maxWidth: '520px' }}>
            The project overview you’re looking for may have moved or is unavailable right now. Explore other work or return to the projects section.
          </p>
          <button
            type="button"
            onClick={() => navigate('/', { state: { scrollTo: 'works' } })}
            style={{
              fontFamily: '"Poppins", sans-serif',
              background: 'linear-gradient(135deg, #F1A501, #FFC94A)',
              color: '#0A0A0A',
              borderRadius: '999px',
              border: 'none',
              padding: '12px 28px',
              fontSize: '14px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              cursor: 'pointer'
            }}
          >
            View projects
          </button>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: '#0A0A0A', color: '#ffffff' }}>
      <Header />
      <main style={{ paddingTop: '96px', paddingBottom: '120px' }}>
        <section className="px-6 md:px-12 lg:px-16">
          <div
            className="max-w-6xl mx-auto rounded-[32px] border border-white/10 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(17,26,44,0.92), rgba(10,10,10,0.9))',
              boxShadow: '0 45px 75px rgba(0,0,0,0.5)'
            }}
          >
            <div className="p-8 md:p-12 space-y-6">
              <div className="grid gap-10 lg:grid-cols-[60%_40%] lg:items-center">
                <div className="space-y-6">
                  <span
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs tracking-[0.28em]"
                    style={{ fontFamily: '"Poppins", sans-serif', background: 'rgba(241,165,1,0.12)', color: '#F1A501' }}
                  >
                    {project.heroTag}
                  </span>
                  <h1
                    className="text-2xl sm:text-3xl md:text-4xl font-bold"
                    style={{
                      fontFamily: '"Volkhov", "Georgia", serif',
                      lineHeight: 1.2,
                      letterSpacing: '-0.02em',
                      color: '#ffffff'
                    }}
                  >
                    {project.name}
                  </h1>
                  <p
                    className="project-details-summary"
                    style={{
                      fontFamily: '"Poppins", sans-serif',
                      fontSize: '14px',
                      lineHeight: 1.6,
                      color: 'rgba(255,255,255,0.85)',
                      maxWidth: '760px'
                    }}
                  >
                    {project.summary}
                  </p>
                </div>
                {project.heroImage ? (
                  <div className="relative rounded-[28px] overflow-hidden border border-white/10" style={{ background: 'rgba(0,0,0,0.25)' }}>
                    <img
                      src={project.heroImage}
                      alt={`${project.name} visual`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.15), rgba(2, 6, 23, 0.45))',
                        pointerEvents: 'none'
                      }}
                    />
                  </div>
                ) : null}
              </div>

              <div
                className="grid gap-4 md:grid-cols-2"
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  color: 'rgba(255,255,255,0.75)',
                  fontSize: '16px',
                  lineHeight: 1.7
                }}
              >
                <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '20px', padding: '20px', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <p style={{ textTransform: 'uppercase', letterSpacing: '0.18em', fontSize: '12px', color: 'rgba(255,255,255,0.58)' }}>The challenge</p>
                  <p style={{ marginTop: '10px', fontFamily: '"Poppins", sans-serif', fontSize: '13px', lineHeight: 1.6, color: 'rgba(255,255,255,0.85)' }}>{project.challenge}</p>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '20px', padding: '20px', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <p style={{ textTransform: 'uppercase', letterSpacing: '0.18em', fontSize: '12px', color: 'rgba(255,255,255,0.58)' }}>Our solution</p>
                  <p style={{ marginTop: '10px', fontFamily: '"Poppins", sans-serif', fontSize: '13px', lineHeight: 1.6, color: 'rgba(255,255,255,0.85)' }}>{project.solution}</p>
                </div>
              </div>
              <p
                className="project-details-overview"
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: '14px',
                  lineHeight: 1.6,
                  color: 'rgba(255,255,255,0.85)'
                }}
              >
                {project.overview}
              </p>
            </div>
          </div>
        </section>

        {project.gallery && project.gallery.length > 0 ? (
          <section className="px-6 md:px-12 lg:px-16 mt-12">
            <div className="max-w-6xl mx-auto">
              <div
                className="relative overflow-hidden rounded-[26px] border border-white/10"
                style={{ background: 'rgba(12,20,34,0.8)', padding: '24px', backdropFilter: 'blur(12px)' }}
              >
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ fontFamily: '"Volkhov", "Georgia", serif', lineHeight: 1.2, letterSpacing: '-0.02em', color: '#FFFFFF' }}>Project snapshots</h2>
                  </div>
                <div className="project-gallery-wrapper">
                  <div className="project-gallery-track">
                    {[...project.gallery, ...project.gallery].map((image, index) => (
                      <div className="project-gallery-item" key={`${image}-${index}`}>
                        <img src={image} alt={`${project.name} preview ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                  <div className="gallery-fade-left" />
                  <div className="gallery-fade-right" />
                </div>
              </div>
            </div>
            <style jsx="true">{`
              @keyframes galleryScroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }

              .project-gallery-wrapper {
                position: relative;
                overflow: hidden;
              }

              .project-gallery-track {
                display: flex;
                gap: 18px;
                width: max-content;
                animation: galleryScroll 22s linear infinite;
              }

              .project-gallery-item {
                min-width: 320px;
                max-width: 320px;
                height: 200px;
                border-radius: 18px;
                overflow: hidden;
                border: 1px solid rgba(255, 255, 255, 0.12);
              }

              .project-gallery-item img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }

              .gallery-fade-left,
              .gallery-fade-right {
                position: absolute;
                top: 0;
                bottom: 0;
                width: 120px;
                pointer-events: none;
                z-index: 2;
              }

              .gallery-fade-left {
                left: 0;
                background: linear-gradient(90deg, rgba(10, 10, 10, 1) 0%, rgba(10, 10, 10, 0) 100%);
              }

              .gallery-fade-right {
                right: 0;
                background: linear-gradient(270deg, rgba(10, 10, 10, 1) 0%, rgba(10, 10, 10, 0) 100%);
              }

              @media (max-width: 1024px) {
                .project-gallery-item {
                  min-width: 280px;
                  max-width: 280px;
                  height: 180px;
                }
              }

              @media (max-width: 640px) {
                .project-gallery-item {
                  min-width: 240px;
                  max-width: 240px;
                  height: 160px;
                }

                .gallery-fade-left,
                .gallery-fade-right {
                  width: 80px;
                }
              }
            `}</style>
          </section>
        ) : null}

        <section className="px-6 md:px-12 lg:px-16 mt-16">
          <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[58%_42%]">
            <div className="rounded-[28px] border border-white/10 p-8 md:p-10 space-y-6" style={{ background: 'rgba(14,22,40,0.85)', backdropFilter: 'blur(18px)' }}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ fontFamily: '"Volkhov", "Georgia", serif', lineHeight: 1.2, letterSpacing: '-0.02em', color: '#ffffff' }}>Architecture highlights</h2>
              <ul className="space-y-4" style={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px', lineHeight: 1.6, color: 'rgba(255,255,255,0.85)' }}>
                {project.architectureHighlights.map((item) => (
                  <li key={item} style={{ display: 'flex', gap: '14px' }}>
                    <span style={{ color: '#F1A501' }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[28px] border border-white/10 p-8 md:p-10 space-y-6" style={{ background: 'rgba(9,15,27,0.92)', backdropFilter: 'blur(16px)' }}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ fontFamily: '"Volkhov", "Georgia", serif', lineHeight: 1.2, letterSpacing: '-0.02em', color: '#ffffff' }}>Tech stack</h2>
              <div className="space-y-6">
                {Object.entries(project.techStack).map(([label, items]) => (
                  <div key={label} style={{ fontFamily: '"Poppins", sans-serif' }}>
                    <p style={{ textTransform: 'uppercase', letterSpacing: '0.22em', fontSize: '12px', color: 'rgba(255,255,255,0.55)' }}>{label}</p>
                    <div style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                      {items.map((item) => (
                        <span
                          key={item}
                          style={{
                            background: 'rgba(255,255,255,0.08)',
                            border: '1px solid rgba(255,255,255,0.12)',
                            borderRadius: '999px',
                            padding: '8px 14px',
                            fontSize: '13px',
                            color: 'rgba(255,255,255,0.85)'
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 lg:px-16 mt-16">
          <div className="max-w-6xl mx-auto rounded-[28px] border border-white/10 p-8 md:p-10 space-y-6" style={{ background: 'rgba(12,20,34,0.9)', backdropFilter: 'blur(14px)' }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ fontFamily: '"Volkhov", "Georgia", serif', lineHeight: 1.2, letterSpacing: '-0.02em', color: '#ffffff' }}>Delivery flow</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {project.deliveryFlow.map((step) => (
                <div key={step.title} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '22px', padding: '20px', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <p style={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px', fontWeight: 600, color: '#F1A501', marginBottom: '10px' }}>
                    {step.title}
                  </p>
                  <p style={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 lg:px-16 mt-16">
          <div className="max-w-6xl mx-auto rounded-[28px] border border-white/10 p-8 md:p-10 space-y-6" style={{ background: 'rgba(241,165,1,0.1)', backdropFilter: 'blur(12px)' }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ fontFamily: '"Volkhov", "Georgia", serif', lineHeight: 1.2, letterSpacing: '-0.02em', color: '#ffffff' }}>Impact & outcomes</h2>
            <ul className="space-y-4" style={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px', lineHeight: 1.6, color: 'rgba(255,255,255,0.85)' }}>
              {project.outcomes.map((outcome) => (
                <li key={outcome} style={{ display: 'flex', gap: '12px' }}>
                  <span style={{ color: '#DF6951' }}>•</span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => navigate('/', { state: { scrollTo: 'contact' } })}
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  background: '#F1A501',
                  color: '#0A0A0A',
                  borderRadius: '999px',
                  border: 'none',
                  padding: '12px 28px',
                  fontSize: '14px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  cursor: 'pointer'
                }}
              >
                Start a project
              </button>
              <button
                type="button"
                onClick={() => navigate('/', { state: { scrollTo: 'works' } })}
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  background: 'transparent',
                  color: '#ffffff',
                  borderRadius: '999px',
                  border: '1px solid rgba(255,255,255,0.28)',
                  padding: '12px 28px',
                  fontSize: '14px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  cursor: 'pointer'
                }}
              >
                Back to projects
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style jsx="true">{`
        @keyframes responsiveFontSize {
          0%, 100% {
            font-size: 14px;
          }
        }
        @media (max-width: 1024px) {
          .project-details-summary,
          .project-details-overview {
            font-size: 13px !important;
          }
        }
        @media (max-width: 768px) {
          .project-details-summary,
          .project-details-overview {
            font-size: 13px !important;
          }
        }
        @media (max-width: 640px) {
          .project-details-summary,
          .project-details-overview {
            font-size: 12px !important;
          }
        }
      `}</style>
    </div>
  )
}

export default ProjectDetails

