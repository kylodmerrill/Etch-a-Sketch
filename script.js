const btn = document.querySelector('button')
const squares = document.querySelectorAll('div');

for (let i = 0; i < 256; i++) {
    const box = document.createElement('div');
    box.className = "box";

    document.getElementById('grid').appendChild(box);
}

