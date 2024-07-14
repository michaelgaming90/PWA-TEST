self.addEventListener('install', event => {
    console.log('Service worker installing...');
    event.waitUntil(
        caches.open('my-cache').then(cache => {
            return cache.addAll([
                '',
                'index.html',
                'script.js',
                'manifest.json',
                'icon-192x192.png',
                'icon-512x512.png'
            ]);
        })
    );
});

self.addEventListener('activate', event => {
    console.log('Service worker activating...');
    const cacheWhitelist = ['my-cache'];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
