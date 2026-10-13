// Offline-Unterstützung: Die App-Dateien werden zwischengespeichert,
// damit der Stundenplan auch ohne Internet (z. B. im Hörsaal-Keller) aufgeht.
const CACHE = "uni-kalender-v3";          // App-Dateien; bei jeder App-Änderung hochzählen
const DATA = "uni-kalender-daten";        // verschlüsselter Stundenplan; bleibt über Updates erhalten
const FILES = ["./", "./index.html", "./manifest.webmanifest", "./icon.svg", "./icon-180.png", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE && k !== DATA).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Eigene Dateien: zuerst aus dem Netz, damit Updates ankommen. Kommt nach kurzer Zeit
// nichts (schwaches Netz), gilt der zwischengespeicherte Stand. Nur fehlerfreie Antworten
// werden gespeichert. Fremde Adressen (Schriften, Kalender-Links) werden nicht angefasst.
self.addEventListener("fetch", event => {
  const req = event.request;
  const url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== self.location.origin) return;
  const nav = req.mode === "navigate";
  const isData = url.pathname.includes("/daten/");
  const cached = () => caches.match(req).then(r => r || (nav ? caches.match("./index.html") : undefined));

  let saved = Promise.resolve();
  const net = fetch(req).then(res => {
    if (res.ok) {
      const copy = res.clone();
      saved = caches.open(isData ? DATA : CACHE).then(c => c.put(req, copy));
      return res;
    }
    return nav ? cached().then(r => r || res) : res;
  });
  event.waitUntil(net.then(() => saved).catch(() => {}));

  const wait = nav ? 3000 : isData ? 6000 : 0;
  const slow = wait
    ? new Promise(r => setTimeout(r, wait)).then(cached).then(r => r || net)
    : net;
  event.respondWith(
    Promise.race([net, slow]).catch(() => cached().then(r => r || Response.error()))
  );
});
