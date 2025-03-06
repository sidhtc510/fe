const moving_object = document.querySelector('.moving_object');

document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    moving_object.innerHTML = `X: ${x} </br> Y: ${y}`;

    moving_object.style.left = x - 50 + 'px'
    moving_object.style.top = y - 50 + 'px'
});