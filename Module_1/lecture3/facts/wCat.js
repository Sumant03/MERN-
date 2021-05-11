const fs = require("fs");


let f1KaData = fs.readFileSync("./f1.txt", "utf8");
let f2KaData = fs.readFileSync("./f2.txt", "utf8");

// console.log(f1KaData);
// console.log(f2KaData);

//f1 data as input
//-s flag => remove all lines except one

// function applyDFlag(f1KaData){
//     console.log("inside s flag function ");
//     // console.log(f1KaData);
//     // //Hi Im f1
//     //space
//     //space
//     //space
//     //space

//     let splittedData=f1KaData.split("\r\n");
//     console.log(splittedData);



// }
// applyDFlag();


//for s
function applySFlag(f1KaData) {
    let splittedData = f1KaData.split("\r\n");
    // console.log(splittedData);

    let emptyIncluded = false;
    let removedSpaces = [];
    for (let i = 0; i < splittedData.length; i++) {
        if (splittedData[i] == "" && emptyIncluded == false) {
            removedSpaces.push(splittedData[i]);
            emptyIncluded = true;
        } else if (splittedData[i] != "") {
            removedSpaces.push(splittedData[i]);
            if (i < splittedData.length - 2) emptyIncluded = false;
        }
    }

    let removedSpacesString = removedSpaces.join("\r\n");
    // return removedSpacesString; 
    return removedSpacesString;
}
console.log(applySFlag(f1KaData));

//for applyBFalg
function applyBFalg(f1KaData){
    let splittedData = f1KaData.split("\r\n");
 let count=1;
 for(let i=0;i<splittedData.length;i++){
     if(splittedData[i]!=""){
         splittedData[i]=`${count}.${splittedData[i]}`
         count++;
     }
 }

 let stringafterBFlag=splittedData.join("\r\n");
 return stringafterBFlag;
}
// console.log(applyBFalg(f1KaData));

function applyNFalg(f1KaData){
    let splittedData = f1KaData.split("\r\n");
    let count=1;
    for(let i=0;i<splittedData.length;i++){
        
            splittedData[i]=`${count}.${splittedData[i]}`;
            count++;
    
    }
   
    let nstringafterBFlag=splittedData.join("\n");
    return nstringafterBFlag;
}
console.log(applyNFalg(f1KaData));












