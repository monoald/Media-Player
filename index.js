import MediaPlayer from "./utils/MediaPlayer.js";

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video });

const playPauseButton = document.querySelector('.play-pause');
playPauseButton.onclick = () => player.togglePlay();

const muteUnmuteButton = document.querySelector('.mute-unmute');
muteUnmuteButton.onclick = () => player.toggleMute();