const CACHE = 'demo-v1';
const ASSETS = [
  '/demo-app/',
  '/demo-app/index.html',
  '/demo-app/demo-questions.js',
  '/demo-app/manifest.json',
  '/demo-app/icon-192.png',
  '/demo-app/icon-512.png'
];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e => { e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request))); });
