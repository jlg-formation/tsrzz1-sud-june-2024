import "./style.css";

const svgns = "http://www.w3.org/2000/svg";
const container = document.querySelector("g.samples");
if (container === null) {
  throw new Error("oups");
}

const samples = 10;
const r = 1;

const cx0 = 50;
const cy0 = 50;
const r0 = 45;

for (let i = 0; i < samples; i++) {
  const angle = (i * (2 * Math.PI)) / samples;
  const cx = cx0 + r0 * Math.cos(angle);
  const cy = cy0 + r0 * Math.sin(angle);

  const circle = document.createElementNS(svgns, "circle");
  circle.setAttributeNS(null, "cx", cx + "");
  circle.setAttributeNS(null, "cy", cy.toString());
  circle.setAttributeNS(null, "r", String(r));
  container.appendChild(circle);
}
