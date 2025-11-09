import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'

const LoadingContext = createContext(null)

function LoadingOverlay() {
  return (
    <>
      <div className="loading-overlay">
        <div className="loading-ghost-stack">
          <svg
            className="loading-ghost-figure"
            width="110"
            height="122"
            viewBox="0 0 120 122"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="loadingGhostGradient" x1="20%" y1="0%" x2="80%" y2="100%">
                <stop offset="0%" stopColor="#3B5CFF" />
                <stop offset="100%" stopColor="#2445E5" />
              </linearGradient>
            </defs>
            <path
              d="M60 6C30 6 12 27 12 52V96C16 90 24 88 30 92C36 96 42 100 50 96C56 92 64 92 70 96C78 100 84 96 90 92C96 88 104 90 108 96V52C108 27 90 6 60 6Z"
              fill="url(#loadingGhostGradient)"
            />
            <circle cx="44" cy="52" r="12" fill="#FFFFFF" />
            <circle cx="76" cy="52" r="12" fill="#FFFFFF" />
            <circle className="loading-ghost-eye" cx="47" cy="52" r="5.4" fill="#111827" />
            <circle className="loading-ghost-eye" cx="79" cy="52" r="5.4" fill="#111827" />
          </svg>
          <div className="loading-ghost-shadow" />
          <p className="loading-ghost-caption">Loading ...</p>
        </div>
      </div>
      <style jsx="true">{`
        .loading-overlay {
          position: fixed;
          inset: 0;
          background: rgba(10, 10, 10, 0.55);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          animation: loadingFadeIn 0.35s ease forwards;
        }
        .loading-ghost-stack {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          animation: loadingGhostDrift 2.4s ease-in-out infinite;
        }
        .loading-ghost-figure {
          width: 88px;
          height: 108px;
          filter: drop-shadow(0 18px 42px rgba(51, 80, 230, 0.35));
          animation: loadingGhostTilt 2s ease-in-out infinite;
        }
        .loading-ghost-eye {
          animation: loadingEyeGlance 1.8s ease-in-out infinite;
          transform-origin: center;
        }
        .loading-ghost-shadow {
          width: 68px;
          height: 16px;
          background: radial-gradient(circle, rgba(51, 80, 230, 0.32) 0%, rgba(51, 80, 230, 0) 70%);
          filter: blur(3px);
          opacity: 0.75;
        }
        .loading-ghost-caption {
          font-family: "Poppins", sans-serif;
          font-weight: 500;
          font-size: 13px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.8);
          animation: loadingCaptionPulse 1.8s ease-in-out infinite;
        }
        @keyframes loadingGhostDrift {
          0% {
            transform: translate(-8px, 0);
          }
          25% {
            transform: translate(4px, -4px);
          }
          50% {
            transform: translate(8px, 0);
          }
          75% {
            transform: translate(-4px, -4px);
          }
          100% {
            transform: translate(-8px, 0);
          }
        }
        @keyframes loadingGhostTilt {
          0%, 100% {
            transform: rotate(-3deg);
          }
          50% {
            transform: rotate(3deg);
          }
        }
        @keyframes loadingEyeGlance {
          0%, 15% {
            transform: translate(1.8px, -0.6px);
          }
          30% {
            transform: translate(-2.4px, 0.9px);
          }
          45% {
            transform: translate(2.2px, -0.2px);
          }
          60% {
            transform: translate(-2px, 0.7px);
          }
          75% {
            transform: translate(1.6px, -0.5px);
          }
          90% {
            transform: translate(-1.4px, 0.6px);
          }
          100% {
            transform: translate(1.8px, -0.6px);
          }
        }
        @keyframes loadingCaptionPulse {
          0%, 100% {
            opacity: 0.85;
          }
          50% {
            opacity: 1;
          }
        }
        @keyframes loadingFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  )
}

export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false)
  const timerRef = useRef(null)
  const hideTimerRef = useRef(null)
  const isMountedRef = useRef(true)

  useEffect(() => {
    isMountedRef.current = true
    return () => {
      isMountedRef.current = false
      if (timerRef.current) clearTimeout(timerRef.current)
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current)
    }
  }, [])

  const hideLoading = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current)
      hideTimerRef.current = null
    }
    if (isMountedRef.current) {
      setIsLoading(false)
    }
  }, [])

  const showLoading = useCallback(
    (duration = 2000, onComplete) => {
      if (!isMountedRef.current) return
      hideLoading()
      setIsLoading(true)
      timerRef.current = setTimeout(() => {
        if (onComplete) {
          onComplete()
        }
        hideTimerRef.current = setTimeout(() => {
          hideLoading()
        }, 350)
      }, duration)
    },
    [hideLoading]
  )

  const value = {
    isLoading,
    showLoading,
    hideLoading,
  }

  return (
    <LoadingContext.Provider value={value}>
      {children}
      {isLoading && <LoadingOverlay />}
    </LoadingContext.Provider>
  )
}

export function useLoading() {
  const context = useContext(LoadingContext)
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider')
  }
  return context
}

