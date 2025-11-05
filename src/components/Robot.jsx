import React, { useState, useEffect } from 'react'

function Robot() {
  const technologies = [
    { name: 'HTML', icon: '🌐', color: '#E34F26' },
    { name: 'CSS', icon: '🎨', color: '#1572B6' },
    { name: 'JavaScript', icon: '⚡', color: '#F7DF1E' },
    { name: 'React', icon: '⚛️', color: '#61DAFB' },
    { name: 'React Native', icon: '📱', color: '#61DAFB' },
    { name: 'Bootstrap', icon: '💎', color: '#7952B3' },
    { name: 'Tailwind', icon: '🎯', color: '#38B2AC' },
    { name: 'Java', icon: '☕', color: '#ED8B00' },
    { name: 'Python', icon: '🐍', color: '#3776AB' },
  ]

  const [emittedLogos, setEmittedLogos] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      const randomTech = technologies[Math.floor(Math.random() * technologies.length)]
      const id = Date.now() + Math.random()
      
      setEmittedLogos((prev) => [
        ...prev,
        {
          id,
          ...randomTech,
          angle: Math.random() * 60 - 30,
          delay: 0,
        },
      ])

      setTimeout(() => {
        setEmittedLogos((prev) => prev.filter((logo) => logo.id !== id))
      }, 3500)
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-full flex items-center justify-center" style={{ maxHeight: '100%', overflow: 'visible', position: 'relative' }}>
      {/* Emitted Logos flying from robot head */}
      {emittedLogos.map((logo) => (
        <div
          key={logo.id}
          className="absolute"
          style={{
            left: '50%',
            top: '-20%',
            zIndex: 100,
            '--logo-offset': `${Math.sin((logo.angle * Math.PI) / 180) * 120}px`,
            animation: 'logoEmit 3.5s ease-out forwards',
            pointerEvents: 'none',
          }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg"
            style={{
              backgroundColor: logo.color,
              boxShadow: `0 4px 12px ${logo.color}60`,
              transform: `rotate(${logo.angle}deg)`,
            }}
          >
            {logo.icon}
          </div>
        </div>
      ))}

      {/* Robot Model - Exact Match to Image */}
      <svg
        width="240"
        height="280"
        viewBox="0 0 240 280"
        className="relative z-10 robot-float robot-sway"
        style={{ maxWidth: '100%', height: 'auto' }}
      >
        <defs>
          <linearGradient id="robotGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#A8C8D8" stopOpacity="1" />
            <stop offset="100%" stopColor="#8BA8B8" stopOpacity="1" />
          </linearGradient>
          <filter id="smileGlowFilter">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Head - Light Blue Circle */}
        <circle
          cx="120"
          cy="80"
          r="60"
          fill="#A8C8D8"
          stroke="#8BA8B8"
          strokeWidth="1"
        />

        {/* Head Shading - Bottom edge */}
        <ellipse
          cx="120"
          cy="130"
          rx="60"
          ry="15"
          fill="#8BA8B8"
          opacity="0.3"
        />

        {/* Side Sensors/Eyes - Small black circular dots */}
        <circle cx="70" cy="80" r="4" fill="#1d1d1f" />
        <circle cx="170" cy="80" r="4" fill="#1d1d1f" />

        {/* Top Details - Small black line and dot (slightly off-center to right) */}
        <line
          x1="130"
          y1="25"
          x2="130"
          y2="30"
          stroke="#1d1d1f"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="135" cy="27" r="2" fill="#1d1d1f" />

        {/* Face Screen - Dark grey/black rectangle centered on head */}
        <rect
          x="85"
          y="65"
          width="70"
          height="40"
          rx="4"
          fill="#1d1d1f"
          opacity="0.95"
        />

        {/* Glowing Light Blue Smile - Curved line inside screen */}
        <path
          d="M 95 90 Q 120 100 145 90"
          fill="none"
          stroke="#61DAFB"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#smileGlowFilter)"
          className="smile-glow"
        >
          <animate
            attributeName="opacity"
            values="0.6;1;0.6"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </path>

        {/* Body - Larger Light Blue Circle/Oval */}
        <ellipse
          cx="120"
          cy="180"
          rx="70"
          ry="65"
          fill="#A8C8D8"
          stroke="#8BA8B8"
          strokeWidth="1"
        />

        {/* Body Shading - Bottom edge */}
        <ellipse
          cx="120"
          cy="235"
          rx="70"
          ry="20"
          fill="#8BA8B8"
          opacity="0.3"
        />

        {/* Left Arm (Viewer's Left) - Raised and Waving */}
        <g className="arm-wave-left">
          {/* Upper Arm - Black */}
          <line
            x1="50"
            y1="165"
            x2="35"
            y2="135"
            stroke="#1d1d1f"
            strokeWidth="6"
            strokeLinecap="round"
          />
          {/* Elbow Joint */}
          <circle cx="35" cy="135" r="4" fill="#1d1d1f" />
          {/* Lower Arm - Light Blue/Grey */}
          <line
            x1="35"
            y1="135"
            x2="25"
            y2="100"
            stroke="#A8C8D8"
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Hand/Pincer - Three-pronged black */}
          <g transform="translate(25, 100)">
            <circle r="5" fill="#1d1d1f" />
            <line x1="-4" y1="0" x2="-4" y2="-6" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round" />
            <line x1="0" y1="0" x2="0" y2="-6" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round" />
            <line x1="4" y1="0" x2="4" y2="-6" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round" />
          </g>
        </g>

        {/* Right Arm (Viewer's Right) - Bent Downwards */}
        <g className="arm-hang-right">
          {/* Upper Arm - Black */}
          <line
            x1="190"
            y1="165"
            x2="205"
            y2="195"
            stroke="#1d1d1f"
            strokeWidth="6"
            strokeLinecap="round"
          />
          {/* Elbow Joint */}
          <circle cx="205" cy="195" r="4" fill="#1d1d1f" />
          {/* Lower Arm - Light Blue/Grey */}
          <line
            x1="205"
            y1="195"
            x2="215"
            y2="225"
            stroke="#A8C8D8"
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Hand/Pincer - Three-pronged black */}
          <g transform="translate(215, 225)">
            <circle r="5" fill="#1d1d1f" />
            <line x1="-4" y1="0" x2="-4" y2="6" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round" />
            <line x1="0" y1="0" x2="0" y2="6" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round" />
            <line x1="4" y1="0" x2="4" y2="6" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round" />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Robot
