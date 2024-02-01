let score = 33

//console.log(typeof score)
//console.log(typeof(score))

let score1 = "33"

//console.log(typeof score1)


//let valueInNumber= Number(score1)   // conversion str to no.
//console.log(typeof valueInNumber)
//console.log(valueInNumber)

let str = "33abc"

// console.log(typeof str)
// let valueInNumber= Number(str)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)              // Nan  -> Not a Number


// let marks = null
// console.log(typeof marks)
// let valueInNumber= Number(marks)
// console.log(typeof valueInNumber)
// console.log(valueInNumber) 

// let marks1 = undefined
// console.log(typeof marks1)
// let valueInNumber= Number(marks1)
// console.log(typeof valueInNumber)
// console.log(valueInNumber) 


// let marks2 = true
// console.log(typeof marks2)
// let valueInNumber= Number(marks2)
// console.log(typeof valueInNumber)
// console.log(valueInNumber) 


// let marks3 = "welcome"
// console.log(typeof marks3)
// let valueInNumber= Number(marks3)
// console.log(typeof valueInNumber)
// console.log(valueInNumber) 

/* Notes for Number Conversion(any to number)

input      |      output
null       |        0 (zero)
undefined  |        NaN  (not a number)
"welcome"  |        NaN
true       |        1
"33"       |        33


*/


// conversion to string 
let someNum = 33

// let stringNumber = String(someNum)
// console.log(typeof someNum)
// console.log(typeof stringNumber)
// console.log(stringNumber)


// let isLoggedIn = 1

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof isLoggedIn)
// console.log(typeof booleanIsLoggedIn)
// console.log(booleanIsLoggedIn)


// let isLoggedIn = ""

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof isLoggedIn)
// console.log(typeof booleanIsLoggedIn)
// console.log(booleanIsLoggedIn)

// let isLoggedIn = " "

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof isLoggedIn)
// console.log(typeof booleanIsLoggedIn)
// console.log(booleanIsLoggedIn)

let isLoggedIn = "abhay"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof isLoggedIn)
// console.log(typeof booleanIsLoggedIn)
// console.log(booleanIsLoggedIn)

/* Notes for conversion  any to boolean

input       |      outputs
1           |       true
0           |       false
""          |       false
"  "        |       true
"abhay"     |       true

*/

//  Operations  

let val = 3
let negVal = -val
// console.log(negVal)
// console.log(2/5)
// console.log(2%5)
// console.log(2**5)

let str1 = "wel"
let str2 = "come"
let str3 = str1 + str2
// console.log(str3)
// let str4 = str3 + " to Javascript"
// console.log(str4)

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2")

// console.log(true)
// console.log(+true)  // special conversion


//   Comparison of data types

/* Make sure to compare same data types only */

// console.log(2 > 1)
// console.log( 1 != 3)

// console.log("2" > 1)
// console.log("02" > 1)


// console.log(null > 0)
// console.log(null == 0)
// console.log(null >= 0)    // surprised output

// console.log(undefined < 0)
// console.log(undefined > 0)


// Data types

/*

let num = 39
console.log(typeof num)

let string = "Javascript"
console.log(typeof string)

let isTrue = false
console.log(typeof isTrue)

let val1 = null
console.log(typeof val1)

let val2 = undefined
console.log(typeof val2)

let sym = Symbol("12")
let sym1 = Symbol("12")
console.log(sym)
console.log(typeof sym)
console.log(sym === sym1)  // output is false bcz of uniqueness nature of symbol

let big = 345674849884744694847665446
let big1 = 6454630575848n        // bigInt ends with n
console.log(typeof big)
console.log(typeof big1)
*/

//  Memory

/*  static memory (primitive data types)

    heap memory  (Reference data type or Non-primitive data type)  */

    /*
let array = ["ram", "shaym", "mohan"]
console.log(array)
console.log(typeof array)
    */

/*
   let myObj = {
    name:"abhay",
    sec:'A',
    sub:"coding",
    marks:93,
   };
   console.log(typeof myObj)
   console.log(myObj)
   console.log(myObj.marks)
   */

   /*
  let myFun = function(){
    console.log("Hello World")
  }
  console.log(typeof myFun)
  myFun()                       // function call
  */
