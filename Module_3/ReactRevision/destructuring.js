// // let [greeting="hi",name="Tushar"]=["hello"];

// // console.log(greeting);
// // console.log(name);


// let {noun,pronoun,variable,name}=introduction;

// console.log(noun);
// console.log(pronoun);
// console.log(variable);

const user={id:339,
name:'Tushar',
age:22,
education:{
    degree:"masters",
    school:{
        name:"SPS",
        location:"Pitampura"
    }
}}


let {education:{school:{name}}}=user;

console.log(name);




// learn Shadow copy , deep copy ,destructuring in object