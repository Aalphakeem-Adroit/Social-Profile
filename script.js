// service-worker.js
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('v1').then((cache) => cache.addAll(['/index.html', '/styles.css', '/script.js']))
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => response || fetch(event.request))
    );
  });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then(() => {
      console.log('Service Worker Registered');
    });
  }
  