export class Command {
  constructor(config) {
    this.config = config;
    this.applyConfig();
    this.initActions();
  }
  subscribe(callback) {
    this.callback = callback;
  }
  applyConfig() {
    const arr = Object.keys(this.config);
    console.log("arr: ", arr);

    for (const key of arr) {
      const slider = document.querySelector(`div.command label.${key} input`);
      console.log("slider: ", slider);
      slider.value = this.config[key];
      const label = document.querySelector(`div.command label.${key} span`);
      label.innerHTML = this.config[key];
    }
  }
  initActions() {
    const arr = Object.keys(this.config);
    console.log("arr: ", arr);

    for (const key of arr) {
      const slider = document.querySelector(`div.command label.${key} input`);
      console.log("slider: ", slider);
      slider.addEventListener("input", (event) => {
        // console.log("event: ", event);
        const value = slider.value;
        console.log("value: ", value);
        this.config[key] = value;
        this.applyConfig();
        this.callback(this.config);
      });

      //   slider.value = this.config[key];
      //   const label = document.querySelector(`div.command label.${key} span`);
      //   label.innerHTML = this.config.samples;
    }
  }
}
