import 'regenerator-runtime/runtime';
import {precacheAndRoute} from 'workbox-precaching';
import {cleanupOutdatedCaches} from 'workbox-precaching';
import {registerRoute} from 'workbox-routing';
import {CacheFirst, NetworkFirst} from 'workbox-strategies';
import {ExpirationPlugin} from 'workbox-expiration';
import {clientsClaim, setCacheNameDetails} from 'workbox-core';

self.skipWaiting();
clientsClaim();

setCacheNameDetails({
  prefix: 'resto-kita-app',
  precache: 'precache',
  runtime: 'runtime',
});

precacheAndRoute([
  self.__WB_MANIFEST,
  {
    url: 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400&family=Poppins:wght@400;500;600&family=Pacifico&display=swap',
    revision: 1,
  },
], {
  ignoreURLParametersMatching: [/.*/],
},
);

registerRoute(
    /^https:\/\/restaurant-api.dicoding.dev\/(?:(list|detail))/,

    new NetworkFirst({
      cacheName: 'dicoding-restaurant-api',
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
      cacheName: 'images',
      plugins: [
        new ExpirationPlugin({
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        }),
      ],
    }),
);

cleanupOutdatedCaches();
