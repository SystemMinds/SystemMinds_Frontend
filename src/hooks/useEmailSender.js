import { useCallback, useEffect, useRef, useState } from 'react'

export function useEmailSender(defaults = {}) {
  const [isSending, setIsSending] = useState(false)
  const [lastError, setLastError] = useState(null)
  const isMountedRef = useRef(true)

  useEffect(() => {
    isMountedRef.current = true
    return () => {
      isMountedRef.current = false
    }
  }, [])

  const sendEmail = useCallback(
    async ({ subject, body, replyTo, to, fromName }) => {
      setIsSending(true)
      setLastError(null)

      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            subject: subject || defaults.subject,
            body,
            replyTo: replyTo || defaults.replyTo,
            to: to || defaults.to,
            fromName: fromName || defaults.fromName,
          }),
        })

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}))
          throw new Error(errorData.error || `Email request failed with status ${response.status}`)
        }

        const data = await response.json()
        if (!data.ok) {
          throw new Error(data.error || 'Email send failed.')
        }

        return data
      } catch (error) {
        const err = error instanceof Error ? error : new Error(String(error))
        setLastError(err)
        throw err
      } finally {
        if (isMountedRef.current) {
          setIsSending(false)
        }
      }
    },
    [defaults]
  )

  return {
    isReady: true,
    isSending,
    lastError,
    sendEmail,
  }
}

