let myDb =window.localStorage;
let ticketsContainer = document.querySelector(".tickets-container");

function loadTicket(){
    let allTickets=myDb.getItem("allTickets");
    if(allTickets){
        allTickets.JSON.parse(allTickets);
        for(let i=0;i<allTickets.length;i++){
            let ticketInfoObject=allTickets[i];
            appendTicket(ticketInfoObject);
        }
    }
}
loadTicket();

function saveTicketToDb(ticketInfoObject){
    let allTickets=myDb.getItem("allTickets");
    if(allTickets){
        allTickets =JSON.parse(allTickets);
        allTickets.push(ticketInfoObject);
        myDb.setItem("allTickets",JSON.stringify(allTickets));
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
            <div class="lock"></div>
            <div class="ticket-delete">
          
                <i class="fas fa-trash"></i>
            </div>
        </div>
        <div class="ticket-value">${ticketValue}</div>
    </div>`;
    
    ticketsContainer.append(ticketDiv);
  }
  