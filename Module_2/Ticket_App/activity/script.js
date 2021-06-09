let allFilters = document.querySelectorAll(".filter");
let ticketsContainer = document.querySelector(".tickets-container");

for(let i=0 ; i<allFilters.length ; i++){
    allFilters[i].addEventListener("click" , selectFilter);
    console.log(i);
}
function selectFilter(e){
    let colour=e.target.classList[1];
    console.log(e);
    if(ticketsContainer.classList.length>1){
       ticketsContainer.classList.remove(ticketsContainer.classList[1]);
    }
    ticketsContainer.classList.add(colour);
    console.log(ticketsContainer)
}
