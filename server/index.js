import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import nodemailer from 'nodemailer'

const args = new Set(process.argv.slice(2))
const shouldServeStatic = args.has('--serve-static')

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json({ limit: '2mb' }))

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'info.systemminds@gmail.com',
    pass: 'gtzrhicqwdpfbotn',
  },
})

app.post('/api/send-email', async (req, res) => {
  const { subject, body, replyTo, fromName, to } = req.body || {}

  if (!body) {
    return res.status(400).json({ ok: false, error: 'Email body is required.' })
  }

  try {
    const response = await transporter.sendMail({
      from: {
        name: fromName || 'SystemMinds Website',
        address: 'info.systemminds@gmail.com',
      },
      to: to || 'info.systemminds@gmail.com',
      subject: subject || 'SystemMinds website message',
      html: body,
      replyTo: replyTo || undefined,
    })

    return res.json({ ok: true, messageId: response.messageId })
  } catch (error) {
    console.error('Failed to send email:', error)
    return res.status(500).json({ ok: false, error: error.message || 'Email send failed.' })
  }
})

if (shouldServeStatic) {
  const distPath = path.resolve(__dirname, '../dist')
  app.use(express.static(distPath))

  app.get('*', (_req, res) => {
    res.sendFile(path.join(distPath, 'index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`Email/API server running on http://localhost:${PORT}`)
  if (shouldServeStatic) {
    console.log(`Serving static files from ${path.resolve(__dirname, '../dist')}`)
  }
})


