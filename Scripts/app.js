//Variables
let gridSize = 16;
let tileSize = 500 / gridSize;
console.log(tileSize);
//ui
const gridContainer = document.querySelector('.container');
//create div grid
for (let i = 1; i <= gridSize * gridSize; ++i) {
    let gridDiv = document.createElement('div');
    gridDiv.id = 'gridDiv'+i;
    gridDiv.className ='gridDiv';
    gridDiv.style.width = `${tileSize}px`;
    gridDiv.style.height = `${tileSize}px`;
    gridContainer.appendChild(gridDiv);
}
