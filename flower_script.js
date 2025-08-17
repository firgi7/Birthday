onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  // Music Controls Logic
  const backgroundMusic = document.getElementById('backgroundMusic');
  const playPauseButton = document.getElementById('playPauseButton');
  const muteUnmuteButton = document.getElementById('muteUnmuteButton');

  let isPlaying = false;
  let isMuted = false;

  // Attempt to play music automatically on page load
  // Autoplay might be blocked by browsers, so controls are necessary
  backgroundMusic.play().then(() => {
    isPlaying = true;
    playPauseButton.textContent = 'Pause';
  }).catch(e => {
    console.warn("Autoplay was prevented. User interaction required to play music.");
    isPlaying = false;
    playPauseButton.textContent = 'Play';
  });

  playPauseButton.addEventListener('click', () => {
    if (isPlaying) {
      backgroundMusic.pause();
      playPauseButton.textContent = 'Play';
    } else {
      backgroundMusic.play().catch(e => console.error("Error playing music on click:", e));
      playPauseButton.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
  });

  muteUnmuteButton.addEventListener('click', () => {
    if (isMuted) {
      backgroundMusic.muted = false;
      muteUnmuteButton.textContent = 'Mute';
    } else {
      backgroundMusic.muted = true;
      muteUnmuteButton.textContent = 'Unmute';
    }
    isMuted = !isMuted;
  });
};