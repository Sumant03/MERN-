// let a = "This only works if and only if";

// let b = a.slice(a.indexOf("only"));

// let c = b.lastIndexOf("only");

// b[c] = "i";

// console.log(a);
// // console.log(b);
// function f() {
//     console.log(arguments);
//   }
  
//   function f(a, b) {
//     return a + b;
//   }
  
//   console.log(f(2, 3, 4, 5));
  
//   function f(x, y, z, t) {
//       return x + y + z + t;
//   }
  
//   console.log(f(2, 3, 4, 5));
// console.log(a);
// f(2, 3, 4, 5);

// var a = 1;
// var a = 2;
// console.log(a);
// //console.log(b);
// let b = 2;

// function f() {
//   console.log(arguments);
// }
// let obj = {"concept":""};


// console.log(
//   JSON.parse(
//     JSON.stringify(obj).slice(0, 12) + "JSON" + JSON.stringify(obj).slice(12)
//   ).concept
// );
// let a;
// console.log(a);

// function A() {
//   let a = 2;
//   console.log(a);

//   function C() {
//     console.log(a);

//     function D() {
//       console.log(a);

//       a = 2;
//     }
//     D();
//     a = 3;
//   }
//   C();
// }

// function B() {
//   let a;
//   console.log(a);
  
//   function E() {
//     a = 6;
//     console.log(a);
    
//   }
  
//   a = 2;
//   E();
//   console.log(a);
// }

// function F() {
//   console.log(a);
//   a = 2;
// }

// a = 3;

// F();
// B();
// A();

//Question3
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
   
//   readline.question('Enter data', data => {
//    processData(data);
    
//   });
//   function processData(data){
//       let res=0;

//       for(let i=0;i<data[1].length;i++){
//        res+=data[1][i];       
//       }
//       res=res/data[1].length;
//      data[1].key
    
//   }
// function getUserInput() {
//         rl.question('Please input a letter: ', (answer) => {
//         console.log('Letter entered: ${answer}');
//         rl.close();
//         }); 
//     }

// //getUserInput();

// var k=0; 
// while ( k < 3 ){
//         getUserInput();
//         k++;
//     } 
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// }); 


// function getUserInput(n) {
//     rl.question('Please input a String: ', (answer) => {
        
//         if (n < 2) {
//             getUserInput(n+1);
//         } else {
//             rl.close();
//         }
//     }); 
// }

// getUserInput(1);


// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
   
//   readline.question('Enter data', data => {
//     let obj=processData(data);
//     console.log(obj)
//   });
// function processData(obj) {
//     myObj = []
//     for (let i = 0; i < obj.length; i++) {
//         let newobj = {};
//         newobj["name"] = obj[i]["name"];
//         let Rainfall = 0;
//         let r = obj[i]["rainfall"];
//         for (let j = 0; j < r.length; j++) {
//             Rainfall += arr[j]
//         }
//         Rainfall = Rainfall / (r.length);
//         newobj["avgRainfall"] = avgRainfall;
//         myObj.push(newobj);
//     }
//     return myObj;
// }
// let users = [
//     {
//       name: "Rajneesh",
//       age: 34,
//       address: {
//         local: "22 Alaknanda",
//         city: "Dehradun",
//         state: "UK",
//       },
//       orders: [{ id: 1, name: "GOT Book Series" }],
//     },
//     {
//       name: "Bhavesh",
//       age: 37,
//       address: {
//         local: "48 DT Row",
//         city: "Hyderabad",
//         state: "AP",
//       },
//     },
//     {
//       name: "Jasbir",
//       age: 38,
//       address: {
//         local: "196 Lama Bhavan",
//         city: "Gangtok",
//         state: "Sikkim",
//       },
//       orders: [
//         { id: 1, name: "Chair" },
//         { id: 2, name: "PS5" },
//       ],
//     },
//   ];

 
//   let order=[];
//   let peopleVisited=[];
// function updateUsers(users, userObject, item) {
//     //write your code here
//   let order={};
//   for( i=0;i<users.length;i++){
//     if(Object.order == user[i]["order"] ){
   
//         console.log("Already ordered!")
//     }else{
//         order.push(users[i]["order"]);
        
//     }
//    let object = {
//     Name : users[i]["name"] ,
//     Age : users[i]["Age"] ,
//     Address : user[i]["Address"] ,
//     Order :user[i]["order"] 
// }
// peopleVisited.push(object);
 
//   }
    


//   }

// {
//     newObj: {
//       obj2: {
//         obj5: {
//           one: 1,
//         },
//       },
//     },
//     obj3: {
//       obj4: { two: 2 },
//     },
//   };
  
//   Sample Output:
//   { 'newObj.obj2.obj5.one': 1, 'obj3.obj4.two': 2 }

//   newObj.forEach(function(key,value){
//     newObj.forEach(function(key,value){
//         newObj.forEach(function(key,value){
//             newObj.forEach(function(key,value){
//                 newObj.forEach(function(key,value){
//                 console.log(key+":"value)
//                 })
//             })
//         })
//     })
//   })






