const circle = document.querySelector('.circle');

document.addEventListener('mousemove', (event) => {
    let displayWidth = window.innerWidth
    let displayHeight = window.innerHeight
    let x = event.clientX

    if (x < displayWidth / 4) {
        circle.style.left = x + 'px';
        circle.style.top = displayHeight / 2 - x + 'px'
    } else if (x > displayWidth / 4 && x < displayWidth / 2) {
        circle.style.left = x + 'px';
        circle.style.top =( displayHeight / 2 - displayWidth / 2) + x + 'px';
    } else if (x > displayWidth / 2 && x < displayWidth * 0.75) {
        circle.style.left = x + 'px';
        circle.style.top = displayHeight / 2 + x - displayWidth / 2 + 'px';
    }
    else {
        circle.style.left = x + 'px';
        circle.style.top = displayHeight / 2 - x + displayWidth + 'px';
    }

})