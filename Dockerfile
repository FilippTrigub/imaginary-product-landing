FROM node:22-slim AS build

# Enable pnpm via corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy package files first for layer caching
COPY package.json ./

# Install dependencies (none currently, but future-proof)
RUN pnpm install --frozen-lockfile || pnpm install

# Copy source files
COPY . .

# Build static assets into dist/
RUN pnpm build

# --- Production stage ---
FROM node:22-slim

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/server.js ./server.js
COPY --from=build /app/package.json ./package.json

EXPOSE 8080
ENV PORT=8080

CMD ["node", "server.js"]
