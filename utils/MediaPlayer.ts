class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;
  state: any;

  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this.state = {
      manuallyPaused: false,
    };
    this._initPlugins();
  }
  private _initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }
  play() {
    this.media.play();
  }
  pause() {
    this.media.pause();
  }
  togglePlay(player) {
    if (this.media.paused) {
      this.play();
      this.state.manuallyPaused = false;
    } else {
      this.pause();
      this.state.manuallyPaused = true;
    }
  }
  mute() {
    this.media.muted = true;
  }
  toggleMute() {
    this.media.muted = !this.media.muted;
  }
}









export default MediaPlayer;