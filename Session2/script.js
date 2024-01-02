// // 1. Print all even number from 1 to 100.
// let num = prompt("Enter the upper bound ");
// let str = " ";
// for (let i = 0; i <= num; i++) {
//     if (i % 2 === 0) {
//         str += i;
//     }
// }
// console.log(str);

// 2. Random Number Guessing

let a = prompt("Enter user1 number ");
let b = prompt("User 2, Please guess the number");
let c = 0;
if(b<a){
    alert("Please guess a Larger number");
    c++;
}else if(b>a){
    alert("Please guess a smaller number");
    c++;
}else{
    c++;
    alert("You got it in ", c ,"attempt Congrats!")
}