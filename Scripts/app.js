//variables
let gridSize = (16);
let drawState = false;
let paintMode = 'colour';

//DOM
const grid = document.getElementById('grid');
const body = document.querySelector('body');
const colour = document.getElementById('defaultBtn');
const eraser = document.getElementById('eraserBtn');
const shading = document.getElementById('shadingBtn');
const rainbow = document.getElementById('rainbowBtn');
const reset = document.getElementById('resetBtn');
const tileRange = document.getElementById('tileRange');
const outputBbl = document.getElementsByClassName('outputBbl');

//generate the tiles within the grid
function generateGrid(gridSize) {
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    grid.style.gridTemplateRows = `repeat (${gridSize}, 1fr)`

    for (let i = 1; i <= gridSize * gridSize; ++i) {
        let tile = document.createElement('div');
        tile.addEventListener ('mousedown', paint);
        tile.addEventListener ('mouseover', paint);
        tile.id = 'tile'+i;
        tile.className ='tile';
        grid.appendChild(tile);
    }
};

//Check for mouse down (hold to paint functionality)
body.addEventListener ('mousedown', () => {drawState = true});
body.addEventListener ('mouseup', () => {drawState = false});
//Tile slider
tileSizer.addEventListener('input', () => {
    setTileOutput(tileRange, outputBbl);
});

function setTileOutput(range, outputBbl) {
    const val = range.value;
    const min = range.min ? range.min : 0;
    const max = range.max ? range.max : 100;
    const newVal = Number(((val - min) * 100) / (max - min));
    outputBbl.innerHTML = val;

    outputBbl.style.left = newVal = '%';
}

//Mode Changing
colour.addEventListener ('click', () =>{
    paintMode = 'colour'
    if (paintMode ='colour'){
        colour.classList.add('activeBtn');
    }
} )

//paint the tiles
function paint (e) {
    if (e.type ==='mouseover' && !drawState) return;
    e.target.style.backgroundColor = 'black';

};


generateGrid(gridSize)