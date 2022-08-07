function MediaPlayer(config) {
  this.media = config.el;
  this.plugins = config.plugins || [];
  this.state = {
    manuallyPaused: false,
  };
  this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function() {
  const player = {
    state: this.state,
    play: () => this.play(),
    pause: () => this.pause(),
    togglePlay: () => this.togglePlay(),
    toggleMute: () => this.toggleMute(),
    media: this.media,
    get muted() {
      return this.media.muted;
    },

    set muted(value) {
      this.media.muted = value;
    },
    get manuallyPaused() {
      return this.state.manuallyPaused;
    },

    set manuallyPaused(state) {
      this.state.manuallyPaused = state;
    }
  };

  this.plugins.forEach(plugin => {
    plugin.run(player);
  });
}

MediaPlayer.prototype.play = function() {
  this.media.play();
};

MediaPlayer.prototype.pause = function() {
  this.media.pause();
};

MediaPlayer.prototype.togglePlay = function(player) {
  if(this.media.paused) {
    this.play();
    this.state.manuallyPaused = false;
  } else {
    this.pause();
    this.state.manuallyPaused = true;
  }
};

MediaPlayer.prototype.mute = function() {
  this.media.muted = true;
};

MediaPlayer.prototype.toggleMute = function() {
  this.media.muted = !this.media.muted;
};



export default MediaPlayer;