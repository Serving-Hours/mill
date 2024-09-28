## Mill

Link shortener.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Database Setup and migrations 
1. Login with turso cli on your machine  if you haven't yet
2. run ``` turso dev --db-file local.db ``` , complete explanation on https://docs.turso.tech/local-development 
3. connect local development url to app by write it on .env file .Follow the env_example for .env file 
4. run pnpm run db:migrate to migrate , check scripts on package.json