if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,a)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let r={};const c=e=>n(e,t),o={module:{uri:t},exports:r,require:c};s[t]=Promise.all(i.map((e=>o[e]||c(e)))).then((e=>(a(...e),r)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts("fallback-e8MOcrbRXei1IzOR6VRoT.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/148-51676b394a7ec07b.js",revision:"e8MOcrbRXei1IzOR6VRoT"},{url:"/_next/static/chunks/552.23b62276e19f16a2.js",revision:"23b62276e19f16a2"},{url:"/_next/static/chunks/693-8754be998f979f23.js",revision:"e8MOcrbRXei1IzOR6VRoT"},{url:"/_next/static/chunks/751-7dcf60f9fe981463.js",revision:"e8MOcrbRXei1IzOR6VRoT"},{url:"/_next/static/chunks/79-a697d82a7c61c909.js",revision:"e8MOcrbRXei1IzOR6VRoT"},{url:"/_next/static/chunks/app/Calendar/page-9628a8ffefa25837.js",revision:"e8MOcrbRXei1IzOR6VRoT"},{url:"/_next/static/chunks/app/Choices/page-5b85a7e617df2d2a.js",revision:"e8MOcrbRXei1IzOR6VRoT"},{url:"/_next/static/chunks/app/DrawPage/page-66883f30ab83dc31.js",revision:"e8MOcrbRXei1IzOR6VRoT"},{url:"/_next/static/chunks/app/Notes/page-f0eae83cf6d8a0c7.js",revision:"e8MOcrbRXei1IzOR6VRoT"},{url:"/_next/static/chunks/app/Reminders/page-9b5462ad9cea9e6e.js",revision:"e8MOcrbRXei1IzOR6VRoT"},{url:"/_next/static/chunks/app/Settings/page-b29676a55be5b89c.js",revision:"e8MOcrbRXei1IzOR6VRoT"},{url:"/_next/static/chunks/app/Shopping/page-1879d4f73c20b822.js",revision:"e8MOcrbRXei1IzOR6VRoT"},{url:"/_next/static/chunks/app/Stamps/page-168422279f59a3d7.js",revision:"e8MOcrbRXei1IzOR6VRoT"},{url:"/_next/static/chunks/app/layout-98746cce0c1df3f4.js",revision:"e8MOcrbRXei1IzOR6VRoT"},{url:"/_next/static/chunks/app/page-1290c7b63767de67.js",revision:"e8MOcrbRXei1IzOR6VRoT"},{url:"/_next/static/chunks/app/~offline/page-fb5565a1af209c0f.js",revision:"e8MOcrbRXei1IzOR6VRoT"},{url:"/_next/static/chunks/main-a525ab33ba1eefdb.js",revision:"e8MOcrbRXei1IzOR6VRoT"},{url:"/_next/static/chunks/main-app-9ff0dc219cca2001.js",revision:"e8MOcrbRXei1IzOR6VRoT"},{url:"/_next/static/chunks/pages/_app-907dedfd0e4177db.js",revision:"e8MOcrbRXei1IzOR6VRoT"},{url:"/_next/static/chunks/pages/_error-b5ee443ea3f1b36c.js",revision:"e8MOcrbRXei1IzOR6VRoT"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-8535caeedb580087.js",revision:"e8MOcrbRXei1IzOR6VRoT"},{url:"/_next/static/css/657b3c5de91c337a.css",revision:"657b3c5de91c337a"},{url:"/_next/static/e8MOcrbRXei1IzOR6VRoT/_buildManifest.js",revision:"a2fca4e7c42d36e6bd2b18d2c2583e62"},{url:"/_next/static/e8MOcrbRXei1IzOR6VRoT/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/googleLogo.26d21f21.png",revision:"3bfa1a439e5ed135c9ccdcd9ef836e7a"},{url:"/~offline",revision:"e8MOcrbRXei1IzOR6VRoT"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e},{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({sameOrigin:e,url:s})=>{if(!e)return!1;const n=s.pathname;return!n.startsWith("/api/auth/")&&!!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({url:e,sameOrigin:s})=>!!s&&!e.pathname.startsWith("/api/")),new e.NetworkFirst({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET")}));
