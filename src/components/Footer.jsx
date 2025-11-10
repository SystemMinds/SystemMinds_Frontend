import React from 'react'
import logoImage from '../assets/images/Logo.png'

const brandFont = '"Poppins", sans-serif'
const serifFont = '"Volkhov", "Georgia", serif'

function Footer() {
  const currentYear = new Date().getFullYear()

const columns = [
  {
    heading: 'Contact',
    items: [
      { label: 'hello@systemminds.com', href: 'mailto:hello@systemminds.com' },
      { label: '+1 (415) 555-0123', href: 'tel:+14155550123' },
      { label: 'Bengaluru · Remote-first', href: null }
    ]
  },
  {
    heading: 'Services',
    items: [
      { label: 'Product Sprints' },
      { label: 'UI Engineering' },
      { label: 'Cloud Setup' },
      { label: 'QA Automation' },
      { label: 'Care Plans' }
    ]
  },
  {
    heading: 'Resources',
    items: [
      { label: 'Playbooks' },
      { label: 'Case Stories' },
      { label: 'Newsletter' },
      { label: 'Careers' },
      { label: 'Press Room' }
    ]
  }
]
  const [openSections, setOpenSections] = useState({})

  const footerSections = [
    {
      title: 'Company',
      links: [
        { label: 'About SystemMinds', href: '/about-company' },
        { label: 'Young minds building reliable digital products', href: '/about-company' },
        { label: 'Projects we deliver', href: '/about-company' },
        { label: 'Our work principles', href: '/about-company' },
        { label: 'Let’s build something great together', href: '/about-company' },
      ],
    },
    {
      title: 'Capabilities',
      links: [
        { label: 'Product intelligence', href: '/about-learn-more' },
        { label: 'Experience architecture', href: '/about-learn-more' },
        { label: 'Modern delivery', href: '/about-learn-more' },
        { label: 'Enablement & scaling', href: '/about-learn-more' },
        { label: 'Outcome dashboards & control tower', href: '/about-learn-more' },
      ],
    },
    {
      title: 'Engagements',
      links: [
        { label: 'Launch readiness · Weeks 0–4', href: '/about-learn-more' },
        { label: 'Momentum sprints · Weeks 5–12', href: '/about-learn-more' },
        { label: 'Scale & transfer · Weeks 13+', href: '/about-learn-more' },
        { label: 'Hybrid pods & signal loops', href: '/about-learn-more' },
        { label: 'Telemetry-led releases', href: '/about-learn-more' },
      ],
    },
    {
      title: 'Ways to partner',
      links: [
        { label: 'Co-create a roadmap', href: 'mailto:hello@systemminds.com' },
        { label: 'Join forces as a partner', href: 'mailto:partnerships@systemminds.com' },
        { label: 'Careers & guilds', href: 'mailto:careers@systemminds.com' },
        { label: 'Quick brief', href: '/about-learn-more' },
        { label: 'Studio availability', href: '/about-learn-more' },
      ],
    },
    {
      title: 'Stay connected',
      links: [
        { label: 'hello@systemminds.com', href: 'mailto:hello@systemminds.com' },
        { label: '+1 (415) 555-0123', href: 'tel:+14155550123' },
        { label: '+49 30 1234 9876', href: 'tel:+493012349876' },
        { label: '+91 80 4567 8900', href: 'tel:+918045678900' },
        { label: 'Studios: Bengaluru · Pune · Berlin', href: null },
      ],
    },
  ]

  const contactHighlights = [
    {
      label: 'Co-create a roadmap',
      description: 'Bring a product challenge, we respond with a working session agenda within 24 hours.',
      email: 'hello@systemminds.com',
      phone: '+1 (415) 555-0123',
    },
    {
      label: 'Join forces as a partner',
      description: 'Product firms, agencies, and venture studios collaborate with our pods globally.',
      email: 'partnerships@systemminds.com',
      phone: '+49 30 1234 9876',
    },
    {
      label: 'Careers & guilds',
      description: 'Engineers, designers, and product strategists who love modern delivery join our guilds.',
      email: 'careers@systemminds.com',
      phone: '+91 80 4567 8900',
    },
  ]

  const toggleSection = (title) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  return (
    <footer className="text-white" style={{ backgroundColor: '#07090f', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="border-b border-white/10" style={{ background: 'rgba(10,12,18,0.9)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-12 xl:px-16 py-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2">
            <p style={{ fontFamily: brandFont, fontSize: '12px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>
              Subscribe to our
            </p>
            <div className="flex items-center gap-3">
              <img src={logoImage} alt="SystemMinds logo" style={{ width: '44px', height: '44px', objectFit: 'contain' }} />
              <h3 style={{ fontFamily: serifFont, fontSize: '26px', letterSpacing: '-0.02em' }}>SystemMinds</h3>
            </div>
          </div>
          <form
            className="w-full md:max-w-lg"
            onSubmit={(event) => {
              event.preventDefault()
              event.currentTarget.reset()
            }}
          >
            <div className="flex items-center rounded-full border border-white/15 px-3 py-1.5" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
              <input
                type="email"
                required
                placeholder="Enter email address"
                className="flex-1 bg-transparent px-2 py-1 focus:outline-none text-sm sm:text-base"
                style={{ fontFamily: brandFont, color: '#ffffff' }}
              />
              <button
                type="submit"
                className="rounded-full px-5 py-2 text-xs sm:text-sm"
                style={{ fontFamily: brandFont, fontWeight: 500, letterSpacing: '0.08em', backgroundColor: '#F1A501', color: '#0A0A0A', border: '1px solid rgba(255,255,255,0.2)' }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-12 xl:px-16 py-8">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          {columns.map((column) => (
            <div key={column.heading} className="space-y-3">
              <p style={{ fontFamily: brandFont, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.18em' }}>{column.heading}</p>
              <ul className="space-y-2">
                {column.items.map((item) => (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        style={{
                          fontFamily: brandFont,
                          fontSize: '14px',
                          color: 'rgba(255,255,255,0.7)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '10px'
                        }}
                      >
                        <span style={{ width: '6px', height: '6px', borderRadius: '999px', backgroundColor: 'rgba(255,255,255,0.4)' }} />
                        {item.label}
                      </a>
                    ) : (
                      <span
                        style={{
                          fontFamily: brandFont,
                          fontSize: '14px',
                          color: 'rgba(255,255,255,0.7)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '10px'
                        }}
                      >
                        <span style={{ width: '6px', height: '6px', borderRadius: '999px', backgroundColor: 'rgba(255,255,255,0.4)' }} />
                        {item.label}
                      </span>
                    )}
                  </li>
                ))}

              <ul
                className={`space-y-2 ${
                  openSections[section.title] ? 'block' : 'hidden md:block'
                }`}
              >
                {section.links.map((link, linkIndex) => {
                  const linkItem = typeof link === 'string' ? { label: link } : link
                  return (
                    <li key={linkIndex}>
                      {linkItem.href ? (
                        <a
                          href={linkItem.href}
                          className="text-sm hover:text-white transition-colors"
                          style={{ 
                            fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                            fontWeight: 400,
                            fontSize: '12px'
                          }}
                        >
                          {linkItem.label}
                        </a>
                      ) : (
                        <span
                          className="text-sm text-gray-400"
                          style={{ 
                            fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                            fontWeight: 400,
                            fontSize: '12px'
                          }}
                        >
                          {linkItem.label}
                        </span>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p style={{ fontFamily: brandFont, fontSize: '13px', color: 'rgba(255,255,255,0.58)' }}>
            © {currentYear} SystemMinds. Building dependable digital products for ambitious teams.
        {/* Footer Notes */}
        <div 
          className="border-t border-gray-300 pt-6 space-y-4 text-xs"
          style={{ 
            fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
            fontWeight: 400,
            fontSize: '11px',
            lineHeight: '1.5'
          }}
        >
          <p>
            SystemMinds is a founder-led studio turning ideas into resilient digital products for startups, academic teams, and growing businesses.
            We blend strategy, design, engineering, and managed services so every release feels orchestrated, measured, and ready for scale.
          </p>
          <p>
            From idea-to-execution sprints to long-term platform stewardship, we operate with full-stack fluency across React, Spring Boot, modern APIs,
            and cloud-native architectures. Dual-track discovery and delivery ensure each iteration ships value while keeping codebases maintainable.
          </p>
          <p>
            Engagements begin with launch readiness in weeks 0–4, accelerate momentum through weeks 5–12, and transition to scale and transfer from week 13 onward.
            Hybrid pods, signal loops, and telemetry dashboards provide the visibility needed to align product, design, engineering, and finance.
          </p>
          <p>
            Guilds, playbooks, and partner success channels keep teams enabled long after go-live—supported by studios in India, Europe, and North America with a remote-first backbone.
          </p>
          <div className="flex flex-wrap gap-4" style={{ fontFamily: brandFont, fontSize: '13px' }}>
            <a href="#" style={{ color: 'rgba(255,255,255,0.65)' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.65)' }}>Terms</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.65)' }}>Contact</a>
          </div>
        </div>
        </div>

        {/* Contact Highlights */}
        <div className="mt-10 p-6 md:p-8">
          <div
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            style={{
              fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
            }}
          >
            {contactHighlights.map((card) => (
              <div
                key={card.label}
                className="flex flex-col gap-2 p-1"
              >
                <p
                  className="text-sm text-[#F1A501]"
                  style={{ fontWeight: 600, fontSize: '12px', letterSpacing: '-0.01em' }}
                >
                  {card.label}
                </p>
                <p
                  className="text-sm text-gray-300"
                  style={{ fontSize: '12px', lineHeight: 1.6, color: 'rgba(255,255,255,0.78)' }}
                >
                  {card.description}
                </p>
                <div className="flex flex-col gap-1 text-sm">
                  <a
                    href={`mailto:${card.email}`}
                    className="hover:text-white transition-colors"
                    style={{ fontSize: '12px', color: '#ffffff' }}
                  >
                    {card.email}
                  </a>
                  <a
                    href={`tel:${card.phone.replace(/[^+\d]/g, '')}`}
                    className="hover:text-white transition-colors"
                    style={{ fontSize: '12px', color: 'rgba(255,255,255,0.72)' }}
                  >
                    {card.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-300 pt-6 mt-6">
          <div 
            className="flex flex-col md:flex-row justify-between items-center text-xs"
            style={{ 
              fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: 400,
              fontSize: '11px'
            }}
          >
            <p>© {new Date().getFullYear()} SystemMind Technologies Pvt. Ltd. All rights reserved.</p>
            <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:underline">
                Master Services Agreement
              </a>
              <a href="#" className="hover:underline">
                Service Level Commitment
              </a>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline">
                Cookie Preferences
              </a>
              <a href="#" className="hover:underline">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer
