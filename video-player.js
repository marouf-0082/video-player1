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
    video.currentTime += (num * 5);
    video.play();
    play_btn.classList.replace("fa-play", "fa-pause");
    durationOfPlayVideo();
  } else {
    video.currentTime += (num * 5);
    durationOfPlayVideo();
  }
}

function durationOfPlayVideo() {
video.addEventListener('timeupdate', () => {
  let percent = video.currentTime/video.duration * 100;
  document.querySelector('.progress').style.width = percent + '%';
});
}

document.onkeydown = (e) => {
  switch(e.key) {
    case 'ArrowUp': 
      if (video.volume < 1) {
        video.volume = (video.volume + 0.1).toFixed(1);
        videoSound();
      }
      break;
    case 'ArrowDown': 
      if (video.volume > 0) {
        video.volume = (video.volume - 0.1).toFixed(1);
        videoSound();
      }
      break;
  }
}

function videoSound() {
  volume_show.textContent = (video.volume * 100) + '%';

  if (volume_show.textContent >= 50+'%') {
    volume_btn_icon.innerHTML = `<i class="fas fa-volume-up"></i>`;
  } else if (volume_show.textContent > 0+'%') {
    volume_btn_icon.innerHTML = `<i class="fas fa-volume-down"></i>`;
  } else if (volume_show.textContent === 0+'%') {
    volume_btn_icon.innerHTML = `<i class="fas fa-volume-mute"></i>`;
  }
}