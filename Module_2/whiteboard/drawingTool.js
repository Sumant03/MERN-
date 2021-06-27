let eraser=document.querySelector("#eraser");
let pen=document.querySelector("#pen")

let penOptions=pen.querySelector(".tool-options")
let eraserOptions=eraser.querySelector(".tool-options");

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
    }
})