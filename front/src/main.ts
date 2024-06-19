import { Board } from "./classes/Board";
import { Config } from "./interfaces/Config";
import "./style.css";

const config: Config = {
  samples: 100,
  multiplicationFactor: 2,
};

const board = new Board();
board.setConfig(config);
board.render();
