import { Config } from "./interfaces/Config";
import { keys, querySelector } from "./Utils";
const DELAY = 300;
export class Command {
  #callback: ((newConfig: Config) => void) | undefined;
  #config: Config = {
    samples: 0,
    multiplicationFactor: 0,
  };
  #isPlaying = false;
  #subscription: ReturnType<typeof setInterval> | undefined;

  constructor(config: Config) {
    this.config = config;
    this.initActions();
  }

  get isPlaying() {
    return this.#isPlaying;
  }

  set isPlaying(val: boolean) {
    this.#isPlaying = val;
    this.draw();
  }

  private get config() {
    return this.#config;
  }

  private set config(val: Config) {
    this.#config = val;
    this.draw();
  }

  subscribe(callback: (newConfig: Config) => void) {
    this.#callback = callback;
  }

  private draw() {
    const arr = keys(this.config);

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
    this.#callback?.(this.config);
  }

  private initActions() {
    const arr = keys(this.config);

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

  private initButtonAction() {
    const button = querySelector("div.command button");
    button.addEventListener("click", (event) => {
      this.isPlaying = !this.isPlaying;
      this.isPlaying ? this.play() : this.pause();
    });
  }

  private pause() {
    if (this.#subscription === undefined) {
      return;
    }
    clearInterval(this.#subscription);
  }

  private play() {
    this.#subscription = setInterval(() => {
      let multiplicationFactor = this.config.multiplicationFactor;
      multiplicationFactor++;
      if (multiplicationFactor > 100) {
        multiplicationFactor = 0;
      }
      this.config = { ...this.config, multiplicationFactor };
    }, DELAY);
  }
}
