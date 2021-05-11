const fs=require('fs');
const cheerio=require('cheerio');
let htmlData=fs.readFileSync("./index.html","utf8");
// console.log(htmlData);


 let ch=cheerio.load(htmlData);
// console.log(ch);

//document.querySelector("h1");

let h1KaData=ch("h1").text();
// console.log(h1KaData);

// let pKaData=ch("p").text();
// console.log(pKaData);

let secondpKaData=ch("p")["1"];
// console.log(secondpKaData.html);

// console.log(ch(secondpKaData).text());

//Selector 
// console.log(ch("ul p").text());
// console.log(ch("a").text());

// console.log(ch("ul>a").text());

//classes amd id
// console.log(ch(".inside").text());
// console.log(ch(".inside.main").text());
console.log(ch("#main").text());





