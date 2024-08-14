'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "b431e4030ffff425f43bc7605170cb4a",
"version.json": "77d1f46ca99149deee3089306e07e1f2",
"index.html": "516c948694ca2b42f211b542eac15866",
"/": "516c948694ca2b42f211b542eac15866",
"main.dart.js": "07f3f8d2bc84d61bb1783be6b5af13d4",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "88f2a8b151c853f856102137bc36378d",
"assets/AssetManifest.json": "157755ae0ba52cd5eb55b12b9f3095cd",
"assets/NOTICES": "400b7f8c791734051c7f49e730e5ab1c",
"assets/FontManifest.json": "de3db47790d78d56ee9a8cf060546cac",
"assets/AssetManifest.bin.json": "be583be3746fd12a987e835d59520c5f",
"assets/packages/flame_splash_screen/assets/layer1.png": "31625c711892b1d250fe3bb58ad32850",
"assets/packages/flame_splash_screen/assets/layer3.png": "24a8fdc53b85d6d749cc2857c708de49",
"assets/packages/flame_splash_screen/assets/layer2.png": "51efb74c8ec5a2fd21f622392678f607",
"assets/packages/hugeicons/lib/fonts/hgi-stroke-rounded.ttf": "7b7e29353cabc1555d2720eb496b805e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "2081fcffe70ac380f1c6e315057cd30b",
"assets/fonts/MaterialIcons-Regular.otf": "ce6712c29869c45ca1d1ef6b7e90958b",
"assets/assets/images/slime/slime_hit.png": "873bef7b068454eb79db366f3de3720c",
"assets/assets/images/slime/slime_idle1.png": "9563fc376c5906c5dc9f22fdfeccf328",
"assets/assets/images/slime/slime_idle3.png": "01dc1b82fd15e1123ef46cd77478ef00",
"assets/assets/images/slime/slime_idle2.png": "bc76903fa7cbae8e724db90415a4bd83",
"assets/assets/images/slime/slime_swallow.png": "2c55727d79abd6fd70215a288afce4f8",
"assets/assets/images/slime/slime_jump.png": "0f6ed2f9b25bbdc69942391f79cd0e8b",
"assets/assets/images/slime/slime_move_1.png": "aadc3ba95d8c4ba17b971271ee3eeee9",
"assets/assets/images/slime/slime_die.png": "e805ff9ca5f22487bd798c1cd1ac3e98",
"assets/assets/images/slime/slime_move.png": "aadc3ba95d8c4ba17b971271ee3eeee9",
"assets/assets/images/territory/territory_01.png": "95ad8ea83df058cccd664974fe35ee47",
"assets/assets/images/Texture/TX%2520Tileset%2520Grass.png": "77f818bca3533527aa7e882d5127e8e4",
"assets/assets/images/Texture/TX%2520Plant.png": "e88857e4976724cdae95fff5de17230b",
"assets/assets/images/Texture/TX%2520Tileset%2520Stone%2520Ground.png": "bbac5b440b338d9acd3e1177576cba7d",
"assets/assets/images/Texture/TX%2520Shadow%2520Plant.png": "4ad7f68500d8ef1dd277cfde275628fe",
"assets/assets/images/Texture/TX%2520Props.png": "b0248691751471faa5629ccf23e446e8",
"assets/assets/images/Texture/TX%2520Tileset%2520Wall.png": "864f72fdb0f5498b9f4c0de0f216c6dc",
"assets/assets/images/Texture/TX%2520Struct.png": "83a6fa0826c9fbe9b04b2a618c671aee",
"assets/assets/images/Texture/TX%2520Shadow.png": "8cecc375ec1467f48f8f03c87e85455b",
"assets/assets/images/Texture/TX%2520Player.png": "36628d1c77deae829e75014be971bfa3",
"assets/assets/images/image_game_tutorial.png": "c0631016724587b34a70e76a8c2ad722",
"assets/assets/icon/ic_wind.png": "331281ca2ed3cb38a47bdc318ed65f82",
"assets/assets/icon/ic_wood.png": "bb3487a81445a446c0a0e39469474918",
"assets/assets/icon/ic_light.png": "c0fc7e0e86e85a24407ee83b47233e53",
"assets/assets/icon/ic_poison.png": "962137aa3d89480cbc02d13bdd23b015",
"assets/assets/icon/ic_fire.png": "ab45fa153d28052382ad72cf67509728",
"assets/assets/icon/ic_water.png": "1c78847634e451d876134f9e420e019e",
"assets/assets/icon/ic_dark.png": "42731729633d113c7e9253f6c5dfcdd5",
"assets/assets/icon/ic_earth.png": "0d219b36fffe4c5b0b3bdd5d31ccd03b",
"assets/assets/icon/ic_thunder.png": "ff29dc2da039602201730c9ba4959213",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
