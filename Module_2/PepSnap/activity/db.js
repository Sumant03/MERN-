let db ;

let dbOpenRequest=indexedDB.open("Gallary",1);

dbOpenRequest.onupgradeneeded=function(e){
    db=e.target.result
    db.createObjectStore("Media",{keyPath:"mid"});
}
dbOpenRequest.onsuccess =function(e){
    db=e.target.result;
}
dbOpenRequest.onerror=function(e){
    alert("Inside on error !");
}