const round = document.querySelector(".round");
const shape = document.querySelector("#square");
const btn = document.querySelectorAll("button");


// for changing the color of rounded shape
btn[0].addEventListener('click', changeColor);
function generateColor(){
    let color = Math.floor(Math.random() * 255);
    return color;
}

function changeColor(){
    let newColor = `rgb(${generateColor()}, ${generateColor()}, ${generateColor()})`;
    round.style.backgroundColor = newColor;
}

// for changing the shape
const shapes = ["square", "round", "diamond", "triangle", "arrow", "frame", "star","cross"];

btn[1].addEventListener('click', changeShape);

function randomShape(){
    let idx = Math.floor(Math.random() * shapes.length);
    return shapes[idx];
}
function changeShape(){
    shape.id = randomShape();
}
