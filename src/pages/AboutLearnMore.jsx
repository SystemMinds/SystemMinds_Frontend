import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

const highlightStyle = {
  fontFamily: '"Volkhov", "Georgia", serif',
  color: '#F1A501'
}

const testimonialItems = [
  {
    quote: '“We write clean, reusable, and future-ready code so products stay easy to enhance long after launch.”',
    name: 'Craftsmanship',
    title: 'Clean code and simple design that lasts'
  },
  {
    quote: '“Transparent collaboration keeps every milestone on track and every stakeholder in the loop.”',
    name: 'Collaboration',
    title: 'Agile rituals, open communication, shared ownership'
  },
  {
    quote: '“We blend innovation with practicality to deliver measurable business value—fast.”',
    name: 'Impact',
    title: 'Innovation with a results-driven mindset'
  }
]

const timeline = [
  {
    phase: 'Who We Are',
    headline: 'Passionate builders',
    detail:
      'We are developers, designers, and tech enthusiasts driven by innovation and problem-solving. Every engagement is treated as our own, meeting rigorous standards for quality, security, and performance.'
  },
  {
    phase: 'What We Do',
    headline: 'End-to-end delivery',
    detail:
      'From web and mobile apps to APIs, cloud deployments, and enterprise platforms, we craft reusable, scalable architectures tailored to each business—ensuring your software grows alongside your ambitions.'
  },
  {
    phase: 'Our Vision',
    headline: 'Innovation that scales',
    detail:
      'We aim to be the trusted technology partner for startups, SMEs, and enterprises—building solutions that simplify work, connect people, and fuel growth.'
  },
  {
    phase: 'Our Mission',
    headline: 'Impact through technology',
    detail:
      'We deliver modern, affordable digital solutions that make life easier for teams and customers alike, turning ideas into smart, scalable realities.'
  }
]

const capabilityGroups = [
  {
    label: 'Services we deliver',
    items: [
      'Website and web application development',
      'Mobile app development with React Native',
      'Backend systems and API development',
      'Cloud deployment and integration',
      'Custom business software solutions',
      'Maintenance and continuous support'
    ]
  },
  {
    label: 'Frontend expertise',
    items: ['HTML · CSS · JavaScript', 'React.js & React Native', 'Tailwind CSS', 'Bootstrap']
  },
  {
    label: 'Backend expertise',
    items: ['Java · Python', 'Spring Boot · Spring MVC · Spring Security', 'Microservices · Hibernate']
  },
  {
    label: 'Additional tools',
    items: ['API integration & deployment', 'Spring Batch', 'Spring AI', 'MySQL · PostgreSQL · MongoDB · SQL']
  }
]

const contactCards = [
  {
    label: 'Start a project',
    description: 'Share your challenge and we will shape a roadmap that fits your goals and timelines.',
    email: 'hello@systemminds.com',
    phone: '+1 (415) 555-0123'
  },
  {
    label: 'Partner with us',
    description: 'Agencies, startups, and enterprises collaborate with us to co-build scalable digital products.',
    email: 'partnerships@systemminds.com',
    phone: '+49 30 1234 9876'
  },
  {
    label: 'Join the team',
    description: 'Developers, designers, and strategists who love clean code and modern delivery are welcome.',
    email: 'careers@systemminds.com',
    phone: '+91 80 4567 8900'
  }
]

