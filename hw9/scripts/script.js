const cvs = document.querySelector("#cvs");
const ctx = cvs.getContext("2d");
cvs.width = window.innerWidth;
cvs.height = window.innerHeight;

const paramObj = {
  x: 220,
  y: 175,
  radius: 50,
  startAngle: 0,
  endAngle: Math.PI,
  counterclockwise: true,
};

function drawLine({ x, y, radius, startAngle, endAngle, counterclockwise }) {
  console.log(x, y, radius, startAngle, endAngle, counterclockwise);
  ctx.beginPath();
  ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);
  ctx.stroke();
}

drawLine(paramObj);