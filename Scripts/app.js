//variables
let gridSize = 16;
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
const btn8x8 = document.getElementById('8x8');
const btn16x16 = document.getElementById('16x16');
const btn32x32 = document.getElementById('32x32');
const btn64x64 = document.getElementById('64x64');

//generate the tiles within the grid
function generateGrid(){
    clearGrid();
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
//clear the grid
function clearGrid(){
    grid.innerHTML = '';
}

//Check for mouse down (hold to paint)
body.addEventListener ('mousedown', () => {drawState = true});
body.addEventListener ('mouseup', () => {drawState = false});

//Mode Buttons
colour.addEventListener ('click', () =>{paintMode = 'colour'});
eraser.addEventListener ('click', () =>{paintMode = 'eraser'});
shading.addEventListener ('click', () =>{paintMode = 'shading'});
rainbow.addEventListener ('click', () =>{paintMode = 'rainbow'});
reset.addEventListener ('click', () =>{generateGrid()});

//Size Buttons
btn8x8.addEventListener ('click', () =>{gridSize = 8; generateGrid()});
btn16x16.addEventListener ('click', () =>{gridSize = 16; generateGrid()});
btn32x32.addEventListener ('click', () =>{gridSize = 32; generateGrid()});
btn64x64.addEventListener ('click', () =>{gridSize = 64; generateGrid()});

//paint the tiles
function paint (e) {
    if (e.type ==='mouseover' && !drawState) return;
    switch (paintMode){
        case 'colour':
            e.target.style.backgroundColor = `${colourHelper(e)}`;
            break;
        case 'eraser':
            e.target.style.backgroundColor = 'white';
            break;
        case 'shading':
            //e.target.style.backgroundColor = `${shadingHelper(e)}`;
            e.target.style.backgroundColor = `rgb(${shadingHelper(e)})`
            break;
        case 'rainbow':
            break;
    }
};
//Default colouring function
function colourHelper() {
    return 'rgb(250,100,240)'
}
//eraser function
function eraserHelper() {}

//shading function
function shadingHelper(e) {
        const currentColour = getComputedStyle(e.target).getPropertyValue("background-color").match(/\d+/g).map(Number);
        outputColour = currentColour.map (function(value){
            if (value > 0){
                return value - 35;
            } else {
                return 0;
            }
        });
        return outputColour.join();
}
function rainbowHelper() {}


generateGrid()

