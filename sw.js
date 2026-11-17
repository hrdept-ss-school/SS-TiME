self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // ให้ดึงข้อมูลผ่านอินเทอร์เน็ตเสมอ
    event.respondWith(fetch(event.request)); 
});
