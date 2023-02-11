// create default grid on site startup
for (let i = 0; i < 256; i++) {
    const box = document.createElement('div');
    box.className = "box";

    document.getElementById('grid').appendChild(box);

    box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "aqua";
    }
)}

const btn = document.querySelector('button');
const grid = document.getElementById('grid');
const box = document.getElementsByClassName('box');

btn.addEventListener('click', () => {

    // remove default grid
    for (let i = 0; i < 256; i++) {
            grid.removeChild(grid.firstChild);
    }

    // take user input to save as dimensions variables
    const dim = prompt("Please enter a number between 1 and 100", "16");
    const dimSqrd = Math.pow(dim, 2);

    // generate new grid and change box color on hover
    for (let i = 0; i < dimSqrd; i++) {
    const box = document.createElement('div');
    box.className = "box";

    document.getElementById('grid').appendChild(box);

    box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "aqua";
    }
    )}

    // adjust box sizing
    grid.style.gridTemplateColumns = `repeat(${dim}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${dim}, 1fr)`;
    
})
