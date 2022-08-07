const VERSION = "v1";

self.addEventListener('install', (event) => {
  event.waitUntil(precache());
});

self.addEventListener('fetch', (event) => {
  const request = event.request;

  if(request.method != 'GET') {
    return;
  }
  // search on cache
  event.respondWith(cachedResponse(request));

  // update cache
  event.waitUntil(updateCache(request));
})

async function precache() {
  const cache = await caches.open(VERSION);
  return cache.addAll([
    '/',
    '/index.html',
    '/index.js',
    '/assets/index.css',
    '/utils/MediaPlayer.js',
    '/plugins/AutoPause.js',
    '/plugins/AutoPlay.js',
    '/assets/BigBuckBunny.mp4'
  ])
}

async function cachedResponse(request) {
  const cache = await caches.open(VERSION);
  const response = await cache.match(request);
  return response || fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open(VERSION);
  const response = await fetch(request);
  return cache.put(request, response)
}