// console.log("Hello World")

// console.log("hello".toUpperCase())

// console.log("HELLO".toLowerCase())

// console.log("hello".length())
// // comment = crtl + /
// console.log(Math.random())

// console.log(Math.random()*10)

// // console.log(Math.ciel.random())
// console.log(Math.random()*10)
// console.log(Math.floor(Math.random()*10))
// console.log(Math.ceil(Math.random()*10))

// ----------------------------------------------------------------------------------------------------------------
// Activity 1:
// Have a go at logging a grid like this to the console.
// If you figure it out, try researching arrays and loops and see if you can do it that way. 

// console.log("   |   |   ")
// console.log("   |   |   ")
// console.log("   |   |   ")
// console.log("-----------")
// console.log("   |   |   ")
// console.log("   |   |   ")
// console.log("   |   |   ")
// console.log("-----------")
// console.log("   |   |   ")
// console.log("   |   |   ")
// console.log("   |   |   ")

// ----------------------------------------
// grid with fewer prints (using repeats)
// ----------------------------------------

// console.log("   |   |   \n".repeat(3))
// console.log("-----------")
// console.log("   |   |   \n".repeat(3))
// console.log("-----------")
// console.log("   |   |   \n".repeat(3))

// ----------------------------------------
// same grid using half loops and half prints
// ----------------------------------------

// for (let i = 0; i < 3; i++) {
//     console.log("   |   |   ");
//     }

// console.log("-----------")

// for (let i = 0; i < 3; i++) {
//     console.log("   |   |   ");
//   }

// console.log("-----------")

//   for (let i = 0; i < 3; i++) {
//     console.log("   |   |   ");
//   }

// ----------------------------------------
// same grid using same loop and different print statement
// ----------------------------------------

// for (let i = 0; i < 3; i++) {
//     console.log("   |   |   ");
//     }

// console.log("-".repeat(11))

// for (let i = 0; i < 3; i++) {
//     console.log("   |   |   ");
//   }

// console.log("-".repeat(11))

// for (let i = 0; i < 3; i++) {
//     console.log("   |   |   ");
//   }

// ----------------------------------------
// same grid using two loops *****EDIT
// ----------------------------------------

// for (let i = 0; i < 3; i++) {
//     console.log("   |   |   ");
//     }

// console.log("-".repeat(11))

// for (let i = 0; i < 3; i++) {
//     console.log("   |   |   ");
//   }

// console.log("-".repeat(11))

// for (let i = 0; i < 3; i++) {
//     console.log("   |   |   ");
//   }

// ----------------------------------------
// same grid using a while loop
// ----------------------------------------

// let count = 0;
// while (count < 3) {
//   count++; 
//   console.log("   |   |   ");
// }
// if (count = 3) {
//     console.log("-".repeat(11))
//     }
// while (count < 6) {
//     count++; 
//     console.log("   |   |   ");
//     }
// if (count = 6) {
//     console.log("-".repeat(11))
//         }
// while (count < 9) {
//     count++; 
//     console.log("   |   |   ");
//         }

// ----------------------------------------
// same grid but using an ARRAY
// ----------------------------------------

// [...Array(3)].forEach(() => console.log("   |   |   "));
// [...Array(1)].forEach(() => console.log("-----------"));
// [...Array(3)].forEach(() => console.log("   |   |   "));
// [...Array(1)].forEach(() => console.log("-----------"));
// [...Array(3)].forEach(() => console.log("   |   |   "));

// ----------------------------------------
// same grid but now with non-repeating code
// ----------------------------------------

// haven't figured this one out yet...
