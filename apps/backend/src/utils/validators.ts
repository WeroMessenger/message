import { z } from 'zod';

// Email validation
export const emailSchema = z.string().email('Invalid email address');

// Password validation
export const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number');

// Username validation
export const usernameSchema = z
  .string()
  .min(3, 'Username must be at least 3 characters')
  .max(30, 'Username must be at most 30 characters')
  .regex(/^[a-zA-Z0-9_-]+$/, 'Username can only contain letters, numbers, underscores, and hyphens');

// Phone validation
export const phoneSchema = z.string().regex(/^\+?[0-9]{10,15}$/, 'Invalid phone number');

// Schemas
export const registerSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().optional(),
  username: usernameSchema,
});

export const loginSchema = z.object({
  email: emailSchema,
  password: z.string(),
});

export const updateProfileSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  bio: z.string().max(500, 'Bio must be at most 500 characters').optional(),
  status: z.string().max(100, 'Status must be at most 100 characters').optional(),
});

export const createChatSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  type: z.enum(['direct', 'group', 'channel']),
  participantIds: z.array(z.string()).optional(),
});

export const sendMessageSchema = z.object({
  chatId: z.string(),
  content: z.string().optional(),
  type: z.string().default('text'),
  replyToId: z.string().optional(),
});
