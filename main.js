customInstallButton.addEventListener('click', () => {
  // This function will run when the 'customInstallButton' is clicked.

  deferredPrompt.prompt(); // Show the installation prompt.
  
  deferredPrompt.userChoice.then((choiceResult) => {
    // After the user interacts with the installation prompt,
    // this code block will run.

    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
    deferredPrompt = null;
  });
});
