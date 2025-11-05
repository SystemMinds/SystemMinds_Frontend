import React from 'react'

function Banner() {
  return (
    <div className="bg-apple-gray text-white text-center py-2.5 px-4">
      <p 
        style={{ 
          fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
          fontWeight: 400,
          fontSize: '12px',
          letterSpacing: '-0.01em',
          lineHeight: '1.33337',
          color: '#f5f5f7'
        }}
      >
        Get up to ₹10000 instant cashback on your favourite products with eligible cards.◊ Plus up to 6 months of No Cost EMI.‡{' '}
        <a 
          href="#" 
          className="underline hover:no-underline"
          style={{ 
            color: '#0071e3',
            textDecorationColor: '#0071e3'
          }}
          onMouseEnter={(e) => e.target.style.color = '#0077ed'}
          onMouseLeave={(e) => e.target.style.color = '#0071e3'}
        >
          Shop
        </a>
      </p>
    </div>
  )
}

export default Banner

