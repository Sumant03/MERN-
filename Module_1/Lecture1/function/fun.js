//js is executed in two phase 
// i) memory allocation pahse
// ii) code execution
// call value only afer the declaration

function fun(){
    console.log("fun says Hi!!!")
}

fun();

var  sayHi=function saysHi(){
    console.log("saysHi ")
}
console.log(sayHi)


function tobePassed(){
    console.log("A am passed as a argument");

}

function highorder(cb){
    cb(); //call cb;
}

highorder(tobePassed)


//Hight Order function => function which accepts function as an argument
//callback function => function which are passed as an argument