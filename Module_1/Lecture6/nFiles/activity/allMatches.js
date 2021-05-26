const request=require("request");
 const cheerio=require("cheerio");
const getMatchLink=require("./match")


function getAllMatches(allMatchesLink){
request(allMatchesLink,function(err,res,data){
    processData(data);
})
}
function processData(html){
let myDocument=cheerio.load(html);
let allTag=myDocument("a[data-hover='Scorecard']");
 console.log(allTag.length);
let link="https://www.espncricinfo.com"+allTag["0"].attribs.href;
 //console.log(link);
for(let i=0 ; i<allTag.length ; i++){
    let matchLink =  "https://www.espncricinfo.com" + myDocument(allTag[i]).attr("href");
      getMatchLink(matchLink);
 
}  
}




module.exports=getAllMatches;


