let photo=document.querySelector("#photo");


photo.addEventListener('click',image);



function image(){
   
    let upload=document.createElement("div");
    upload.classList.add("upload");
    upload.innerHTML=` <form name="pickfile">
        <input name="file" type="file" />
      </form>
      <img id="img" width="250" height="250"/>`
 
      document.body.append(upload);
      
      
var reader1 = new FileReader();

reader1.addEventListener('load', e => {
  document.querySelector('#img').src = e.target.result;
});

document.addEventListener('DOMContentLoaded', e => {
  document.forms.pickfile.file.addEventListener('change', e => {
    reader1.readAsDataURL(e.target.files[0]);
  });
});
}
