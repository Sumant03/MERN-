let canvas=document.querySelector("#canvas");
canvas.style.width=;
// canvas.

// window.addEventListener("resize",function(){

// })
//a context object which provides fun for 2d drawing .
let ctx=canvas.getContext("2d");

console.log(ctx);

ctx.fillStyle="yellow";
ctx.fillRect(10,10,500,500);
ctx.beginPath();

ctx.moveTo(10,10);
ctx.lineTo(100,250);
ctx.lineTo(50,20);
ctx.stroke();