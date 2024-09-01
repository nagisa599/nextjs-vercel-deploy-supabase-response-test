import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from './schema';

// const connectionString = process.env.AUTH_DRIZZLE_URL;
const connectionString = process.env.POSTGRES_URL;
if (!connectionString) {
  throw new Error('AUTH_DRIZZLE_URL is not set');
}

// SSLの検証を無効にするための設定を追加
const pool = postgres(connectionString, { 
  max: 1,
  ssl: { rejectUnauthorized: true } // ここでSSL検証を無効にする
});

export const db = drizzle(pool, { schema });
