let topLeftCell = document.querySelector(".top-left-cell");
let topRow = document.querySelector(".top-row");
let leftCol = document.querySelector(".left-col");
let allCells=document.querySelectorAll(".cell");



cellsContainer.addEventListener("scroll", function (e) {
  let topOffset = e.target.scrollTop;
  let leftOffset = e.target.scrollLeft;

  topRow.style.top = topOffset + "px";
  topLeftCell.style.top = topOffset + "px";
  topLeftCell.style.left = leftOffset + "px";
  leftCol.style.left = leftOffset + "px";
});

for(let i=0;i<allCells.length;i++){
  allCells[i].addEventListener("blur",function(e){
   let rowid=e.target.getAttribute("rowid");
   let colid=e.target.getAttribute("colid");
   let cellValueFromUI=e.target.textContent;

   let cellObject=db[rowid][colid];

   cellObject.value=cellValueFromUI;
  });
}