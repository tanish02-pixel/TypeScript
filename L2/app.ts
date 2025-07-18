// Object , Array , Tuple , Enum...


//! Object-->

const person :{

  firstName:string;  // type bta dia kiska kya type rhega..!
  age:number;

} = {

  firstName:"Tanish",
  age:20, 

}

console.log(person);


//! Array-->

const example :{

  firstName:string;  // type bta dia kiska kya type rhega..!
  age:number;
  skills:string[];

} = {

  firstName:"Tanish",
  age:20, 
  skills:["Reactjs","Nodejs"],

}

console.log(example.skills);


//! Tuple-->


const tuplexample :{

  firstName:string;  // type bta dia kiska kya type rhega..!
  age:number;
  skills:string[];
  product:[number,string]

} = {

  firstName:"Tanish",
  age:20, 
  skills:["Reactjs","Nodejs"],
  product:[10,"Macbook M2"]  // Fixed array of Two types 0-->number , 1-->string . 

}

console.log(tuplexample.product);


//! Enum-->

enum Role{ADMIN,AUTHOR,READ_USER_ONLY};

const person2= {
  name:"tanish",
  age:20,
  skills:["React","Nodejs"],
  product:[10,"macbook air 2"],
  role:Role.ADMIN,
}

if(person2.role===Role.ADMIN){
  console.log("ROLE IS ADMIN");
}


