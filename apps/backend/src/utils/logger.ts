import { env } from '@/config/env';

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

const colors = {
  debug: '\x1b[36m', // Cyan
  info: '\x1b[32m',  // Green
  warn: '\x1b[33m',  // Yellow
  error: '\x1b[31m', // Red
  reset: '\x1b[0m',
};

const levels: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};

const currentLevel = levels[env.LOG_LEVEL];

export const logger = {
  debug: (message: string, data?: any) => {
    if (levels['debug'] >= currentLevel) {
      console.log(
        `${colors.debug}[DEBUG]${colors.reset} ${new Date().toISOString()} - ${message}`,
        data || ''
      );
    }
  },
  info: (message: string, data?: any) => {
    if (levels['info'] >= currentLevel) {
      console.log(
        `${colors.info}[INFO]${colors.reset} ${new Date().toISOString()} - ${message}`,
        data || ''
      );
    }
  },
  warn: (message: string, data?: any) => {
    if (levels['warn'] >= currentLevel) {
      console.warn(
        `${colors.warn}[WARN]${colors.reset} ${new Date().toISOString()} - ${message}`,
        data || ''
      );
    }
  },
  error: (message: string, error?: any) => {
    if (levels['error'] >= currentLevel) {
      console.error(
        `${colors.error}[ERROR]${colors.reset} ${new Date().toISOString()} - ${message}`,
        error || ''
      );
    }
  },
};
