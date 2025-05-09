container = document.getElementById('container');
sizeButton = document.getElementById('sizeButton');

let gridSize = 16;

function createGrid(size) {

    container.innerHTML = ' ';

    let squareSize = 100 / size;

    for (let i=0; i < size * size; i++){
        let square = document.createElement('div');

        square.style.width = `${squareSize}`;
        square.style.height = `${squareSize}`;
        square.style.boxSizing = 'border-box';
        square.style.backgroundColor = 'white';

        square.addEventListener('mouseover', ()=> {
            this.style.backgroundColor = 'black';
        })

        document.appendChild(square);
    }

}