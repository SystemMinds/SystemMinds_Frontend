import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

const highlightStyle = {
  fontFamily: '"Volkhov", "Georgia", serif',
  color: '#F1A501'
}

const testimonialItems = [
  {
    quote: '“SystemMinds wrapped product strategy, design, and engineering into a single sprint cadence. Our mobile banking relaunch hit 4.6★ inside eight weeks.”',
    name: 'Priya Nair',
    title: 'Chief Digital Officer · NEXA Bank'
  },
  {
    quote: '“They helped us define the north-star vision, build the experience, and automate testing in one loop. We now ship value every Friday.”',
    name: 'Luca Hermann',
    title: 'Head of Product · Flowbit'
  },
  {
    quote: '“SystemMinds orchestrated our AI roadmap, from data governance to in-product experiments. Adoption jumped 3x quarter over quarter.”',
    name: 'Jordan Pierce',
    title: 'VP Operations · RetailNorth'
  }
]

const timeline = [
  {
    phase: 'Launch Readiness',
    headline: 'Weeks 0 – 4',
    detail: 'Immersion, metrics design, architecture runway, and experience blueprinting with executive alignment.'
  },
  {
    phase: 'Build Momentum',
    headline: 'Weeks 5 – 12',
    detail: 'Cross-functional pods deliver releases every two weeks with qualitative and quantitative insights baked in.'
  },
  {
    phase: 'Scale & Transfer',
    headline: 'Weeks 13+',
    detail: 'Operationalize observability, platform guardrails, and playbooks so your teams can own the roadmap.'
  }
]

const capabilityGroups = [
  {
    label: 'Product intelligence',
    items: ['Opportunity framing workshops', 'Customer journey analytics', 'North-star metrics dashboards']
  },
  {
    label: 'Experience architecture',
    items: ['Design system codification', 'Inclusive interaction patterns', 'Performance-first UI engineering']
  },
  {
    label: 'Modern delivery',
    items: ['Composable and headless platforms', 'Event-driven microservices', 'Cloud FinOps governance']
  },
  {
    label: 'Enablement & scaling',
    items: ['Playbooks & capability handoffs', 'DevSecOps training tracks', 'Change management support']
  }
]

const contactCards = [
  {
    label: 'Co-create a roadmap',
    description: 'Bring a product challenge, we respond with a working session agenda within 24 hours.',
    email: 'hello@systemminds.com',
    phone: '+1 (415) 555-0123'
  },
  {
    label: 'Join forces as a partner',
    description: 'Product firms, agencies, and venture studios collaborate with our pods globally.',
    email: 'partnerships@systemminds.com',
    phone: '+49 30 1234 9876'
  },
  {
    label: 'Careers & guilds',
    description: 'Engineers, designers, product strategists, and operators who love modern delivery.',
    email: 'careers@systemminds.com',
    phone: '+91 80 4567 8900'
  }
]

const snapshotItems = [
  {
    label: 'Product vision board',
    caption: 'Co-create north-star journeys and experience guardrails.',
    gradient: 'linear-gradient(135deg, rgba(241,165,1,0.22), rgba(241,165,1,0.05))'
  },
  {
    label: 'Delivery control tower',
    caption: 'Live visibility into velocity, burn, and experiment results.',
    gradient: 'linear-gradient(135deg, rgba(56,189,248,0.24), rgba(12,74,110,0.4))'
  },
  {
    label: 'Intelligence layer',
    caption: 'Telemetry dashboards that loop customer signal to backlog.',
    gradient: 'linear-gradient(135deg, rgba(192,132,252,0.28), rgba(76,29,149,0.45))'
  }
]

