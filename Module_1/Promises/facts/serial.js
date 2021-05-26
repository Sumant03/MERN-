const fs=require('fs');



// let f1kadata=fs.promises.readFile("./f1.txt");
// f1kadata.then(function(data){
//     console.log(data+"")
   
//     let f2kadata=fs.promises.readFile("./f2.txt");
//     callF2();
//    callF3(data);
// } )

// function callF2(data){
    
//     f2kadata.then(function(data){
//         console.log(data+"")
//     } )
// }
// function callF3(data){
//     let f3kadata=fs.promises.readFile("./f3.txt");
//     f3kadata.then(function(data){
//         console.log(data+"")
//     } )
// }































let f1kadata=fs.promises.readFile("./f1.txt");
f1kadata.then(function(data){
    console.log(data+"")
    let f2kadata=fs.promises.readFile("./f2.txt");
    f2kadata.then(function(data){
        console.log(data+"")
        console.log("im inside f2kadata")
    let f3kadata=fs.promises.readFile("./f3.txt");
    f3kadata.then(function(data){
        console.log(data+"")
    } )
    } )
    console.log("im inside f1kadata")
    
} )

//promise hell






