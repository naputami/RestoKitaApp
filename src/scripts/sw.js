import 'regenerator-runtime/runtime';
import {precacheAndRoute} from 'workbox-precaching';
import {cleanupOutdatedCaches} from 'workbox-precaching';
import {registerRoute} from 'workbox-routing';
import {CacheFirst, NetworkFirst, StaleWhileRevalidate} from 'workbox-strategies';
import {ExpirationPlugin} from 'workbox-expiration';
import {setCacheNameDetails} from 'workbox-core';


setCacheNameDetails({
  prefix: 'resto-kita-app',
  sufix: 'v1',
  precache: 'precache',
  runtime: 'runtime',
});

precacheAndRoute(self.__WB_MANIFEST || []);


registerRoute(
    ({request}) => request.mode === 'navigate',
    new NetworkFirst({
      cacheName: 'my-pages-cache',
    }),
);

registerRoute(
    /^https:\/\/restaurant-api.dicoding.dev\/(?:(list|detail))/,

    new NetworkFirst({
      cacheName: 'dicoding-restaurant-api-cache',
      plugins: [
        new ExpirationPlugin({
          maxAgeSeconds: 60 * 60 * 24 * 30 * 2,
          maxEntries: 100,
        }),
      ],
    }),
    'GET',
);

registerRoute(
    ({request}) => request.destination === 'image',
    new CacheFirst({
      cacheName: 'images-cache',
      plugins: [
        new ExpirationPlugin({
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        }),
      ],
    }),
);

registerRoute(
    ({url}) =>
      url.origin === 'https://fonts.googleapis.com',
    new StaleWhileRevalidate({
      cacheName: 'my-google-fonts-cache',
      plugins: [new ExpirationPlugin({maxEntries: 50})],
    }),
);

registerRoute(
    ({request}) =>
      request.destination === 'style' ||
    request.destination === 'script' ||
    request.destination === 'worker',
    new StaleWhileRevalidate({
      cacheName: 'my-assets-cache',
    }),
);

cleanupOutdatedCaches();

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
