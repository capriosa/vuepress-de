/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0986af9a0d9d48ee2d413e14236280f0"
  },
  {
    "url": "assets/css/5.styles.cc17b3fd.css",
    "revision": "20f9d758aef075fd859ce97e316c0144"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.21279f18.js",
    "revision": "b42006bed3a990a60fdfc4d7aab82112"
  },
  {
    "url": "assets/js/1.441170e8.js",
    "revision": "6babd80cc95d3e70fe01bb08e31b04c8"
  },
  {
    "url": "assets/js/2.67d18ca0.js",
    "revision": "9527042529d67eebb98113d19614c8c9"
  },
  {
    "url": "assets/js/3.dba33c6f.js",
    "revision": "17cc1f1d97e8ff9433076f1b526c77ff"
  },
  {
    "url": "assets/js/4.d9981442.js",
    "revision": "e651d9168c410456e52e544c200993a0"
  },
  {
    "url": "assets/js/app.c40a1fb3.js",
    "revision": "8d4ec9c8effaf8ee881d9e6591b66516"
  },
  {
    "url": "docs/about.html",
    "revision": "40e1abe492a7ba1041b783b4bf609050"
  },
  {
    "url": "docs/impressum.html",
    "revision": "8f37a51199eb3112f1099b678d4104c2"
  },
  {
    "url": "docs/index.html",
    "revision": "23125f951c1a8159892d8aac80c68117"
  },
  {
    "url": "docs/kontakt.html",
    "revision": "7b1cf29711970609017e33ed0a5fc5f2"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "7864059fe06e8f6bc26b776bfdc63cb6"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
