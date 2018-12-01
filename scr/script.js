const navButton = document.querySelector('.header__button');
const navMenu = document.querySelector('.nav');
const viewSize = document.querySelector('.view__size');
let viewX;
let viewY;
let sizing;
let viewW;

// Provides information about window size
function startSize() {
    viewY = window.innerHeight;
    viewX = window.innerWidth;
    if (viewX > 400) {
        sizing = 'px';
        viewW = 'window size ';
    } else {
        sizing = '';
        viewW = '';
    }
    viewSize.innerHTML = viewW + viewX + sizing + ' : ' + viewY + sizing;
}

// Opens nav menu class and rotates button
navButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    navButton.classList.toggle('button_rotate');
});
window.addEventListener('resize', () => startSize());
startSize();


