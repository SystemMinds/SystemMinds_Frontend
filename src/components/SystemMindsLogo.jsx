import React from 'react'

function SystemMindsLogo({ className = "w-8 h-8", color = "#1d1d1f" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Brain/Network Symbol representing SystemMinds */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0071e3" />
          <stop offset="100%" stopColor="#0066cc" />
        </linearGradient>
      </defs>
      
      {/* Central node representing the system */}
      <circle cx="60" cy="60" r="25" fill="url(#logoGradient)" opacity="0.9" />
      
      {/* Network nodes */}
      <circle cx="30" cy="30" r="8" fill={color} opacity="0.8" />
      <circle cx="90" cy="30" r="8" fill={color} opacity="0.8" />
      <circle cx="30" cy="90" r="8" fill={color} opacity="0.8" />
      <circle cx="90" cy="90" r="8" fill={color} opacity="0.8" />
      
      {/* Connection lines */}
      <line x1="60" y1="60" x2="30" y2="30" stroke={color} strokeWidth="2" opacity="0.4" />
      <line x1="60" y1="60" x2="90" y2="30" stroke={color} strokeWidth="2" opacity="0.4" />
      <line x1="60" y1="60" x2="30" y2="90" stroke={color} strokeWidth="2" opacity="0.4" />
      <line x1="60" y1="60" x2="90" y2="90" stroke={color} strokeWidth="2" opacity="0.4" />
      
      {/* Inner brain pattern */}
      <path
        d="M 50 60 Q 60 50 70 60 Q 60 70 50 60"
        fill="none"
        stroke="white"
        strokeWidth="2"
        opacity="0.6"
      />
      <path
        d="M 55 55 Q 60 50 65 55"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        opacity="0.5"
      />
    </svg>
  )
}

export default SystemMindsLogo

