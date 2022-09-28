//variables
let gridSize = 16;
let drawState = false;
let paintMode = 'colour';
let brushColour = '#000000';
let gridLines = true;

//DOM
const body = document.querySelector('body');
const grid = document.getElementById('grid');
const colourPicker = document.getElementById('colourPicker')
const colour = document.getElementById('defaultBtn');
const eraser = document.getElementById('eraserBtn');
const shading = document.getElementById('shadingBtn');
const rainbow = document.getElementById('rainbowBtn');
const btn8x8 = document.getElementById('8x8');
const btn16x16 = document.getElementById('16x16');
const btn32x32 = document.getElementById('32x32');
const btn64x64 = document.getElementById('64x64');
const reset = document.getElementById('resetBtn');
const fill = document.getElementById('fillBtn');
const gridSwitch = document.getElementById('gridSwitch');

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
        tile.className ='tile gridLines';
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
colourPicker.addEventListener('input', () => {brushColour = colourPicker.value;});
colour.addEventListener ('click', () =>{paintMode = 'colour'; setActiveMode()});
eraser.addEventListener ('click', () =>{paintMode = 'eraser'; setActiveMode()});
shading.addEventListener ('click', () =>{paintMode = 'shading'; setActiveMode()});
rainbow.addEventListener ('click', () =>{paintMode = 'rainbow'; setActiveMode()});

//Size Buttons
btn8x8.addEventListener ('click', () =>{gridSize = 8; generateGrid()});
btn16x16.addEventListener ('click', () =>{gridSize = 16; generateGrid()});
btn32x32.addEventListener ('click', () =>{gridSize = 32; generateGrid()});
btn64x64.addEventListener ('click', () =>{gridSize = 64; generateGrid()});

//general buttons
reset.addEventListener ('click', () =>{generateGrid()});
fill.addEventListener ('click', ()=>{
    const currentTiles = document.querySelectorAll('.tile');
    currentTiles.forEach((tile) => {
        tile.style.backgroundColor = `${brushColour}`;
    });
});
//grid lines on/off
gridSwitch.addEventListener('change', (e) =>{
    const currentTiles = document.querySelectorAll('.tile');
    console.log('Hello!')
    if (e.target.checked){
        console.log('I am checked');
        currentTiles.forEach((tile) => {
            tile.classList.add('gridLines');
        })
    } else {
        console.log('I am not checked');
        currentTiles.forEach((tile) => {
            tile.classList.remove('gridLines');
        })
    }
});

//paint the tiles
function paint (e) {
    if (e.type ==='mouseover' && !drawState) return;
    switch (paintMode){
        case 'colour':
            e.target.style.backgroundColor = `${colourHelper(e)}`;
            break;
        case 'eraser':
            e.target.style.backgroundColor = `${eraserHelper(e)}`;
            break;
        case 'shading':
            //e.target.style.backgroundColor = `${shadingHelper(e)}`;
            e.target.style.backgroundColor = `rgb(${shadingHelper(e)})`;
            break;
        case 'rainbow':
            e.target.style.backgroundColor = `rgb(${rainbowHelper()})`;
            break;
    }
};
//Default colouring function
function colourHelper() {
    return brushColour;
}
//eraser function
function eraserHelper() {
    return 'rgb(255,255,255)';
}

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

//rainbow brush function
function rainbowHelper() {
    const outputColour = Array(3).fill().map(()=> Math.floor(255 * Math.random()));
    return outputColour.join();
}

function setActiveMode() {
    if (paintMode==='colour'){
        colour.classList.add('activeBtn');
    } else {
        colour.classList.remove('activeBtn');
    };
    if (paintMode==='eraser'){
        eraser.classList.add('activeBtn');
    } else {
        eraser.classList.remove('activeBtn');
    };
    if (paintMode==='shading'){
        shading.classList.add('activeBtn');
    } else {
        shading.classList.remove('activeBtn');
    };
    if (paintMode==='rainbow'){
        rainbow.classList.add('activeBtn');
    } else {
        rainbow.classList.remove('activeBtn');
    };      
}
function setActiveSize(){
    
}

setActiveMode()
generateGrid()

