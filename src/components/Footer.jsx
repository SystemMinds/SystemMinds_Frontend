import React, { useState } from 'react'

function Footer() {
  const [openSections, setOpenSections] = useState({})

  const footerSections = [
    {
      title: 'Company',
      links: [
        'About SystemMind',
        'Leadership',
        'Careers',
        'Press & Media',
        'Contact',
      ],
    },
    {
      title: 'Solutions',
      links: [
        'AI & Automation',
        'Product Engineering',
        'Digital Experience Platforms',
        'Cloud Modernisation',
        'Data & Analytics',
      ],
    },
    {
      title: 'Services',
      links: [
        'Discovery Workshops',
        'Design Systems',
        'Full-stack Development',
        'DevOps & SRE',
        'Managed Support',
      ],
    },
    {
      title: 'Industries',
      links: [
        'Fintech',
        'Healthcare',
        'Retail & E-commerce',
        'SaaS & Platforms',
        'Public Sector',
      ],
    },
    {
      title: 'Resources',
      links: [
        'Case Studies',
        'Our Playbooks',
        'Insights & Blog',
        'Events & Webinars',
        'Brand Assets',
      ],
    },
    {
      title: 'Legal',
      links: [
        'Privacy Policy',
        'Security Practices',
        'Responsible Disclosure',
        'Terms of Service',
        'Vendor Code of Conduct',
      ],
    },
    {
      title: 'Partners',
      links: [
        'AWS',
        'Google Cloud',
        'Microsoft Azure',
        'OpenAI',
        'UiPath',
      ],
    },
    {
      title: 'Community',
      links: [
        'SystemMind Foundation',
        'Tech for Good',
        'Meetups',
        'Open Source',
        'Diversity & Inclusion',
      ],
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
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-sm hover:text-white transition-colors"
                      style={{ 
                        fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                        fontWeight: 400,
                        fontSize: '12px'
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
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
            SystemMind partners with product and technology leaders to accelerate digital roadmaps. Our teams blend
            strategy, design, engineering, and managed services to launch resilient platforms that scale with demand.
          </p>
          <p>
            We operate hybrid squads across India, Europe, and North America, ensuring around-the-clock collaboration
            and coverage. Engagement models include fixed scope accelerators, co-innovation pods, and dedicated
            product teams supported by our reliability command center.
          </p>
          <p>
            Looking for a tailored solution? Book a discovery call and we’ll map a sprint-ready plan within three
            business days. Pricing is transparent, milestone-driven, and aligned to measurable outcomes.
          </p>
          <p>
            Data security commitments: ISO 27001 in progress, SOC 2 Type II under audit, GDPR compliant, and supported
            by quarterly penetration testing.
          </p>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-300 pt-6 mt-6">
          <div 
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
            style={{ 
              fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: 400,
              fontSize: '11px'
            }}
          >
            <p className="text-xs">
              Want to visit us? Schedule a studio tour in Bengaluru, Pune, or Berlin. Call +91 80471 22331.
            </p>
            <p className="text-xs">Global · Remote-first</p>
          </div>
          <div 
            className="mt-6 pt-6 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-xs"
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

