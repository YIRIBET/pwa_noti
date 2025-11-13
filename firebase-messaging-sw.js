// Importamos las versiones compat de Firebase para SW
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

// Configuración igual que en app.js
firebase.initializeApp({
  apiKey: "AIzaSyCHo3GsjZ4U4EA0f9159a37z8vTVARKyLk",
  authDomain: "test-login-a930e.firebaseapp.com",
  projectId: "test-login-a930e",
  storageBucket: "test-login-a930e.firebasestorage.app",
  messagingSenderId: "898537984923",
  appId: "1:898537984923:web:7d2a4b34c6734ce7a4073e"

});

const messaging = firebase.messaging();

// Evento cuando llega un mensaje en segundo plano
messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "Notificación";
  const options = {
    body: payload.notification?.body || "",
    icon: "./180.png"
  };
  self.registration.showNotification(title, options);
});

// Manejar clics en la notificación
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow('/'));
});