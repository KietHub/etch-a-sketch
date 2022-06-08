const gridContainer = document.querySelector('#grid-container');
const root = document.querySelector(':root');

function generateGrid(sideLength) {
    for (let i = 0; i < sideLength ** 2; i++) {
        const gridSquare = document.createElement('div');
        gridContainer.appendChild(gridSquare);
        gridSquare.classList.add('grid');
    }

    root.style.setProperty('--grid-col', sideLength);
}

generateGrid(16);