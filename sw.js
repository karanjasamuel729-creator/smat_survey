const CACHE_NAME = 'survey-v1';
const ASSETS = [
  '/smat_survey/',
  '/smat_survey/index.html',
  '/smat_survey/style.css',
  '/smat_survey/script.js',
  '/smat_survey/manifest.json'
];

// 1. Install Event: Save all files to the device
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching app shell...');
      return cache.addAll(ASSETS);
    })
  );
});

// 2. Fetch Event: If offline, use the cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );

});
