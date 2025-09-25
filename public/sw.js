// public/sw.js

const CACHE_NAME  = 'offline-cache-v1';
const OFFLINE_URL = '/offline.html';
const LOGO_URL    = '/img/logo/logoblack2.png';

self.addEventListener('install', event => {
  // 1️⃣ Al instalar, cachea offline.html y tu logo
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll([
        OFFLINE_URL,
        LOGO_URL
      ]))
  );
  // Activa el SW inmediatamente sin esperar
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  // 2️⃣ Cuando se active, toma el control de las páginas abiertas
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  const { request } = event;

  // 3️⃣ Si es una navegación, intenta red → cache offline.html en offline
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .catch(() => caches.match(OFFLINE_URL))
    );
    return;
  }

  // 4️⃣ Si es una imagen, primero cache → red → logo en último recurso
  if (request.destination === 'image') {
    event.respondWith(
      caches.match(request)
        .then(cached => {
          if (cached) {
            return cached;
          }
          return fetch(request)
            .then(networkResponse => {
              // opcional: cachear nuevas imágenes
              // caches.open(CACHE_NAME).then(cache => cache.put(request, networkResponse.clone()));
              return networkResponse;
            });
        })
        .catch(() => caches.match(LOGO_URL))
    );
    return;
  }

  // 5️⃣ Para el resto de peticiones (scripts, estilos, JSON...), no interferimos
  // event.respondWith(fetch(request));
});
