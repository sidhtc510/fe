const cvs = document.querySelector("#cvs");
const ctx = cvs.getContext("2d");
// console.log(ctx);
cvs.width = window.innerWidth;
cvs.height = window.innerHeight;
// ctx.fillRect(300, 0, 50, 50);
// ctx.fillRect(250, 50, 50, 50);
// ctx.fillRect(200, 100, 50, 50);

// let size = 50;
// for (let i = 0; i < 7; i++) {
//   ctx.fillRect(350 - size * i, 0 + size * i, size, size);
// }

// let size = 50;
// let count = 10;
// for (let i = 0; i < 6; i++) {
//   ctx.fillRect(size * (count - 1) - size * i,  size * i, size, size);
// }

function draw(count) {
  const size = 50;
  for (let i = 0; i < count; i++) {
    for (let j = 0; j < count; j++) {
      if ((i + j) % 2 === 1) {
        ctx.fillStyle = "#34495e";
        ctx.fillRect(j * size, i * size, size, size);
      } else {
        ctx.fillStyle = "#ecf0f1";
        ctx.fillRect(j * size, i * size, size, size);
      }
    }
  }
}

// draw(9);

// ctx.beginPath();
// ctx.moveTo(cvs.width / 2-100, cvs.height / 2-100);

// ctx.lineTo(cvs.width / 2+100, cvs.height / 2-100);
// ctx.lineTo(cvs.width / 2 +100, cvs.height / 2 + 100);
// ctx.lineTo(cvs.width / 2-100 , cvs.height / 2 + 100);
// ctx.lineTo(cvs.width / 2-100  , cvs.height / 2-100);

// ctx.stroke();

const deg2pi = (deg) => {
  const oneDeg = Math.PI / 180;
  return deg * oneDeg;
};

// for (let i = 0; i <= 11; i++) {
//     ctx.beginPath();
//     ctx.arc(cvs.width / 2, cvs.height / 2, 10 * i, deg2pi(0), deg2pi(360), false);
//     ctx.stroke();
// }

let circle = 1;

function render() {
  ctx.clearRect(0, 0, cvs.width, cvs.height);
  for (let i = 0; i < circle; i++) {
    ctx.beginPath();
    ctx.arc(cvs.width / 2, cvs.height / 2, 10 * i, 0, Math.PI * 2, false);
    ctx.stroke();
  }
  circle++;
}

setInterval(render, 10);
