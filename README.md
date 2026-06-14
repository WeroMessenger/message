# Message - Modern Telegram Clone 2026

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)]() [![License](https://img.shields.io/badge/license-MIT-blue)]() [![Node Version](https://img.shields.io/badge/node-18%2B-brightgreen)]() [![TypeScript](https://img.shields.io/badge/typescript-5.0%2B-blue)]()

A full-featured, modern web messenger application inspired by Telegram, built with cutting-edge technologies and optimized for both web and Android WebView.

## 🎯 Features

### Authentication
- ✅ Email/Password registration and login
- ✅ Phone number verification
- ✅ Two-factor authentication (2FA)
- ✅ Password recovery
- ✅ Social OAuth (Google, GitHub)
- ✅ JWT + Refresh tokens

### Messaging
- ✅ Text messages
- ✅ Message editing & deletion
- ✅ Message replies & forwarding
- ✅ Pinned messages
- ✅ Message reactions (❤️ 👍 👎 🔥 😂 😍 😎 😭 😡)
- ✅ Emoji panel
- ✅ Sticker packs
- ✅ GIF search and sharing
- ✅ Voice messages with waveform
- ✅ Video messages (circles)
- ✅ File sharing (images, videos, documents, audio, APK, PDF)
- ✅ Read receipts

### Chats
- ✅ Direct messages
- ✅ Group chats (up to 200,000 members)
- ✅ Channels (public & private)
- ✅ Chat search
- ✅ Chat archiving
- ✅ Favorites/Pinned chats

### Groups & Channels
- ✅ Admin & owner roles
- ✅ Moderation tools
- ✅ Invite links
- ✅ User banning
- ✅ Permission management
- ✅ Channel statistics

### User Profile
- ✅ Profile picture
- ✅ Username & bio
- ✅ Online status
- ✅ Last seen
- ✅ Privacy settings
- ✅ Blocked users

### Search
- ✅ Global search (users, messages, groups, channels)
- ✅ Advanced filters

### Premium
- ✅ Premium subscription
- ✅ Exclusive reactions
- ✅ Animated avatars
- ✅ Custom themes
- ✅ Stripe integration
- ✅ PayPal support

### Themes
- ✅ Light, Dark, AMOLED
- ✅ System theme
- ✅ Custom theme builder
- ✅ Color customization

### Notifications
- ✅ Push notifications
- ✅ Sound notifications
- ✅ Vibration
- ✅ Unread counters

### Security
- ✅ XSS Protection
- ✅ SQL Injection Prevention
- ✅ CSRF Protection
- ✅ Rate Limiting
- ✅ Input Validation
- ✅ HTTPS/WSS

## 🏗️ Architecture

```
Message/
├── apps/
│   ├── backend/          # Node.js + Express API
│   │   ├── src/
│   │   │   ├── config/
│   │   │   ├── controllers/
│   │   │   ├── services/
│   │   │   ├── models/
│   │   │   ├── routes/
│   │   │   ├── middleware/
│   │   │   ├── utils/
│   │   │   ├── websocket/
│   │   │   ├── database/
│   │   │   └── index.ts
│   │   ├── prisma/
│   │   ├── tests/
│   │   └── package.json
│   │
│   └── frontend/         # Next.js + React
│       ├── src/
│       │   ├── components/
│       │   ├── pages/
│       │   ├── hooks/
│       │   ├── store/
│       │   ├── services/
│       │   ├── types/
│       │   ├── utils/
│       │   ├── styles/
│       │   └── app.tsx
│       ├── public/
│       ├── tests/
│       └── package.json
│
├── packages/            # Shared packages
│   ├── common/
│   ├── types/
│   └── utils/
│
├── docker-compose.yml
├── Dockerfile
├── .env.example
└── README.md
```

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 16
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: TailwindCSS + Framer Motion
- **State Management**: Zustand
- **Real-time**: Socket.IO Client
- **Forms**: React Hook Form + Zod
- **Testing**: Vitest + React Testing Library

### Backend
- **Runtime**: Node.js 20+
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Real-time**: Socket.IO
- **Authentication**: JWT + Bcrypt
- **Validation**: Zod
- **Testing**: Jest
- **File Upload**: Multer
- **Email**: Nodemailer
- **SMS**: Twilio
- **Payments**: Stripe

### DevOps
- **Containerization**: Docker + Docker Compose
- **Package Manager**: pnpm (monorepo)
- **Code Quality**: ESLint + Prettier
- **CI/CD**: GitHub Actions (ready)

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- PostgreSQL 14+
- Docker & Docker Compose (optional)
- pnpm (recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/WeroMessenger/Message.git
cd Message

# Install dependencies
pnpm install

# Setup environment
cp .env.example .env
# Edit .env with your configuration

# Setup database
pnpm prisma:migrate
pnpm prisma:seed

# Start development servers
pnpm dev
```

### Docker Setup

```bash
# Build and start with Docker Compose
pnpm docker:build
pnpm docker:up

# View logs
pnpm docker:logs

# Stop services
pnpm docker:down
```

## 📱 Mobile WebView Integration

The application is fully optimized for Android WebView:

- Responsive design for all screen sizes
- Touch-friendly interface
- Native-like performance
- Offline support (PWA)
- Camera & microphone access
- Local file access
- Haptic feedback

## 🔐 Security

- **Authentication**: JWT with refresh tokens
- **Passwords**: Bcrypt hashing with salt rounds
- **HTTPS/WSS**: TLS encrypted connections
- **CSRF**: Token-based protection
- **XSS**: Content Security Policy headers
- **SQL Injection**: Parameterized queries via Prisma
- **Rate Limiting**: Redis-based rate limiter
- **Input Validation**: Zod schemas

## 📊 Database Schema

Key entities:
- Users
- Chats
- Messages
- Groups
- Channels
- Reactions
- Attachments
- Subscriptions
- And more...

See `apps/backend/prisma/schema.prisma` for full schema.

## 🧪 Testing

```bash
# Run all tests
pnpm test

# Run backend tests
pnpm test:backend

# Run frontend tests
pnpm test:frontend

# Run with coverage
pnpm test -- --coverage
```

## 📝 API Documentation

API endpoints are documented in `apps/backend/docs/api.md`

Example:
```
POST /api/auth/register
POST /api/auth/login
GET /api/users/:id
POST /api/messages
WS /socket.io
```

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) first.

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 👥 Team

- **WeroMessenger** - Project Lead & Lead Developer

## 🙏 Acknowledgments

- Inspired by Telegram's design and features
- Built with modern web technologies
- Community-driven development

---

**Made with ❤️ by the Message team**
