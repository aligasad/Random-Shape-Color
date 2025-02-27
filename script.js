let round = document.querySelector(".round");
let shape = document.querySelector("#square");
let btn = document.querySelectorAll("button");

btn[0].addEventListener("click", ()=>{
    let newColor = `rgb(${makeColor()}, ${makeColor()}, ${makeColor()})`; // 3$ for RGB
    round.style.backgroundColor = newColor;
});
function makeColor(){
    let color = Math.floor(Math.random() * 255);
    return color;
}

btn[1].addEventListener("click", ()=>{
    let name = randomShape();
    shape.id = name;
});
let arr=["square", "round", "diamond", "triangle", "arrow", "frame", "star","cross", "left-point", "right-point", "parallal", "cheg"];

function randomShape(){
    let idx = Math.floor(Math.random() * arr.length); // If we take Math.ceil then it generate a number that is greater than length of array 
    console.log(idx)
    return arr[idx];
}
