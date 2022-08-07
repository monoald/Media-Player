class AutoPause {
  constructor() {
    this.threshold = 0.25;
    this.handlerIntersection = this.handlerIntersection.bind(this);
    this.handleVisibiltyChange = this.handleVisibiltyChange.bind(this);
  }

  run(player) {
    this.player = player
    const observer = new IntersectionObserver(this.handlerIntersection, {
      threshold: this.threshold,
    });

    observer.observe(this.player.media);

    document.addEventListener("visibilitychange", this.handleVisibiltyChange)
  }

  handlerIntersection(entries) {
    const entry = entries[0];

    const isVisible = entry.intersectionRatio >= this.threshold;
    if(!this.player.manuallyPaused) {
      isVisible ? this.player.play() : this.player.pause();
    }
  }

  handleVisibiltyChange() {
    if(!this.player.manuallyPaused) {
      document.visibilityState == 'hidden' ? this.player.pause() : this.player.play();
    }
  }
}

export default AutoPause;