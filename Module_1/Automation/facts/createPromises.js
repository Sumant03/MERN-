const fs=require("fs");
let pendingpromise=myPromise("./f1.txt");

function myPromise(filePath){
    return new Promise(function(scb,fcb){
       fs.readFile(filePath,function(error,data){   if(error){
        fcb("Data nhi aya !");
    }else{
        scb(data);
    }
})
     
    })
}





console.log(pendingpromise);

//promises object has two functions

//then function ctaches a success callback to the pendingpromises
pendingpromise.then(function(data){
    console.log("scb")
     console.log(data+"");
});

// catches the failure callback to the promises
pendingpromise.catch(function(error){
  
         console.log(error);
});