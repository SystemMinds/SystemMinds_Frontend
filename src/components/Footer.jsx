import React, { useEffect, useRef, useState } from 'react'
import logoImage from '../assets/images/Logo.png'
import { useEmailSender } from '../hooks/useEmailSender.js'
import { useToast } from '../context/ToastProvider.jsx'

const brandFont = '"Poppins", sans-serif'
const serifFont = '"Volkhov", "Georgia", serif'

function Footer() {
  const currentYear = new Date().getFullYear()
  const [emailValue, setEmailValue] = useState('')
  const [statusMessage, setStatusMessage] = useState({ type: null, text: '' })
  const statusTimerRef = useRef(null)
  const { sendEmail, isReady, isSending } = useEmailSender({
    subject: 'SystemMinds • Newsletter subscription',
  })
  const { showToast } = useToast()

  useEffect(() => {
    return () => {
      if (statusTimerRef.current) {
        clearTimeout(statusTimerRef.current)
      }
    }
  }, [])

  const updateStatusMessage = (nextStatus) => {
    if (statusTimerRef.current) {
      clearTimeout(statusTimerRef.current)
      statusTimerRef.current = null
    }

    setStatusMessage(nextStatus)

    if (nextStatus?.type) {
      statusTimerRef.current = setTimeout(() => {
        setStatusMessage({ type: null, text: '' })
        statusTimerRef.current = null
      }, 5000)
    }
  }

  const contactColumn = {
    heading: 'Contact',
    items: [
      { label: 'hello@systemminds.com', href: 'mailto:hello@systemminds.com' },
      { label: '+1 (415) 555-0123', href: 'tel:+14155550123' },
      { label: 'Bengaluru · Remote-first', href: null }
    ]
  }

  const servicesColumn = {
    heading: 'Services',
    items: [
      { label: 'Product Sprints' },
      { label: 'UI Engineering' },
      { label: 'Cloud Setup' },
      { label: 'QA Automation' },
      { label: 'Care Plans' }
    ]
  }

  const resourcesColumn = {
    heading: 'Resources',
    items: [
      { label: 'Playbooks' },
      { label: 'Case Stories' },
      { label: 'Newsletter' },
      { label: 'Careers', href: '/career', newTab: true },
      { label: 'Our Journey', href: '/#our-journey' },
      { label: 'Press Room' }
    ]
  }

  return (
    <footer className="text-white" style={{ backgroundColor: '#07090f', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="border-b border-white/10" style={{ background: 'rgba(10,12,18,0.9)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-12 xl:px-16 py-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-2 items-center text-center lg:items-start lg:text-left">
            <p style={{ fontFamily: brandFont, fontSize: '12px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>
              Subscribe to our
            </p>
            <div className="flex items-center gap-3">
              <img src={logoImage} alt="SystemMinds logo" style={{ width: '44px', height: '44px', objectFit: 'contain' }} />
              <h3 style={{ fontFamily: serifFont, fontSize: '26px', letterSpacing: '-0.01em', display: 'flex', alignItems: 'baseline', gap: '4px', whiteSpace: 'nowrap' }}>
                <span style={{ color: '#F1A501', fontSize: '30px' }}>S</span>
                <span style={{ letterSpacing: '0.08em' }}>YSTEM</span>
                <span style={{ color: '#F1A501', fontSize: '30px' }}>M</span>
                <span style={{ letterSpacing: '0.08em' }}>INDS</span>
              </h3>
            </div>
          </div>
          <form
            className="w-full lg:max-w-lg"
                onSubmit={async (event) => {
                  event.preventDefault()
                  if (!emailValue) {
                    updateStatusMessage({ type: 'error', text: 'Please enter your email address first.' })
                    return
                  }

                  if (!isReady) {
                    updateStatusMessage({ type: 'error', text: 'Email service is preparing—please try again in a moment.' })
                    return
                  }

                  try {
                    await sendEmail({
                      body: `
                        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; color: #0A0A0A;">
                          <h2 style="margin-bottom: 12px;">New newsletter interest</h2>
                          <p style="margin: 0;"><strong>Email:</strong> ${emailValue}</p>
                        </div>
                      `,
                      replyTo: emailValue,
                    })
                    updateStatusMessage({ type: 'success', text: 'Thanks! We will keep you posted with our latest updates.' })
                    showToast({
                      type: 'success',
                      title: 'Subscription confirmed',
                      message: 'Thanks! We will keep you posted with our latest updates.',
                    })
                    setEmailValue('')
                  } catch (error) {
                    updateStatusMessage({
                      type: 'error',
                      text: 'Unable to send right now. Please retry after a moment or email info.systemminds@gmail.com directly.',
                    })
                    showToast({
                      type: 'error',
                      title: 'Newsletter failed',
                      message: 'Unable to send right now. Please try again soon or email us directly.',
                    })
                  }
            }}
          >
            <div className="flex flex-col sm:flex-row items-center gap-3 rounded-full sm:rounded-full border border-white/15 px-3 py-1.5 sm:py-1.5" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
              <input
                type="email"
                required
                placeholder="Enter email address"
                className="w-full sm:flex-1 bg-transparent px-2 py-2 sm:py-1 focus:outline-none text-sm sm:text-base text-center sm:text-left"
                style={{ fontFamily: brandFont, color: '#ffffff' }}
                    value={emailValue}
                    onChange={(event) => setEmailValue(event.target.value)}
              />
              <button
                type="submit"
                    className="w-full sm:w-auto rounded-full px-6 py-2 text-xs sm:text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ fontFamily: brandFont, fontWeight: 500, letterSpacing: '0.08em', backgroundColor: '#F1A501', color: '#0A0A0A', border: '1px solid rgba(255,255,255,0.2)' }}
                    disabled={!isReady || isSending}
              >
                    {isSending ? 'Sending…' : 'Submit'}
              </button>
            </div>
                {statusMessage.type && (
                  <p
                    style={{
                      fontFamily: brandFont,
                      fontSize: '12px',
                      marginTop: '10px',
                      color: statusMessage.type === 'success' ? 'rgba(0,255,178,0.75)' : 'rgba(255,95,86,0.8)',
                    }}
                  >
                    {statusMessage.text}
                  </p>
                )}
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-12 xl:px-16 py-10 footer-content">
        {/* Contact - Top Center on Mobile */}
        <div className="space-y-3 text-center mb-8 md:mb-0 footer-contact">
          <p className="footer-heading" style={{ fontFamily: brandFont, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.18em' }}>{contactColumn.heading}</p>
          <ul className="space-y-2">
            {contactColumn.items.map((item) => (
              <li key={item.label}>
                {item.href ? (
                  <a
                    href={item.href}
                    className="footer-link"
                    style={{
                      fontFamily: brandFont,
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.7)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      cursor: 'pointer',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.9)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                  >
                    <span style={{ width: '6px', height: '6px', borderRadius: '999px', backgroundColor: 'rgba(255,255,255,0.4)' }} />
                    {item.label}
                  </a>
                ) : (
                  <span
                    className="footer-link"
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

        {/* Services and Resources - Side by Side */}
        <div className="footer-services-resources">
          <div className="space-y-3 footer-column">
            <p className="footer-heading" style={{ fontFamily: brandFont, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.18em' }}>{servicesColumn.heading}</p>
            <ul className="space-y-2">
              {servicesColumn.items.map((item) => (
                <li key={item.label}>
                  <span
                    className="footer-link"
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
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 footer-column">
            <p className="footer-heading" style={{ fontFamily: brandFont, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.18em' }}>{resourcesColumn.heading}</p>
            <ul className="space-y-2">
              {resourcesColumn.items.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.newTab ? '_blank' : undefined}
                      rel={item.newTab ? 'noopener noreferrer' : undefined}
                      className="footer-link"
                      style={{
                        fontFamily: brandFont,
                        fontSize: '14px',
                        color: 'rgba(255,255,255,0.7)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        cursor: 'pointer',
                        transition: 'color 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.9)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                    >
                      <span style={{ width: '6px', height: '6px', borderRadius: '999px', backgroundColor: 'rgba(255,255,255,0.4)' }} />
                      {item.label}
                    </a>
                  ) : (
                    <span
                      className="footer-link"
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
        </div>
      </div>

      <div className="w-full border-t border-white/10 footer-bottom-wrapper">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-12 xl:px-16 py-6 flex flex-col md:flex-row md:items-start lg:items-center md:justify-between text-center md:text-left footer-bottom">
          <p className="footer-copyright" style={{ fontFamily: brandFont, fontSize: '13px', color: 'rgba(255,255,255,0.58)' }}>
            © {currentYear} SystemMinds. Building dependable digital products for ambitious teams.
          </p>
          <div className="flex gap-4 justify-center md:justify-end footer-links" style={{ fontFamily: brandFont, fontSize: '13px', flexWrap: 'nowrap' }}>
            <a href="#" style={{ color: 'rgba(255,255,255,0.65)', whiteSpace: 'nowrap' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.65)', whiteSpace: 'nowrap' }}>Terms</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.65)', whiteSpace: 'nowrap' }}>Contact</a>
          </div>
        </div>
      </div>
      <style jsx="true">{`
        .footer-links {
          flex-wrap: nowrap !important;
        }
        .footer-links a {
          white-space: nowrap;
        }
        .footer-bottom-wrapper {
          width: 100%;
        }
        @media (min-width: 1024px) {
          .footer-bottom {
            flex-direction: row !important;
            align-items: center !important;
            justify-content: space-between !important;
            width: 100%;
          }
          .footer-copyright {
            flex: 0 1 auto;
          }
          .footer-links {
            flex: 0 0 auto;
            margin-left: auto;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .footer-bottom {
            flex-direction: row !important;
            align-items: flex-start !important;
          }
          .footer-copyright {
            text-align: left !important;
          }
          .footer-links {
            justify-content: flex-end !important;
            align-self: flex-start !important;
          }
        }
        @media (max-width: 767px) {
          .footer-content {
            display: flex;
            flex-direction: column;
          }
          .footer-contact {
            text-align: center;
            margin-bottom: 2rem;
          }
          .footer-services-resources {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
          }
          .footer-column {
            text-align: center;
          }
          .footer-heading {
            font-size: 11px !important;
          }
          .footer-link {
            font-size: 12px !important;
          }
          .footer-copyright {
            font-size: 11px !important;
          }
          .footer-links {
            font-size: 11px !important;
            flex-wrap: nowrap !important;
          }
          .footer-links a {
            font-size: 11px !important;
            white-space: nowrap;
          }
        }
        @media (min-width: 768px) {
          .footer-content {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 2rem;
            align-items: start;
          }
          .footer-contact {
            text-align: left;
            margin-bottom: 0;
          }
          .footer-column {
            text-align: left;
          }
          .footer-services-resources {
            grid-column: span 2;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }
        @media (min-width: 1024px) {
          .footer-content {
            grid-template-columns: 1fr 1fr 1fr;
          }
          .footer-services-resources {
            grid-column: span 2;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer