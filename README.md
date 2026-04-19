# pavalep.com

Personal website built with Next.js, TypeScript, and Tailwind CSS. Runs inside a Docker container with nginx as a reverse proxy on the host.

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Docker** (containerized)
- **nginx** (reverse proxy on host)
- **Cloudflare** (DNS + SSL)

## Development

```bash
npm install
npm run dev
```

## Docker

```bash
# Build and run
docker compose up -d --build

# View logs
docker logs personalwebsite

# Shell into container
docker exec -it personalwebsite sh
```

## Architecture

```
Cloudflare → nginx (443/80) → proxy_pass → localhost:3000 → Docker (Next.js)
```
