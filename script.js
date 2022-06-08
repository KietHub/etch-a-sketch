const gridContainer = document.querySelector('#grid-container');
const root = document.querySelector(':root');
let fill = false;

window.addEventListener('mousedown', (e) => fill = true);
window.addEventListener('mouseup', (e) => fill = false);

generateGrid(16);   //initial grid generation

function generateGrid(sideLength) {
    for (let i = 0; i < sideLength ** 2; i++) {
        const gridSquare = document.createElement('div');
        gridContainer.appendChild(gridSquare);
        gridSquare.classList.add('grid');
        gridSquare.addEventListener('mousemove', fillSquare);
    }
    root.style.setProperty('--grid-col', sideLength);
}

function fillSquare(e) {
    if(!fill) return;
    this.classList.add('coloured');
}