 const request=require("request");
const cheerio=require("cheerio");

function getallData(matchLink){
request(matchLink,function(response,html){
    processData(html);
})
}

function processData(html){
 let myDocument=cheerio.load(html);
 let bothInning=myDocument(".card.content-block.match-scorecard-table .Collapsible");
 console.log(bothInning.length);
}
// for(let i=0;i<bothInning.length;i++){
//     let oneInning=myDocument(bothInning[i]);

//     let teamName=oneInnig.find("h5").text();
//     teamName=teamName.split("INNINGS")[0].trim();
//     console.log(teamName);


// for(let j=0;j<allTrs.length;j++){
// let allTds=myDocument
// }
// }

// }
// function processDetails(teamName,batsmanName,runs,balls,fours,sixes,strikeRate){
//     let isTeamFolder=checkFolder(teamName);
//     if(checkBatsmanFile(teamName,batsmanName)){
//         let isBatsmanPresent=checkBatsmanFile(teamName,batsmanName);
//         if(isBatsmanPresent){
//             updateBatsmanFile(teamName,batsmanName,runs,balls,fours,sixes,strikeRate);        }
//         else{
//             cre
//         }
//         }

module.exports =  getallData;