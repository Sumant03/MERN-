const XML=require("XML");
const cheerio = require("cheerio");
const request=require("request");
const fs=require("fs");
//let matchLink="https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
let leaderboard=[];
let count=0
function getMatchLink(matchLink){
    console.log("Sending Request",count);
request(matchLink,function(error,response,data){
count--;

processData(data);
console.log("callback",count);
if(count==0){
    console.table(leaderboard);
}
})
count++;
}
function processData(html){
    let myDocument=cheerio.load(html);
    let bothInning=myDocument(".card.content-block.match-scorecard-table .Collapsible");

   for(let i=0;i<bothInning.length;i++){
       let oneInning=myDocument(bothInning[i]);
        let teamName=oneInning.find("h5").text();
        teamName=teamName.split("INNINGS")[0].trim();
    //    console.log(teamName); 
        
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
//   processDetails(teamName,batsName,runs,balls,fours,sixes,strikeRate);
processLeaderBoard(teamName,batsName,runs,balls,fours,sixes,strikeRate);        
}
          
        }
      //  console.log("###################") 
   }

}

function processLeaderBoard(teamName,batsName,runs,balls,fours,sixes,strikeRate){
    runs=Number(runs);
    balls=Number(balls);
    fours=Number(fours);
    sixes=Number(sixes);

    for(let i=0;i<leaderboard.length;i++){
        let batsmanObj=leaderboard[i];
     if(batsmanObj.Team==teamName&&batsmanObj.Batsman==batsName){
      batsmanObj.Runs+=runs;
      batsmanObj.Balls+=balls;
      batsmanObj.Fours+=fours;
      batsmanObj.Sixes+=sixes;
      return;   
     }
    }
    let batsmanObj={
        Team:teamName,
        Batsman:batsName,
        Runs:runs,
        Balls:balls,
        Fours:fours,
        Six:sixes
    }
    leaderboard.push(batsmanObj);
}


module.exports=getMatchLink;