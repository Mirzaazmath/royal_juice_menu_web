'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1aefd399fedf59315ac5d0904fd0726a",
"version.json": "f1f36a2545b7eb56b418fdeeb125e5d8",
"index.html": "97da796d9ab3e01e710144dbb3bb6447",
"/": "97da796d9ab3e01e710144dbb3bb6447",
"main.dart.js": "08ec7b88a9ed7bd16eda58f7ebaf80f5",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "71824971e7a127c737c1b729ee757f92",
"assets/AssetManifest.json": "669fae37ef5a28028e4e351fd9809abe",
"assets/NOTICES": "d8077aae0000f4bc8bade4b404e1017a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "b22f6bb250d051ad1c7205c8945ed3b9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "55c845b7f56ea70a4e85547287d1a001",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/assets/category/falooda.png": "41b80d2ead204ba9cd70eb2e4615bf50",
"assets/assets/category/combo.png": "5d1c14de1f540e4efe04271111d46fe5",
"assets/assets/category/dry.png": "0f7f399d86cbea5284a2c845de3bed31",
"assets/assets/category/snack.png": "8605efe002a2b1a311895dfa4787a38a",
"assets/assets/category/special.png": "51234715da211cfe67e23d327d1fee27",
"assets/assets/category/water.png": "b9c9e557fea2e2c1bbfd0bed215a2cb6",
"assets/assets/category/salad.png": "e00ae9ab4256cca82cbaf525fd91911a",
"assets/assets/category/fresh_juice.png": "8a1aad968db078a0286d500c7ad92566",
"assets/assets/category/dry_fruit.png": "266f0e5650e3b80172b572963729debc",
"assets/assets/category/veg.png": "3561c5a269e45e2471d69cb3dce2fe65",
"assets/assets/category/mocktail.png": "37e0d6d1e14dcc0d8aedd7f97f179180",
"assets/assets/category/chat.png": "68fce91a8f10f4675dd4221e3d0e3ea3",
"assets/assets/category/milkshake.png": "741d9eb30e05436b4e3272182e99b973",
"assets/assets/fresh/mosambi.jpg": "06e14b0cc4fdd3b001bd54f587d90392",
"assets/assets/fresh/papaya.jpg": "f61c8b9bd5e154cb99ae517b9f31606b",
"assets/assets/fresh/chickoo.jpg": "d2b6cdff5e5bdb5193994cab25ac5df8",
"assets/assets/fresh/cocktail.jpg": "5012db824ae3473facf51bbb3442c4a1",
"assets/assets/fresh/pineapple.jpg": "9c57bcd33ef6c2332dae766db659fbea",
"assets/assets/fresh/mango.jpg": "8fe176bccdb7768b592353b0afabfacc",
"assets/assets/fresh/watermelon.jpg": "d90dbdf3fb78621129389a6e8af4c6f7",
"assets/assets/fresh/orange.jpg": "532a695e584f9f44397c3144b3984b67",
"assets/assets/fresh/apple.jpg": "a502601843e0c6297737942fa1f1cd56",
"assets/assets/fresh/grapes.jpg": "fcab1de1a138156197ef0f1987694a8e",
"assets/assets/fresh/muskmelon.jpg": "281e8d8e8016dc37f7287681705a5f90",
"assets/assets/fresh/banana.jpg": "ab6c5bd1835ef20d4492336e4336189f",
"assets/assets/fresh/anar.jpg": "c0b50dc7a65de97278e538ad4a74ba38",
"assets/assets/fresh/goava.jpg": "25820a44d3177ce7bad406f40c64185d",
"assets/assets/logo.png": "ee575ae6fa619e5ce5a93ef701d69f8b",
"assets/assets/glass.png": "c01c2df7d35880e4ee485cc2c3e1d99f",
"assets/assets/bg.jpg": "58e36e47539167050586aacb9c0ef0ff",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
