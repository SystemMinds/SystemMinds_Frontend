import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation.jsx'
import { useEmailSender } from '../hooks/useEmailSender.js'
import { useToast } from '../context/ToastProvider.jsx'

function Contact() {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1, once: true })
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: null, message: '' })
  const statusTimerRef = useRef(null)
  const { sendEmail, isReady, isSending, lastError } = useEmailSender({
    subject: 'SystemMinds • New contact enquiry',
  })
  const { showToast } = useToast()

  const defaultErrorMessage = useMemo(
    () =>
      lastError?.message ||
      'Something went wrong while sending your message. Please try again after a moment or email us directly at info.systemminds@gmail.com.',
    [lastError]
  )

  useEffect(() => {
    return () => {
      if (statusTimerRef.current) {
        clearTimeout(statusTimerRef.current)
      }
    }
  }, [])

  const updateStatus = (nextStatus) => {
    if (statusTimerRef.current) {
      clearTimeout(statusTimerRef.current)
      statusTimerRef.current = null
    }
    setStatus(nextStatus)
    if (nextStatus?.type) {
      statusTimerRef.current = setTimeout(() => {
        setStatus({ type: null, message: '' })
        statusTimerRef.current = null
      }, 5000)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!formData.fullName || !formData.email || !formData.message) {
      updateStatus({
        type: 'error',
        message: 'Please fill out your name, email, and project details so we can reach you back.',
      })
      return
    }

    if (!isReady) {
      updateStatus({
        type: 'error',
        message: 'Email service is still getting ready. Please wait a second and try again.',
      })
      return
    }

    const composedBody = `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; color: #0A0A0A;">
        <h2 style="margin-bottom: 16px;">New contact enquiry from the SystemMinds website</h2>
        <p style="margin: 4px 0;"><strong>Name:</strong> ${formData.fullName}</p>
        <p style="margin: 4px 0;"><strong>Email:</strong> ${formData.email}</p>
        ${
          formData.phone
            ? `<p style="margin: 4px 0;"><strong>Phone:</strong> ${formData.phone}</p>`
            : ''
        }
        <p style="margin: 16px 0;"><strong>Project details:</strong></p>
        <p style="white-space: pre-line; margin: 0; line-height: 1.5;">${formData.message}</p>
      </div>
    `

    try {
      await sendEmail({
        body: composedBody,
        replyTo: formData.email,
        fromName: formData.fullName,
      })
      updateStatus({
        type: 'success',
        message: 'Thanks for reaching out! Our team will get back to you within 24 hours.',
      })
      showToast({
        type: 'success',
        title: 'Message sent',
        message: 'Thanks for reaching out! Our team will get back to you within 24 hours.',
      })
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: '',
      })
    } catch (error) {
      updateStatus({
        type: 'error',
        message: defaultErrorMessage,
      })
      showToast({
        type: 'error',
        title: 'Message failed',
        message: defaultErrorMessage,
      })
    }
  }

  const inputBaseClasses =
    'w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#F1A501] focus:bg-white/10 transition-all duration-200'

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        paddingTop: '8px',
        paddingBottom: '72px',
        backgroundColor: '#0A0A0A',
        scrollMarginTop: '32px',
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-12">
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold"
            style={{
              fontFamily: '"Volkhov", "Georgia", serif',
              lineHeight: '1.2',
              letterSpacing: '-0.02em',
              marginBottom: '12px',
              color: '#ffffff',
            }}
          >
            Contact
          </h2>
          <p
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: '1.5',
              marginTop: '8px',
              color: 'rgba(255, 255, 255, 0.8)',
            }}
          >
            Let's build what's next for your business
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 xl:grid-cols-[1.05fr_0.95fr] gap-8 xl:gap-10">
          <div
            className={`relative rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-7 lg:p-8 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0 delay-75' : 'opacity-0 translate-y-6'
            }`}
            style={{
              boxShadow: '0 20px 45px rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <h3
              className="text-xl font-semibold text-white"
              style={{ fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif' }}
            >
              Start a conversation
            </h3>

            <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col gap-2 text-sm font-medium text-white/80">
                  Full name
                  <input
                    required
                    type="text"
                    name="fullName"
                    placeholder="How should we address you?"
                    className={inputBaseClasses}
                    value={formData.fullName}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-white/80">
                  Work email
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    className={inputBaseClasses}
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-2 text-sm font-medium text-white/80">
                Phone (optional)
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  className={inputBaseClasses}
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm font-medium text-white/80">
                Project details
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Share goals, timelines, or links. The more detail, the better we can prepare."
                  className={`${inputBaseClasses} resize-none leading-relaxed`}
                  value={formData.message}
                  onChange={handleChange}
                />
              </label>

              {status.type && (
                <div
                  className={`rounded-xl px-4 py-3 text-sm font-medium ${
                    status.type === 'success'
                      ? 'bg-[#00FFB2]/10 border border-[#00FFB2]/40 text-[#00FFB2]'
                      : 'bg-[#FF5F56]/10 border border-[#FF5F56]/40 text-[#FF5F56]'
                  }`}
                  style={{ fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif' }}
                >
                  {status.message}
                </div>
              )}

              <div className="flex justify-end pt-1">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-3 text-base font-semibold text-white transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    background: 'linear-gradient(135deg, #F1A501 0%, #DF6951 100%)',
                    boxShadow: '0 18px 40px rgba(223, 105, 81, 0.25)',
                    fontFamily: '"Poppins", "Inter", sans-serif',
                  }}
                  disabled={!isReady || isSending}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.transform = 'translateY(-2px)'
                    event.currentTarget.style.boxShadow = '0 22px 50px rgba(223, 105, 81, 0.35)'
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.transform = 'translateY(0)'
                    event.currentTarget.style.boxShadow = '0 18px 40px rgba(223, 105, 81, 0.25)'
                  }}
                >
                  {isSending ? 'Sending…' : 'Request consultation'}
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          <aside
            className={`relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-5 sm:p-7 lg:p-8 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0 delay-150' : 'opacity-0 translate-y-6'
            }`}
            style={{ boxShadow: '0 20px 50px rgba(0, 0, 0, 0.35)', backdropFilter: 'blur(14px)' }}
          >
            <div className="space-y-3.5">
              <div className="flex flex-col gap-1">
                <span
                  className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#F1A501]"
                  style={{ fontFamily: '"Poppins", "Inter", sans-serif' }}
                >
                  Need a faster response?
                </span>
                <h3
                  className="text-2xl font-semibold text-white"
                  style={{ fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif' }}
                >
                  Speak directly with our experts
                </h3>
                <p
                  className="text-sm text-white/65 leading-relaxed"
                  style={{ fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif' }}
                >
                  We operate hybrid squads across India, Europe, and North America. Call or email the studio that’s
                  closest to you and we’ll line up an intro call.
                </p>
              </div>

              <div className="space-y-2">
                {[
                  {
                    label: 'Call us',
                    value: '+91 80471 22331',
                    href: 'tel:+918047122331',
                  },
                  {
                    label: 'Email',
                    value: 'Info.systemminds@gmail.com',
                    href: 'mailto:Info.systemminds@gmail.com',
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : '_self'}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 transition-all duration-200 hover:border-white/30 hover:bg-white/10"
                  >
                    <span
                      className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/60"
                      style={{ fontFamily: '"Poppins", "Inter", sans-serif' }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="text-sm font-semibold text-white group-hover:text-[#F1A501]"
                      style={{ fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif' }}
                    >
                      {item.value}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F1A501]/15 text-[#F1A501]">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m0 0l-4-4m4 4l4-4M6 9h12m-3-6h-6a3 3 0 00-3 3v12a3 3 0 003 3h6a3 3 0 003-3V6a3 3 0 00-3-3z"
                    />
                  </svg>
                </div>
                <div>
                  <h4
                    className="text-base font-semibold text-white"
                    style={{ fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif' }}
                  >
                    Already a client?
                  </h4>
                  <p
                    className="mt-1 text-xs text-white/60 leading-relaxed"
                    style={{ fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif' }}
                  >
                    Use your dedicated Slack channel or email your engagement partner for immediate assistance. You can
                    also access our 24×7 support desk through the client portal.
                  </p>
                  <a
                    href="#"
                    className="mt-2 inline-flex items-center gap-2 text-xs font-semibold text-[#F1A501] hover:text-[#FF8A65]"
                    style={{ fontFamily: '"Poppins", "Inter", sans-serif' }}
                  >
                    Go to client portal
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Contact


