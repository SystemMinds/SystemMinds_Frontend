import React, { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react'

const ToastContext = createContext(null)

function ToastContainer({ toasts }) {
  return (
    <>
      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className={`toast-item toast-${toast.type}`}>
            <strong className="toast-title">{toast.title}</strong>
            {toast.message ? <p className="toast-message">{toast.message}</p> : null}
          </div>
        ))}
      </div>
      <style jsx="true">{`
        .toast-container {
          position: fixed;
          top: 24px;
          right: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 10000;
          pointer-events: none;
        }

        .toast-item {
          min-width: 240px;
          max-width: 320px;
          padding: 14px 16px;
          border-radius: 14px;
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
          backdrop-filter: blur(10px);
          background: rgba(12, 20, 32, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #ffffff;
          animation: toastEnter 0.3s ease forwards;
          pointer-events: all;
        }

        .toast-title {
          font-family: "Poppins", sans-serif;
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 6px;
          display: inline-block;
        }

        .toast-message {
          font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 14px;
          line-height: 1.55;
          margin: 0;
        }

        .toast-success {
          border-color: rgba(0, 255, 178, 0.35);
        }

        .toast-error {
          border-color: rgba(255, 95, 86, 0.35);
        }

        .toast-info {
          border-color: rgba(241, 165, 1, 0.35);
        }

        @keyframes toastEnter {
          from {
            opacity: 0;
            transform: translate3d(16px, -12px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
    </>
  )
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])
  const timersRef = useRef(new Map())

  const dismissToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
    const timers = timersRef.current
    if (timers.has(id)) {
      clearTimeout(timers.get(id))
      timers.delete(id)
    }
  }, [])

  const showToast = useCallback((toast) => {
    const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`
    const { duration = 5000, title, message, type = 'info' } = toast

    setToasts((prev) => [...prev, { id, title, message, type }])

    const timeoutId = window.setTimeout(() => {
      dismissToast(id)
    }, duration)

    timersRef.current.set(id, timeoutId)
    return id
  }, [dismissToast])

  const contextValue = useMemo(
    () => ({
      showToast,
      dismissToast,
    }),
    [showToast, dismissToast]
  )

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <ToastContainer toasts={toasts} />
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}


