class Graph {
  constructor(cvs, func, cvsWidth = 500, cvsHeight = 500, scale = 25) {
    this.func = func;
    this.ctx = cvs.getContext("2d");
    this.cvsWidth = cvsWidth;
    this.cvsHeight = cvsHeight;
    this.scale = scale;
    cvs.width = cvsWidth;
    cvs.height = cvsHeight;
  }

  axes() {
    const { ctx, cvsWidth, cvsHeight } = this;
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.lineTo(cvsWidth / 2, 0); // Начало линии (x, y) координаты первой точки
    ctx.lineTo(cvsWidth / 2, cvsHeight); // Конец линии  (x, y) координаты ыторой точки
    ctx.stroke();

    // Рисуем горизонтальную линию
    ctx.beginPath();
    ctx.lineTo(0, cvsHeight / 2); // Начало линии
    ctx.lineTo(cvsWidth, cvsHeight / 2); // Конец линии
    ctx.stroke();
  }

  coordinatesToPixels(x, y) {
    const { cvsWidth, cvsHeight, scale } = this;
    const left = cvsWidth / 2 + scale * x;
    const top = cvsHeight / 2 - scale * y;

    console.log(left, top);
    return [left, top];
  }

  grid() {
    const { ctx, cvsWidth, cvsHeight, scale } = this;

    const leftShift = ((cvsWidth / 2) % scale) - scale;
    const topShift = ((cvsHeight / 2) % scale) - scale;

    ctx.strokeStyle = "#bdc3c7";
    ctx.lineWidth = 0.2;
    for (let i = 0; i <= cvsHeight / scale; i++) {
      for (let j = 0; j <= cvsWidth / scale; j++) {
        ctx.beginPath();
        ctx.rect(leftShift + j * scale, topShift + i * scale, scale, scale);
        ctx.stroke();
      }
    }
  }

  render() {
    const { ctx, func, scale } = this;

    for (let i = -20; i <= 20; i++) {
      const y = func(i);

      ctx.beginPath();
      ctx.arc(...this.coordinatesToPixels(i, y), scale / 8, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

const cvs = document.querySelector("#cvs");
const graph = new Graph(cvs, Math.sin);

graph.grid();
graph.axes();

graph.render();
