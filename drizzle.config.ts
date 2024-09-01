import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: './db/schema.ts',
  out: './db/migrations',
  dbCredentials: {
    url: process.env.POSTGRES_URL || '',
     ssl: {
      rejectUnauthorized: false, // 開発環境でのみ使用し、本番環境では信頼できる証明書を使用
      // 以下の行を追加して、証明書ファイルを指定することもできます（必要な場合）
      // ca: fs.readFileSync('/path/to/your/certificate.crt').toString(),
    }
  },
});
