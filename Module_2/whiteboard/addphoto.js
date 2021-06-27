let photo=document.querySelector("#photo");
let photoInput=document.querySelector("#photo-upload");


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
