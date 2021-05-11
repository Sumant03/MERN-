
// https://github.com/sushberiwal/Dev_PP_11/blob/master/Module1/Lec2_FolderSorting/activity/folderSort.js
// github repo link



let extensionMapping =require("./util.js")
// console.log(extensionMapping)

let fs=require("fs");
let testFolderPath="./Downloads";

let allFiles=fs.readdirSync(testFolderPath);
console.log(allFiles);

// for(let i=0;i<allFiles.length;i++){
//     sortFile(allFiles[i]);
// }


// function sortFile(file){
//     let extension=getExtension(file)
//       let extensionFolderName=checkExtensionFolder(extension);
//    moveFile(file,extensionFolderName);
// }


// function checkExtensionFolder(extension){
//     let extensionFolderName;
// for(let key in extensionMapping){
//    let extensions= extensionMapping[key];
//    if(extensions.includes(extension)){
//        extensionFolderName=key;
//               break;
//    }
// }
// let folderToBeChecked=testFolderPath+"/"+extensionFolderName;
//  let isFolderExist= fs.existsSync(folderToBeChecked);
//  if(!isFolderExist){
// fs.mkdirSync(folderToBeChecked);
//  }
//  return folderToBeChecked;
// }


// function moveFile(file,extensionFolderName){
//     let sourceFile=testFolderPath+"/"+file;
//     let destination=extensionFolderName+"/"+file;
//     //copy file from source path to destination path
//      fs.copyFileSync(sourceFile,destination);
//     //then delete file form source path
//     fs.unlinkSync(sourceFile);
// }

// function getExtension(file){
//     file=file.split(".");
//     return file[1];
// }