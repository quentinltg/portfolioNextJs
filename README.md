
## 📦 Technologies

| Dépendance | Version | Justification |
|------------|---------|---------------|
| **Next.js** | 14.2.0 | Framework React avec export statique, optimisations built-in (code splitting, image optimization) |
| **React** | 18.3.0 | Bibliothèque UI, dépendance requise par Next.js |
| **TypeScript** | 5.4.0 | Typage strict pour éviter les bugs et améliorer la maintenabilité |
| **ESLint** | 8.57.0 | Linter pour garantir la qualité du code |

**Nombre total de dépendances** : 4 (production) + 4 (dev) = 8

**Taille du bundle (estimée après build)** :
- JavaScript : < 100 KB (gzippé)
- CSS : < 20 KB (gzippé)
- HTML : < 50 KB total
- **Total assets** : < 170 KB

## 🚀 Installation et Lancement

### Prérequis

- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

```bash
# Cloner le projet
cd /home/quentin/Documents/IUT/BUT3/R5.A.13-Economie_Durable/portfolio

# Installer les dépendances
npm install
```

### Développement

```bash
# Lancer le serveur de développement
npm run dev

# Ouvrir http://localhost:3000
```

### Build et Export Statique

```bash
# Générer les fichiers statiques
npm run build

# Les fichiers sont dans le dossier ./out/
# Prêts à être déployés sur n'importe quel hébergeur statique
```

### Vérification TypeScript

```bash
# Vérifier les types sans compiler
npm run type-check
```

### Linting

```bash
# Vérifier la qualité du code
npm run lint
```

## 📂 Structure du Projet

```
portfolio/
├── public/                      # Assets statiques
│   ├── images/                  # Images optimisées (SVG placeholders)
│   │   ├── projects/
│   │   └── README-IMAGES.md     # Guide d'optimisation des images
│   ├── favicon.ico
│   ├── manifest.json            # PWA manifest
│   ├── robots.txt               # Instructions pour crawlers
│   ├── sitemap.xml              # Plan du site XML
│   └── sw.js                    # Service Worker (cache statique)
├── src/
│   ├── app/                     # Pages Next.js (App Router)
│   │   ├── layout.tsx           # Layout global + metadata
│   │   ├── page.tsx             # Page d'accueil
│   │   ├── projects/page.tsx    # Liste des projets
│   │   ├── about/page.tsx       # À propos
│   │   ├── contact/page.tsx     # Contact
│   │   ├── legal/page.tsx       # Mentions légales
│   │   ├── sitemap/page.tsx     # Plan du site (humain)
│   │   ├── globals.css          # Styles globaux
│   │   └── print.css            # Styles pour l'impression
│   ├── components/              # Composants réutilisables
│   │   ├── Header.tsx / .module.css
│   │   ├── Footer.tsx / .module.css
│   │   ├── SkipLink.tsx / .module.css
│   │   └── ProjectCard.tsx / .module.css
│   ├── data/
│   │   └── projects.json        # Données locales (3 projets)
│   └── types/
│       └── project.ts           # Types TypeScript
├── .eslintrc.json               # Configuration ESLint
├── .gitignore
├── next.config.js               # Configuration Next.js (output: 'export')
├── package.json
├── README.md                    # Ce fichier
├── MEMOIRE.md                   # Mémoire technique
└── tsconfig.json                # Configuration TypeScript strict
```

## ✅ Checklist Éco-conception & Performance

### Images
- [x] Format SVG pour placeholders (poids < 2 KB chacun)
- [x] Guide d'optimisation fourni (WebP/AVIF recommandés)
- [x] Lazy loading activé via `next/image`
- [x] Attributs `alt` descriptifs pour accessibilité
- [ ] À faire : Remplacer les SVG par des WebP optimisées (< 100 KB chacune)

### CSS
- [x] CSS Modules (scope local, pas de conflits)
- [x] Variables CSS pour cohérence et maintenabilité
- [x] Aucune animation JavaScript (CSS uniquement)
- [x] Transitions minimalistes (< 300ms)
- [x] Feuille print.css pour impression optimisée
- [x] Support `prefers-reduced-motion`
- [x] Pas de CSS inline

### JavaScript
- [x] Bundle minimal (< 100 KB gzippé)
- [x] Code splitting automatique (Next.js)
- [x] Pas de bibliothèques lourdes (0 dépendance UI)
- [x] Client components uniquement quand nécessaire (Header avec usePathname)
- [x] TypeScript strict pour éviter les bugs runtime

### Performance
- [x] Export 100% statique (pas de SSR)
- [x] Service Worker pour cache offline
- [x] Compression activée (gzip via hébergeur)
- [x] Trailing slash pour compatibilité serveurs statiques
- [x] Métadonnées complètes (Open Graph, Twitter Cards)
- [x] Sitemap XML + robots.txt

### Accessibilité (WCAG 2.1 AA)
- [x] Skip link pour navigation clavier
- [x] Structure sémantique (header, main, footer, nav, article)
- [x] Attributs ARIA (aria-label, aria-current, aria-labelledby)
- [x] Focus visible sur tous les éléments interactifs
- [x] Contrastes de couleurs suffisants
- [x] Navigation clavier complète
- [x] Titres hiérarchisés (h1 > h2 > h3)

### SEO
- [x] Metadata Next.js (title, description)
- [x] Open Graph + Twitter Cards
- [x] Sitemap XML
- [x] Robots.txt
- [x] Plan du site lisible par humain (/sitemap)
- [x] URLs propres et descriptives

