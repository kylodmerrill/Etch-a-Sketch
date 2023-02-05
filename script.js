for (let i = 0; i < 256; i++) {
    const box = document.createElement('div');
    box.className = "box";

    document.getElementById('grid').appendChild(box);
}

const btn = document.querySelector('button');
const grid = document.getElementById('grid');
const box = document.getElementsByClassName('box');

btn.addEventListener('click', () => {

    for (let i = 0; i < 256; i++) {
            grid.removeChild(grid.firstChild);
    }

    const dim = prompt("Please enter a number between 1 and 100", "16");

    for (let i = 0; i < Math.pow(dim, 2); i++) {
        const box = document.createElement('div');
        box.className = "box";
    
        document.getElementById('grid').appendChild(box);
    }

    for (let i = 0; i < dim; i++) {
        let element = box[i];
        element.style.width = (689 - (dim + 1)) / dim; 
    }
})