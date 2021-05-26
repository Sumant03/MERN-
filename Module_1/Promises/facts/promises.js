const fs=require("fs");

let pendingpromise=fs.promises.readFile("./f1.txt");

console.log(pendingpromise);

//promises object has two functions

//then function ctaches a success callback to the pendingpromises
pendingpromise.then(function(data){
    console.log("soc")
     console.log(data+"");
});

// catches the failure callback to the promises
pendingpromise.catch(function(error){
    console.log("scb");
         console.log(error);
});



























