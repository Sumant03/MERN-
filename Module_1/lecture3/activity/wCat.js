let contents=process.argv.slice(2);
const{getData,  applyBFlag,applyNFlag,applySFlag}=require("./util");

const flags=[];
const files=[];
for(let i=0;i<contents.length;i++){
    if(contents[i].startsWith("-")){
        flags.push(contents[i]);
    }else{
        files.push(contents[i]);
    }
}

// console.log(nflags);
// let  nfiles=files;
// for(let i=0;i<files.length;i++ ){
//     for(let j=0;j<flags.length;j++){
// let filesdata=fs.readFileSync("files[i]","utf8");
//   if(nflags[i]=="-s"){
//     let Sdata=  applySFlag(filesdata);
//     console.log(Sdata);
// //       if(nflags[i]=="-b"){
// //        let R1Data= applyBFlag(Sdata);
// //        console.log(R1Data);
// //     }else{
// //        let R2Data= applyNFalg(Sdata);
// // console.log(R2Data);
// //     }
//     }
    
// }
// }

// function applySFlag(f1KaData) {
//     let splittedData = f1KaData.split("\r\n");
//     // console.log(splittedData);

//     let emptyIncluded = false;
//     let removedSpaces = [];
//     for (let i = 0; i < splittedData.length; i++) {
//         if (splittedData[i] == "" && emptyIncluded == false) {
//             removedSpaces.push(splittedData[i]);
//             emptyIncluded = true;
//         } else if (splittedData[i] != "") {
//             removedSpaces.push(splittedData[i]);
//             if (i < splittedData.length - 2) emptyIncluded = false;
//         }
//     }

//     let removedSpacesString = removedSpaces.join("\r\n");
//     // return removedSpacesString; 
//     return removedSpacesString;
// }


// //for applyBFalg
// function applyBFalg(f1KaData){
//     let splittedData = f1KaData.split("\r\n");
//  let count=1;
//  for(let i=0;i<splittedData.length;i++){
//      if(splittedData[i]!=""){
//          splittedData[i]=`${count}.${splittedData[i]}`
//          count++;
//      }
//  }

//  let stringafterBFlag=splittedData.join("\r\n");
//  return stringafterBFlag;
// }


// function applyNFalg(f1KaData){
//     let splittedData = f1KaData.split("\r\n");
//     let count=1;
//     for(let i=0;i<splittedData.length;i++){
        
//             splittedData[i]=`${count}.${splittedData[i]}`;
//             count++;
    
//     }
   
//     let nstringafterBFlag=splittedData.join("\n");
//     return nstringafterBFlag;
// }


let filesdata=getData(files);

if(flags.includes("-s")){
  filesdata =applySFlag(filesdata);
}

if(flags.includes("-b")&&flags.includes("-n")){
     if(flags.indexOf("-b")<flags.indexOf("-n")){
         filesdata=applyBFlag(filesdata);
     }else{
         filesdata=applyNFalg(filesdata);
     }
}
else if(flags.includes("-b")){
    filesdata=applyBFlag(filesdata);
}
else if(flags.includes("-n")){
    filesdata=applyNFlag(filesdata);
}
console.log(filesdata);


























