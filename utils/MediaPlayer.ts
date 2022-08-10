class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;
  state: any;
  container: HTMLElement;

  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this.state = {
      manuallyPaused: false,
    };
    this.initPlayer();  
    this.initPlugins();
  }

  initPlayer() {
    this.container = document.createElement('div');
    this.container.style.position = 'relative';
    this.media.parentNode.insertBefore(this.container, this.media);
    this.container.appendChild(this.media);
  }

  private initPlugins() {
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
  togglePlay() {
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