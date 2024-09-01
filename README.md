# Nextjs(Vercel) 　 ✖️ DB(Supabase) 　における応答速度調査

このリポジトリは、Nextjs(vercel)と DB(supabse)を利用した場合の応答速度を調べるためのリポジトリーです


[本番環境](https://nextjs-vercel-deploy-supabase-response-test.vercel.app/)

## ローカル環境構築

> [!CAUTION]
> Supabase ClI と docker がインストールされていること

### supabase を起動

```bash
# supabase起動
supabase start

# supabase停止
supabase stop
```

## DB Migration

```bash
# migration
pnpm run drizzle:migrate#
```

## Nextjs の立ち上げ方

```bash
pnpm run dev
```

## Vercel のデプロイする時に注意すること

package.json の build をいかに変更

```json
 "build": "drizzle-kit generate && drizzle-kit migrate &&  next build",
```

vercel の環境変数に NODE_TLS_REJECT_UNAUTHORIZED=0 を追加
