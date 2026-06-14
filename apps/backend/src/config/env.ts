import dotenv from 'dotenv';

dotenv.config();

export const env = {
  // App
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: parseInt(process.env.BACKEND_PORT || '3001', 10),
  APP_NAME: process.env.APP_NAME || 'Message',
  APP_VERSION: process.env.APP_VERSION || '1.0.0',

  // Database
  DATABASE_URL: process.env.DATABASE_URL || 'postgresql://postgres:password@localhost:5432/telegram_clone',

  // JWT
  JWT_SECRET: process.env.JWT_SECRET || 'super-secret-jwt-key',
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || 'super-secret-refresh-key',
  JWT_EXPIRATION: process.env.JWT_EXPIRATION || '24h',
  JWT_REFRESH_EXPIRATION: process.env.JWT_REFRESH_EXPIRATION || '7d',

  // CORS
  CORS_ORIGIN: (process.env.CORS_ORIGIN || 'http://localhost:3000').split(','),

  // Email
  SMTP_HOST: process.env.SMTP_HOST || 'smtp.gmail.com',
  SMTP_PORT: parseInt(process.env.SMTP_PORT || '587', 10),
  SMTP_USER: process.env.SMTP_USER || 'your-email@gmail.com',
  SMTP_PASSWORD: process.env.SMTP_PASSWORD || 'your-password',
  SMTP_FROM: process.env.SMTP_FROM || 'noreply@message.app',

  // Twilio
  TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID || '',
  TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN || '',
  TWILIO_PHONE_NUMBER: process.env.TWILIO_PHONE_NUMBER || '',

  // Stripe
  STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY || '',
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY || '',
  STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET || '',

  // Storage
  STORAGE_TYPE: (process.env.STORAGE_TYPE || 'local') as 'local' | 's3',
  LOCAL_STORAGE_PATH: process.env.LOCAL_STORAGE_PATH || './public/uploads',
  S3_BUCKET: process.env.S3_BUCKET || '',
  S3_REGION: process.env.S3_REGION || 'us-east-1',
  S3_ACCESS_KEY_ID: process.env.S3_ACCESS_KEY_ID || '',
  S3_SECRET_ACCESS_KEY: process.env.S3_SECRET_ACCESS_KEY || '',

  // Redis
  REDIS_URL: process.env.REDIS_URL || 'redis://localhost:6379',

  // Logging
  LOG_LEVEL: (process.env.LOG_LEVEL || 'info') as 'debug' | 'info' | 'warn' | 'error',
};
