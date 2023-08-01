const video = document.getElementById('custom-video');
const playPauseBtn = document.getElementById('play-pause-btn');
const progressBar = document.querySelector('.progress-bar');
const fullscreenBtn = document.getElementById('fullscreen-btn');

playPauseBtn.addEventListener('click', togglePlayPause);
video.addEventListener('timeupdate', updateProgressBar);
video.addEventListener('click', togglePlayPause);
fullscreenBtn.addEventListener('click', toggleFullScreen);

function togglePlayPause() {
    if (video.paused || video.ended) {
        video.play();
        playPauseBtn.innerHTML = '&#10074;&#10074;'; // Pause symbol
    } else {
        video.pause();
        playPauseBtn.innerHTML = '&#9658;'; // Play symbol
    }
}

function updateProgressBar() {
    const progress = (video.currentTime / video.duration) * 100;
    progressBar.style.width = `${progress}%`;
}

function toggleFullScreen() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
    }
}
