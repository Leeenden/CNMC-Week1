// ----------------------------------------------------------------------------------------------------------------
// Array Syntax:
// ----------------------------------------------------------------------------------------------------------------

// let coffeeOrder = [
//     "Alex - latte",
//     "James - Mocha",
//     "Linden - Tea",
// ];
// console.log(coffeeOrder);
// console.log(coffeeOrder[2]);            // 

// coffeeOrder[1] = "Chris - Green Tea";
// console.log(coffeeOrder.length)
// console.log(coffeeOrder)

// coffeeOrder.push("Lad - Cola")
// console.log(coffeeOrder)
// coffeeOrder.pop()
// console.log(coffeeOrder)

// ----------------------------------------------------------------------------------------------------------------
// Activity 1:
// -----------------------------------
// Main task: Make an array of 3 your favourite songs (I chose Exercises). 3 of them. Log them to the console. 
// -----------------------------------

// let favExercise = [
//     "BB - Bench press",
//     "BB - Back squat",
//     "DB - Shoulder preess",
// ]
// console.log(favExercise)

// -----------------------------------
// Stretch task: Can you add another two songs (exercises) to the list using a method and then remove the last one added?
// -----------------------------------

// let favExercise = [
//     "BB - Bench press",
//     "BB - Back squat",
//     "DB - Shoulder preess",
// ]

// favExercise.push("DB - Pullover", "BB - Deadlift")
// console.log(favExercise)
// favExercise.pop()
// console.log(favExercise)

// ----------------------------------------------------------------------------------------------------------------
// Activity 2:
// -----------------------------------
// Main task: Using MDN choose one of the following methods: map(), shift(), unshift(), splice(), unsplice(). 
// Create a program to demonstrate the use of the method. 
// (Note: Not all methods would permanently update/make changes to the arrays themselves.)
// -----------------------------------

// let favExercise = [
//     "BB - Bench press",
//     "BB - Back squat",
//     "DB - Shoulder preess",
// ]
// console.log(favExercise)
// favExercise.splice(1, 0, "DB - Pullover", "BB - Deadlift")
// console.log(favExercise)
// favExercise.splice(2, 1, "BB - Front squat")
// console.log(favExercise)

// -----------------------------------
// For Loops syntax:
// -----------------------------------

// let favExercise = [
//     "BB - Bench press",
//     "BB - Back squat",
//     "DB - Shoulder preess",
// ]
// for (let i = 0; i < favExercise.length; i++){
//     console.log(favExercise[i])
// };

// let multipleTwo = []

// for (let i = 0; i <= 20; i++){
//     if (i % 2 == 0){
//         multipleTwo.push(i)
//     };
// };
// console.log(`numbers divisble by 2 are: ${multipleTwo}`);

// -----------------------------------
// While Loops syntax:
// -----------------------------------

// card sort loop
// let allCards = ["Diamond", "Spades", "Hearts", "Clubs"];
// let currentCards = "Clubs";

// while(currentCards != "Spades"){
//     console.log(currentCards);
//     currentCards = allCards[Math.floor(Math.random()*4)];
// };
// console.log(currentCards)

// ----------------------------------------------------------------------------------------------------------------
// Activity 1:
// -----------------------------------
// Main task: Create an array that lists your favourite films, up to 5 elements. 
// Add 2 more using a method. Use a loop to cycle through the array
// -----------------------------------

// let favFilms = [
//     "Shrek",
//     "Kung Fu Panda",
//     "Toy Story",
//     "Bugs Life",
// ];

// console.log(favFilms)
// favFilms.push("Spider-man", "Batman")
// console.log(favFilms)

// for (let i = 0; i < favFilms.length; i++){
//     console.log(favFilms[i])
// };

// ----------------------------------------------------------------------------------------------------------------
// Activity 2:
// -----------------------------------
// Main task: Generate 6 random numbers between 1-50 and log them to the console.
// -----------------------------------

