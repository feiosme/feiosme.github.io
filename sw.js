<link rel="stylesheet" class="aplayer-secondary-style-marker" href="/assets/css/APlayer.min.css"><script src="/assets/js/APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="/assets/js/Meting.min.js"></script>importScripts('https://g.alicdn.com/kg/workbox/3.3.0/workbox-sw.js');

if (workbox) {
    workbox.setConfig({ modulePathPrefix: 'https://g.alicdn.com/kg/workbox/3.3.0/' });

    workbox.precaching.precache(['/', '/index.html']);

    workbox.routing.registerRoute(new RegExp('^https?://www.feios.me/?$'), workbox.strategies.networkFirst());

    workbox.routing.registerRoute(new RegExp('.*.html'), workbox.strategies.networkFirst());

    workbox.routing.registerRoute(new RegExp('.*.(?:js|css)'), workbox.strategies.staleWhileRevalidate());

    workbox.routing.registerRoute(new RegExp('^https?://i.loli.net/?$'), workbox.strategies.cacheFirst());

    workbox.routing.registerRoute(new RegExp('^https?://blog-1256021060.cos.ap-shanghai.myqcloud.com/?$'), workbox.strategies.cacheFirst());
}