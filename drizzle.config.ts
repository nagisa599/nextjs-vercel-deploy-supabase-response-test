import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: './db/schema.ts',
  breakpoints: true,
  out: './db/migrations',
  dbCredentials: {
    url: process.env.POSTGRES_URL || '',
  },
});
