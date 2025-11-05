import React, { useState } from 'react'

function Footer() {
  const [openSections, setOpenSections] = useState({})

  const footerSections = [
    {
      title: 'Shop and Learn',
      links: [
        'Store',
        'Mac',
        'iPad',
        'iPhone',
        'Watch',
        'AirPods',
        'TV & Home',
        'AirTag',
        'Accessories',
        'Gift Cards',
      ],
    },
    {
      title: 'Apple Wallet',
      links: ['Wallet'],
    },
    {
      title: 'Account',
      links: ['Manage Your Apple Account', 'Apple Store Account', 'iCloud.com'],
    },
    {
      title: 'Entertainment',
      links: [
        'Apple One',
        'Apple TV+',
        'Apple Music',
        'Apple Arcade',
        'Apple Podcasts',
        'Apple Books',
        'App Store',
      ],
    },
    {
      title: 'Apple Store',
      links: [
        'Find a Store',
        'Genius Bar',
        'Today at Apple',
        'Group Reservations',
        'Apple Camp',
        'Apple Trade In',
        'Ways to Buy',
        'Recycling Programme',
        'Order Status',
        'Shopping Help',
      ],
    },
    {
      title: 'For Business',
      links: ['Apple and Business', 'Shop for Business'],
    },
    {
      title: 'For Education',
      links: ['Apple and Education', 'Shop for Education', 'Shop for University'],
    },
    {
      title: 'For Healthcare',
      links: ['Apple and Healthcare'],
    },
    {
      title: 'For Government',
      links: ['Apple and Government'],
    },
    {
      title: 'Apple Values',
      links: [
        'Accessibility',
        'Education',
        'Environment',
        'Privacy',
        'Supply Chain Innovation',
      ],
    },
    {
      title: 'About Apple',
      links: [
        'Newsroom',
        'Apple Leadership',
        'Career Opportunities',
        'Investors',
        'Ethics & Compliance',
        'Events',
        'Contact Apple',
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
    <footer className="bg-apple-light-gray text-gray-600 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 mb-8">
          {footerSections.map((section, index) => (
            <div key={index} className="mb-4">
              {/* Desktop View */}
              <h4 
                className="font-semibold text-gray-900 mb-3 hidden md:block"
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
                className="md:hidden w-full flex items-center justify-between font-semibold text-gray-900 mb-3"
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
                      className="text-sm hover:text-gray-900 transition-colors"
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
            ◊Instant cashback is available with the purchase of an eligible product with qualifying
            American Express, Axis Bank and ICICI Bank cards only. Minimum transaction value of
            ₹10001 applies. Click here to see instant cashback amounts and eligible devices. Instant
            cashback is available for up to two orders per rolling 90-day period with an eligible
            card. Card eligibility is subject to terms and conditions between you and your card
            issuer. Total transaction value is calculated after any trade-in credit or eligible
            discount is applied. Any subsequent order adjustment(s) or cancellation(s) may result
            in instant cashback being recalculated, and any refund may be adjusted to account for
            instant cashback clawback; this may result in no refund being made to you. Offer may be
            revised or withdrawn at any time without any prior notice. Additional terms apply.
            Instant cashback is not available to business customers and cannot be combined with
            Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate
            orders cannot be combined for instant cashback.
          </p>
          <p>
            ‡No Cost EMI is available with the purchase of an eligible product made using qualifying
            cards on 3- or 6-month tenures from most leading card issuers. Monthly pricing is
            rounded to the nearest rupee. Exact pricing will be provided by your card issuer,
            subject to your card issuer's terms and conditions. Minimum order spend applies as per
            your card issuer's threshold. No Cost EMI is not available to business customers and
            cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan
            pricing. Card eligibility is subject to terms and conditions between you and your card
            issuer. Offer may be revised or withdrawn at any time without any prior notice. Terms
            apply.
          </p>
          <p>
            1. Testing conducted by Apple in July 2025 using AirPods Pro 3 paired with iPhone 16
            with pre-release AirPods firmware and iOS 26. Noise reduction was tested in accordance
            with IEC 60268-24. Comparison made against the best-selling wireless in-ear headphones
            commercially available at the time of testing. Performance depends on device settings,
            environment and many other factors.
          </p>
          <p>A subscription is required for Apple TV+.</p>
          <p>
            Features are subject to change. Some features, applications and services may not be
            available in all regions or all languages.
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
              More ways to shop: Find an Apple Store or other retailer near you. Or call 000800 040
              1966.
            </p>
            <p className="text-xs">India</p>
          </div>
          <div 
            className="mt-6 pt-6 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-xs"
            style={{ 
              fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: 400,
              fontSize: '11px'
            }}
          >
            <p>Copyright © 2025 Apple Inc. All rights reserved.</p>
            <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline">
                Terms of Use
              </a>
              <a href="#" className="hover:underline">
                Sales Policy
              </a>
              <a href="#" className="hover:underline">
                Legal
              </a>
              <a href="#" className="hover:underline">
                Site Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

