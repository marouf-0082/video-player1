const control_container = document.querySelector('.controls-main');
const video = document.querySelector('video');



function show_controls() {
  control_container.style.opacity = 1;
}

function hide_controls() {
  control_container.style.opacity = 0;
}

function play_video() {
  video.play();
}