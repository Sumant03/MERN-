let fs=require("fs")

function getData(files){
    let filesdata="";
    for(let i=0;i<files.length;i++){
        if(!fs.existsSync(files[i])){
            console.log("File doesnt exist");
            return ;
        }if(i==files.length-1){
            filesdata+=fs.readFileSync(files[i]);
        }else{
            filesdata+=fs.readFileSync(files[i])+"\r\n";
        }
        
    }
    return filesdata;
    }
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
//for applyBFalg
function applyBFlag(f1KaData){
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
function applyNFlag(f1KaData){
    let splittedData = f1KaData.split("\r\n");
    let count=1;
    for(let i=0;i<splittedData.length;i++){
        
            splittedData[i]=`${count}.${splittedData[i]}`;
            count++;
    
    }
   
    let nstringafterBFlag=splittedData.join("\n");
    return nstringafterBFlag;
}








module.exports={
    getData,
    applyBFlag:applyBFlag,
    applyNFlag:applyNFlag,
    applySFlag:applySFlag
}

