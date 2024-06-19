import { Config } from "../interfaces/Config";
import { $, getKeys } from "../utils";

type Callback = (newConfig: Config) => void;

export class Command {
  callback: Callback = () => {};

  constructor(private config: Config) {
    this.render();
    this.setActions();
  }

  onUpdate(callback: Callback) {
    this.callback = callback;
  }

  render() {
    const keys = getKeys(this.config);
    for (const key of keys) {
      $(`div.command label.${key} span.value`).innerHTML =
        this.config[key] + "";
      $(`div.command label.${key} input`, HTMLInputElement).value =
        this.config[key] + "";
    }
  }

  setActions() {
    const keys = getKeys(this.config);
    for (const key of keys) {
      const elt = $(`div.command label.${key} input`, HTMLInputElement);
      elt.addEventListener("input", () => {
        this.config[key] = +elt.value;
        this.render();
        this.callback(this.config);
      });
    }
  }
}
