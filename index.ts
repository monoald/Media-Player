import MediaPlayer from "./utils/MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";
import AdsPlugin from "./plugins/Ads";

const video = document.querySelector('video');
const player = new MediaPlayer({ 
  el: video, 
  plugins: [ new AutoPlay(), new AutoPause(), new AdsPlugin()] 
});

const playPauseButton: HTMLElement = document.querySelector('.play-pause') as HTMLElement;
playPauseButton.onclick = () => player.togglePlay.call(player, player);

const muteUnmuteButton: HTMLElement = document.querySelector('.mute-unmute') as HTMLElement;
muteUnmuteButton.onclick = () => player.toggleMute.call(player, player);