const id = "pamico3332@nic58.com";
const pw = "12345678";
const { add } = require("cheerio/lib/api/traversing");
const puppeteer = require("puppeteer");
let name="sumant03"

async function login(){
    let browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"]
      });
    let pages = await browser.pages();
    let tab = pages[0];
    await tab.goto("https://www.hackerrank.com/auth/login");
    await tab.type("#input-1", id);
    await tab.type("#input-2", pw);
    await tab.click( ".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
    await tab.waitForSelector('div[data-analytics="NavBarProfileDropDown"]' , {visible:true});
    await tab.waitForTimeout(2000);
    let element = await tab.$('div[data-analytics="NavBarProfileDropDown"]');
    await element.click();
    await tab.waitForSelector('a[data-analytics="NavBarProfileDropDownAdministration"]' , {visible:true});
    await tab.click('a[data-analytics="NavBarProfileDropDownAdministration"]');
    await tab.waitForSelector('.nav-tabs.nav.admin-tabbed-nav li' , {visible:true});
    let bothLis = await tab.$$('.nav-tabs.nav.admin-tabbed-nav li');
    let manageChallengeLi = bothLis[1];
    await manageChallengeLi.click();
    await addModerators(browser , tab);
};
login();


async function addModerators(browser,tab){
    await tab.waitForTimeout(4000);
    await tab.waitForSelector(".table-body.mlB.text-center>.backbone.block-center");
let allATags=await tab.$$(".table-body.mlB.text-center>.backbone.block-center");
let allQuesLinks=[];

for(let i=0 ; i<allATags.length ; i++){
    let qLink = await tab.evaluate( function(elem){  return elem.getAttribute("href");  }   , allATags[i]);
    qLink = "https://www.hackerrank.com"+qLink;
    allQuesLinks.push(qLink);
}
console.log(allQuesLinks);

for(let i=0;i<allQuesLinks.length;i++){
    let page = await browser.pages();
    let newTab = page[0];
  await  addModeratorsOnSingleLink(allQuesLinks[i],newTab);
}
let allLis = await tab.$$('.pagination li');
let nextBtnLi = allLis[allLis.length-2];
let isDisabled = await tab.evaluate( function(elem){ return elem.classList.contains("disabled");  } , nextBtnLi );
// if true ??
if(isDisabled){
    return;
}
// else false ??
await nextBtnLi.click();
await tab.waitForTimeout(5000);
await addModerators(browser , tab);

}

async function addModeratorsOnSingleLink(link,newTab){
  
    await newTab.goto(link);
    await newTab.waitForTimeout(2000);
    await newTab.click('li[data-tab="moderators"]');
    await newTab.waitForSelector('#moderator' , {visible:true});
    await newTab.type("#moderator" , "pep");
    await newTab.click('.btn.moderator-save');
    await newTab.waitForTimeout(4000);
    await newTab.click('.save-challenge.btn.btn-green');
    await newTab.waitForTimeout(2000);
  
}