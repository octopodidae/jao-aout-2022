console.log("start");

const samples = 10;
console.log("samples: ", samples);
const r = 1;
const cx0 = 50;
const cy0 = 50;
const r0 = 45;
const svgns = "http://www.w3.org/2000/svg";
const container = document.querySelector("g.samples");

function getAngleFromIndex(index, samples) {
  return (2 * Math.PI * index) / samples;
}

function getPointFromAngle(angle) {
  const x = cx0 + Math.cos(angle) * r0;
  const y = cy0 + Math.sin(angle) * r0;
  return { x, y };
}

for (let i = 0; i < samples; i++) {
  //
  const angle = getAngleFromIndex(i, samples);

  const { y, x } = getPointFromAngle(angle);

  const circle = document.createElementNS(svgns, "circle");
  circle.setAttributeNS(null, "cx", x);
  circle.setAttributeNS(null, "cy", y);
  circle.setAttributeNS(null, "r", r);
  container.appendChild(circle);
}
