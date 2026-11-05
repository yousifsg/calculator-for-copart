const V='misbar-v1';
const FILES=['./','index.html','lib/app.css','lib/xlsx.full.min.js','lib/pdf.min.js','lib/pdf.worker.min.js',
'lib/fonts/cairo-arabic-400-normal.woff2','lib/fonts/cairo-arabic-700-normal.woff2','lib/fonts/cairo-latin-400-normal.woff2','lib/fonts/cairo-latin-700-normal.woff2'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
