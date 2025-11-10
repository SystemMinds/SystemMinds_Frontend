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
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p style={{ fontFamily: brandFont, fontSize: '13px', color: 'rgba(255,255,255,0.58)' }}>
            © {currentYear} SystemMinds. Building dependable digital products for ambitious teams.
          </p>
          <div className="flex flex-wrap gap-4" style={{ fontFamily: brandFont, fontSize: '13px' }}>
            <a href="#" style={{ color: 'rgba(255,255,255,0.65)' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.65)' }}>Terms</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.65)' }}>Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
