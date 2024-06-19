import "./style.css";

const svgns = "http://www.w3.org/2000/svg";
const container = document.querySelector("g.samples");
if (container === null) {
  throw new Error("oups");
}

const samples = 10;
const r = 1;

for (let i = 0; i < samples; i++) {
  const cx = 45;
  const cy = 34;

  const circle = document.createElementNS(svgns, "circle");
  circle.setAttributeNS(null, "cx", cx + "");
  circle.setAttributeNS(null, "cy", cy.toString());
  circle.setAttributeNS(null, "r", String(r));
  container.appendChild(circle);
}
