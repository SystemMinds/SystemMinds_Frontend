import React, { useState } from 'react'

function Footer() {
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
    <footer className="relative text-gray-400" style={{ backgroundColor: 'transparent', overflow: 'hidden' }}>
      <div className="relative z-10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 mb-8">
          {footerSections.map((section, index) => (
            <div key={index} className="mb-4">
              {/* Desktop View */}
              <h4 
                className="font-semibold text-white mb-3 hidden md:block"
                style={{ 
                  fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                  fontWeight: 600,
                  fontSize: '12px'
                }}
              >
                {section.title}
              </h4>
              
              {/* Mobile Accordion */}
              <button
                className="md:hidden w-full flex items-center justify-between font-semibold text-white mb-3"
                onClick={() => toggleSection(section.title)}
                style={{ 
                  fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                  fontWeight: 600,
                  fontSize: '12px'
                }}
              >
                <span>{section.title}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    openSections[section.title] ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

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

