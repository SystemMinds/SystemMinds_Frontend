import nodemailer from 'nodemailer'

const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com'
const SMTP_PORT = Number(process.env.SMTP_PORT || 465)
const SMTP_SECURE = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : SMTP_PORT === 465
const SMTP_USER = process.env.SMTP_USER || 'info.systemminds@gmail.com'
const SMTP_PASS = process.env.SMTP_PASS || 'gtzrhicqwdpfbotn'
const DEFAULT_TO = process.env.SMTP_TO || 'info.systemminds@gmail.com'

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_SECURE,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
})

export async function sendMail({ subject, body, replyTo, fromName, to }) {
  const mailOptions = {
    from: {
      name: fromName || 'SystemMinds Website',
      address: SMTP_USER,
    },
    to: to || DEFAULT_TO,
    subject: subject || 'SystemMinds website message',
    html: body,
    replyTo: replyTo || undefined,
  }

  const response = await transporter.sendMail(mailOptions)
  return response
}


