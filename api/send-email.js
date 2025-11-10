import { sendMail } from '../server/sendEmail.js'

async function parseRequestBody(req) {
  return new Promise((resolve, reject) => {
    let data = ''
    req.on('data', (chunk) => {
      data += chunk
    })
    req.on('end', () => {
      if (!data) {
        resolve({})
        return
      }
      try {
        const parsed = JSON.parse(data)
        resolve(parsed)
      } catch (error) {
        reject(error)
      }
    })
    req.on('error', (error) => {
      reject(error)
    })
  })
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ ok: false, error: 'Method Not Allowed' }))
    return
  }

  try {
    const { subject, body, replyTo, fromName, to } = await parseRequestBody(req)

    if (!body) {
      res.statusCode = 400
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ ok: false, error: 'Email body is required.' }))
      return
    }

    const response = await sendMail({ subject, body, replyTo, fromName, to })
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ ok: true, messageId: response.messageId }))
  } catch (error) {
    console.error('Vercel send-email failure:', error)
    res.statusCode = 500
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ ok: false, error: error.message || 'Email send failed.' }))
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
}


