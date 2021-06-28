let videoElement = document.querySelector("video");
let recordButton=document.querySelector(".inner-record");
let capturePhoto=document.querySelector(".inner-capture")
let recordingState=false;
let filters=document.querySelectorAll(".filter");
let zoomIn = document.querySelector(".zoomIn");
let zoomOut = document.querySelector(".zoomOut");
let galleryBtn=document.querySelector(".gallery-btn");


let minZoom = 1;
let maxZoom = 3.1;
let currentZoom = 1;

let filterSelected="none";
let mediaRecorder;


galleryBtn.addEventListener("click",function(){
  window.location.assign("gallery.html");
})







(async function() {
let constraint = { video: true };
let mediaStream= await navigator.mediaDevices.getUserMedia(constraint)

    videoElement.srcObject = mediaStream;
    mediaRecorder=new MediaRecorder(mediaStream);
   mediaRecorder.onstart=function(){
  console.log("Inside on start");
   };
   mediaRecorder.ondataavailable = function (e) {
    console.log("Inside on data available");
    console.log(e.data);
    let videoObject = new Blob([e.data], { type: "video/mp4" });
    // console.log(videoObject);
    // videoObject/imageObject => URL
    // aTag

    // let videoURL = URL.createObjectURL(videoObject);
    // let aTag = document.createElement("a");
    // aTag.download = `Video${Date.now()}.mp4`;
    // aTag.href = videoURL;
    // aTag.click();
    addMedia(videoObject,"video");
  };
  mediaRecorder.onstop = function () {
    console.log("Inside on stop");
  };
   recordButton.addEventListener("click",function(){
       if(recordingState){
           mediaRecorder.stop();
          //  recordButton.innerHTML="Record Video";
           recordingState=false;
           recordButton.classList.remove("animate-record")
       }else{
        mediaRecorder.start();
        // recordButton.innerHTML="Recording";
        recordingState=true;
        recordButton.classList.add("animate-record")
       }
   })
     capturePhoto.addEventListener("click",function(){
      capturePhoto.classList.add("animate-capture"); 
      setTimeout(function(){
   capturePhoto.classList.remove("animate-capture");
      },1000)

      let canvas =document.createElement("canvas");
         canvas.width=640;
         canvas.height=480;
         let ctx=canvas.getContext("2d");
         if(currentZoom!=1){
           ctx.translate(canvas.width/2,canvas.height/2);
           ctx.scale(currentZoom,currentZoom);
           ctx.translate(-canvas.width/2,-canvas.height/2);
         }
     ctx.drawImage(videoElement,0,0);
       
     if (filterSelected != "none") {
      ctx.fillStyle = filterSelected;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    

    //  let aTag = document.createElement("a");
    //  aTag.download = `Video${Date.now()}.jpg`;
    //  aTag.href = canvas.toDataURL("image/jpg");
    //  aTag.click();
  let canvasURL=canvas.toDataURL("image.jpg");
  addMedia(canvasURL,"photo");

        })


})()
// for (let i = 0; i < filters.length; i++) {
//   filters[i].addEventListener("click", function (e) {
//     let currentFilterSelected = e.target.style.backgroundColor;
//     let filterDiv = document.createElement("div");
//     filterDiv.classList.add("filter-div");
  
//     if(currentFilterSelected=filterSelected){
//       return;
//     }
   
//     if (document.querySelector(".filter-div")) {
//       filterDiv.style.backgroundColor = currentFilterSelected;
//             }
//       else{
//         let filterDiv = document.createElement("div");
//     filterDiv.classList.add("filter-div");
//     filterDiv.style.backgroundColor = currentFilterSelected;
//       }      

    
//   });
// }

for (let i = 0; i < filters.length; i++) {
  filters[i].addEventListener("click", function (e) {
    let currentFilterSelected = e.target.style.backgroundColor;
    if (currentFilterSelected == "") {
      if (document.querySelector(".filter-div")) {
        document.querySelector(".filter-div").remove();
        filterSelected = "none";
        return;
      }
    }

    console.log(currentFilterSelected);
    if (filterSelected == currentFilterSelected) {
      return;
    }

    let filterDiv = document.createElement("div");
    filterDiv.classList.add("filter-div");
    filterDiv.style.backgroundColor = currentFilterSelected;

    if (filterSelected == "none") {
      document.body.append(filterDiv);
    } else {
      document.querySelector(".filter-div").remove();
      document.body.append(filterDiv);
    }
    filterSelected = currentFilterSelected;
  });
}

zoomIn.addEventListener("click",function(){
  if(currentZoom+0.1>maxZoom){
    return;
  }
  currentZoom=currentZoom+0.1;
  videoElement.style.transform=`scale(${currentZoom})`;
})
zoomOut.addEventListener("click",function(){
  if(currentZoom-0.1<minZoom){
    return;
  }
  currentZoom=currentZoom-0.1;
  videoElement.style.transform=`scale(${currentZoom})`;
})


function addMedia(mediaURL,mediaType){
  let txnObject=db.transaction("Media","readwrite");
  let mediaTable=txnObject.objectStore("Media");

  mediaTable.add({mid:Date.now(),type:mediaType,url:mediaURL});
console.log(txnObject);
  txnObject.onerror=function(e){
    console.log(e);
  }
}