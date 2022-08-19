import { Config } from "./interfaces/Config";
import { querySelector } from "./Utils";
const DELAY = 300;
export class Command {
  _config: Config = {
    samples: 0,
    multiplicationFactor: 0,
  };
  callback: ((newConfig: Config) => void) | undefined;
  isPlaying = false;
  subscription: ReturnType<typeof setInterval> | undefined;

  constructor(config: Config) {
    this.config = config;
    this.initActions();
  }

  get config() {
    return this._config;
  }

  set config(val: Config) {
    this._config = val;
    this.draw();
  }

  draw() {
    const arr = Object.keys(this.config) as (keyof Config)[];

    for (const key of arr) {
      const slider = querySelector(
        `div.command label.${key} input`,
        HTMLInputElement
      );

      slider.value = this.config[key] + "";
      const label = querySelector(`div.command label.${key} span`);
      label.innerHTML = this.config[key] + "";
    }
    const button = querySelector("div.command button");
    button.innerHTML = this.isPlaying ? "Pause" : "Play";
    this.callback?.(this.config);
  }

  initActions() {
    const arr = Object.keys(this.config) as (keyof Config)[];

    for (const key of arr) {
      const slider = querySelector(
        `div.command label.${key} input`,
        HTMLInputElement
      );

      slider.addEventListener("input", (event) => {
        const value = +slider.value;
        this.config = { ...this.config, [key]: value };
      });
    }
    this.initButtonAction();
  }

  initButtonAction() {
    const button = querySelector("div.command button");
    button.addEventListener("click", (event) => {
      this.isPlaying = !this.isPlaying;
      this.isPlaying ? this.play() : this.pause();
      this.draw();
    });
  }

  pause() {
    if (this.subscription === undefined) {
      return;
    }
    clearInterval(this.subscription);
  }

  play() {
    this.subscription = setInterval(() => {
      let multiplicationFactor = this.config.multiplicationFactor;
      multiplicationFactor++;
      if (multiplicationFactor > 100) {
        multiplicationFactor = 0;
      }
      this.config = { ...this.config, multiplicationFactor };
    }, DELAY);
  }

  subscribe(callback: (newConfig: Config) => void) {
    this.callback = callback;
  }
}
