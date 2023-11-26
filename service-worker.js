self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('work-time-calculator-v1').then((cache) => {
        return cache.addAll([
          './',
          './index.html',
        //   '/icon.png', // Include the path to your icon file
          // Add other static assets as needed
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  