
export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        })
        .catch(error => {
          console.log('ServiceWorker registration failed: ', error);
        });
    });
  }
}

export function checkForUpdates() {
  if ('serviceWorker' in navigator) {
    // Check for service worker updates
    navigator.serviceWorker.ready.then(registration => {
      registration.update();
    });
  }
}

export function showInstallPrompt() {
  let deferredPrompt: any;
  
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = e;
    
    // Show the install button
    const installButton = document.getElementById('install-button');
    if (installButton) {
      installButton.style.display = 'block';
      
      installButton.addEventListener('click', () => {
        // Show the install prompt
        deferredPrompt.prompt();
        
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult: any) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt');
          } else {
            console.log('User dismissed the install prompt');
          }
          deferredPrompt = null;
          
          // Hide the install button
          if (installButton) {
            installButton.style.display = 'none';
          }
        });
      });
    }
  });
}
