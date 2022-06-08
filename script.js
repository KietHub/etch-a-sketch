const gridContainer = document.querySelector('#grid-container');
const root = document.querySelector(':root');
let fill = false;

window.addEventListener('mousedown', () => fill = true);
window.addEventListener('mouseup', () => fill = false);

const gridSizeButton = document.querySelector('#size-button');
gridSizeButton.addEventListener('click', adjustGridSize);

const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', resetGrid);

let eraseMode = false;
const eraserButton = document.querySelector('#eraser-button');
eraserButton.addEventListener('click', () => {
    eraseMode = true;
    setCursor();
});

const drawButton = document.querySelector('#draw-button');
drawButton.addEventListener('click', () => {
    eraseMode = false;
    setCursor();
});

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
    if(!eraseMode) 
        this.classList.add('coloured');
    else
        this.classList.remove('coloured');
}

function clearGrid() {
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

function adjustGridSize() {
    let sideLength = prompt('Enter desired side length.') 

    while(sideLength > 100 || sideLength < 1) {
        sideLength = prompt('Invalid side length. Min: 1 | Max: 100.');
    }

    clearGrid();
    generateGrid(sideLength);
}

function resetGrid() {
    const gridSquare = document.querySelectorAll('.grid');
    for (square of gridSquare) {
        square.classList.remove('coloured');
    }
}

function setCursor() {
    const gridSquare = document.querySelectorAll('.grid');
    if(eraseMode) {
        for (grid of gridSquare) {
            grid.classList.add('erase');
        }
    } else {
        for (grid of gridSquare) {
            grid.classList.remove('erase');
        }
    }
}