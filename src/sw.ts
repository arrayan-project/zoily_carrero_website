/// <reference lib="webworker" />

import { precacheAndRoute } from 'workbox-precaching';

declare let self: ServiceWorkerGlobalScope;
declare const __WB_MANIFEST: Array<string>;

// 1️⃣ Precache de offline.html (versión fija) + resto de assets inyectados
precacheAndRoute([
  { url: '/offline.html', revision: 'v1' },
  ...__WB_MANIFEST
]);

// 2️⃣ Instalación y activación inmediata
self.addEventListener('install', () => {
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  // Claim clients tan pronto como se active la nueva SW
  event.waitUntil(self.clients.claim());
});

// 3️⃣ Interceptar sólo navigations (modo offline-first)
self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        // si fetch falla (offline), devolvemos offline.html desde cache
        .catch(() =>
          caches
            .match('/offline.html')
            .then(response => response! /* non-null assertion */)
        )
    );
  }
  // para cualquier otro request, dejamos que el navegador normal lo maneje
});
