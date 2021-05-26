// Promise  Chaining => To avoid promise helll!!

//Initial state is pending 
//Either the pending promise can be resolve or reject
// success=> resolve
// failure=> reject

// then and ctach functions are async functions 
// then and catch also retrun a pending promise 

 const fs=require("fs");

 let f1kapromise=fs.promises.readFile("./f1.txt");

// f1kapromise.then(function(data){
// console.log(data+ " ");
// return 5;
// }).then(function(data){
//     console.log(data);

//     console.log("i ran after first scb!!")
// })

//console.log(thenka);

//2nd method for initialization

//  let thenkapromise=f1kapromise.then(function(data){
//     console.log(data+ " ");
//     })

//     thenkapromise.then(function(data){
//         console.log("i ran after first scb!!")
//     })


f1kapromise.then(function(data){
    console.log(data+" " );
    let f2kadata=fs.promises.readFile("./f2.txt");
   // return f2kadata;
}).then(function(f2kadata){
    console.log(f2kadata)+"";
    let f3kadata=fs.promises.readFile("./f3.txt");
    return f3kadata;
}).then(function(f3kadata){
    console.log(f3kadata+"");
})







