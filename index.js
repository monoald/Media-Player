import MediaPlayer from "./utils/MediaPlayer.js";
import AutoPlay from "./utils/AutoPlay.js";

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] });

const playPauseButton = document.querySelector('.play-pause');
playPauseButton.onclick = () => player.togglePlay();

const muteUnmuteButton = document.querySelector('.mute-unmute');
muteUnmuteButton.onclick = () => player.toggleMute();