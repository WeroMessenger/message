FROM node:20-alpine

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml ./
COPY apps/backend/package.json apps/backend/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY apps/backend/src ./src
COPY apps/backend/tsconfig.json ./tsconfig.json
COPY apps/backend/prisma ./prisma

# Build
RUN pnpm build

EXPOSE 3001

CMD ["node", "dist/index.js"]