### Éco-conception
- [x] Aucune requête externe après build
- [x] Pas de tracking, analytics ou cookies
- [x] Formulaires externes (Framaforms) pour éviter backend
- [x] Polices système (pas de Google Fonts)
- [x] Emojis natifs (pas de bibliothèque d'icônes)
- [x] Code minimaliste et lisible

## 🎯 Scores Attendus (Lighthouse)

| Catégorie | Score Cible |
|-----------|-------------|
| Performance | > 95/100 |
| Accessibilité | 100/100 |
| Best Practices | 100/100 |
| SEO | 100/100 |

**Pour vérifier** :
```bash
# Après build et déploiement local
npm run build
npx serve out
# Lancer Lighthouse dans Chrome DevTools sur http://localhost:3000
```

## 📊 Métriques Éco-conception

### Poids des pages (estimé)

| Page | HTML | CSS | JS | Images | Total |
|------|------|-----|----|---------| ------|
| Accueil | 5 KB | 15 KB | 80 KB | 10 KB | ~110 KB |
| Projets | 6 KB | 15 KB | 80 KB | 15 KB | ~116 KB |
| À propos | 5 KB | 15 KB | 80 KB | 0 KB | ~100 KB |
| Contact | 5 KB | 15 KB | 80 KB | 0 KB | ~100 KB |

**Objectif global** : < 500 KB pour l'ensemble du site

### Requêtes HTTP (première visite)

- HTML : 1
- CSS : 1
- JS : 2-3 (code splitting)
- Images : 2-3 (lazy loading)
- **Total** : < 8 requêtes

**Après première visite** : 0 requête (service worker cache)

### Empreinte carbone estimée

Avec [Website Carbon Calculator](https://www.websitecarbon.com/) :
- **< 0.1g CO2** par page vue
- **Plus propre que 95%** des sites testés

## 🚀 Déploiement

### Hébergeurs recommandés (statiques et éco-responsables)

1. **Vercel** (gratuit, CDN global, compatible Next.js)
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Netlify** (gratuit, build automatique)
   ```bash
   # Drag & drop du dossier ./out/
   ```

3. **GitHub Pages** (gratuit, écologique)
   ```bash
   # Configurer basePath dans next.config.js si sous-domaine
   npm run build
   # Pousser ./out/ sur branche gh-pages
   ```

4. **Infomaniak** (hébergeur suisse éco-responsable)
   - FTP vers /public_html/

### Configuration pour sous-répertoire

Si hébergé sur `example.com/portfolio/` :

```javascript
// next.config.js
module.exports = {
  basePath: '/portfolio',
  // ... reste de la config
};
```

## 🔧 Personnalisation

### Modifier les projets

Éditer `src/data/projects.json` :

```json
{
  "id": "mon-projet",
  "title": "Mon Projet",
  "description": "Description...",
  "technologies": ["Next.js", "TypeScript"],
  "image": "/images/projects/mon-projet.svg",
  "imageAlt": "Description de l'image",
  "demoUrl": "https://...",
  "sourceUrl": "https://github.com/...",
  "ecoScore": {
    "label": "Excellent",
    "value": 5
  },
  "completionDate": "2026-02"
}
```

### Remplacer les images placeholder

1. Suivre le guide dans `public/images/README-IMAGES.md`
2. Créer des images WebP optimisées (< 100 KB)
3. Remplacer les `.svg` par `.webp` dans `projects.json`

### Modifier les métadonnées

Éditer `src/app/layout.tsx` :
- `title`, `description`
- `openGraph` URL et images
- `authors`, `creator`

### Changer les couleurs

Éditer `src/app/globals.css` (variables CSS) :

```css
:root {
  --color-primary: #0070f3; /* Bleu principal */
  --color-text: #1a1a1a;    /* Texte principal */
  /* ... */
}
```

## 🧪 Tests

### Tests manuels recommandés

1. **Navigation clavier** : Tab, Shift+Tab, Enter, Espace
2. **Lecteurs d'écran** : NVDA (Windows), VoiceOver (Mac)
3. **Responsive** : Mobile (375px), Tablette (768px), Desktop (1200px+)
4. **Impression** : Ctrl+P pour vérifier le style print.css
5. **Offline** : Désactiver le réseau après première visite (service worker)

### Outils d'audit

- **Lighthouse** : Chrome DevTools > Lighthouse
- **WAVE** : Extension navigateur (accessibilité)
- **axe DevTools** : Extension navigateur (accessibilité)
- **WebPageTest** : https://www.webpagetest.org/
- **Website Carbon** : https://www.websitecarbon.com/

## 📝 Maintenance

### Mise à jour des dépendances

```bash
# Vérifier les mises à jour
npm outdated

# Mettre à jour (patch versions)
npm update

# Mettre à jour (versions majeures)
npm install next@latest react@latest react-dom@latest
```

### Ajout d'un projet

1. Créer/optimiser l'image dans `public/images/projects/`
2. Ajouter l'entrée dans `src/data/projects.json`
3. Rebuild : `npm run build`

### Ajout d'une page

1. Créer `src/app/ma-page/page.tsx`
2. Ajouter le lien dans `Header.tsx` et `Footer.tsx`
3. Mettre à jour `public/sitemap.xml`
4. Rebuild

## 📚 Ressources

- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web.dev Performance](https://web.dev/performance/)
- [GreenIT Best Practices](https://github.com/cnumr/best-practices)

## 📄 Licence

Ce projet est un portfolio personnel. Le code est libre d'utilisation à des fins éducatives avec mention de l'auteur.

## 👤 Auteur

**Quentin**
- Email : contact@example.com
- Portfolio : https://example.com

---

**Dernière mise à jour** : Février 2026
