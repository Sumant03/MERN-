let canvas=document.querySelector("#canvas");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

window.addEventListener("resize",function(){
    canvas.width=this.window.innerWidth;
    canvas.height=this.window.innerHeight-100;
})


