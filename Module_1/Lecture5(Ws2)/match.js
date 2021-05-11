const XML=require("XML");
const cheerio = require("cheerio");
const request=require("request");
const fs=require("fs");
//let matchLink="https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";

function getMatchLink(matchLink){
request(matchLink,function(error,response,data){
processData(data);
})
}
function processData(html){
    let myDocument=cheerio.load(html);
    let bothInning=myDocument(".card.content-block.match-scorecard-table .Collapsible");

   for(let i=0;i<bothInning.length;i++){
       let oneInning=myDocument(bothInning[i]);
        let teamName=oneInning.find("h5").text();
        teamName=teamName.split("INNINGS")[0].trim();
        console.log(teamName); 
        
        let allTrs=oneInning.find(".table.batsman tbody tr");
        for(let j=0;j<allTrs.length-1;j++){
            let allTrd=myDocument(allTrs[j]).find("td");
           if(allTrd.length>1){
               let batsName=myDocument(allTrd[0]).text().trim();
               let runs=myDocument(allTrd[2]).text().trim();
               let balls=myDocument(allTrd[3]).text().trim();
               let fours=myDocument(allTrd[5]).text().trim();
               let sixes=myDocument(allTrd[6]).text().trim();
               let strikeRate=myDocument(allTrd[7]).text().trim();

        //    console.log(batsName,runs,balls,fours,sixes,strikeRate);
   processDetails(teamName,batsName,runs,balls,fours,sixes,strikeRate);
           }
          
        }
        console.log("###################") 
   }

}

function checkTeamFolder(teamName){
let teamFolderPath=`./IPL/${teamName}`;
return fs.existsSync(teamFolderPath);
}
function checkBatsmanFile(teamName,batsName){
let batsmanFilePath=`./IPL/${teamName}/${batsName}.json`;
return fs.existsSync(batsmanFilePath);
}
function updateBatsmanFile(teamName,batsName,runs,balls,fours,sixes,strikeRate){
    let batsmanFilePath=`./IPL/${teamName}/${batsName}.json`;
    let XMLFilePath=`./IPL/${teamName}/${batsName}.xml`;
    let batsmanFile=JSON.parse(fs.readFileSync(batsmanFilePath));
    let inning={
        Runs:runs,
        Balls:balls,
        Four:fours,
        Sixes:sixes,
        StrikeRate:strikeRate
    }
     batsmanFile.push(inning);
     let jsonfile=JSON.stringify(batsmanFile);
     fs.writeFileSync(batsmanFilePath,jsonfile);
     let xml=XML.toString(jsonfile);
      fs.writeFileSync(XMLFilePath,xml);
}
function createBatsmanFile(teamName,batsName,runs,balls,fours,sixes,strikeRate){
 let batsmanFilePath=`./IPL/${teamName}/${batsName}.json`;
 let XMLFilePath=`./IPL/${teamName}/${batsName}.xml`;
 let batsmanFile=[];
 let inning={
     Runs:runs,
     Balls:balls,
     Four:fours,
     Sixes:sixes,
     StrikeRate:strikeRate
 }
  batsmanFile.push(inning);
  let jsonfile=JSON.stringify(batsmanFile);
  fs.writeFileSync(batsmanFilePath,jsonfile);
  let xml=XML.toString(jsonfile);
  fs.writeFileSync(XMLFilePath,xml);
}
function creatTeamFolder(teamName){
let teamFolder=`./IPL/${teamName}`;
fs.mkdirSync(teamFolder);
}


function processDetails(teamName,batsName,runs,balls,fours,sixes,strikeRate){
  let  isTeamFolder=checkTeamFolder(teamName);
 // console.log(isTeamFolder);
    if(isTeamFolder){
        let isBatsmanPresent=checkBatsmanFile(teamName,batsName);
        if(isBatsmanPresent){
            updateBatsmanFile(teamName,batsName,runs,balls,fours,sixes,strikeRate);   
  }else{
            createBatsmanFile(teamName,batsName,runs,balls,fours,sixes,strikeRate);
        }

    }
else{
        creatTeamFolder(teamName);
        createBatsmanFile(teamName,batsName,runs,balls,fours,sixes,strikeRate);
    }
}


module.exports=getMatchLink;