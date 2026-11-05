# My Mallow Hub (`mymallow.cloud`)

아이와 부모의 하루를 가볍게 돕는 조력자, 마이멜로. 각 제품은 자기 이름과 자기 주소로 열리고, 이 사이트는 그 문을 보여 줍니다.

- **Live (목표):** https://mymallow.cloud/
- **Contact:** contact@mymallow.cloud
- **Stack:** Vite static site → GitHub Pages (`base: '/'`) + CNAME `mymallow.cloud`

## Local

```bash
npm install
npm run dev      # http://127.0.0.1:5173/
npm run build
npm run preview  # http://127.0.0.1:4173/
```

## GitHub Pages

1. Repo Settings → Pages → Source: **GitHub Actions**
2. Push to `main` (workflow: `.github/workflows/deploy.yml`)
3. After first deploy, Settings → Pages → Custom domain: `mymallow.cloud`
4. Enable **Enforce HTTPS** once DNS is green

`public/CNAME` ships as `mymallow.cloud` in the build output.

## Gabia DNS (apex)

In Gabia DNS for `mymallow.cloud`, set **A** records (apex / `@`):

| Host | Type | Value            |
|------|------|------------------|
| @    | A    | 185.199.108.153  |
| @    | A    | 185.199.109.153  |
| @    | A    | 185.199.110.153  |
| @    | A    | 185.199.111.153  |

Optional www:

| Host | Type  | Value              |
|------|-------|--------------------|
| www  | CNAME | jhjer010819.github.io. |

> Keep the existing **kidgame** CNAME (or ANAME) pointing at the Nintendo kids Pages site so `https://kidgame.mymallow.cloud/` stays live.

TTL: 300–600s while verifying, then raise.

## Products

| Product | Status | Link |
|---------|--------|------|
| 우리 아이 닌텐도 Guide | Live | https://kidgame.mymallow.cloud/ |
| 초등 시간표 | 곧 만나요 | — |
| 그림일기 아이디어 | 곧 만나요 | — |