// for (let i = 0; i < 6; i++){
//     console.log(Math.ceil(Math.random()*50))
// };

// ----------------------------------------------------------------------------------------------------------------
// Activity 3:
// -----------------------------------
// Main task: If we can create a loop to put 0-9 on the screen, how can we count from 9-0? Create a program that does this.
// -----------------------------------

// for (let i = 9; i >= 0; i--){
//     console.log(i)
// }

// ----------------------------------------------------------------------------------------------------------------
// Activity 4:
// -----------------------------------
// Main task: Displays 4 films stored in an array. Use a for loop to show each film in the array.
// Use an if statement to check if the 3rd film in the array is Ghostbusters.
// If it is, return “Yay it’s Ghostbusters”. If it isn’t return “Boo! we want Ghostbusters!"
// -----------------------------------

// let favFilms = [
//     "Shrek",
//     "Kung Fu Panda",
//     "Toy Story",
//     "Bugs Life",
// ];
// for (let i = 0; i < favFilms.length; i++){
//     console.log(favFilms[i])
// };
// if (favFilms[4] == "ghostbusters"){
//     console.log("Yay it's ghostbusters")
// } else {
//     console.log("Boo! we want ghostbusters!")
// }

// ----------------------------------------------------------------------------------------------------------------
// Activity 5:
// -----------------------------------
// Main task: Generate a random number between 1 and 30 six times. For each random number generated, check if this 
// number of divisible by 7 or not. Log out a message to the console if it is divisible by 7 or not.
// -----------------------------------

// for (let i = 0; i < 6; i++){
//     let ranNum = Math.ceil(Math.random()*30)
//     if(ranNum % 7 ==0){
//         console.log(ranNum)
//         console.log("Divisible by 7...") 
//     } else{
//         console.log(ranNum)
//         console.log("NOT divisible by 7")
//     }
// }

// ----------------------------------------------------------------------------------------------------------------
// Activity 6:
// -----------------------------------
// Main task: Imagine you’re a programmer for a social media platform! You have been tasked with building a prototype
// for a mutual followers program. Create 2 arrays of followers e.g. bobsFollowers & hannahsFollowers.
// In these arrays place 4 names as strings. Make sure there are 2 names that are in BOTH arrays.
// Using a nested loop, iterate over both arrays and console.log out the matching follower.
// -----------------------------------

// -------------------------
// With use of a function
// -------------------------

// let friend1= ["Andy", "Jill", "Michael", "Susan", "Jason", "Kyle", "Karen"]
// let friend2= ["Andrew", "James", "Michael", "Susan", "Karen", "Andy"]

// function checkMutual(a, b) {
//     let mutual = [];

//     for (let i = 0; i < a.length; i++ ) {
//         for (let j = 0; j < b.length; j++ ) {
//             if (a[i] === b[j]) mutual.push(a[i]);
//         }
//     }
//     console.log(mutual);
// }

// checkMutual(friend1, friend2);

// -------------------------
// without use of a function
// -------------------------

// let friend1= ["Andy", "Jill", "Michael", "Susan", "Jason", "Kyle", "Karen"]
// let friend2= ["Andrew", "Jill", "Michael", "Simon", "Karen", "Andy"]

// let mutual = [];

// for (let i = 0; i < friend1.length; i++ ) {
//     for (let j = 0; j < friend2.length; j++ ) {
//         if (friend1[i] === friend2[j]) {
//             mutual.push(friend1[i]);
//         }
//     }
// }
// console.log(mutual);

// ----------------------------------------------------------------------------------------------------------------
// Activity 7:
// -----------------------------------
// Main task: Research on do...while loop, find out about the difference between for loop, while loop and do...while loop. 
// Give an example of each. What are the pros and cons?
// -----------------------------------

// do while loop
// -------------

// let pinnumber = '';
// let i = 0;

// do {
//   i = i + 1;
//   pinnumber = pinnumber + i;
// } while (i < 4);

// console.log(pinnumber);

