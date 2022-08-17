console.log("start");

var samples = 10;
console.log("samples: ", samples);

for (var i = 0; i < samples; i++) {
  var svgns = "http://www.w3.org/2000/svg";
  var x = 34;
  var y = 56;
  var container = document.querySelector("g.samples");
  var circle = document.createElementNS(svgns, "circle");
  circle.setAttributeNS(null, "cx", x);
  circle.setAttributeNS(null, "cy", y);
  circle.setAttributeNS(null, "r", 1);
  container.appendChild(circle);
}
