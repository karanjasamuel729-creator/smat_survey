let deferredPrompt;
const installBtn = document.getElementById('installBtn');

// Detect when the browser says "This site can be an app"
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault(); // Stop the tiny browser prompt
  deferredPrompt = e;  // Save the event for later
  installBtn.style.display = 'block'; // Show our professional button
});

installBtn.addEventListener('click', async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt(); // Show the install window
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      console.log('User installed the app!');
    }
    deferredPrompt = null;
    installBtn.style.display = 'none';
  }
});