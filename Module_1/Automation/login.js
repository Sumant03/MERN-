const puppeteer=require("puppeteer");
const { element } = require("xml");
//temp mail
const id="sumant.nonu@gmail.com"
const pw="sutr0304"
let currentPage;
let gCode;


let browserOperation=puppeteer.launch({
    headless:false,
    defaultViewport:null,
    args:["--start-maximised"]
});
// console.log(browserOperation);

browserOperation.then(function(browser){
    console.log("browser is opened!!");
    return browser.pages();
})
.then(function(pages){
     currentPage=pages[0];
    return currentPage.goto("https://www.hackerrank.com/auth/login");
})
.then(function(){
   return  currentPage.type('#input-1',id);
})
.then(function (){
   return currentPage.type("#input-2",pw);
}).then(function(){
    return currentPage.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
})
// .then(function(){
//     return currentPage.waitForSelector("#base-card-1-link",{visible:true})
// })
// .then(function(){
//    return currentPage.click("#base-card-1-link");
// })

// .then(function(){
//     return currentPage.waitForSelector(".ui-btn.ui-btn-normal.playlist-card-btn.ui-btn-primary.ui-btn-link.ui-btn-styled",{visible:true})
// })
// .then(function(){
//    return currentPage.click(".ui-btn.ui-btn-normal.playlist-card-btn.ui-btn-primary.ui-btn-link.ui-btn-styled");
// })
// .then(function(){
//    console.log("Clicked IP Kit")
// })


.then(function(){
    return waitAndClick("#base-card-1-link");
})
.then(function(){
    return waitAndClick(".ui-btn.ui-btn-normal.playlist-card-btn.ui-btn-primary.ui-btn-link.ui-btn-styled");
 })
 .then(function () {
    return currentPage.waitForSelector(".js-track-click.challenge-list-item", {
      visible: true,
    });
  })
 .then(function(){
     return currentPage.$$(".js-track-click.challenge-list-item");
 })
//  .then(function(allQueries){
    
//      let allPendingPromises=[];
//    for(let i=0;i<allQueries.length;i++){
//        let oneAtag=allQueries[i];
//     let  pendingPromise=oneTag.evaluate(function(element){
//              return  element.getAttribute("href");
//        },oneAtag)
//        allPendingPromises.push(pendingPromise);
   
//     }
//  console.log(allPendingPromises);
// //        let allPromisesCombined=Promise.all(allPendingPromises);
// //    return allPromisesCombined;
//  })
.then(function (allQuesArray) {
    // [<a /> , <a /> , <a /> , <a />];
    let allPendingPromises = [];
    for (let i = 0; i < allQuesArray.length; i++) {
      let oneATag = allQuesArray[i];
      let pendingPromise = oneATag.evaluate(function (element) { return element.getAttribute("href");}  , oneATag);
      allPendingPromises.push(pendingPromise);
    }
    // [ Promise<Pending> , Promise<Pending> , Promise<Pending> , Promise<Pending> ];
    console.log(allPendingPromises);

    let allPromisesCombined = Promise.all(allPendingPromises);
    // Promise<Pending>
    return allPromisesCombined;
  })
.then(function(allLinks){
   let oneQuesSolvePromise=solveQuestion(allLinks[0]);
   for(let i=1;i<allLinks.length;i++){
       oneQuesSolvePromise=oneQuesSolvePromise.then(function(){
           let nextQuesSolvePromise=solveQuestion(allLinks[i]);
           return nextQuesSolvePromise;
       })
   }
   return oneQuesSolvePromise;
  
 })
 .then(function(){
 console.log(" All Question Solved!!!");
 })
.catch(function(err){
  console.log(err);
})

