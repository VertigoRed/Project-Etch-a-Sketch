/* //Variables
let drawState = false;
let mousePosition = { x:-1, y:-1};
// let eraseState = false;
//ui
const gridContainer = document.querySelector('.gridContainer');
const rangeContainer = document.querySelector('.rangeContainer');
const gSlider = document.querySelector('.gSlider');





/* window.addEventListener('mousedown', function(e)  {
    if (e.buttons===1){
        drawState = true;
    }
}); 
window.addEventListener('mouseup', function(e)  {
    //if (e.buttons===1){
        drawState = false;
        console.log('Hello Draw state should be false now')
    //}
}); */

//create div grid
/*function createGrid (gridSize){
    let tileSize = 500/gridSize;
    console.log(tileSize);
    for (let i = 1; i <= gridSize * gridSize; ++i) {
        let gridDiv = document.createElement('div');
        gridDiv.id = 'gridDiv'+i;
        gridDiv.className ='gridDiv';
        gridDiv.style.width = `${tileSize}px`;
        gridDiv.style.height = `${tileSize}px`;
        gridContainer.appendChild(gridDiv);
        gridDiv.addEventListener ('click', (e) => {
            gridDiv.style.backgroundColor = 'black';
        });
    }
}


createGrid(16);

let handleMousemove = (e) => {
    mousePosition.x = e.x;
    mousePosition.y = e.y;

    if (drawState){
        let elem = document.elementFromPoint(mousePosition.x, mousePosition.y);
        
        if(elem.className = 'gridDiv')
        {
            elem.click();
        } 
    }
}

let handleMousedown = (e) => {
    drawState = true;
}

let handleMouseup = (e) => {
    drawState = false;
}


document.addEventListener('mousemove', handleMousemove);
document.addEventListener('mousedown', handleMousedown);
document.addEventListener('mouseup', handleMouseup);



function paintHelper(color, gridDiv){

}

function paintBlack(gridDiv){
    if (isDrawing){
        gridDiv.style.backgroundColor = "black"; 
    };
} */

//variables
let gridSize = (16);
let drawState = false;

//DOM
const grid = document.getElementById('grid');
const body = document.querySelector('body');

//generate the tiles within the grid
function generateGrid(gridSize) {
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    grid.style.gridTemplateRows = `repeat (${gridSize}, 1fr)`

    for (let i = 1; i <= gridSize * gridSize; ++i) {
        let tile = document.createElement('div');
        tile.addEventListener ('mousedown', paint());
        tile.addEventListener ('mouseover', paint());
        tile.id = 'tile'+i;
        tile.className ='tile';
        grid.appendChild(tile);
    }
};

//Check for mouse down (hold to paint functionality)
body.addEventListener ('mousedown', () => {drawState = true});
body.addEventListener ('mouseup', () => {drawState = false});

//paint the tiles
function paint () {};


generateGrid(gridSize)