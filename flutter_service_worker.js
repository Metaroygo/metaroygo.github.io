'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1f53c56bd7da769acfda1cc2e28a427c",
"version.json": "77d1f46ca99149deee3089306e07e1f2",
"index.html": "4a9d27a6dcad697fbf622b862bd29f0b",
"/": "4a9d27a6dcad697fbf622b862bd29f0b",
"main.dart.js": "9db931a2cadd2d42bcabf67d440ea0b3",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "88f2a8b151c853f856102137bc36378d",
".git/config": "6d4ea4edd43e85069e3405f723d86fbf",
".git/objects/50/f387e0bcfa70c67cae39819b393aa55347c69c": "cc0fb8540ff976731e07d936ab9c3e49",
".git/objects/6f/55aac6cd0fe662b198021ac3249d7ee699e162": "2cbed6b2b5345b7343aca17d26616102",
".git/objects/9e/647d818f932d0ba30e77d368a2d89346a7fd0d": "9efbe36166cd346573b0607ed3a0da73",
".git/objects/04/29cfe6705ad8c0e02ee8906672f412da425579": "0c48b7823be0e21515b5b28e039b97fa",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/67/a2a646bd58f1c7cec48dd7f9e59cb1429d1987": "0455fe0f65f0b46c49d47beeb7938885",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/0e/cf97226282fed7279a709ff3ab11f0ea7d3c2c": "197aa0c4849b21d12964d85f820ab101",
".git/objects/60/a52f7ce83f6b2904fee1352a9c1c6cdb370ed2": "3b1a4c7ab8cc7641be3f370680d22a4f",
".git/objects/60/9ca25c2a7f9e7db82025ae0417787fa2cbd7cf": "2e5211b11aca05c325ea47a042e6aeb3",
".git/objects/9d/923450f68e0e23d8cb385e0be71f5e9b6a8349": "20ab8b6508c1225db128e65aad1cecd0",
".git/objects/a4/ef0a8536e10c11768df3b907ddf4a7dcb87d88": "4e7e34e7b755412fed1feb4e107dbd84",
".git/objects/a4/579b4d60b57185ae0b8918ca831527b14c5dde": "d00302ae93ad684d0095d013a3791b10",
".git/objects/b5/650547493379b40be9f5c8957a1ceb070e7429": "86b184d042141bc101ddfc8fe9bf12db",
".git/objects/d0/0356ef5ddb0f734b44bd0197995cfd347741b4": "5e7ced599b96d1e3b43eff072040e5ce",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/de68bed7555864a12fe5961aa3bb8ca6f7ab3d": "f51b0f52b6cbc6de9e60eeea2d3e3d30",
".git/objects/e5/aabff91cb2f6b20115d6fe9eba61ca27a3dc73": "e5a419149660dbd82719a92a375252f6",
".git/objects/f3/129379524c27a4baef5bb5c268fa1eb0cd07ed": "4435d42cead173d43ded25d2d0262f23",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/cdaef3ca15b8f0c2508bfe85dfe157b67d20e6": "e5f3a3086d01fb54366164e46b49162f",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/11ee91586ec3d38e9231ce4a415e86d2e84fc2": "4af31c3fecd493165ea366f775ac6782",
".git/objects/ca/9ea76c7b61bfeb4e7c7427e4ce1d17c1b21f7f": "6cb84a2923cbb315152271c29eb0f986",
".git/objects/c1/8674a83f5932a679dd96372f281c1cbb3ed041": "5f094fb6b4f64c946fdde202cf3c5688",
".git/objects/4e/ff30da796862b4e27aacc32dbf82a5a0148c2a": "356fe59349781198e8ba211726e1581a",
".git/objects/4e/5cdfc7411be23fd4b811891dcb44aaccba1ce0": "728916f7d7e92c6cc1d4035b3cdf004e",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/27/e0f783ddaf06a6f093c9f610fb7b2cf2190e02": "0235878961896deb70bfd74cc02e2528",
".git/objects/29/f4eb134b590d0a155506fe6306aef0863ef49c": "4bb779a88f647fbdc2053ab0dcc7b549",
".git/objects/16/6cbc5a4162563a275c1f67d782b90c900fe82d": "c28ea61bd8ecddc75e54533570cbeb57",
".git/objects/1f/183454481b18fbd488620a785ecd02e7a2fc86": "be23e31b9c2a27aff806edd9635d92e2",
".git/objects/73/bfcc45472de818861bcd72dc5bc1d785aa8187": "4075d4ab7e582f2abbdb9baa609b0f0e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/c06cd4d9bd5d4b7a82e65068ff0218d29595dd": "4cf6fc154566d4237a4d864bd4f4b354",
".git/objects/4d/41a1687ba601e92c653374902cf31aed33e638": "93dc9b5e3c2a9a1e57d050e166bda752",
".git/objects/4d/ee6c0caaac4ac4bdbea1af32377112d5a38bca": "9db53fc7111976aabad1e8da18057aa6",
".git/objects/2f/b5bf168e93b41c600abad04b9fcc02895e17d2": "d3a2abf41a323ce5dcd16b3c7322d158",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/a2a534001cab7815e344da260551f9fdcf9030": "57ffe635f668f71d1cd38288e827a3f1",
".git/objects/38/229f1b0142feb9d2e26a9ae64a9a5ed4dcfbe9": "ac0b68891a907613ffec26075f4f7661",
".git/objects/09/b20b38e1b32ca4cae735f40666dee3e032aa60": "e808618416d5dfca06b1dfd935babde7",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/62/0811271044d329760f2a0b274a08fa76da7f95": "e32324808bda68c257fc96a7cf4ac796",
".git/objects/62/b9cc5ed9eb0f1d1cfc95f67350b665f6cdfcc0": "2323eb417e6783cf626263cbb834cc8e",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/54/e05432f81a8f142ff8a2e56151318cb0a46616": "3a240fb542f6092ad12111759087eabc",
".git/objects/3f/b19cff968a973a73ed07bf4fcb083b823629f1": "8fdd7b73f428dad2147e4da5f0b4ecd9",
".git/objects/5b/99e01d8ecfc53e4941767b8fdecaff52aab9b9": "88940874ac15c03f734aa82232fd02c0",
".git/objects/52/edce131ed4b6ee355ec090324ccc9d3b4ee028": "afdfdae13a18ae30f716f5ff9d6c0059",
".git/objects/55/5a2ffb0558e0dc506c13d185e5576a7e87d43a": "928ecbfd2f7d1daa107b4fc816f0481e",
".git/objects/64/ec54c77da48438cf49e96a8c7adf255cd21a8f": "9cdfd62e1b9eb75e83cb72b80b0f7fac",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dd/3f1b04511d5e1d1dd9fd8c0c7c1368771bc1d5": "6360c9e3c9c398b5e8900c600a53cce7",
".git/objects/dd/5d66c0756199a7519014790e68da23add1a9fd": "dc4bfb8b42da3dc4422c9f9d71a08794",
".git/objects/b7/bf9315489d04952d24697a2787ef9104a560d0": "56343b3e32cddc6028464928b0656b9f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/88bda2c591eed8fde512cbc36d2e0424349134": "d60a22c1144b1cbb47367c741d060326",
".git/objects/ea/d068399524759d7a11430ac384c33cfb4e41c0": "939cdc48f66bbd9652195685834bbd96",
".git/objects/f7/44cf8bf56f29e21ad5b716bfe727881cde18ce": "f393c13ba170da279dc3febaca729d2c",
".git/objects/fa/9674f1eb25e4c602fcfeaeb8506435c6e3c635": "2625ccc870928ef8b8394946398c0157",
".git/objects/e9/3119c4ae82fdf32d7588420a94989f03c32405": "19cea6fc1256480002a5122594dd6fc0",
".git/objects/f1/a03306b1b6f05adfb57674008b886d249d3647": "9e130abb5605fee4b0c9a10ca8edc3e5",
".git/objects/2c/4a17e2a70613c4320224c649f9ceea4cb14a5a": "365eb0c6c2e1fde0e4e5c88d38568f43",
".git/objects/77/7e240ee86580766b6bfae00874d961b8e61c1d": "7009522388cd3242fcc3947d24be98bd",
".git/objects/71/d6b16f4ac47d24191ff7fc5083ee485925ad29": "6edcb16b5e9734ef8cba2e734afd1cd9",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/25/e9a072f5b465ca7108135aa21e96e441a18360": "4ca280001d6215ee7e18ce20c2a2f444",
".git/objects/25/6abfe7cf909d9c7b7bf6b0d44829bd66ac3ab4": "6452d9b6ddf38543df5a54fbe6c74536",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "106678acce2500a1425a9162683fb517",
".git/logs/refs/heads/gh-pages": "106678acce2500a1425a9162683fb517",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/gh-pages": "a4f7b123309a17459be2ce7e5ac620c9",
".git/index": "33bb146524c38ab3a4dc2feb893b0269",
".git/COMMIT_EDITMSG": "1ee1eab93d8bc957966f445b7772e3e9",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "bdc51d4475e7996bae3cef32980168d8",
"assets/NOTICES": "a079977b0d4cdd0a00d2cb8691c81b25",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "f2770617ebb45e507f9b812771608bf4",
"assets/packages/flame_splash_screen/assets/layer1.png": "31625c711892b1d250fe3bb58ad32850",
"assets/packages/flame_splash_screen/assets/layer3.png": "24a8fdc53b85d6d749cc2857c708de49",
"assets/packages/flame_splash_screen/assets/layer2.png": "51efb74c8ec5a2fd21f622392678f607",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "b5eb807f8448732366d9f97614fe50a4",
"assets/fonts/MaterialIcons-Regular.otf": "809fd8f711850f24594fbec78413794b",
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
