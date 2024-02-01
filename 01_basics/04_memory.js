/* Memory
mainly of 2 types
(1) stack memory (Primitive data types uses it)
when ever we look for some value from stack, we will get a copy.
(2) Heap memory (Reference / Non-Primitive)
when ever we look for some value we will get reference

*/
// stack ex:

/*
let myName = "abhay"
let anotherName = myName   // only copy will be given
console.log(anotherName)
anotherName = "Ram"
console.log(myName)
console.log(anotherName)

*/

// Heap ex:

/*

let user1 = {
    name: "user1",
    email:"user1@google.com",
};
console.log(user1)
let user2 = user1    // Reference will be given
console.log(user2)
user2.email = "abc@fgh.pqr"
console.log(user1)
console.log(user2)

*/