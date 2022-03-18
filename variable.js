// ----------------------------------------------------------------------------------------------------------------
// VARIABLE SYNTAX
// --------------------------------------------------
// 'let' creates a variable which CAN be changed later on. e.g:

// let firstName = "Linden"

// 'const' creates a constant variable which CANNOT be changed later on. e.g.:

// const lastName = "Hamer"

// can use variables to perform calculations if assigned number values. e.g:

// let i = 10;
// console.log(i);
// i = i+2;
// console.log(i)
// i += 2;
// console.log(i)

// Variables can be logged to the console by calling the variable in the brackets(). e.g.:

// let favouriteDrink = "Orange Juice";
// console.log(favouriteDrink)

// Variables can be logged to the console by calling the variable in different ways. e.g:

// let favouriteDrink = "Orange Juice";
// console.log("My favourite drink is " + favouriteDrink)

// let favouriteDrink = "Orange Juice";
// console.log("My favourite drink is", favouriteDrink)

// Variables can be logged using a template literal (enclosed by `` and variables enclosed by ${}). e.g:

// let favouriteDrink = "Orange Juice";
// console.log(`My favourite drink is ${favouriteDrink}`)

// ----------------------------------------------------------------------------------------------------------------
// Activity 1:
// -----------------------------------
// Main task: Create a program that stores someone’s name, age and favourite colour and log it to the console in a complete 
// sentence using Template Literals.
// -----------------------------------

// let firstName = "Linden";
// let age = 24;
// let favouriteColour = "Green"
// console.log(`Hi, my name is ${firstName}. I am ${age} and my favourite colour is ${favouriteColour}.`)

// -----------------------------------
// Stretch task: Update all of your variables and write out a new sentence underneath your original.
// -----------------------------------

// firstName = "Jack"
// age = 28
// let favouriteColour = "Blue"
// console.log(`Hi, my name is ${firstName}. I am ${age} and my favourite colour is ${favouriteColour}.`)

// ----------------------------------------------------------------------------------------------------------------
// Activity 2:
// -----------------------------------
// Main task: Create a program that stores what you eat today for breakfast, lunch and dinner. Log these to the console. 
// -----------------------------------

// let breakfast = "Porridge";
// let lunch = "Sandwich";
// let dinner = "Roast Dinner";
// console.log(`Today I ate ${breakfast} for breakfast, a ${lunch} for my lunch and finally I ate a ${dinner} for my tea.`)

// -----------------------------------
// Stretch task: Update each of these variables to what you will eat tomorrow. Log these to the console.
// -----------------------------------

// breakfast = "Cereal";
// lunch = "Pasta";
// dinner = "Take-away";
// console.log(`Tomorrow I will eat ${breakfast} for breakfast, a ${lunch} for my lunch and finally have a ${dinner} for my tea.`)

// ----------------------------------------------------------------------------------------------------------------
// Activity 3:
// -----------------------------------
// Main task: Create a program that calculates the number of days from today to your birth date.
// (Hint) Look for ‘Javascript Date’ on MDN.
// -----------------------------------

// function getNumberOfDays(start, end) {
//     const date1 = new Date(start);
//     const date2 = new Date(end);

//     // One day in milliseconds
//     const oneDay = 1000 * 60 * 60 * 24;

//     // Calculating the time difference between two dates
//     const diffInTime = date2.getTime() - date1.getTime();

//     // Calculating the no. of days between two dates
//     const daysUntilBirthday = Math.round(diffInTime / oneDay);

//     return daysUntilBirthday;
// }

// console.log(getNumberOfDays("3/15/2022", "4/28/2022"))

// ----------------------------------------------------------------------------------------------------------------
// Activity 4:
// -----------------------------------
// Main task: Create 9 variables: space1, space2… space9 etc. Assign either the value ‘x’,’o’,’ ‘, to each of these variables.
// Insert the variables into your board using the ${varName} syntax and make it look like the displayed board. 
// -----------------------------------

// let spaceOne = "X";
// let spaceTwo = "O";
// let spaceThree = "O";
// let spaceFour = "X";
// let spaceFive = "X";
// let spaceSix = "O";
// let spaceSeven = "O";
// let spaceEight = "X";
// let spaceNine = "O";

// console.log(`    |     |    `)
// console.log(` ${spaceOne}  |  ${spaceTwo}  |    `)
// console.log(`    |     |    `)
// console.log("---------------")
// console.log(`    |     |    `)
// console.log(` ${spaceFour}  |  ${spaceFive}  |    `)
// console.log(`    |     |    `)
// console.log("---------------")
// console.log(`    |     |    `)
// console.log(` ${spaceSeven}  |     |    `)
// console.log(`    |     |    `)


