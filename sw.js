
// Ciclo de vida del SW

self.addEventListener('install', event => {

    // cuando se instala
    // descargar assets, se crea cache
    // El install se va a disparar cuando alla un cambio en el archivo
    console.log("Instalando Service Worker");
});

self.addEventListener('activate', event => {

    // Eliminar Cache Viejo
    console.log("Activando SW");
});

self.addEventListener('fetch', event => {
    // Manejo de peticiones
    // Aplicar estrategias del Cache
    console.log("Fetch");
});

// SYNC: recuperar conexión
self.addEventListener('sync', event => {
    console.log('Tenemos internet!');
    console.log(event);
    console.log(event.tag);
});

// Push Manejar push notifitations
self.addEventListener('push', event =>{
    console.log('Notificación recibida');
});

