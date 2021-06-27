let eraser=document.querySelector("#eraser");
let pen=document.querySelector("#pen")

let penOptions=pen.querySelector(".tool-options")
let eraserOptions=eraser.querySelector(".tool-options");
let penColors=penOptions.querySelectorAll(".pen-colors div")
let penSize=penOptions.querySelector("#pensize")
let earserSize=eraserOptions.querySelector("#erasersize")
let currentPenSize=1;
let currentPenColor="black";
let currentEraserSize=1;


penSize.addEventListener("change",function(){
    let penSizeValue=penSize.value;

    currentPenSize=penSizeValue;
    ctx.lineWidth=currentPenSize;
})

earserSize.addEventListener("change",function(){
    let eraserSizeValue=earserSize.value;
    currentEraserSize=eraserSizeValue;
    ctx.lineWidth=currentEraserSize;
})

for(let i=0;i<penColors.length;i++){
    penColors[i].addEventListener("click",function(e){
      let penColor=e.target.className;
      currentPenColor=penColor;
      ctx.strokeStyle=currentPenColor;

    })
}



pen.addEventListener("click",function(){
    if(pen.classList.contains("active-tool")){
     if(penOptions.classList.contains("hide")){
         penOptions.classList.remove("hide");
}else{
    penOptions.classList.add("hide");
}
    }else{
        eraser.classList.remove("active-tool");
        eraser.classList.add("fade");
        eraserOptions.classList.add("hide");
       
        pen.classList.add("active-tool")
        pen.classList.remove("fade");
        ctx.lineWidth=currentPenSize;
        ctx.strokeStyle=currentPenColor;
    }
})

eraser.addEventListener("click",function(){
    if(eraser.classList.contains("active-tool")){
     if(eraserOptions.classList.contains("hide")){
         eraserOptions.classList.remove("hide");
}else{
    eraserOptions.classList.add("hide");
}
    }else{
        pen.classList.remove("active-tool");
        pen.classList.add("fade");
        penOptions.classList.add("hide");
         
        eraser.classList.add("active-tool")
        eraser.classList.remove("fade");
        ctx.strokeStyle="white";
        ctx.lineWidth=currentEraserSize;
    }
})