const snapshotItems = [
  {
    label: 'End-to-end builds',
    caption: 'Web, mobile, API, and enterprise solutions tailored to your product vision.',
    gradient: 'linear-gradient(135deg, rgba(241,165,1,0.22), rgba(241,165,1,0.05))'
  },
  {
    label: 'Technology stack',
    caption: 'React, Spring Boot, Python, and cloud-native tooling ready for scale.',
    gradient: 'linear-gradient(135deg, rgba(56,189,248,0.24), rgba(12,74,110,0.4))'
  },
  {
    label: 'Quality by design',
    caption: 'Reusable codebases, automated checks, and secure delivery standards.',
    gradient: 'linear-gradient(135deg, rgba(192,132,252,0.28), rgba(76,29,149,0.45))'
  },
  {
    label: 'Partnership focus',
    caption: 'Transparent collaboration keeps launches fast and dependable.',
    gradient: 'linear-gradient(135deg, rgba(134,239,172,0.28), rgba(21,128,61,0.35))'
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
                  ABOUT SYSTEMMINDS
                </span>
                <h1
                  className="learn-more-headline"
                  style={{ fontFamily: '"Volkhov", "Georgia", serif', fontSize: '56px', lineHeight: 1.1, letterSpacing: '-0.02em' }}
                >
                  Smart, scalable software delivered with care.
                </h1>
                <div className="space-y-4">
                  <p style={{ fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif', fontSize: '18px', lineHeight: 1.7, color: 'rgba(255,255,255,0.8)' }}>
                    SystemMinds is a fast-growing IT solutions startup focused on delivering modern, efficient, and scalable digital products that transform ideas into reality.
                  </p>
                  <p style={{ fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif', fontSize: '18px', lineHeight: 1.7, color: 'rgba(255,255,255,0.8)' }}>
                    We specialise in building web applications, mobile apps, APIs, and enterprise solutions that empower businesses to move faster with confidence.
                  </p>
                  <p style={{ fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif', fontSize: '18px', lineHeight: 1.7, color: 'rgba(255,255,255,0.8)' }}>
                    Our team blends creativity, technical expertise, and a results-driven mindset to craft clean, reusable, high-performance software.
                  </p>
                  <p style={{ fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif', fontSize: '18px', lineHeight: 1.7, color: 'rgba(255,255,255,0.8)' }}>
                    We focus on reusable, scalable architectures built with React.js, Java, Python, Spring Boot, and modern frontend frameworks—and we are constantly learning, adapting, and improving to stay ahead in an ever-changing tech landscape.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { badge: 'IT SOLUTIONS', text: 'Fast-growing startup delivering modern, scalable, and reliable digital products.' },
                    { badge: 'FULL-STACK DELIVERY', text: 'Web, mobile, API, and enterprise systems tailored to every stage of growth.' },
                    { badge: 'CLEAN CODE', text: 'Reusable architectures engineered for performance, security, and longevity.' },
                    { badge: 'DESIGN + BUILD', text: 'Simple, thoughtful experiences powered by smart engineering.' }
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
                <div
                  className="relative h-full w-full flex flex-col border-l border-white/10"
                  style={{ background: 'rgba(8,15,27,0.85)', backdropFilter: 'blur(18px)', justifyContent: 'flex-start', gap: '28px' }}
                >
                  <div className="p-8 md:p-10 space-y-5">
                    <h2 style={{ fontFamily: '"Volkhov", "Georgia", serif', fontSize: '28px', lineHeight: 1.2 }}>At a glance</h2>
                    <p style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.72)' }}>
                      SystemMinds is a dynamic IT solutions startup crafting modern, scalable, and reliable digital products across platforms.
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
                      { label: 'Focus areas', value: 'Web, mobile, APIs, and enterprise solutions' },
                      { label: 'Tech foundation', value: 'React, Java, Python, Spring Boot, and modern frameworks' },
                      { label: 'Ways of working', value: 'Transparent communication and agile practices' },
                      { label: 'Long-term value', value: 'Partnerships that evolve with your business' }
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
            <p className="uppercase tracking-[0.24em]" style={{ fontFamily: '"Poppins", sans-serif', color: 'rgba(255,255,255,0.55)', fontSize: '12px' }}>Our narrative</p>
            <h2 style={{ fontFamily: '"Volkhov", "Georgia", serif', fontSize: '42px', marginBottom: '24px', marginTop: '10px', letterSpacing: '-0.01em' }}>Who we are, what we do, and where we’re heading.</h2>
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
              <p className="uppercase tracking-[0.24em]" style={{ fontFamily: '"Poppins", sans-serif', color: 'rgba(255,255,255,0.58)', fontSize: '12px' }}>Why choose SystemMinds</p>
              <h3 style={{ fontFamily: '"Volkhov", "Georgia", serif', fontSize: '34px', lineHeight: 1.2 }}>Innovation and reliability in every build.</h3>
              <p style={{ fontFamily: '"Poppins", sans-serif', fontSize: '16px', lineHeight: 1.8, color: 'rgba(255,255,255,0.75)' }}>
                Our vision is to become a trusted technology partner for startups, SMEs, and enterprises worldwide by blending innovation with reliability. Our mission is to empower businesses with smart, affordable, modern digital solutions that deliver measurable impact.
              </p>
              <div className="grid gap-4">
                {[
                  { title: 'Clean, reusable code', desc: 'Future-ready architectures keep your software maintainable and scalable.' },
                  { title: 'Transparent collaboration', desc: 'Open communication and agile practices keep every milestone on track.' },
                  { title: 'On-time delivery', desc: 'A disciplined, results-driven approach ensures quality and performance every release.' },
                  { title: 'Long-term partnerships', desc: 'We stay invested after launch with support built for growth.' }
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 p-4" style={{ background: 'rgba(16,24,40,0.7)' }}>
                    <p style={{ fontFamily: '"Volkhov", "Georgia", serif', fontSize: '18px', color: '#F1A501' }}>{item.title}</p>
                    <p style={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px', lineHeight: 1.6, color: 'rgba(255,255,255,0.76)', marginTop: '6px' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[26px] border border-white/10 p-8 xl:p-10" style={{ background: 'rgba(13,20,35,0.78)', backdropFilter: 'blur(16px)', fontFamily: '"Poppins", sans-serif' }}>
              <p className="uppercase tracking-[0.24em]" style={{ color: 'rgba(255,255,255,0.58)', fontSize: '12px' }}>Our expertise</p>
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
            <p className="uppercase tracking-[0.24em]" style={{ fontFamily: '"Poppins", sans-serif', color: 'rgba(255,255,255,0.58)', fontSize: '12px' }}>What sets us apart</p>
            <h2 style={{ fontFamily: '"Volkhov", "Georgia", serif', fontSize: '40px', marginTop: '12px', marginBottom: '28px', letterSpacing: '-0.01em' }}>Principles that guide every partnership.</h2>
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
              <p className="uppercase tracking-[0.24em]" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px' }}>Let’s work together</p>
              <h2 style={{ fontFamily: '"Volkhov", "Georgia", serif', fontSize: '36px', lineHeight: 1.2 }}>Design, build, and scale your next big idea.</h2>
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
                <h2 style={{ fontFamily: '"Volkhov", "Georgia", serif', fontSize: '40px', letterSpacing: '-0.01em', color: '#ffffff' }}>Let’s shape the future of technology together.</h2>
                <p style={{ fontFamily: '"Poppins", sans-serif', fontSize: '16px', lineHeight: 1.7, color: 'rgba(255,255,255,0.82)' }}>
                  SystemMinds is your technology partner for building modern, scalable, and reliable digital products—from concept to continuous improvement.
                </p>
                <p style={{ fontFamily: '"Poppins", sans-serif', fontSize: '16px', lineHeight: 1.7, color: 'rgba(255,255,255,0.82)' }}>
                  Tell us about the opportunity, and we will respond with a tailored approach, a suggested roadmap, and the specialists ready to bring it to life. Together, let’s shape the future of technology—one solution at a time.
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

