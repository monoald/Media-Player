import MediaPlayer from "./utils/MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.js";

const video = document.querySelector('video');
const player = new MediaPlayer({ 
  el: video, 
  plugins: [ new AutoPlay(), new AutoPause()] 
});

const playPauseButton = document.querySelector('.play-pause');
playPauseButton.onclick = () => player.togglePlay.call(player, player);

const muteUnmuteButton = document.querySelector('.mute-unmute');
muteUnmuteButton.onclick = () => player.toggleMute.call(player, player);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .catch((error) => {
      console.log(error.message);
    })
}