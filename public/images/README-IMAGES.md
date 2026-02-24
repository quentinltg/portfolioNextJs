# Instructions pour les Images du Portfolio

## Stratégie d'Optimisation des Images

Ce fichier explique comment préparer et optimiser les images pour le portfolio éco-responsable.

### Images requises

1. **Images de projets** (3 images)
   - `public/images/projects/ecommerce-eco.webp`
   - `public/images/projects/blog-minimaliste.webp`
   - `public/images/projects/dashboard-analytics.webp`

2. **Image Open Graph**
   - `public/images/og-image.png` (1200x630px, < 100KB)

3. **Favicon**
   - `public/favicon.ico` (multiple tailles : 16x16, 32x32, 64x64)

### Outils recommandés

#### 1. Conversion en WebP/AVIF

**Avec ImageMagick :**
```bash
# Conversion PNG/JPG vers WebP (qualité 80)
convert source.jpg -quality 80 output.webp

# Conversion vers AVIF (meilleure compression)
convert source.jpg -quality 75 output.avif
```

**Avec cwebp (Google) :**
```bash
cwebp -q 80 source.jpg -o output.webp
```

**Avec squoosh-cli :**
```bash
npm install -g @squoosh/cli
squoosh-cli --webp '{"quality":80}' source.jpg
```

#### 2. Redimensionnement

**Dimensions recommandées pour les projets :**
- Largeur : 800px (suffisant pour écrans HD)
- Hauteur : 450px (ratio 16:9)

```bash
# Avec ImageMagick
convert source.jpg -resize 800x450^ -gravity center -extent 800x450 output.jpg
```

**Dimensions recommandées pour Open Graph :**
- 1200x630px (standard Facebook/Twitter)

#### 3. Compression

**TinyPNG / TinyJPG (en ligne ou CLI) :**
```bash
npm install -g tinify-cli
tinify source.jpg -o output.jpg
```

**pngquant (PNG uniquement) :**
```bash
pngquant --quality=65-80 source.png -o output.png
```

**jpegoptim (JPEG uniquement) :**
```bash
jpegoptim --max=85 --strip-all source.jpg
```

### Checklist d'optimisation

- [ ] Format adapté : WebP pour photos, SVG pour icônes, PNG pour transparence
- [ ] Dimensions adaptées à l'usage (pas de 4K pour une vignette)
- [ ] Compression appliquée (qualité 75-85 pour WebP/JPEG)
- [ ] Poids cible : < 100 KB par image de projet
- [ ] Métadonnées EXIF supprimées (vie privée + poids)
- [ ] Alt text descriptif dans le code

### Création rapide d'images placeholder

Pour tester le portfolio sans images réelles :

```bash
# Créer une image placeholder de 800x450px
convert -size 800x450 xc:#f3f4f6 -pointsize 48 -fill '#9ca3af' \
  -gravity center -annotate +0+0 'Projet 1' placeholder1.webp
```

### Favicon

**Création avec ImageMagick :**
```bash
# À partir d'un PNG 512x512
convert logo.png -resize 256x256 \
  \( -clone 0 -resize 16x16 \) \
  \( -clone 0 -resize 32x32 \) \
  \( -clone 0 -resize 64x64 \) \
  -delete 0 -colors 256 favicon.ico
```

**Ou avec un outil en ligne :**
- https://realfavicongenerator.net/
- https://favicon.io/

### Exemple de workflow complet

```bash
#!/bin/bash
# Script d'optimisation automatique

# 1. Redimensionner
convert source.jpg -resize 800x450^ -gravity center -extent 800x450 resized.jpg

# 2. Convertir en WebP
cwebp -q 80 resized.jpg -o optimized.webp

# 3. Vérifier le poids
ls -lh optimized.webp

# 4. Supprimer le temporaire
rm resized.jpg
```

### Images actuelles dans le projet

Pour le moment, le projet utilise des chemins d'images dans `src/data/projects.json`.

**Vous devez créer ces images ou utiliser des placeholders.**

### Résultats attendus

- **Poids total des images** : < 500 KB pour toutes les images du portfolio
- **Format** : 90% WebP, 10% PNG (transparence si nécessaire)
- **Lazy loading** : Activé automatiquement via `next/image`
- **Impact Lighthouse** : Score Performance > 95/100

### Ressources

- [WebP Documentation](https://developers.google.com/speed/webp)
- [AVIF Documentation](https://jakearchibald.com/2020/avif-has-landed/)
- [Image Optimization Best Practices](https://web.dev/fast/#optimize-your-images)
