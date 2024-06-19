import { r, svgns } from "./constants";
import { computeAngle, computePointOnBigCircle } from "./math";
import "./style.css";
import { $, setAttribute } from "./utils";

const container = $("g.samples");

const samples = 100;
const multiplicationFactor = 2;

// adding the samples
for (let i = 0; i < samples; i++) {
  const angle = computeAngle(i, samples);
  const point = computePointOnBigCircle(angle);

  const circle = document.createElementNS(svgns, "circle");
  setAttribute(circle, "cx", point.x);
  setAttribute(circle, "cy", point.y);
  setAttribute(circle, "r", r);
  container.appendChild(circle);
}

// adding the lines
for (let i = 0; i < samples; i++) {
  const angle1 = computeAngle(i, samples);
  const point1 = computePointOnBigCircle(angle1);

  const angle2 = computeAngle(i * multiplicationFactor, samples);
  const point2 = computePointOnBigCircle(angle2);

  const line = document.createElementNS(svgns, "line");
  setAttribute(line, "x1", point1.x);
  setAttribute(line, "y1", point1.y);
  setAttribute(line, "x2", point2.x);
  setAttribute(line, "y2", point2.y);
  container.appendChild(line);
}
