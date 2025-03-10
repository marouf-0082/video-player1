const control_container = document.querySelector('.controls-main');
const video = document.querySelector('video');
const play_btn = document.querySelector('.btn-play i');
const volume_show = document.querySelector('.volume-show');
const volume_btn_icon = document.querySelector('.valume-btn');
const current_time = document.querySelector('.current-time');
const duration_time = document.querySelector('.duration-time');

// show controls
function show_controls() {
    control_container.style.opacity = 1;
}

// hide controls
function hide_controls() {
    control_container.style.opacity = 0;
}

// play or pause the video
function play_video() {
    if (video.paused) {
        video.play();
        play_btn.classList.replace("fa-play", "fa-pause");
    } else {
        video.pause();
        play_btn.classList.replace("fa-pause", "fa-play");
    }
}

// fast forward or rewind the video
function seekButton(num) {
    video.currentTime += (num * 5);
}

// update the time of video
video.addEventListener("loadedmetadata", function () {
    duration_time.textContent = formatTime(video.duration);
});

video.addEventListener('timeupdate', () => {
    current_time.textContent = formatTime(video.currentTime);
    let percent = (video.currentTime / video.duration) * 100;
    document.querySelector('.progress').style.width = percent + '%';
});

// Adjusting the volume and displaying the volume status
function videoSound() {
    volume_show.textContent = Math.round(video.volume * 100) + '%';

    if (video.volume >= 0.7) {
        volume_btn_icon.innerHTML = `<i class="fas fa-volume-up"></i>`;
    } else if (video.volume >= 0.3) {
        volume_btn_icon.innerHTML = `<i class="fas fa-volume-down"></i>`;
    } else if (video.volume > 0) {
        volume_btn_icon.innerHTML = `<i class="fas fa-volume-off"></i>`;
    } else {
        volume_btn_icon.innerHTML = `<i class="fas fa-volume-mute"></i>`;
    }
}

// show the controls when mouse is moving
let hideControlsTimeout;

function showControlMain() {
    show_controls();
    clearTimeout(hideControlsTimeout);
    hideControlsTimeout = setTimeout(() => {
        hide_controls();
    }, 2000);
}

// active the fullscreen
function fullScreen() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    }
}

// mute the sound of video
function toggleMute() {
    video.muted = !video.muted;
    videoSound();
}

// reset video after playback ends
function resetVideo() {
    video.currentTime = 0;
    video.pause();
    play_btn.classList.replace("fa-pause", "fa-play");
}

// time formatting (seconds → minutes:seconds)
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}
