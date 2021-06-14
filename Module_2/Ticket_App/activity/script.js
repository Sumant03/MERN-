// let allFilters = document.querySelectorAll(".filter");
// let ticketsContainer = document.querySelector(".tickets-container");

// let openModal=document.querySelector(".open-modal");
// let closeModal=document.querySelector(".close-modal");


// let isTextTyped=false;
// let ticketModalOpen=false;

// // for(let i=0 ; i<allFilters.length ; i++){
// //     allFilters[i].addEventListener("click" , selectFilter);
    
// // }
// // function selectFilter(e){
// //     let colour=e.target.classList[1];
// //     console.log(e);
// //     if(ticketsContainer.classList.length>1){
// //        ticketsContainer.classList.remove(ticketsContainer.classList[1]);
// //     }
// //     ticketsContainer.classList.add(colour);
// //     console.log(ticketsContainer)
// // }


// openModal.addEventListener("click",openTicketModal);
// closeModal.addEventListener("click",closeTicketModal);


// function openTicketModal(e){
//     if(ticketModalOpen){
//         return;
//     }
//     let ticketModal=document.createElement("div");
//     ticketModal.classList.add("ticket-modal");
//     ticketModal.innerHTML=` <div class="ticket-text" contentEditable="true"  spellcheck="false"><strong>Enter your text!</strong></div>
//         <div class="ticket-filters">
//             <div class="ticket-filter red selected-filter"></div>
//              <div class="ticket-filter blue"></div>
//              <div class="ticket-filter green "></div>
//          <div class="ticket-filter yellow"></div>
//              <div class="ticket-filter black"></div>
//          </div>
//     `
//   document.querySelector("body").append(ticketModal);
//   ticketModalOpen=true;

// let ticketTextdiv=document.querySelector(".ticket-text");
// ticketTextdiv.addEventListener("keypress",handekeypress);


// let ticketFilters=ticketModal.querySelectorAll(".ticket-filter");
// for(let i=0;i<ticketFilters.length;i++){
//     ticketFilters[i].addEventListener("click",function(e){
//         if(e.target.classList.contains("selected-filter")){
//               return;
//         }
//         document.querySelector(".selected-filter").classList.remove("selected-filter");
//         e.target.classList.add("selected-filter");    
//         colourOfticketHead=e.classList[1]; 
//     })
// }



// }

// function closeTicketModal(e){
//     if(ticketModalOpen){
//         document.querySelector(".ticket-modal").remove();

//     ticketModalOpen=false;
//       isTextTyped=false;
// }
// }

// function handekeypress(e){
// if(!isTextTyped){
//     isTextTyped=true;
//     e.target.textContent="";
    
   
// }
// if(e.key=="Enter"){

//     addTicket();
//     console.log(e); 
//     closetheTicket();
//    }

// }

// function addTicket(){
// let ticketDiv=document.createElement("div");
// ticketDiv.classList.add("tickets");
// var letters = "0123456789ABCDEF";
  
// // html color code starts with #
// var color = '#';

// // generating 6 times as HTML color code consist
// // of 6 letter or digits
// for (var i = 0; i < 6; i++)
//    color += letters[(Math.floor(Math.random() * 16))];


// ticketDiv.innerHTML=`
//  <div class="header-colour red">header-colour</div>
//  <div class="ticket-icons  ">
//     <div class="id"></div>
//     <div> <i class="fas fa-trash"></i></div>
// </div>
//  <div class="ticket-content green">ticket content</div>
// `
// ticketsContainer.append(ticketDiv);

// let  idText=document.querySelector(".ticket-icons .id");
// idText.textContent=color;

// }



// function closetheTicket(){
//     if(ticketModalOpen){
//         document.querySelector(".ticket-modal").remove();

//     ticketModalOpen=false;
//       isTextTyped=false;
// }   
// }




let allFilters = document.querySelectorAll(".filter");
let ticketsContainer = document.querySelector(".tickets-container");

let openModal = document.querySelector(".open-modal");
let closeModal = document.querySelector(".close-modal");

let ticketModalOpen = false;
let isTextTyped = false;

for (let i = 0; i < allFilters.length; i++) {
  allFilters[i].addEventListener("click", selectFilter);
}

openModal.addEventListener("click", openTicketModal);
closeModal.addEventListener("click", closeTicketModal);

function selectFilter(e) {
  let filterSelected = e.target.classList[1];
  if (ticketsContainer.classList.length > 1) {
    ticketsContainer.classList.remove(ticketsContainer.classList[1]);
  }
  ticketsContainer.classList.add(filterSelected);
}

function openTicketModal(e) {
  if (ticketModalOpen) {
    return;
  }
  let ticketModal = document.createElement("div");
  ticketModal.classList.add("ticket-modal");
  ticketModal.innerHTML = `<div class="ticket-text" contentEditable="true" spellcheck="false">Enter Your Text !</div>
    <div class="ticket-filters">
        <div class="ticket-filter red selected-filter"></div>
        <div class="ticket-filter blue"></div>
        <div class="ticket-filter green"></div>
        <div class="ticket-filter yellow"></div>
        <div class="ticket-filter black"></div>
    </div>`;
  document.querySelector("body").append(ticketModal);
  ticketModalOpen = true;
  isTextTyped = false;

  let ticketTextDiv = ticketModal.querySelector(".ticket-text");
  ticketTextDiv.addEventListener("keypress", handleKeyPress);

  let ticketFilters = ticketModal.querySelectorAll(".ticket-filter");
  for (let i = 0; i < ticketFilters.length; i++) {
    ticketFilters[i].addEventListener("click", function (e) {
      if (e.target.classList.contains("selected-filter")) {
        return;
      }
      document
        .querySelector(".selected-filter")
        .classList.remove("selected-filter");
      e.target.classList.add("selected-filter");
    });
  }
}

function closeTicketModal(e) {
  if (ticketModalOpen) {
    document.querySelector(".ticket-modal").remove();
    ticketModalOpen = false;
    isTextTyped = false;
  }
}

function handleKeyPress(e) {
  if (e.key == "Enter" && isTextTyped && e.target.textContent) {
    let filterSelected =
      document.querySelector(".selected-filter").classList[1];
    let ticketInfoObject = {
      ticketFilter: filterSelected,
      ticketValue: e.target.textContent,
    };
    appendTicket(ticketInfoObject);
    closeModal.click();
  }

  if(!isTextTyped) {
    isTextTyped = true;
    e.target.textContent = "";
  }
}

function appendTicket(ticketInfoObject) {
  let {ticketFilter , ticketValue} = ticketInfoObject;
  let ticketDiv = document.createElement("div");
  ticketDiv.classList.add("ticket");
  ticketDiv.innerHTML = `<div class="ticket-header ${ticketFilter}"></div>
  <div class="ticket-content">
      <div class="ticket-info">
          <div class="ticket-id">#e2nf5</div>
          <div class="ticket-delete">
              <i class="fas fa-trash"></i>
          </div>
      </div>
      <div class="ticket-value">${ticketValue}</div>
  </div>`;
  
  ticketsContainer.append(ticketDiv);
}