import MediaPlayer from '../utils/MediaPlayer'

class AutoPause {
  private threshold: number;
  player: MediaPlayer;

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

  private handlerIntersection(entries: IntersectionObserverEntry[]) {
    const entry = entries[0];

    const isVisible = entry.intersectionRatio >= this.threshold;
    if(!this.player.state.manuallyPaused) {
      isVisible ? this.player.play() : this.player.pause();
    }
  }

  private handleVisibiltyChange() {
    if(!this.player.state.manuallyPaused) {
      document.visibilityState == 'hidden' ? this.player.pause() : this.player.play();
    }
  }
}

export default AutoPause;