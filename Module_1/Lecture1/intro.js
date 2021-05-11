console.log("hello world");

//Primitive -int ,float ,double,boolean;
//Non-primitive - Arrays,Stack etc

//javascript=> Number(int,float,double),Boolean,String,undefined,null,Object

//ES6 =>Ecma Script 6
//It has two keyword let and const 

let a=10;
//let keyword =>block scoped
console.log(a)
if(true){
  let   a=20;
    console.log(a)
}

console.log(a)

//const =>constant =>block scoped and constant 
//in case of const you have to declare and initilize value at the same time 

//declare and initilize 
const pi=3.14

//Arrays
let values=[1,2,3,4,5,6,7,8,9,10];
console.log(values)

values.push("Carpet");
console.log(values)
//pop a value
values.pop();

//shift=>delete an element from the starting 
//unshift=>add an element from the starting
console.log(values.shift());
//shift 
console.log(values.splice(5,2))

//Objects=> key values pair
let obj ={
  "name":"Steve Rogers",
  place:"Queens",
  movies:["captain America","winter Soldier",{weakness:["barin"]}]
  
}
//get a value
console.log(obj.name)
console.log(obj.movies)

let key="palce";
//dot operation => literal(component of obj object) check
//bracket notation =>
console.log(obj[key]); // it will check if there is a key named "key"

console.log(obj["name"])

obj.skills=["martial arts"];
obj.place="New York"
console.log(obj)

console.log(obj.movies[2].weakness[0][4])
console.log(obj.movies[2].weakness[0].substring(5))
console.log(obj.movies[2].weakness[0].substring(1,5))




