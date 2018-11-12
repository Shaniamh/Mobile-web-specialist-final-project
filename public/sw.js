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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0a27a4163254fc8fce870c8cc3a3f94f"
  },
  {
    "url": "add2numbers.html",
    "revision": "26dc69a428a502b818ad4757fce40802"
  },
  {
    "url": "add2numbers.js",
    "revision": "0cabc8bb6b082849ac02dcc7bbbabde8"
  },
  {
    "url": "css/add2numbers.css",
    "revision": "05252e2c23a737335f2716e10cfd1acc"
  },
  {
    "url": "css/grid.css",
    "revision": "6eb0a300baa7ff25295e9a5cdfcc0747"
  },
  {
    "url": "css/peta.css",
    "revision": "1d66b7ac22aa1312e78aa61cf9beaf21"
  },
  {
    "url": "data/peta.json",
    "revision": "29c8055665a16e7ca37c48a8c114b82a"
  },
  {
    "url": "images/AV.png",
    "revision": "4b4a3a790625c1215b77292147e94809"
  },
  {
    "url": "images/planB.jpg",
    "revision": "6c34f2355c917d02efbf5dd1234eecdd"
  },
  {
    "url": "images/shan.png",
    "revision": "90bbdb55e7c920dfa48d09dbc3b115c8"
  },
  {
    "url": "images/warkop.jpg",
    "revision": "731d57f6410e97910b5327dd6ce36eab"
  },
  {
    "url": "index.html",
    "revision": "704c5e11cbffa36602d98ca9faf53a4a"
  },
  {
    "url": "page1.html",
    "revision": "5ff0c8e7c249c3b6d3c4d6524e1b57c0"
  },
  {
    "url": "peta.html",
    "revision": "e61adea921917562d0d05ad7efe4586e"
  },
  {
    "url": "peta.js",
    "revision": "45c0503b6d0c53c7d08a0c458b7af480"
  },
  {
    "url": "peta2.js",
    "revision": "32c32a9a2fa25128c52bb4f19faf4e95"
  },
  {
    "url": "plugin/index.html",
    "revision": "d83d8114489e87fe61d140cae73aa22a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
