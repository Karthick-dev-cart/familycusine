# Single-service build: compile the Vite SPA, serve it with Caddy.
# No PocketBase, no API — this project is frontend only.

# node:22-slim (Debian/glibc), NOT alpine (musl), on purpose.
# package-lock.json only records @rollup/rollup-linux-x64-gnu, the glibc
# binary. On Alpine, Rollup needs the musl build, npm ci won't install what
# the lockfile doesn't list, and the build dies with MODULE_NOT_FOUND.
# See https://github.com/npm/cli/issues/4828
FROM node:22-slim AS build
WORKDIR /app

COPY package.json package-lock.json ./
COPY apps/web/package.json apps/web/package.json
RUN npm ci

COPY . .

# apps/web's build script writes to ../../dist/apps/web (i.e. /app/dist/apps/web).
RUN npm run build --prefix apps/web

# The runtime stage has no Node, so alpine is fine here.
FROM caddy:2-alpine
COPY --from=build /app/dist/apps/web /srv
COPY Caddyfile /etc/caddy/Caddyfile
EXPOSE 80
