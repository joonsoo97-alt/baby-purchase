// 오프라인에서도 열리도록 앱 파일을 캐시합니다. 앱을 고쳐 올릴 때 VERSION 숫자를 올려 주세요.
const VERSION='babyprep-v1';
const FILES=['./','index.html','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png','icons/apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const url=new URL(e.request.url);
  if(url.origin===location.origin){
    // 앱 파일: 네트워크 우선, 안 되면 캐시
    e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(VERSION).then(c=>c.put(e.request,cp));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('index.html'))));
  }else if(url.hostname.endsWith('googleapis.com')||url.hostname.endsWith('gstatic.com')){
    // 글꼴: 캐시 우선
    e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{const cp=res.clone();caches.open(VERSION).then(c=>c.put(e.request,cp));return res})));
  }
});
