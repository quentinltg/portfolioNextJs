/** @type {import('next').NextConfig} */
const nextConfig = {
  // EXPORT STATIQUE - Génère des fichiers HTML/CSS/JS purs
  output: 'export',
  
  // Désactive les fonctionnalités serveur non nécessaires
  reactStrictMode: true,
  
  // Optimisation des images (utilise next/image avec export statique)
  images: {
    unoptimized: true, // Nécessaire pour l'export statique
  },
  
  // Désactive telemetry pour réduire les appels réseau
  eslint: {
    dirs: ['src'],
  },
  
  // Chemin de base (à adapter selon l'hébergement)
  // basePath: '', // Décommenter et configurer si besoin
  
  // Trailing slash pour compatibilité serveurs statiques
  trailingSlash: true,
  
  // Compression et optimisations
  compress: true,
  poweredByHeader: false,
  
  // Pas de runtime API
  experimental: {},
};

module.exports = nextConfig;
