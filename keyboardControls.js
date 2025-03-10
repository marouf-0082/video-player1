window.document.onkeydown = (e) => {
  switch (e.key) {
      case 'ArrowUp': // volume increase
          if (video.volume < 1) {
              video.volume = Math.min(1, video.volume + 0.1);
              videoSound();
              video.muted = false;
          }
          break;
      case 'ArrowDown': // sound reduction
          if (video.volume > 0) {
              video.volume = Math.max(0, video.volume - 0.1);
              videoSound();
              video.muted = false;
          }
          break;
      case ' ': // play or pause
          play_video();
          break;
      case 'ArrowRight': // fast forward video
          seekButton(1);
          break;
      case 'ArrowLeft': // fast backward video
          seekButton(-1);
          break;
      case 'f': case 'F': // fullscreen
          fullScreen();
          break;
      case 'm': case 'M': // mute
          toggleMute();
          break;
  }
};
