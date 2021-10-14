let addSheetBtn=document.querySelector(".add-sheet");
let sheetsList =document.querySelector(".sheets-list");
let defaultSheet=document.querySelector(".sheet");
let sheetId=0;


addSheetBtn.addEventListener("click",function(){
    addSheet();
})

defaultSheet.addEventListener("click",function(){
    switchSheet(defaultSheet);
})


function addSheet(){
    document.querySelector(".active-sheet").classList.remove("active-sheet");
    sheetId++;

    let sheetDiv=document.createElement("div");
    sheetDiv.classList.add("sheet");
    sheetDiv.classList.add("active-sheet");
    sheetDiv.setAttribute("sid",sheetId);
    sheetDiv.innerHTML=`Sheet ${sheetId+1}`;
    sheetsList.append(sheetDiv);

    sheetDiv.addEventListener("click",function(){
        switchSheet(sheetDiv);
    });
    initCells();
   cleanUI();
    initDB();
   lastSelectedCell=undefined;
   attachEventListener();
   lastSelectedCell=undefined;
   


}





function switchSheet(currentSheet){
    if(currentSheet.classList.contains("active-sheet")){
        return;
    }
    document.querySelector(".active-sheet").classList.remove("active-sheet");
    currentSheet.classList.add("active-sheet");


    cleanUI();
  let sid=currentSheet.getAttribute("sid");
  console.log(sid);
  db=sheetDB[sid].db;
 console.log(db);
 visitedCells=sheetDB[sid].visitedCells;
  let lastCellIndex=0;
  for(let i=0;i<db.length;i++){
      let dbRow=db[i];
      for(let j=0;j<dbRow.length;j++){
          allCells[lastCellIndex].textContent=dbRow[j].value;
          lastCellIndex++;
      }
  }
for(let i=0;i<visitedCells.length;i++){
    let {rowId,colId}=visitedCells[i];
    let idx=Number(rowId)*100+Number(colId);
    allCells[idx].textContent=db[rowId][colId].value;
}

}

function attachEventListener(){
 topLeftCell = document.querySelector(".top-left-cell");
     topRow = document.querySelector(".top-row");
     leftCol = document.querySelector(".left-col");
    allCells=document.querySelectorAll(".cell");

    addClickAndBlurEventOnCell();
    

}

function cleanUI(){
    for(let i=0;i<visitedCells.length;i++){
        let {rowId,colId}=visitedCells[i];
        let idx=Number(rowId)*100+ Number(colId);
        allCells[idx].textContent="";
    }  
}