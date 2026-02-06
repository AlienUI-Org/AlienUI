# -------- 1. Build stage --------
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and lockfile
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build the Next.js app
RUN npm run build

# -------- 2. Production stage --------
FROM node:20-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production

# Copy only what we need from the build stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose default Next.js port
EXPOSE 3000

# Start Next.js production server
CMD ["npx", "next", "start"]
