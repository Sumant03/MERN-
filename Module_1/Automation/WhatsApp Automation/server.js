const puppeteer=require("puppeteer");


async function scrape(url){
    const browser=await puppeteer.launch({headless:false});
    const page=await browser.newPage();
    await page.goto(url);
}

scrape("https://web.whatsapp.com");







