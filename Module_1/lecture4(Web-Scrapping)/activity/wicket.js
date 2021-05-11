// let matchLink = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-royal-challengers-bangalore-55th-match-1216505/full-scorecard";

// const request = require("request");
// const fs = require("fs");
// const cheerio = require("cheerio");
// // request is a high order function

// request( matchLink , cb );
// function cb(error , response , data){
//     // console.log("got the data !!!");
//     // console.log(data);
//     // fs.writeFileSync("./match.html" , data);
//     getHighestWicketTaker(data);
// }




// let htmlKaData = fs.readFileSync("./match.html" , "utf8");


// function getHighestWicketTaker(data){
//     let myDocument = cheerio.load(data);
//     let bothBowlingTables = myDocument(".table.bowler");
//     // {
//     //     "0" : {bowling table} ,
//     //     "1" : {bowling table}
//     // }
    
//     let highestWicketTakenName;
//     let highestWicketsTaken;
//     let economyOfHighestWicketTaker;
    
//     for(let i=0 ; i<bothBowlingTables.length ; i++){
//         let bowlingTable = myDocument(bothBowlingTables[i]);
//         let allTableRows = bowlingTable.find("tbody tr");
//         // {
//         //     "0" : {tr},
//         //     "1" : {tr},
//         //     "2" : {tr}
//         // }
//         for(let j=0 ; j<allTableRows.length ; j++){
//              // wicket "4"
//             // name "0"
//             // economy "5"
//             let allTds = myDocument(allTableRows[j]).find("td");
//             // {  0 : {} , 1: {} , 2: {}  ,3:{}  }
//             if(i==0 && j==0){
//                 highestWicketTakenName = myDocument(allTds[0]).find("a").text();
//                 highestWicketsTaken = myDocument(allTds[4]).text();
//                 economyOfHighestWicketTaker = myDocument(allTds[5]).text();
//             }
//             else{
//                 let currentWickets = myDocument(allTds[4]).text();
//                 let currentEconomy = myDocument(allTds[5]).text();
//                 if(currentWickets > highestWicketsTaken  || (currentWickets == highestWicketsTaken && currentEconomy < economyOfHighestWicketTaker)){
//                     // update if current bowler have high wickets !!
//                     highestWicketTakenName = myDocument(allTds[0]).find("a").text();
//                     highestWicketsTaken = currentWickets;
//                     economyOfHighestWicketTaker = currentEconomy;
//                 }
//             }
//         }
    
//     }
    
    
//     console.log("Name Of Highest Wicket Taker = " + highestWicketTakenName);
//     console.log("Wickets Taken = " + highestWicketsTaken)
//     console.log("Economy = " + economyOfHighestWicketTaker)
// }


let matchlink="https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-royal-challengers-bangalore-55th-match-1216505/full-scorecard";

let cheerio=require("cheerio");
let fs=require("fs");

let request=require("request");
request(matchlink,cb)

function cb(error,respose,data){
  let fourdata=getmaximumFour(data);
   fs.writeFileSync("./four.html" , fourdata);
}

let highestFourScorerName;
let highestFourScorerTaken;
 let economyOfHighestFourScorer;


function getmaximumFour(data){
    let wholedata=cheerio.load(data);
  let battingTables=wholedata(".table.batsman");
//   console.log(battingTables.length);
        //  let highestFourScorerName;
        //  let highestFourScorerTaken;
        //  let economyOfHighestFourScorer;
  for(let i=0;i<battingTables.length;i++){
    let dataofeachi=wholedata(battingTables[i]);
    let allRows=dataofeachi.find("tbody tr")
  for(let j=0;j<allRows.length;j++){
   
    let dataofeachtd=wholedata(allRows[j]).find("td");

    if(i==0&&j==0){
        highestFourScorerName=wholedata(dataofeachtd[0]).find("a").text();
     highestFourScorerTaken=wholedata(dataofeachtd[5]).text();
     economyOfHighestFourScorer=wholedata(dataofeachtd[7]).text();
    
    }else {
        let currentFourScorerName=wholedata(dataofeachtd[0]).find("a").text();
         let currentFourScorerTaken=wholedata(dataofeachtd[5]).text();
         let currenteconomyOfHighestFourScorer=wholedata(dataofeachtd[7]).text();
         
         if(currentFourScorerTaken>highestFourScorerTaken||(currentFourScorerTaken==highestFourScorerTaken&&currenteconomyOfHighestFourScorer<economyOfHighestFourScorer)){
            highestFourScorerName= currentFourScorerName;
            highestFourScorerTaken= currentFourScorerTaken
            economyOfHighestFourScorer= currenteconomyOfHighestFourScorer;
            
         }
      
        }
    //  console.log(highestFourScorerName);

    }
  }


  
console.log(highestFourScorerName);
console.log(highestFourScorerTaken);
console.log(economyOfHighestFourScorer);

let fourdata=highestFourScorerName+"\r\n"+highestFourScorerTaken+"\r\n"+economyOfHighestFourScorer;
return fourdata;
}


