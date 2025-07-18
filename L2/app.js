// Object , Array , Tuple , Enum...
//! Object-->
var person = {
    firstName: "Tanish",
    age: 20,
};
console.log(person);
//! Array-->
var example = {
    firstName: "Tanish",
    age: 20,
    skills: ["Reactjs", "Nodejs"],
};
console.log(example.skills);
//! Tuple-->
var tuplexample = {
    firstName: "Tanish",
    age: 20,
    skills: ["Reactjs", "Nodejs"],
    product: [10, "Macbook M2"] // Fixed array of Two types 0-->number , 1-->string . 
};
console.log(tuplexample.product);
//! Enum-->
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["READ_USER_ONLY"] = 2] = "READ_USER_ONLY";
})(Role || (Role = {}));
;
var person2 = {
    name: "tanish",
    age: 20,
    skills: ["React", "Nodejs"],
    product: [10, "macbook air 2"],
    role: Role.ADMIN,
};
if (person2.role === Role.ADMIN) {
    console.log("ROLE IS ADMIN");
}
