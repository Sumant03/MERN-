let canvas=document.querySelector("#canvas");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

window.addEventListener("resize",function(){
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight-100;
})


let ctx=canvas.getContext("2d");

let isPenDown=false;

canvas.addEventListener("mousedown",function(e){
 isPenDown=true;
 let x=e.clientX;
 let y=e.clientY;

 ctx.beginPath();
 ctx.moveTo(x,y);
})


canvas.addEventListener("mousemove",function(e){
    
    let x=e.clientX;
    let y=e.clientY-100;
   
    
    ctx.lineTo(x,y);
    ctx.stroke();
   })


   canvas.addEventListener("mousedown",function(e){
    isPenDown=false;
     })