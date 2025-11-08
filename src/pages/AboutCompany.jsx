import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

const highlightStyle = {
  fontFamily: '"Volkhov", "Georgia", serif',
  color: '#F1A501'
}

function AboutCompany() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: '#0A0A0A', color: '#ffffff' }}>
      <Header />
      <main className="relative z-10" style={{ paddingTop: '96px', paddingBottom: '80px' }}>
        <section className="px-6 md:px-12 lg:px-16">
          <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-[58%_42%] items-start">
            <div className="space-y-6">
              <p className="uppercase tracking-[0.28em]" style={{ fontFamily: '"Poppins", sans-serif', color: 'rgba(255,255,255,0.6)', fontSize: '13px' }}>Who we are</p>
              <h1 style={{ fontFamily: '"Volkhov", "Georgia", serif', fontSize: '58px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                Building reliable digital ecosystems for ambitious brands.
              </h1>
              <p style={{ fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif', fontSize: '18px', lineHeight: 1.7, color: 'rgba(255,255,255,0.76)' }}>
                SystemMinds is a product studio and engineering partner that blends strategy, design, and modern cloud-native delivery. From real-time platforms to AI-assisted workflows, we accelerate digital transformation with measurable impact.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { value: '120+', label: 'Specialists across engineering, design & strategy' },
                  { value: '18', label: 'Years crafting enterprise and consumer experiences' },
                  { value: '42', label: 'Markets served with localized product rollouts' },
                  { value: '96%', label: 'Client retention across multi-year engagements' }
                ].map((item) => (
                  <div key={item.value} className="rounded-3xl border border-white/10 px-6 py-5" style={{ background: 'rgba(15,23,42,0.45)', backdropFilter: 'blur(12px)' }}>
                    <span style={{ ...highlightStyle, fontSize: '36px', fontWeight: 700 }}>{item.value}</span>
                    <p style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px', lineHeight: 1.6, marginTop: '6px', color: 'rgba(255,255,255,0.72)' }}>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <div className="rounded-3xl border border-white/10 p-8" style={{ background: 'rgba(17,24,39,0.7)', backdropFilter: 'blur(16px)' }}>
                <h2 style={{ fontFamily: '"Volkhov", "Georgia", serif', fontSize: '28px', marginBottom: '16px' }}>Our Operating Model</h2>
                <ul className="space-y-4" style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.78)' }}>
                  <li><span style={highlightStyle}>Discovery sprints</span> to crystallize goals, user journeys, and KPIs.</li>
                  <li><span style={highlightStyle}>Modular architecture</span> using micro frontends, APIs, and event-driven systems.</li>
                  <li><span style={highlightStyle}>Design systems</span> that ensure brand-consistent, accessible interfaces.</li>
                  <li><span style={highlightStyle}>DevSecOps pipelines</span> for automated testing, governance, and release cadence.</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-white/10 p-8" style={{ background: 'rgba(17,24,39,0.6)', backdropFilter: 'blur(14px)' }}>
                <h3 style={{ fontFamily: '"Volkhov", "Georgia", serif', fontSize: '24px', marginBottom: '12px' }}>Global Delivery Hubs</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px', lineHeight: 1.6, color: 'rgba(255,255,255,0.75)' }}>
                  <div>
                    <p style={{ fontWeight: 600 }}>Bengaluru, IN</p>
                    <p>Product strategy, design leadership, AI labs</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: 600 }}>Berlin, DE</p>
                    <p>Data engineering, privacy compliance, IoT</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: 600 }}>Austin, US</p>
                    <p>Client success, cloud operations, integrations</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: 600 }}>Singapore</p>
                    <p>APAC delivery, fintech partnerships, localization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 lg:px-16 mt-20">
          <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-2">
            <div className="space-y-5">
              <p className="uppercase tracking-[0.24em]" style={{ fontFamily: '"Poppins", sans-serif', color: 'rgba(255,255,255,0.6)', fontSize: '12px' }}>Why choose us</p>
              <h2 style={{ fontFamily: '"Volkhov", "Georgia", serif', fontSize: '42px', letterSpacing: '-0.01em' }}>An end-to-end partnership you can scale with.</h2>
              <div className="grid gap-6">
                {[
                  { title: 'Strategy to execution', desc: 'Market research, product roadmapping, and GTM orchestration delivered in parallel with iterative design and development.' },
                  { title: 'Future-ready platforms', desc: 'Event-driven microservices, serverless components, and composable commerce implementations that evolve with your roadmap.' },
                  { title: 'Data & AI infused', desc: 'Analytics platforms, machine learning pipelines, and in-product intelligence that surfaces actionable insights for your teams.' }
                ].map((item) => (
                  <div key={item.title} className="rounded-3xl border border-white/10 p-6" style={{ background: 'rgba(30,41,59,0.55)', backdropFilter: 'blur(12px)' }}>
                    <h3 style={{ fontFamily: '"Volkhov", "Georgia", serif', fontSize: '22px', marginBottom: '10px' }}>{item.title}</h3>
                    <p style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px', lineHeight: 1.6, color: 'rgba(255,255,255,0.74)' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-6" style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.78)' }}>
              <div className="rounded-3xl border border-white/10 p-7" style={{ background: 'rgba(17,24,39,0.6)', backdropFilter: 'blur(10px)' }}>
                <h4 style={{ fontFamily: '"Volkhov", "Georgia", serif', fontSize: '20px', marginBottom: '8px' }}>Industries we accelerate</h4>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 list-disc list-inside">
                  <li>Fintech & Banking</li>
                  <li>Retail & eCommerce</li>
                  <li>Healthcare Platforms</li>
                  <li>Logistics & Supply Chain</li>
                  <li>Media & Telecom</li>
                  <li>Industrial IoT</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-white/10 p-7" style={{ background: 'rgba(17,24,39,0.6)', backdropFilter: 'blur(10px)' }}>
                <h4 style={{ fontFamily: '"Volkhov", "Georgia", serif', fontSize: '20px', marginBottom: '8px' }}>Delivery commitments</h4>
                <ul className="space-y-3 list-disc list-inside">
                  <li>Dedicated pods across discovery, design, engineering, and QA.</li>
                  <li>Transparent burn-up metrics and release cadences every two weeks.</li>
                  <li>Embedded platform reliability checks and performance budgets.</li>
                  <li>Continuous enablement to transition products to in-house teams.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 lg:px-16 mt-20">
          <div className="max-w-7xl mx-auto">
            <p className="uppercase tracking-[0.24em]" style={{ fontFamily: '"Poppins", sans-serif', color: 'rgba(255,255,255,0.6)', fontSize: '12px' }}>How we collaborate</p>
            <h2 style={{ fontFamily: '"Volkhov", "Georgia", serif', fontSize: '40px', marginBottom: '24px', letterSpacing: '-0.01em' }}>A transparent journey from brief to launch.</h2>
            <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
              {[
                { step: '01', title: 'Immersion', desc: 'Stakeholder workshops, customer interviews, and data audits to align on opportunities and guide success metrics.' },
                { step: '02', title: 'Experience Blueprint', desc: 'Concept validation, UX architecture, and design systems that inform backlog planning and tech decisions.' },
                { step: '03', title: 'Build & Measure', desc: 'Agile delivery with continuous integration, integrated analytics dashboards, and performance benchmarking.' },
                { step: '04', title: 'Scale & Evolve', desc: 'Post-launch optimization, A/B testing, platform engineering, and team enablement for long-term ownership.' }
              ].map((item) => (
                <div key={item.step} className="flex flex-col gap-3 rounded-3xl border border-white/10 p-6" style={{ background: 'rgba(24,33,52,0.6)', backdropFilter: 'blur(10px)' }}>
                  <span style={{ ...highlightStyle, fontSize: '32px', fontWeight: 700 }}>{item.step}</span>
                  <h3 style={{ fontFamily: '"Volkhov", "Georgia", serif', fontSize: '22px' }}>{item.title}</h3>
                  <p style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px', lineHeight: 1.6, color: 'rgba(255,255,255,0.75)' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 lg:px-16 mt-20">
          <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[55%_45%] items-start">
            <div className="space-y-6">
              <p className="uppercase tracking-[0.24em]" style={{ fontFamily: '"Poppins", sans-serif', color: 'rgba(255,255,255,0.6)', fontSize: '12px' }}>Leadership principles</p>
              <h2 style={{ fontFamily: '"Volkhov", "Georgia", serif', fontSize: '40px', letterSpacing: '-0.01em' }}>Led by technologists, strategists, and human-centered designers.</h2>
              <ul className="space-y-4" style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px', lineHeight: 1.6, color: 'rgba(255,255,255,0.78)' }}>
                <li><strong>Co-create with clients:</strong> Founding members join steering committees, driving accountability and clarity.</li>
                <li><strong>Mentor-driven culture:</strong> Guilds across frontend, backend, data, and UX ensure reusable patterns and best practices.</li>
                <li><strong>Inclusive innovation:</strong> Remote-first collaboration tools and quarterly hack weeks unlock cross-regional ideas.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 p-8 space-y-6" style={{ background: 'rgba(17,24,39,0.6)', backdropFilter: 'blur(12px)' }}>
              <div>
                <p style={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.6)' }}>People first</p>
                <h3 style={{ fontFamily: '"Volkhov", "Georgia", serif', fontSize: '24px', marginBottom: '10px' }}>Growth of our talent equals growth of our clients.</h3>
                <p style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px', lineHeight: 1.6, color: 'rgba(255,255,255,0.75)' }}>
                  Each squad pairs senior mentors with emerging specialists, supported by a 24/7 knowledge base, playbooks, and certification paths across cloud, security, and product craft.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px', lineHeight: 1.6, color: 'rgba(255,255,255,0.75)' }}>
                <div>
                  <p style={{ fontWeight: 600 }}>Impact programs</p>
                  <p>STEM scholarships, open-source contributions, and digital literacy for nonprofits.</p>
                </div>
                <div>
                  <p style={{ fontWeight: 600 }}>Sustainability</p>
                  <p>Green cloud assessments, carbon footprint dashboards, and paperless operations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 lg:px-16 mt-20">
          <div className="max-w-7xl mx-auto rounded-3xl border border-white/10 p-8 md:p-12" style={{ background: 'linear-gradient(135deg, rgba(241,165,1,0.18), rgba(241,165,1,0.05))', boxShadow: '0 25px 45px rgba(0,0,0,0.35)' }}>
            <div className="grid gap-10 lg:grid-cols-[60%_40%] items-center">
              <div className="space-y-4">
                <h2 style={{ fontFamily: '"Volkhov", "Georgia", serif', fontSize: '38px', letterSpacing: '-0.01em' }}>Let’s architect your next leap.</h2>
                <p style={{ fontFamily: '"Poppins", sans-serif', fontSize: '16px', lineHeight: 1.7, color: 'rgba(15,15,15,0.78)' }}>
                  From SaaS modernization to AI-led customer experiences, we embed with your teams to launch reliable solutions. Share your challenge and we’ll translate it into a roadmap within days.
                </p>
              </div>
              <div className="flex flex-col gap-4" style={{ fontFamily: '"Poppins", sans-serif' }}>
                <a
                  href="mailto:hello@systemminds.com"
                  className="rounded-xl px-6 py-3 text-center font-medium"
                  style={{ backgroundColor: '#0A0A0A', color: '#ffffff', border: '1px solid rgba(255,255,255,0.12)' }}
                >
                  hello@systemminds.com
                </a>
                <a
                  href="tel:+14155550123"
                  className="rounded-xl px-6 py-3 text-center font-medium"
                  style={{ backgroundColor: '#ffffff', color: '#0A0A0A', border: '1px solid rgba(255,255,255,0.12)' }}
                >
                  +1 (415) 555-0123
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default AboutCompany
