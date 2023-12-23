console.log("Hell and Welcome to JS");
let name1 = "Tony Stark";
console.log(name1);
let x;
let y = undefined;
console.log(x);
console.log(y);
let w = null;
console.log(w);
z =18;
console.log(z);
name1 = "Java Script";
console.log(name1);
let isFollow = false;
console.log(isFollow);
console.log(typeof z);
console.log(typeof name1);
console.log(typeof isFollow);
console.log(typeof x);
console.log(typeof y);
console.log(typeof w);
let b = BigInt("123456789");
console.log(b);
console.log(typeof b);
let s = Symbol("Hello Symbol");
console.log(s);
console.log(typeof s);

const c = 3;
console.log(c);
console.log(typeof c);
console.log(c);
console.log("Hum const variable ko update nhi kr skte hain but const object ki key ko update kr skte hain!")

const student = {
    fullName :"Krishna Yadav",
    age : 21,
    cgpa : 9.3,
    ispass : true,
    isDistinction : true

};
console.log(student);
console.log(student.age);
console.log(student["age"]);
student.age = student.age + 3;
console.log(student);
student.fullName = "Radha Rani";
student.cgpa = 9.9;
student.ispass = false;
student.isDistinction = false;
console.log(student);
console.log(typeof student);
console.log(typeof student["cgpa"]);
console.log("\n.................\n")
console.log("let vs var vs ()()");
function show(){
    {
    var x1 = 3;
    var y1 = 6;
    }
    console.log(x1, y1);
}
show();

function show3(){
    {
    (function() {
        var x1 = 3;
        var y1 = 6;
    })();
    }
    console.log(x3, y3);
}
show3();

// function show1(){
//     {
//     let x2 = 3;
//     let y2 = 6;
//     }
//     console.log(x2, y2);
// }
// show1();