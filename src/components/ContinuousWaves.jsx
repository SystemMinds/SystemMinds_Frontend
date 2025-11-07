import React from 'react'

function ContinuousWaves() {
  return (
    <div className="absolute top-0 left-0 right-0 pointer-events-none z-0" style={{ height: '300vh', backgroundColor: 'transparent' }}>
      {/* Right Side - Continuous Wave with Smooth Rounded Curves */}
      <div className="absolute right-0 top-0 bottom-0 hidden lg:block" style={{ width: '60%' }}>
        <svg 
          className="absolute left-0 top-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 500"
          fill="none"
        >
          <defs>
            <linearGradient id="continuous-wave-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor: '#3B82F6', stopOpacity: '0.35'}} />
              <stop offset="15%" style={{stopColor: '#60A5FA', stopOpacity: '0.3'}} />
              <stop offset="30%" style={{stopColor: '#93C5FD', stopOpacity: '0.28'}} />
              <stop offset="45%" style={{stopColor: '#60A5FA', stopOpacity: '0.32'}} />
              <stop offset="60%" style={{stopColor: '#3B82F6', stopOpacity: '0.35'}} />
              <stop offset="75%" style={{stopColor: '#60A5FA', stopOpacity: '0.3'}} />
              <stop offset="90%" style={{stopColor: '#93C5FD', stopOpacity: '0.26'}} />
              <stop offset="100%" style={{stopColor: '#60A5FA', stopOpacity: '0.3'}} />
            </linearGradient>
          </defs>
          <path 
            d="M 100 0 L 100 500 L 12 500
               C 15 490, 19 480, 23 470
               C 27 458, 30 446, 33 435
               C 36 422, 35 410, 32 398
               C 29 386, 26 375, 24 364
               C 22 352, 22 340, 24 328
               C 26 316, 30 305, 36 294
               C 42 282, 50 271, 56 260
               C 62 248, 64 236, 62 225
               C 60 213, 56 202, 50 191
               C 44 180, 38 170, 34 160
               C 30 148, 30 136, 34 125
               C 38 114, 44 104, 50 94
               C 56 83, 60 72, 62 62
               C 64 50, 62 38, 56 27
               C 50 16, 42 8, 34 0
               L 100 0 Z"
            fill="url(#continuous-wave-gradient)"
          />
        </svg>
      </div>
    </div>
  )
}

export default ContinuousWaves
