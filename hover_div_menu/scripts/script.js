const hoverElement = document.querySelector('.hover_element');
const menuItems = document.querySelectorAll('.wrap_hover_block');

function setInitialPosition() {
    const firstItem = menuItems[0];
    if (firstItem) {
        const { left, width } = firstItem.getBoundingClientRect();
        const parentLeft = firstItem.parentElement.getBoundingClientRect().left;
        hoverElement.style.left = `${left - parentLeft}px`;
        hoverElement.style.width = `${width}px`;
        hoverElement.style.backgroundColor = firstItem.dataset.color;
    }
}

window.addEventListener('load', setInitialPosition);
window.addEventListener('resize', setInitialPosition);


menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const { left, width } = item.getBoundingClientRect();
        const parentLeft = item.parentElement.getBoundingClientRect().left;
        hoverElement.style.left = `${left - parentLeft}px`;
        hoverElement.style.width = `${width}px`;
        hoverElement.style.backgroundColor = item.dataset.color;
    });
});