function handleBtn(){
    return new Promise(function(scb,fcb){
        let waitForBtn=currentPage.waitForSelector('.ui-btn.ui-btn-normal.ui-btn-primary.ui-btn-styled' , {visible:true , timeout:5000})
             waitForBtn.then(function(lockBtn){
                return currentPage.$('.ui-btn.ui-btn-normal.ui-btn-primary.ui-btn-styled');
             })  
                .then(function(lockButton){
                return currentPage.evaluate(function(elem){ return elem.click()  } , lockButton);
              })
            .then(function(){
                console.log("lock button found");
                scb();
            })
            .catch(function(){
                console.log("Button not found");
                scb();
            })

        
    })
}


function solveQuestion(quenLink){
return new Promise(function(scb,fcb){
    let gotoPromise=currentPage.goto("https://www.hackerrank.com/"+quenLink);
    gotoPromise.then(function(){
        return waitAndClick('div[data-attr2="Editorial"]');
    })
    .then(function(){
        return handleBtn();
    })
    .then(function(){
        console.log("Opend Editorial");
      return getCode();
    })
     .then(function(){
          return currentPage.click("div[data-attr2='Problem']");
    })
    .then(function(){
        return pasteCode();
    })
    .then(function(){
        return currentPage.click('.ui-btn.ui-btn-normal.ui-btn-primary');
      })
      .then(function(){
        scb();
      })
      .catch(function(error){
        fcb(error);
      })
    .catch(function(err){
        console.log(err);
    })
    
})
}
function pasteCode(){
return new Promise(function(scb,fcb){
 let waitAndClickPromise=waitAndClick(".checkbox-input");
 waitAndClickPromise.then(function(){
  return currentPage.waitForTimeout(2000);
 })
 .then(function(){
     return currentPage.type(".custominput",gCode);
 })
 .then(function(){
   return currentPage.keyboard.down("Control");
 })
 .then(function(){
    return currentPage.keyboard.press("A");
  })
  .then(function(){
    return currentPage.keyboard.press("X");
  })
  .then(function(){
    return currentPage.click(".monaco-editor.no-user-select.vs");
  })
  .then(function(){
    return currentPage.keyboard.press("A");
  })
  .then(function(){
    return currentPage.keyboard.press("V");
  })
  .then(function(){
    return currentPage.keyboard.up("Control");
  })
  .then(function(){
      scb();
  })
.catch(function(){
    fcb();
})
})

}


function getCode(){
    return new Promise(function(scb,fcb){
    let waitPromise=currentPage.waitForSelector(".hackdown-content h3",{visible:true})
    waitPromise.then(function(){
        return currentPage.$$(".hackdown-content h3");
    })
    .then(function(allCodeNamesElement){
        let allCodeNamePromise=[];
       
        for(let i=0 ; i<allCodeNamesElement.length ; i++){
            let codeNamePromise = currentPage.evaluate( function(elem){  return elem.textContent;   }  , allCodeNamesElement[i]  );
            allCodeNamePromise.push(codeNamePromise);
          }
          let combinedPromise=Promise.all(allCodeNamePromise);
        return combinedPromise;
    })
    .then(function(allCodeNames){
        // [C++ , Python , Java];
        for(let i= 0 ;i<allCodeNames.length ; i++){
          if(allCodeNames[i] == "C++"){
            idx = i;
            break;
          }
        }
        return currentPage.$$(".hackdown-content .highlight"); // document.querySelectorAll
      })
      .then(function(allCodeDiv){
        let codeDiv = allCodeDiv[idx];
        return currentPage.evaluate(function(elem){ return elem.textContent;   }  , codeDiv);
      }) .then(function(code){
        gCode = code;
        scb();
      })
      .catch(function(error){
        fcb(error);
      })
})
}

function waitAndClick(selector){
    return new Promise(function(scb,fcb){
   let  waitPromise=currentPage.waitForSelector(selector,{visible:true});
     waitPromise.then(function(){
         return currentPage.click(selector);
     })
     .then(function(){
         scb();
     })
     .catch(function(){
         fcb();
     })

    })
}

