let link="https://www.pepcoding.com/courses";
console.log(link);
const request=require('request');
const cheerio=require("cheerio");
const fs=require("fs");
request(link,function(err,res,data){
    processData(data);
})

function processData(data){
let myDocument=cheerio.load(data);

let StateNames=myDocument(".cards.flex-card .card-content.no-padding");
let duration=0;
let Content;
let Lectures;
for(let i=0;i<StateNames.length;i++){
let flex=myDocument(StateNames[i]);
 let Name=flex.find("h3").text();
// let Path=`./Courses/${Name}.json`;
  let courseinfo=flex.find(".row ");
 // console.log(courseinfo)
  //  processDeatils(Name,courseinfo);
        //Content=myDocument(courseinfo[1]).find("h5").text();
       //Lectures=myDocument(courseinfo[2]).find("h5").text();
  for(let j=0;j<courseinfo.length;i++){
      let course=courseinfo[j];
       duration=myDocument(course[0]).find("h5").text();
       Content=myDocument(course[1]).find("h5").text();
       Lectures=myDocument(course[2]).find("h5").text();
  }
  console.log(`Duration:-${duration} Content:-${Content} Lectures:-${Lectures}`);
}

}
function checkCourseFodler(Name){
    let Path=`./Courses/${Name}.txt`;
    return fs.existsSync(Path);
}

function processDeatils(Name,courseinfo){
    let isFolderExist=checkCourseFodler(Name);
    if(!isFolderExist){
        let Path=`./Courses/${Name}.json`;
        fs.writeFileSync(Path, JSON.stringify(courseinfo+" "));
    }
}
