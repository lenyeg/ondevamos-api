import {randomBytes} from 'node:crypto'

export default ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET') || randomBytes(16).toString('base64'),
    },
  },
  'cloudflare-pages': {
    enabled: true,
    config: {
      instances: [
        {
          name: "production website",
          hook_url: env('CF_PAGES_HOOK_URL'),
        },
      ]
    }
  },
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.example.com'),
        port: env('SMTP_PORT', 587),
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: 'meajuda@ondevamos.app',
        defaultReplyTo: 'meajuda@ondevamos.app',
      },
    },
  },
});
