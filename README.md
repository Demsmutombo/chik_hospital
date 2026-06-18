# chik_hospital

Site web du **Centre Hospitalier International de Kinshasa (CHIK)** — Vue.js 3, Tailwind CSS, Pinia.

## Démarrage local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Déploiement Vercel

### Option 1 — Import GitHub (recommandé)

1. Connectez-vous sur [vercel.com](https://vercel.com)
2. **Add New Project** → importez `Demsmutombo/chik_hospital`
3. Vercel détecte automatiquement **Vite** via `vercel.json`
4. Cliquez **Deploy**

### Option 2 — CLI

```bash
npm i -g vercel
vercel
vercel --prod
```

### Variables d'environnement (Vercel Dashboard)

| Variable        | Description                          | Exemple                          |
|-----------------|--------------------------------------|----------------------------------|
| `VITE_API_URL`  | URL API Laravel (rendez-vous, contact) | `https://api.chik.info/api`    |

### Configuration incluse

- `vercel.json` — build Vite, rewrites SPA (Vue Router), cache assets, headers sécurité
- `.nvmrc` — Node.js 20
- Routing client-side : toutes les routes (`/services`, `/medecins`, etc.) fonctionnent en production
