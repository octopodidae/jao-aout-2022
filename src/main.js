import { Board } from "./Board";
import { Command } from "./Command";
try {
  const board = new Board();
  const initialConfig = { samples: 10, multiplicationFactor: 2 };
  board.setConfig(initialConfig);
  board.draw();
  const command = new Command(initialConfig);
  command.subscribe((newConfig) => {
    board.setConfig(newConfig);
    board.redraw();
  });
} catch (err) {}
