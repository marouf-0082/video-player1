const control_container = document.querySelector('.controls-main');
const video = document.querySelector('video');
const play_btn = document.querySelector('.btn-play i');
const volume_show = document.querySelector('.volume-show');
const volume_btn_icon = document.querySelector('.valume-btn');

function show_controls() {
  control_container.style.opacity = 1;
}

function hide_controls() {
  control_container.style.opacity = 0;
}

function play_video() {
  if (video.paused) {
    video.play();
    play_btn.classList.replace("fa-play", "fa-pause");
    durationOfPlayVideo();
  } else {
    video.pause();
    play_btn.classList.replace('fa-pause', 'fa-play');
  }
}

function seekButton(num) {
  if (num === 1) {
    if (video.currentTime === 0) {
      video.play();
      play_btn.classList.replace("fa-play", "fa-pause");
      video.currentTime += (num * 5);
      durationOfPlayVideo();
    } else {
      video.currentTime += (num * 5);
      durationOfPlayVideo();
    }
  } else {
    video.currentTime += (num * 5);
    durationOfPlayVideo();
  }
}

function durationOfPlayVideo() {
video.addEventListener('timeupdate', () => {
  if (video.currentTime === video.duration) {
    resetVideo();
  }
  let percent = (video.currentTime/video.duration) * 100;
  document.querySelector('.progress').style.width = percent + '%';
});
}

window.document.onkeydown = (e) => {
  switch(e.key) {
    case 'ArrowUp': 
      if (video.volume < 1) {
        video.volume = (video.volume + 0.1).toFixed(1);
        showControlMain();
        videoSound();
        video.muted = false;
      }
      break;
    case 'ArrowDown': 
      if (video.volume > 0) {
        video.volume = (video.volume - 0.1).toFixed(1);
        showControlMain();
        videoSound();
        video.muted = false;
      }
      break;
    case ' ':
      if (video.paused) {
        video.play();
        play_btn.classList.replace("fa-play", "fa-pause");
        durationOfPlayVideo();
        showControlMain();
      } else if (video.played) {
          video.pause();
          play_btn.classList.replace("fa-pause", "fa-play");
          durationOfPlayVideo();
          showControlMain();
        }
      break;
    case 'ArrowRight':
      seekButton(1);
      showControlMain();
      break;
    case 'ArrowLeft':
      seekButton(-1);
      showControlMain();
      break;
    case 'f':
      case 'F':
      fullScreen();
      break;
  }
}

function videoSound() {
  volume_show.textContent = (video.volume * 100) + '%';

  if (volume_show.textContent === 100+'%') {
    volume_btn_icon.innerHTML = `<i class="fas fa-volume-up"></i>`;
  } else if (volume_show.textContent >= 70+'%') {
    volume_btn_icon.innerHTML = `<i class="fas fa-volume-up"></i>`;
  } else if (volume_show.textContent >= 30+'%') {
    volume_btn_icon.innerHTML = `<i class="fas fa-volume-down"></i>`;
  } else if (volume_show.textContent > 0+'%') {
    volume_btn_icon.innerHTML = `<i class="fas fa-volume-off"></i>`;
  } else if (volume_show.textContent === 0+'%') {
    volume_btn_icon.innerHTML = `<i class="fas fa-volume-mute"></i>`;
  }
}

let hideControlsTimeout;

function showControlMain() {
  show_controls();

  if (hideControlsTimeout) {
    clearTimeout(hideControlsTimeout);
  }

  hideControlsTimeout = setTimeout(() => {
    hide_controls();
  }, 2000);
}

function fullScreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (document.exitFullscreen) {
    video.exitFullscreen();
  }
}

function toggleMute() {
  if (video.muted) {
    video.muted = false;
    videoSound();
  } else {
    video.muted = true;
    volume_btn_icon.innerHTML = `<i class="fas fa-volume-mute"></i>`;
  }
}

function resetVideo() {
  video.currentTime = 0;
  video.pause();
  play_btn.classList.replace("fa-pause", "fa-play");
}