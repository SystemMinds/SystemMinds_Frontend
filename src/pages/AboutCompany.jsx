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
        {/* Who We Are */}
        <section className="px-6 md:px-12 lg:px-16">
          <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-[58%_42%] items-start">
            <div className="space-y-6">
              <p className="uppercase tracking-[0.28em]" style={{ fontFamily: '"Poppins", sans-serif', color: 'rgba(255,255,255,0.6)', fontSize: '12px' }}>Who we are</p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ fontFamily: '"Volkhov", "Georgia", serif', lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '16px', color: '#ffffff' }}>
                Turning simple ideas into full-stack digital experiences.
              </h1>
              <p className="about-company-description" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.85)' }}>
              We are a dynamic and innovative startup dedicated to delivering reliable, modern, and scalable digital solutions that empower businesses to grow in the ever-evolving digital landscape. With a strong foundation in technology and a deep understanding of user experience, we specialize in creating impactful products tailored to each client's unique needs. Our expertise spans across building eCommerce platforms, management systems, and custom service-based applications, designed to enhance efficiency and drive measurable results. By combining creativity, technical excellence, and a results-driven approach, we help businesses transform their ideas into powerful digital realities — ensuring quality, innovation, and long-term success in every project we undertake.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { value: '2+', label: 'Founders passionate about full-stack development' },
                  { value: '15+', label: 'Projects delivered across academic and small businesses' },
                  { value: '20+', label: 'Technologies mastered across frontend, backend, and cloud' },
                  { value: '100%', label: 'Commitment to learning and client satisfaction' }
                ].map((item) => (
                  <div key={item.value} className="rounded-3xl border border-white/10 px-6 py-5" style={{ background: 'rgba(15,23,42,0.45)', backdropFilter: 'blur(12px)' }}>
                    <span style={{ ...highlightStyle, fontSize: '36px', fontWeight: 700 }}>{item.value}</span>
                    <p style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 400, fontSize: '13px', lineHeight: 1.6, marginTop: '6px', color: 'rgba(255, 255, 255, 0.85)' }}>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <div className="rounded-3xl border border-white/10 p-8" style={{ background: 'rgba(17,24,39,0.7)', backdropFilter: 'blur(16px)' }}>
                <h2 style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 600, fontSize: '14px', marginBottom: '12px', color: '#ffffff' }}>Our Development Approach</h2>
                <ul className="space-y-4" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 400, fontSize: '13px', lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.85)' }}>
                  <li><span style={highlightStyle}>Idea to Execution</span> – from basic concepts to real-world deployment.</li>
                  <li><span style={highlightStyle}>Full-stack development</span> – using React, Spring Boot, and modern APIs.</li>
                  <li><span style={highlightStyle}>Iterative delivery</span> – we build, test, and improve continuously.</li>
                  <li><span style={highlightStyle}>Practical learning</span> – every project helps us grow technically and creatively.</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-white/10 p-8" style={{ background: 'rgba(17,24,39,0.6)', backdropFilter: 'blur(14px)' }}>
                <h3 style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 600, fontSize: '14px', marginBottom: '12px', color: '#ffffff' }}>Our Core Technologies</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 400, fontSize: '13px', lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.85)' }}>
                  {[
                    'HTML', 'CSS', 'JavaScript', 'React.js', 'React Native', 'Bootstrap', 'Tailwind CSS',
                    'Java', 'Python', 'Spring Boot', 'Microservices', 'Hibernate', 'SQL', 'MySQL',
                    'MongoDB', 'PostgreSQL', 'Spring Security', 'Spring MVC', 'Spring IOC', 'Spring Batch', 'Spring AI'
                  ].map((tech) => (
                    <div key={tech} className="border border-white/10 rounded-xl px-3 py-2 text-center bg-[rgba(24,33,52,0.4)]">{tech}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="px-6 md:px-12 lg:px-12 mt-10">
          <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-2">
            <div className="space-y-5">
              <p className="uppercase tracking-[0.24em]" style={{ fontFamily: '"Poppins", sans-serif', color: 'rgba(255,255,255,0.6)', fontSize: '12px' }}>Why choose us</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ fontFamily: '"Volkhov", "Georgia", serif', lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '16px', color: '#ffffff' }}>Young minds building reliable digital products.</h2>
              <div className="grid gap-6">
                {[
                  { title: 'Passionate Development', desc: 'Every project we take is crafted with dedication, experimentation, and focus on learning.' },
                  { title: 'Real-world Experience', desc: 'From college projects to business platforms, we create solutions that solve actual problems.' },
                  { title: 'End-to-End Delivery', desc: 'We handle everything – from frontend design to backend APIs and deployment.' }
                ].map((item) => (
                  <div key={item.title} className="rounded-3xl border border-white/10 p-6" style={{ background: 'rgba(30,41,59,0.55)', backdropFilter: 'blur(12px)' }}>
                    <h3 style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 600, fontSize: '14px', marginBottom: '8px', color: '#ffffff' }}>{item.title}</h3>
                    <p style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 400, fontSize: '13px', lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.85)' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.85)' }}>
              <div className="rounded-3xl border border-white/10 p-7" style={{ background: 'rgba(17,24,39,0.6)', backdropFilter: 'blur(10px)' }}>
                <h4 style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 600, fontSize: '14px', marginBottom: '8px', color: '#ffffff' }}>Projects we work on</h4>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 list-disc list-inside">
                  <li>College & academic projects</li>
                  <li>E-commerce platforms</li>
                  <li>Portfolio & profile systems</li>
                  <li>Service-based dashboards</li>
                  <li>Management tools</li>
                  <li>API integrations</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-white/10 p-7" style={{ background: 'rgba(17,24,39,0.6)', backdropFilter: 'blur(10px)' }}>
                <h4 style={{ fontFamily: '"Volkhov", "Georgia", serif', fontSize: '20px', marginBottom: '8px' }}>Our Work Principles</h4>
                <ul className="space-y-3 list-disc list-inside">
                  <li>Build scalable and maintainable systems.</li>
                  <li>Focus on clean code and practical design.</li>
                  <li>Deploy projects on reliable cloud platforms.</li>
                  <li>Keep learning and improving every day.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Collaboration */}
        <section className="px-6 md:px-12 lg:px-16 mt-20">
          <div className="max-w-7xl mx-auto">
            <p className="uppercase tracking-[0.24em]" style={{ fontFamily: '"Poppins", sans-serif', color: 'rgba(255,255,255,0.6)', fontSize: '12px' }}>How we collaborate</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ fontFamily: '"Volkhov", "Georgia", serif', lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '24px', color: '#ffffff' }}>Our process from idea to deployment.</h2>
            <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
              {[
                { step: '01', title: 'Plan', desc: 'Understand the problem and create a roadmap for the project.' },
                { step: '02', title: 'Design', desc: 'Craft clean and user-friendly interfaces for web or mobile.' },
                { step: '03', title: 'Develop', desc: 'Write scalable code for frontend, backend, and databases.' },
                { step: '04', title: 'Deploy', desc: 'Host the project on cloud platforms with full functionality.' }
              ].map((item) => (
                <div key={item.step} className="flex flex-col gap-3 rounded-3xl border border-white/10 p-6" style={{ background: 'rgba(24,33,52,0.6)', backdropFilter: 'blur(10px)' }}>
                  <span style={{ ...highlightStyle, fontSize: '32px', fontWeight: 700 }}>{item.step}</span>
                  <h3 style={{ fontFamily: '"Volkhov", "Georgia", serif', fontSize: '22px' }}>{item.title}</h3>
                  <p style={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px', lineHeight: 1.6, color: 'rgba(255,255,255,0.75)' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 md:px-12 lg:px-16 mt-20">
          <div className="max-w-7xl mx-auto rounded-3xl border border-white/10 p-8 md:p-12" style={{ background: 'linear-gradient(135deg, rgba(241,165,1,0.18), rgba(241,165,1,0.05))', boxShadow: '0 25px 45px rgba(0,0,0,0.35)' }}>
            <div className="grid gap-10 lg:grid-cols-[60%_40%] items-center">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ fontFamily: '"Volkhov", "Georgia", serif', lineHeight: 1.2, letterSpacing: '-0.02em', color: '#ffffff' }}>Let's build something great together.</h2>
                <p style={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px', lineHeight: 1.6, color: 'rgba(255,255,255,0.85)' }}>
                  Whether it's a college project, startup idea, or a small-scale business platform — we can help you design, develop, and deploy it using the latest technologies and best practices.
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
      <style jsx="true">{`
        @keyframes responsiveFontSize {
          0%, 100% {
            font-size: 14px;
          }
        }
        @media (max-width: 1024px) {
          .about-company-description {
            font-size: 13px !important;
          }
        }
        @media (max-width: 768px) {
          .about-company-description {
            font-size: 13px !important;
          }
        }
        @media (max-width: 640px) {
          .about-company-description {
            font-size: 12px !important;
          }
        }
      `}</style>
    </div>
  )
}

export default AboutCompany
