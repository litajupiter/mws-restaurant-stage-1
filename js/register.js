// Setting up service worker, modified from https://developers.google.com/web/fundamentals/primers/service-workers/registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function() {
      console.log('Registration worked!');
    }).catch(function() {
      console.log('Registration failed!');
    });
  });
}