function AboutLearnMore() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: '#0A0A0A', color: '#ffffff' }}>
      <Header />
      <main className="relative z-10" style={{ paddingTop: '96px', paddingBottom: '80px' }}>
        <section className="px-6 md:px-12 lg:px-16">
          <div className="max-w-7xl mx-auto rounded-[32px] border border-white/10 overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(16,26,46,0.85), rgba(10,10,10,0.92))', boxShadow: '0 35px 65px rgba(0,0,0,0.45)' }}>
            <div className="grid gap-10 lg:grid-cols-[56%_44%] items-stretch">
              <div className="p-8 md:p-12 space-y-6">
                <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs tracking-[0.28em]" style={{ fontFamily: '"Poppins", sans-serif', background: 'rgba(241,165,1,0.12)', color: '#F1A501' }}>
                  PARTNERSHIP PLAYBOOK
                </span>
                <h1
                  className="learn-more-headline"
                  style={{ fontFamily: '"Volkhov", "Georgia", serif', fontSize: '56px', lineHeight: 1.1, letterSpacing: '-0.02em' }}
                >
                  Build once. Launch often. Scale without drag.
                </h1>
                <p style={{ fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif', fontSize: '18px', lineHeight: 1.7, color: 'rgba(255,255,255,0.8)' }}>
                  The Learn More hub unpacks how SystemMinds assembles pods, curates rituals, and embeds intelligence to keep digital programmes moving fast and staying accountable.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { badge: 'Hybrid pods', text: 'Cross-functional leaders embedded with your teams from day zero.' },
                    { badge: 'Signal loops', text: 'Insight pipelines connect customer feedback straight to the backlog.' },
                    { badge: 'Launch metrics', text: 'A shared scorecard aligns finance, product, and engineering.' },
                    { badge: 'Playbooks', text: 'Reusable frameworks so new teams ramp in days, not months.' }
                  ].map((item) => (
                    <div key={item.badge} className="rounded-3xl border border-white/10 p-4" style={{ background: 'rgba(24,34,54,0.65)', backdropFilter: 'blur(12px)' }}>
                      <p style={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.22em', color: '#F1A501' }}>{item.badge}</p>
                      <p style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px', lineHeight: 1.6, color: 'rgba(255,255,255,0.78)', marginTop: '6px' }}>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 opacity-80" style={{ background: 'radial-gradient(circle at top, rgba(241,165,1,0.18), transparent 70%)' }} />
                <div className="relative h-full w-full flex flex-col justify-between border-l border-white/10" style={{ background: 'rgba(8,15,27,0.85)', backdropFilter: 'blur(18px)' }}>
                  <div className="p-8 md:p-10 space-y-5">
                    <h2 style={{ fontFamily: '"Volkhov", "Georgia", serif', fontSize: '28px', lineHeight: 1.2 }}>Engagement snapshot</h2>
                    <p style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.72)' }}>
                      Every partnership starts with a blueprint phase that aligns strategy, design, and delivery. Here’s how the first 90 days typically look.
                    </p>
                    <div className="grid gap-4">
                      {snapshotItems.map((item) => (
                        <div
                          key={item.label}
                          className="rounded-2xl border border-white/10 p-4 flex flex-col gap-3"
                          style={{ background: item.gradient, backdropFilter: 'blur(12px)', minHeight: '118px' }}
                        >
                          <p style={{ fontFamily: '"Volkhov", "Georgia", serif', fontSize: '16px', color: '#ffffff' }}>{item.label}</p>
                          <p style={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px', lineHeight: 1.5, color: 'rgba(255,255,255,0.75)' }}>{item.caption}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-y-6 gap-x-8 px-8 pb-10" style={{ fontFamily: '"Poppins", sans-serif' }}>
                    {[
                      { label: 'Discovery depth', value: '15+ stakeholder and customer interviews' },
                      { label: 'Design momentum', value: 'Design system foundations in week 3' },
                      { label: 'Delivery velocity', value: 'First release candidate by week 6' },
                      { label: 'Confidence gates', value: 'Automated checks across performance, security, accessibility' }
                    ].map((item) => (
                      <div key={item.label}>
                        <p style={{ fontSize: '13px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.46)' }}>{item.label}</p>
                        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.82)', marginTop: '6px', lineHeight: 1.6 }}>{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 lg:px-16 mt-20">
          <div className="max-w-6xl mx-auto rounded-[28px] border border-white/10 p-8 md:p-12" style={{ background: 'rgba(14,21,38,0.78)', backdropFilter: 'blur(14px)' }}>
            <p className="uppercase tracking-[0.24em]" style={{ fontFamily: '"Poppins", sans-serif', color: 'rgba(255,255,255,0.55)', fontSize: '12px' }}>Operating rhythm</p>
            <h2 style={{ fontFamily: '"Volkhov", "Georgia", serif', fontSize: '42px', marginBottom: '24px', marginTop: '10px', letterSpacing: '-0.01em' }}>How our collaborations unfold.</h2>
            <div className="space-y-6">
              {timeline.map((item) => (
                <div key={item.phase} className="rounded-3xl border border-white/10 px-6 py-5 lg:px-8 lg:py-6" style={{ background: 'rgba(8,13,24,0.72)', display: 'grid', gap: '10px', gridTemplateColumns: '1fr', fontFamily: '"Poppins", sans-serif' }}>
                  <div className="flex flex-wrap items-center gap-3">
                    <span style={{ ...highlightStyle, fontSize: '16px', letterSpacing: '0.18em', textTransform: 'uppercase' }}>{item.phase}</span>
                    <span style={{ fontSize: '14px', padding: '6px 12px', borderRadius: '999px', background: 'rgba(241,165,1,0.12)', color: '#F1A501' }}>{item.headline}</span>
                  </div>
                  <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'rgba(255,255,255,0.76)' }}>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 lg:px-16 mt-20">
          <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[45%_55%]">
            <div className="rounded-[26px] border border-white/10 p-8 space-y-6" style={{ background: 'linear-gradient(180deg, rgba(241,165,1,0.12), rgba(10,10,10,0.85))', backdropFilter: 'blur(16px)' }}>
              <p className="uppercase tracking-[0.24em]" style={{ fontFamily: '"Poppins", sans-serif', color: 'rgba(255,255,255,0.58)', fontSize: '12px' }}>Why teams stay</p>
              <h3 style={{ fontFamily: '"Volkhov", "Georgia", serif', fontSize: '34px', lineHeight: 1.2 }}>Shape product futures with data-rich decision loops.</h3>
              <p style={{ fontFamily: '"Poppins", sans-serif', fontSize: '16px', lineHeight: 1.8, color: 'rgba(255,255,255,0.75)' }}>
                From concept to scale, SystemMinds integrates telemetry, user research, and architectural guardrails so your teams always know what to ship next and how it performs in the wild.
              </p>
              <div className="grid gap-4">
                {[
                  { title: 'Dual-track autonomy', desc: 'Discovery and delivery tracks share insights every 72 hours to keep bets sharp.' },
                  { title: 'Outcome dashboards', desc: 'Executives see burn, value, and risk on a single pane connected to real data.' },
                  { title: 'Culture of enablement', desc: 'Guilds, playbooks, and office hours ensure knowledge transfers stick.' }
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 p-4" style={{ background: 'rgba(16,24,40,0.7)' }}>
                    <p style={{ fontFamily: '"Volkhov", "Georgia", serif', fontSize: '18px', color: '#F1A501' }}>{item.title}</p>
                    <p style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px', lineHeight: 1.6, color: 'rgba(255,255,255,0.76)', marginTop: '6px' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[26px] border border-white/10 p-8 xl:p-10" style={{ background: 'rgba(13,20,35,0.78)', backdropFilter: 'blur(16px)', fontFamily: '"Poppins", sans-serif' }}>
              <p className="uppercase tracking-[0.24em]" style={{ color: 'rgba(255,255,255,0.58)', fontSize: '12px' }}>Capability modules</p>
              <div className="grid gap-6 md:grid-cols-2 mt-6">
                {capabilityGroups.map((group) => (
                  <div key={group.label} className="rounded-2xl border border-white/10 p-5 h-full flex flex-col" style={{ background: 'rgba(8,13,24,0.75)' }}>
                    <p style={{ fontFamily: '"Volkhov", "Georgia", serif', fontSize: '18px', color: '#F1A501', marginBottom: '10px' }}>{group.label}</p>
                    <ul className="space-y-3" style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(255,255,255,0.76)' }}>
                      {group.items.map((item) => (
                        <li key={item} style={{ display: 'flex', gap: '10px' }}>
                          <span style={{ color: '#F1A501' }}>•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 lg:px-16 mt-20">
          <div className="max-w-6xl mx-auto">
            <p className="uppercase tracking-[0.24em]" style={{ fontFamily: '"Poppins", sans-serif', color: 'rgba(255,255,255,0.58)', fontSize: '12px' }}>Voices from our partners</p>
            <h2 style={{ fontFamily: '"Volkhov", "Georgia", serif', fontSize: '40px', marginTop: '12px', marginBottom: '28px', letterSpacing: '-0.01em' }}>Results delivered with confidence.</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {testimonialItems.map((item) => (
                <div key={item.name} className="rounded-[24px] border border-white/10 p-6 flex flex-col" style={{ background: 'rgba(9,16,30,0.82)', backdropFilter: 'blur(12px)', position: 'relative' }}>
                  <span style={{ position: 'absolute', top: '18px', left: '18px', width: '40px', height: '2px', background: '#F1A501' }} />
                  <p style={{ fontFamily: '"Poppins", sans-serif', fontSize: '16px', lineHeight: 1.8, color: 'rgba(255,255,255,0.82)', marginTop: '18px' }}>{item.quote}</p>
                  <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
                    <p style={{ fontFamily: '"Volkhov", "Georgia", serif', fontSize: '18px', color: '#F1A501' }}>{item.name}</p>
                    <p style={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.58)', marginTop: '4px' }}>{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 lg:px-16 mt-20">
          <div className="max-w-7xl mx-auto grid gap-10 xl:grid-cols-[60%_40%] items-start">
            <div className="rounded-[28px] border border-white/10 p-8 lg:p-10 space-y-6" style={{ background: 'rgba(14,22,40,0.8)', backdropFilter: 'blur(14px)', fontFamily: '"Poppins", sans-serif' }}>
              <p className="uppercase tracking-[0.24em]" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px' }}>Partner access</p>
              <h2 style={{ fontFamily: '"Volkhov", "Georgia", serif', fontSize: '36px', lineHeight: 1.2 }}>Choose how you want to start the conversation.</h2>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'rgba(255,255,255,0.74)' }}>
                We assemble the right strategists, designers, and engineers based on the stage of your product. Use the options below or share context in the quick brief.
              </p>
              <div className="grid gap-5">
                {contactCards.map((card) => (
                  <div key={card.label} className="rounded-3xl border border-white/10 p-6" style={{ background: 'rgba(9,15,27,0.78)', backdropFilter: 'blur(12px)' }}>
                    <p style={{ fontFamily: '"Volkhov", "Georgia", serif', fontSize: '20px', color: '#F1A501' }}>{card.label}</p>
                    <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'rgba(255,255,255,0.72)', marginTop: '8px' }}>{card.description}</p>
                    <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '14px' }}>
                      <a href={`mailto:${card.email}`} style={{ color: '#ffffff' }}>{card.email}</a>
                      <a href={`tel:${card.phone.replace(/[^+\d]/g, '')}`} style={{ color: 'rgba(255,255,255,0.65)' }}>{card.phone}</a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-3xl border border-white/10 p-6 lg:p-7" style={{ background: 'rgba(8,14,26,0.85)', backdropFilter: 'blur(16px)' }}>
                <p style={{ fontFamily: '"Volkhov", "Georgia", serif', fontSize: '18px', color: '#F1A501' }}>Studio availability</p>
                <ul style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(255,255,255,0.72)', marginTop: '8px' }}>
                  <li>Hybrid meetups in Bengaluru, Berlin, Austin, Singapore</li>
                  <li>Dedicated partner success channel with 2-hour SLA</li>
                  <li>Quarterly roadmap reviews with leadership pods</li>
                </ul>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 p-7 lg:p-9" style={{ background: 'linear-gradient(180deg, rgba(241,165,1,0.35), rgba(10,10,10,0.92))', boxShadow: '0 25px 45px rgba(0,0,0,0.4)' }}>
              <p style={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#0A0A0A', background: '#F1A501', display: 'inline-block', padding: '6px 14px', borderRadius: '999px' }}>
                Quick Brief
              </p>
              <h3 style={{ fontFamily: '"Volkhov", "Georgia", serif', fontSize: '30px', marginTop: '18px', marginBottom: '18px', color: '#ffffff' }}>Send us the spark.</h3>
              <p style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px', lineHeight: 1.6, color: 'rgba(255,255,255,0.85)', marginBottom: '20px' }}>
                Tell us about the opportunity, the audience, and the outcomes you are chasing. We’ll curate a response deck tailored to your context.
              </p>
              <form
                className="grid gap-4 quick-brief-form"
                onSubmit={(event) => {
                  event.preventDefault()
                  event.currentTarget.reset()
                }}
              >
                <label className="flex flex-col gap-2">
                  <span style={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.85)' }}>Your name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className="rounded-xl px-4 py-3 border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#F1A501]"
                    style={{ fontFamily: '"Poppins", sans-serif', color: '#0A0A0A', background: 'rgba(255,255,255,0.92)' }}
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span style={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.85)' }}>Work email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="Work email"
                    className="rounded-xl px-4 py-3 border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#F1A501]"
                    style={{ fontFamily: '"Poppins", sans-serif', color: '#0A0A0A', background: 'rgba(255,255,255,0.92)' }}
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span style={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.85)' }}>Company</span>
                  <input
                    type="text"
                    name="company"
                    autoComplete="organization"
                    placeholder="Company"
                    className="rounded-xl px-4 py-3 border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#F1A501]"
                    style={{ fontFamily: '"Poppins", sans-serif', color: '#0A0A0A', background: 'rgba(255,255,255,0.92)' }}
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span style={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.85)' }}>What should we explore together?</span>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="What should we explore together?"
                    className="rounded-2xl px-4 py-3 border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#F1A501] resize-none"
                    style={{ fontFamily: '"Poppins", sans-serif', color: '#0A0A0A', background: 'rgba(255,255,255,0.92)' }}
                  />
                </label>
                <button
                  type="submit"
                  className="quick-brief-submit rounded-xl px-6 py-3 font-medium transition-transform duration-200"
                  style={{ fontFamily: '"Poppins", sans-serif', color: '#0A0A0A', background: 'linear-gradient(135deg, #F1A501, #FFC94A)', boxShadow: '0 18px 32px rgba(10,10,10,0.35)' }}
                >
                  Send brief
                </button>
                <p style={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>
                  Your information stays private and is only used to follow up on this enquiry.
                </p>
              </form>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 lg:px-16 mt-20">
          <div className="max-w-7xl mx-auto rounded-[30px] border border-white/10 p-8 md:p-12" style={{ background: 'linear-gradient(135deg, rgba(241,165,1,0.28), rgba(16,24,42,0.85))', boxShadow: '0 25px 50px rgba(0,0,0,0.35)' }}>
            <div className="grid gap-8 lg:grid-cols-[55%_45%] items-center">
              <div className="space-y-4">
                <h2 style={{ fontFamily: '"Volkhov", "Georgia", serif', fontSize: '40px', letterSpacing: '-0.01em', color: '#ffffff' }}>Let’s map your next release window.</h2>
                <p style={{ fontFamily: '"Poppins", sans-serif', fontSize: '16px', lineHeight: 1.7, color: 'rgba(255,255,255,0.82)' }}>
                  Share your product mission or technical constraints. We will respond with a tailored approach, including a draft roadmap and the specialists who will lead the charge.
                </p>
              </div>
              <div className="flex flex-col gap-4" style={{ fontFamily: '"Poppins", sans-serif' }}>
                <a
                  href="mailto:hello@systemminds.com"
                  className="rounded-xl px-6 py-3 text-center font-medium"
                  style={{ backgroundColor: '#0A0A0A', color: '#ffffff', border: '1px solid rgba(10,10,10,0.12)' }}
                >
                  hello@systemminds.com
                </a>
                <a
                  href="tel:+14155550123"
                  className="rounded-xl px-6 py-3 text-center font-medium"
                  style={{ backgroundColor: '#ffffff', color: '#0A0A0A', border: '1px solid rgba(10,10,10,0.12)' }}
                >
                  +1 (415) 555-0123
                </a>
              </div>
            </div>
          </div>
        </section>
        <style jsx="true">{`
          .learn-more-headline {
            font-size: 56px;
          }

          @media (max-width: 1024px) {
            .learn-more-headline {
              font-size: 48px;
            }
          }

          @media (max-width: 768px) {
            .learn-more-headline {
              font-size: 40px;
              line-height: 1.15;
            }
          }

          @media (max-width: 520px) {
            .learn-more-headline {
              font-size: 34px;
            }
          }

          .quick-brief-form input::placeholder,
          .quick-brief-form textarea::placeholder {
            color: rgba(74, 74, 74, 0.9);
            font-size: 13px;
            opacity: 1;
          }

          .quick-brief-submit:hover {
            transform: translateY(-2px);
            filter: brightness(1.08);
          }

          .quick-brief-submit:active {
            transform: translateY(0);
            filter: brightness(0.96);
          }
        `}</style>
      </main>
      <Footer />
    </div>
  )
}

export default AboutLearnMore

