const fs=require('fs');

let f1kadata=fs.promises.readFile("./f1.txt");
let f2kadata=fs.promises.readFile("./f1.txt");
let f3kadata=fs.promises.readFile("./f1.txt");

f1kadata.then(function(data){
    console.log(data+"")
} )
f2kadata.then(function(data){
    console.log(data+"")
} )
f3kadata.then(function(data){
    console.log(data+"")
} )
