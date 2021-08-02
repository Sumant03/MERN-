let db;
let dbOpenRequest = indexedDB.open("Gallary", 1);
dbOpenRequest.onupgradeneeded = function (e) {
  db = e.target.result;
  db.createObjectStore("Media", { keyPath: "mid" }); // table will only be create when db is create first time
};
dbOpenRequest.onsuccess = function (e) {
  db = dbOpenRequest.result
  fetchMedia();
};
dbOpenRequest.onerror = function (e) {
  alert("Inside on error !!");
};

console.log("Inside gallery.js")





function fetchMedia() {
  let txnObject = db.transaction("Media", "readonly");
  let mediaTable = txnObject.objectStore("Media");
  let cursorObject = mediaTable.openCursor();

  
 // to iterate on all the rows / tuples
  cursorObject.onsuccess = function (e) {
    let cursor = cursorObject.result;
    console.log(cursorObject.result);
    console.log(cursor);

    if (cursor) {
      let mediaObj = cursor.value;
      if (mediaObj.type == "photo") {
        appendPhoto(mediaObj);
      } else {
        appendVideo(mediaObj);
      }
      cursor.continue();
    }
  };
  cursorObject.onerror = function (e){
    console.log(e);
  }
}

function appendPhoto(mediaObj) {
  console.log("Inside photo")
  let mediaDiv = document.createElement("div");
  mediaDiv.classList.add("media-div");
  mediaDiv.innerHTML = `<img class="media-img" src=${mediaObj.url} alt="">
    <div class="media-buttons">
        <div class="download-media">Download</div>
        <div class="delete-media">Delete</div>
    </div>`;
    mediaDiv
    .querySelector(".download-media")
    .addEventListener("click", function () {
      downloadMedia(mediaObj);
    });
  mediaDiv
    .querySelector(".delete-media")
    .addEventListener("click", function () {
      deleteMedia(mediaObj, mediaDiv);
    });

  
  document.querySelector(".gallery").append(mediaDiv);
}

function appendVideo(mediaObj) {
  console.log("Inside video")
  let mediaDiv = document.createElement("div");
  mediaDiv.classList.add("media-div");
  mediaDiv.innerHTML = `<video class="media-video" controls autoplay loop></video>
    <div class="media-buttons">
        <div class="download-media">Download</div>
        <div class="delete-media">Delete</div>
    </div>`;
    mediaDiv
    .querySelector(".download-media")
    .addEventListener("click", function () {
      downloadMedia(mediaObj);
    });
  mediaDiv
    .querySelector(".delete-media")
    .addEventListener("click", function () {
      deleteMedia(mediaObj, mediaDiv);
    });

    mediaDiv.querySelector("video").src = URL.createObjectURL(mediaObj.url);
    document.querySelector(".gallery").append(mediaDiv);
}

function downloadMedia(mediaObj){
  let atag=document.createElement("a");
  if(mediaObj.type=="photo"){
    atag.download=`${mediaObj.mid}.jpg`
    atag.href=mediaObj.url;
  }else{
    atag.download=`${mediaObj.mid}.mp4`;
    atag.href=URL.createObjectURL(mediaObj.url);
  }
  atag.click()
}
function deleteMedia(mediaObj,mediaDiv){
  let mid =mediaObj.mid;
  let txnObject=db.transaction("Media","readwrite");
  let mediaTable=txnObject.objectStore("Media");
  mediaTable.delete(mid);

  mediaDiv.remove();
}