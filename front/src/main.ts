import { computeAngle, computePointOnBigCircle } from "./math";
import "./style.css";

const svgns = "http://www.w3.org/2000/svg";
const container = document.querySelector("g.samples");
if (container === null) {
  throw new Error("oups");
}

const samples = 10;
const r = 1;

for (let i = 0; i < samples; i++) {
  const angle = computeAngle(i, samples);
  const point = computePointOnBigCircle(angle);

  const circle = document.createElementNS(svgns, "circle");
  circle.setAttributeNS(null, "cx", point.x + "");
  circle.setAttributeNS(null, "cy", point.y + "");
  circle.setAttributeNS(null, "r", String(r));
  container.appendChild(circle);
}
