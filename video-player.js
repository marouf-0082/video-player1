const control_container = document.querySelector('.controls-main');
const video = document.querySelector('video');
const play_btn = document.querySelector('.btn-play i');


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
  } else {
    video.pause();
    play_btn.classList.replace('fa-pause', 'fa-play');
  }
}

function seekButton(num) {
  if (num === 1) {
    video.currentTime += (num * 5);
    video.play();
    play_btn.classList.replace("fa-play", "fa-pause");
  } else {
    video.currentTime += (num * 5);
  }
}
