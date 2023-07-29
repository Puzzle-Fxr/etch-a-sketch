/*lets etch a script*/
const sketch = document.querySelector('.sketch');
const setting = document.querySelector('.setting');


const baseH = sketch.getAttribute("width");
console.log(baseH);


function setSquares (h1, w1) {
    let total = h1*w1;
    console.log(total);
    for (let x=0; x<total; x++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.height=total + "px";
        square.style.width=total + "px";
        square.style.borderStyle = "solid";
        sketch.appendChild(square);
    }
};

//setSquares(8, 8);