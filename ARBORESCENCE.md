# Arborescence du Projet Portfolio Éco-responsable

```
portfolio/
│
├── public/                              # Assets statiques publics
│   ├── images/
│   │   ├── projects/
│   │   │   ├── ecommerce-eco.svg        # Image projet 1 (placeholder SVG, <1KB)
│   │   │   ├── blog-minimaliste.svg     # Image projet 2 (placeholder SVG, <1KB)
│   │   │   └── dashboard-analytics.svg  # Image projet 3 (placeholder SVG, <1KB)
│   │   ├── og-image.svg                 # Image Open Graph (SVG, ~1KB)
│   │   ├── placeholder.txt              # PNG 1x1 transparent base64
│   │   └── README-IMAGES.md             # Guide optimisation images
│   │
│   ├── favicon.ico                      # Favicon (à créer)
│   ├── manifest.json                    # PWA manifest
│   ├── robots.txt                       # Instructions crawlers
│   ├── sitemap.xml                      # Sitemap XML
│   └── sw.js                            # Service Worker (2 KB)
│
├── src/
│   ├── app/                             # Pages Next.js (App Router)
│   │   ├── about/
│   │   │   └── page.tsx                 # Page À propos
│   │   ├── contact/
│   │   │   └── page.tsx                 # Page Contact
│   │   ├── legal/
│   │   │   └── page.tsx                 # Page Mentions légales
│   │   ├── projects/
│   │   │   └── page.tsx                 # Page Liste projets
│   │   ├── sitemap/
│   │   │   └── page.tsx                 # Page Plan du site (humain)
│   │   │
│   │   ├── layout.tsx                   # Layout global + metadata SEO
│   │   ├── page.tsx                     # Page d'accueil
│   │   ├── globals.css                  # Styles globaux (15 KB)
│   │   └── print.css                    # Styles impression
│   │
│   ├── components/                      # Composants réutilisables
│   │   ├── Footer.module.css            # Styles Footer (CSS Module)
│   │   ├── Footer.tsx                   # Composant Footer
│   │   ├── Header.module.css            # Styles Header (CSS Module)
│   │   ├── Header.tsx                   # Composant Header (client component)
│   │   ├── ProjectCard.module.css       # Styles ProjectCard (CSS Module)
│   │   ├── ProjectCard.tsx              # Composant ProjectCard
│   │   ├── SkipLink.module.css          # Styles SkipLink (CSS Module)
│   │   └── SkipLink.tsx                 # Composant SkipLink (accessibilité)
│   │
│   ├── data/
│   │   └── projects.json                # Données locales (3 projets)
│   │
│   └── types/
│       └── project.ts                   # Types TypeScript
│
├── .eslintrc.json                       # Configuration ESLint
├── .gitignore                           # Fichiers ignorés par Git
├── next.config.js                       # Config Next.js (output: 'export')
├── package.json                         # Dépendances npm (8 total)
├── tsconfig.json                        # Config TypeScript strict
│
├── README.md                            # Documentation complète
└── MEMOIRE.md                           # Mémoire technique (1 page)
```

## Statistiques du Projet

### Fichiers créés
- **Pages** : 7 (accueil, projects, about, contact, legal, sitemap, layout)
- **Composants** : 4 (Header, Footer, SkipLink, ProjectCard)
- **CSS** : 6 fichiers (globals.css + 4 modules + print.css)
- **Fichiers config** : 5 (next.config.js, tsconfig.json, .eslintrc.json, package.json, .gitignore)
- **Assets publics** : 9 (3 images SVG projets, 1 OG image, manifest, robots, sitemap, sw, placeholder)
- **Documentation** : 3 (README.md, MEMOIRE.md, README-IMAGES.md)

**TOTAL** : 35 fichiers

### Poids estimé (après build)
- **HTML** : ~30 KB (7 pages)
- **CSS** : ~20 KB (gzippé)
- **JavaScript** : ~80-100 KB (gzippé)
- **Images SVG** : ~5 KB (placeholders)
- **Assets divers** : ~5 KB (manifest, sw, etc.)

**TOTAL BUNDLE** : ~140-160 KB

### Dépendances
- **Production** : 3 (next, react, react-dom)
- **Développement** : 5 (@types/*, eslint, typescript)
- **TOTAL** : 8 dépendances

### Lignes de code (estimé)
- **TypeScript/TSX** : ~1200 lignes
- **CSS** : ~800 lignes
- **JSON/Config** : ~200 lignes
- **Documentation** : ~600 lignes

**TOTAL** : ~2800 lignes

## Prochaines étapes

1. **Installation** : `npm install`
2. **Développement** : `npm run dev`
3. **Build statique** : `npm run build`
4. **Vérifier ./out/** : Contient tous les fichiers HTML/CSS/JS prêts à déployer
5. **Remplacer images SVG** : Suivre `public/images/README-IMAGES.md`
6. **Lighthouse audit** : Vérifier scores Performance/A11y/SEO
7. **Déploiement** : Vercel, Netlify, GitHub Pages ou autre hébergeur statique
