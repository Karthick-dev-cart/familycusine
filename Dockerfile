# Single-service build: compile the Vite SPA, serve it with Caddy.
# No PocketBase, no API — this project is frontend only.

FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
COPY apps/web/package.json apps/web/package.json
RUN npm ci

COPY . .

# apps/web's build script writes to ../../dist/apps/web (i.e. /app/dist/apps/web).
RUN npm run build --prefix apps/web

FROM caddy:2-alpine
COPY --from=build /app/dist/apps/web /srv
COPY Caddyfile /etc/caddy/Caddyfile
EXPOSE 80
