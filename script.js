/*lets etch a script*/
const sketch = document.querySelector('.sketch');
const setting = document.querySelector('.setting');



function sixteenSquares (h1, w1) {
    let total = h1*w1;
    for (let x=0; x<total; x++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.height= "8.84mm";
        square.style.width= "8.84mm";
        square.style.borderStyle = "solid";
        square.style.borderWidth = "0.1mm";
        sketch.appendChild(square);
    }
};


function thirtyTwoSquares (h1, w1) {
    let total = h1*w1;
    for (let x=0; x<total; x++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.height= "4.152mm";
        square.style.width= "4.152mm";
        square.style.borderStyle = "solid";
        square.style.borderWidth = "0.1mm";
        sketch.appendChild(square);
    }
};

function sixtyFourSquares (h1, w1) {
    let total = h1*w1;
    for (let x=0; x<total; x++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.height= "1.811mm";
        square.style.width= "1.811mm";
        square.style.borderStyle = "solid";
        square.style.borderWidth = "0.1mm";
        sketch.appendChild(square);
    }
};

//sixteenSquares(16, 16);
//thirtyTwoSquares(32, 32);
//sixtyFourSquares(64, 64);
