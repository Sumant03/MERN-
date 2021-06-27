let photo=document.querySelector("#photo");
let photoInput=document.querySelector("#photo-upload");
let download=document.querySelector("#download");

photo.addEventListener("click",function(){
    console.log("clickedOnphoto")
    photoInput.click();
})

photoInput.addEventListener("change",function(e){
  console.log("selectedaPhoto");
    console.log(e);
    let fileobject=e.target.files[0];
    let  objectURL = window.URL.createObjectURL(fileobject,{type:"image/jpg"});
    let img=document.createElement("img");
    img.setAttribute("src",objectURL);
    img.classList.add("sticky-image");
    addStick(img);
})

download.addEventListener("click",function(){
  let imagePath=canvas.toDataURL("image/jpg");
let aTag=document.createElement("a");
    aTag.download="canavs.jpg";
    aTag.href=imagePath
    aTag.click();

})