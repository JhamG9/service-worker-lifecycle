

// Detectar si podemos usar Service Workers
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js')
        .then(reg => {
            // Se registra la acción y cuando vuelve el internet se ejecuta junto al sync del sw.js
            // setTimeout(() =>{
            //     reg.sync.register('posteo-gatitos');
            //     console.log('Se enviaron fotos de gatitos al server');
            // }, 3000);


            // Solicitar permiso
            Notification.requestPermission().then(result => {
                console.log(result);
                reg.showNotification('Hola mundo pa');
            });
        });

}

