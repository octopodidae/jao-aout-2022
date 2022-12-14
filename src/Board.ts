import { Config } from "./interfaces/Config";
import { Point } from "./interfaces/Points";

const r = 1;
const cx0 = 50;
const cy0 = 50;
const r0 = 45;
const svgns = "http://www.w3.org/2000/svg";
const container = document.querySelector("g.samples") as Element;
const container2 = document.querySelector("g.lines") as Element;
// if (container === null) {
//   throw new Error("Cannot find g.Samples");
// }
// if (container2 === null) {
//   throw new Error("Cannot find g.lines");
// }

const getPointFromAngle = (angle: number) => {
  const x = cx0 + Math.cos(angle) * r0;
  const y = cy0 + Math.sin(angle) * r0;
  return { x, y };
};

const getAngleFromIndex = (index: number, samples: number) => {
  return (2 * Math.PI * index) / samples;
};

const drawLine = (p1: Point, p2: Point) => {
  const line = document.createElementNS(svgns, "line");
  line.setAttributeNS(null, "x1", p1.x + "");
  line.setAttributeNS(null, "y1", `${p1.y}`);
  line.setAttributeNS(null, "x2", String(p2.x));
  line.setAttributeNS(null, "y2", p2.y.toFixed());
  container2.appendChild(line);
};

export class Board {
  private config: Config = {
    samples: 23,
    multiplicationFactor: 34,
  };

  drawCircles() {
    for (let i = 0; i < this.config.samples; i++) {
      const angle = getAngleFromIndex(i, this.config.samples);

      const { x, y } = getPointFromAngle(angle);

      const circle = document.createElementNS(svgns, "circle");
      circle.setAttributeNS(null, "cx", x + "");
      circle.setAttributeNS(null, "cy", y + "");
      circle.setAttributeNS(null, "r", r + "");
      container.appendChild(circle);
    }
  }

  drawLines() {
    for (let i = 0; i < this.config.samples; i++) {
      this.drawLine(i);
    }
  }

  drawLine(index: number) {
    const angle1 = getAngleFromIndex(index, this.config.samples);

    const angle2 = getAngleFromIndex(
      index * this.config.multiplicationFactor,
      this.config.samples
    );
    const pt1 = getPointFromAngle(angle1);
    const pt2 = getPointFromAngle(angle2);
    drawLine(pt1, pt2);
  }

  draw() {
    this.drawCircles();
    this.drawLines();
  }

  redraw() {
    container.innerHTML = "";
    container2.innerHTML = "";
    this.draw();
  }

  setConfig(config: Config) {
    this.config = config;
  }
}
