// sw.js

// Define a unique version for the service worker (for cache management)
const CACHE_NAME = 'my-pwa-cache-v1';

// List of URLs to cache when the service worker is installed
const urlsToCache = [
  '/',
  '/index.html',
  '/foodtube.css.css',
  '/main.js',
  'logo.jpg',
  'poster.jpg'
  // Add more URLs as needed
];

// Event listener for when the service worker is installed
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Event listener for when a fetch request is made
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // If the request is found in the cache, return it
        if (response) {
          return response;
        }
        // If the request is not in the cache, fetch it from the network
        return fetch(event.request);
      })
  );
});
