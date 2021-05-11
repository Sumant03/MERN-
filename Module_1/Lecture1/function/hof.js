//callback -it is used to implement async function 

function getFirst(fullname){
    //assumen this function will return first anme
  fullname=fullname.split(" ");
  return fullname[0];
}

function getlast(fullname){
    fullname=fullname.split(" ");
    return fullname[1];
}
function fun(fullName,cb){
    let name =cb(fullName);
    console.log(name);
}

fun("Steve Rogers",getFirst);
fun("Iron Man",getlast)