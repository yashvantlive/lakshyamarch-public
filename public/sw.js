// Service Worker for LakshyaMarch ERP
// FAANG-Level PWA Implementation

self.addEventListener("install", (event) => {
  // Take over immediately
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  // Claim all clients immediately
  event.waitUntil(clients.claim());
});

self.addEventListener("push", (event) => {
  if (!event.data) return;

  let data = {};
  try {
    data = event.data.json();
  } catch {
    data = { title: "LakshyaMarch", body: event.data.text() };
  }

  const { title, body, url, icon } = data;
  
  // Unique tag to allow multiple notifications to stack/pop up
  const tag = "schedule-" + (url?.split("=")[1] || "general");

  // Signal open tabs to refresh data in real-time (Safe Background Execution)
  try {
    if ("BroadcastChannel" in self) {
      const channel = new BroadcastChannel("erp-updates");
      channel.postMessage({ type: "REFRESH_DATA" });
    }
    // Deep fallback: use clients api which is native to SW
    self.clients.matchAll({ type: "window" }).then((clientList) => {
      for (const client of clientList) {
        client.postMessage({ type: "REFRESH_DATA" });
      }
    });
  } catch (err) {
    console.error("[SW] Push background sync error, continuing to show notification:", err);
  }

  event.waitUntil(
    self.registration.showNotification(title || "LakshyaMarch", {
      body:    body || "Nayi notification aai hai!",
      icon:    icon || "/icon-192x192.png",
      badge:   "/icon-192x192.png",
      tag:     tag,
      renotify: true,
      vibrate: [200, 100, 200],
      data:    { url: url || "/" },
      actions: [
        { action: "open",    title: "📖 Open ERP" },
        { action: "dismiss", title: "Dismiss" },
      ],
    })
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  if (event.action === "dismiss") return;

  const url = event.notification.data?.url || "/";
  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientList) => {
      // If ERP is already open, focus it
      for (const client of clientList) {
        if (client.url.includes(self.location.origin) && "focus" in client) {
          client.focus();
          client.navigate(url);
          return;
        }
      }
      // Otherwise open new tab
      if (clients.openWindow) return clients.openWindow(url);
    })
  );
});
