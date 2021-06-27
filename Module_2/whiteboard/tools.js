let undo=document.querySelector("#undo");
let redo=document.querySelector("#redo");
undo.addEventListener("click",undoLine);
redo.addEventListener("click",redoLine);
function undoLine(){
    if(linesDB.length){
      let undoLine=  linesDB.pop();
        redoLinesDB.push(undoLine);
     ctx.clearRect(0,0,canvas.width,canvas.height);

          drawLinesFromDB()
    }
}

function redoLine(){
    if(redoLinesDB.length){
        let currentLineWidth=ctx.lineWidth;
        let currentStrokeStyle=ctx.strokeStyle;
    let redoLine=redoLinesDB.pop();
    for(let i=0;i<redoLine.length;i++){
        let pointObject=redoLine[i];
           if(pointObject=="md"){
               ctx.beginPath();
               ctx.strokeStyle=pointObject.strokeStyle;
               ctx.lineWidth=pointObject.lineWidth;
               ctx.moveTo(pointObject.x,pointObject.y);
               
           }else{
               ctx.lineTo(pointObject.x,pointObject.y);
               ctx.stroke()
           }
    }
    linesDB.push(redoLine);
    ctx.lineWidth=currentLineWidth;
    ctx.strokeStyle=currentStrokeStyle;
}
}



function drawLinesFromDB(){
    let currentLineWidth=ctx.lineWidth;
        let currentStrokeStyle=ctx.strokeStyle;
    for(let i=0;i<linesDB.length;i++){
        let line=linesDB[i];
      for(let i=0;i<line.length;i++){
          let pointObject=line[i];
          if(pointObject.type=="md"){
              ctx.beginPath();
              ctx.lineWidth=pointObject.lineWidth;
              ctx.strokeStyle=pointObject.strokeStyle;
              ctx.moveTo(pointObject.x,pointObject.y);
          }else{
              ctx.lineTo(pointObject.x,pointObject.y);
              ctx.stroke();
          }
      }

    }
    ctx.strokeStyle=currentStrokeStyle;
    ctx.lineWidth=currentLineWidth;
}