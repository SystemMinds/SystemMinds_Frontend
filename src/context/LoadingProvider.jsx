import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import Lottie from 'lottie-react'
import loadingAnimation from '../assets/animations/systemminds-loading.json'

const LoadingContext = createContext(null)

function LoadingOverlay() {
  return (
    <>
      <div className="loading-overlay">
        <div className="loading-stack">
          <div className="loading-lottie">
            <Lottie animationData={loadingAnimation} loop autoplay style={{ width: '100%', height: '100%' }} />
          </div>
          <p className="loading-caption">Loading ...</p>
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
        .loading-stack {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        .loading-lottie {
          width: min(200px, 46vw);
          max-height: 200px;
          filter: drop-shadow(0 18px 42px rgba(59, 92, 255, 0.28));
          animation: loadingFloat 3.6s ease-in-out infinite;
        }
        .loading-caption {
          font-family: "Poppins", sans-serif;
          font-weight: 500;
          font-size: 13px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.8);
          animation: loadingCaptionPulse 1.8s ease-in-out infinite;
        }
        @keyframes loadingFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
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

