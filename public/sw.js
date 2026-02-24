// Service Worker minimal pour cache des assets statiques
// Stratégie : Cache-First pour les assets, Network-First pour les pages HTML

const CACHE_NAME = 'portfolio-eco-v1';
const STATIC_ASSETS = [
  '/',
  '/projects/',
  '/about/',
  '/contact/',
  '/manifest.json',
];

// Installation : mise en cache des assets critiques
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activation : nettoyage des anciens caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

// Fetch : stratégie hybride
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Ne pas cacher les requêtes non-GET
  if (request.method !== 'GET') {
    return;
  }

  // Ne pas cacher les requêtes externes
  if (url.origin !== self.location.origin) {
    return;
  }

  // Stratégie Cache-First pour les assets statiques
  if (
    request.url.includes('/_next/static/') ||
    request.url.match(/\.(js|css|png|jpg|jpeg|webp|avif|svg|ico)$/)
  ) {
    event.respondWith(
      caches.match(request).then((cached) => {
        return (
          cached ||
          fetch(request).then((response) => {
            return caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, response.clone());
              return response;
            });
          })
        );
      })
    );
    return;
  }

  // Stratégie Network-First pour les pages HTML
  event.respondWith(
    fetch(request)
      .then((response) => {
        // Cloner et mettre en cache la réponse
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(request, responseClone);
        });
        return response;
      })
      .catch(() => {
        // Fallback sur le cache si réseau indisponible
        return caches.match(request);
      })
  );
});
