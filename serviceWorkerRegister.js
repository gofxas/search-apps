if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/serviceWorker.js').then(function (registration) {
      console.log('ServiceWorker successful', registration.scope);
    }, function (err) {
      console.error('ServiceWorker failed: ', err);
    });
  });
}