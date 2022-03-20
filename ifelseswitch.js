// ----------------------------------------------------------------------------------------------------------------
// IF, ELSE AND SWITCH SYNTAX
// ----------------------------------------------------------------------------------------------------------------

// let place = "manc";
// let weather = "cloudy";

// a standard if statements if made-up as follows:

// if (expression to be evaluated(1)+ logical operator + expression to be evaluated(2)){
        // something happens if the statement is correct(TRUE)
// } else {
    // something happens when the statment is incorrect (FALSE)
// }

// -----------------------
// Comparison Operators
// -----------------------

// == Equals - checks if the 'values' ARE equal.
// != Not equals - checks if the 'values' ARE NOT equal.

// === Strict Equal - checks if the 'values' AND 'type' ARE equal.
// !== Strict Not Equal - checks if the 'values' AND 'type' ARE NOT equal.

// -----------------------
// Logical Operators
// -----------------------

// && and - both conditions have to be met in order for the code to run.
// || or - either condition can be met in order for the code to run.

// -----------------------
// e.g. if-else statement
// -----------------------

// let place = "manc";
// let weather = "cloudy";

// if (place == "manc" && weather == "sunny") {
//     console.log("check again..")
// } else if (place == "manc" && weather == "rainy") {
//     console.log("typical manc...")
// } else {
//     console.log("what it isnt raining?")
// }

// ----------------------------------------------------------------------------------------------------------------
// Activity 1:
// -----------------------------------
// Main task: Create a variable called age. Write an if statement that logs “Yes I can serve you” if the age is greater 
// than 17 and else logs “You aren’t old enough”.
// -----------------------------------

// let age = "17";
// let place ="uk";

//  if (age >= 18){
//     console.log("Nice, you are of age..")
// } else{
//     console.log("You are not old enough..")
// }

// -----------------------------------
// Stretch task: Take your if statement and add a variable called country in. (hint) if age > 17 and country == “UK”.
// -----------------------------------
// let age = "17";
// let place ="uk";

// if (age >= 18 && place == "uk"){
//     console.log("Nice, you are of age in the UK...")
// } else {
//     console.log("You are not old enough to drink in the UK..")
// }

// -----------------------------------
// Self Stretch:
// -----------------------------------

// let age = "17";
// let place ="uk";

// if (age >= 18 && place == "uk"){
//     console.log("Nice, you are of age in the UK...")
// } else if (age >= 18 && place != "uk"){
//     console.log("You are old enough to drink but you're not in the UK..")
// } else if (age <= 18 && place == "uk"){
//     console.log("You are not old enough to drink even though you are in the UK")
// } else {
//     console.log("You are not old enough and not in the UK.")
// }

// ----------------------------------------------------------------------------------------------------------------
// Activity 2:
// -----------------------------------
// Main task: Create a variable for any pizza topping. Create a switch statement, if the topping is one of your 
// favourite ingredients, log to the console “These are important ingredients for my pizza.” 
// If you don’t mind having Pepperoni for example log to the console “I don’t mind having ${topping} on my pizza.
// Finally, for any topping you don’t like log “${topping} should not be on a pizza.”
// -----------------------------------

// let pizzaTopping = "chicken";

// switch(pizzaTopping){
//     case "bacon":
//         console.log("It's nice but not my favourite...")
//         break;
//     case "onion":
//     case "peppers":
//     case "mushrooms":
//         console.log(`No chance, ${pizzaTopping} should not be on pizza.`)
//         break;
//     case "pepperoni":
//         console.log(`I don't mind having ${pizzaTopping} on my pizza`)
//         break;
//     case "chicken":
//         console.log("This is an important ingredient for my pizza.")
//         break
//     default:
//         console.log(`We are currently all out of${pizzaTopping}...`)

// }

// ----------------------------------------------------------------------------------------------------------------
// Activity 3:
// -----------------------------------
// Main task: Create a variable called password. Check how many letters are in the password, if there are less than 8, log to 
// the console that the password is too short. Otherwise log the password to the console. 
// -----------------------------------

// let password = "passsword1"

// if (password.length < 8){
//     console.log("The password is too short")
// } else {
//     console.log(password)
// }

// ----------------------------------------------------------------------------------------------------------------
// Activity 4:
// -----------------------------------
// Main task: Create a variable called num. Check if the variable is divisible by 3 or 5. 
// If it is, log “This number is divisible by 3 or 5. Otherwise log something else.
// -----------------------------------

// let num = 4

// if (num % 5 == 0 || num % 3 == 0){
//     console.log("This number is divisible by 5 and 3")
// } else {
//     console.log("This number is not divisible by 5 or 3")
// }

// ----------------------------------------------------------------------------------------------------------------
// Activity 5:
// -----------------------------------
// Main task: Create a variable called num. If num is divisible by 3 log “fizz” to the console, if it’s divisible 
// by 5 log “buzz” to the console, if it’s divisible by both 3 and 5 log “fizz buzz” to the console. 
// Otherwise log num to the console.
// -----------------------------------

// let num = 20
// if (num % 5 == 0 && num % 3 == 0){
//     console.log("Fizzbuzz")
// } else if (num % 5 == 0 && num % 3 != 0){
//     console.log("Buzz")
// } else if (num % 5 != 0 && num % 3 == 0){
//     console.log("Fizz")
// } else{
//     console.log(num)
// }

// ----------------------------------------------------------------------------------------------------------------
// Activity 6:
// -----------------------------------
// Main task: Create a variable called num. Check if the number is a palindrome (looks the same forward as it does 
// backwards e.g. 1001 or 20202).
// -----------------------------------

// let num = 10001;
// let numAsString = num.toString(); 
// let stringReversed = numAsString.split('').reverse().join('');  // I had to use gist answers to help. I had a similar idea but
//                                                                 // failed to re-structure the number into a string FIRST (as variables) 
// if (num == stringReversed){                                     // outside the if statement. I trying to deal with it within the if statement 
//     console.log(`Yes ${num} is a palindrome`)                   // and wondered why it wasn't working, it makes sense now.
// } else {
//     console.log(`No ${num} is not a palindrome`)
// }


// ----------------------------------------------------------------------------------------------------------------
// Activity 7:
// -----------------------------------
// Main task: Create a variable called time, a variable called placeOfWork and a variable called townOfHome. 
// Create an if statement that logs to the console where someone is at times of the day. E.g. if the time is 7 
// I’m at home, at 8 I’m commuting, at 9 I’m at work.
// -----------------------------------

// let time = 9;
// let placeOfWork = "Urmston";
// let townOfHome = "Stretford";

// if (time == 7){
//     console.log(`Still at home in ${townOfHome}, we don't leave for work till 8:00 am`)
// } else if ( time == 8 ){
//     console.log(`travelling to work in ${placeOfWork}`)
// } else if ( time == 9){
//     console.log(`At work in ${placeOfWork} I work between 9-5`)
// } else if (time < 17 ){
//     console.log(`On the way home to ${townOfHome}, finished work at 5.`)
// }

// ----------------------------------------------------------------------------------------------------------------
// Activity 8:
// -----------------------------------
// Main task: Take the string “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. 
// Find the index of a last vowel in the string
// -----------------------------------

// **COMMENT** - Found this one hard, couldn't find an answer and found nothing similar to the gist method online. I was trying to 
// push the charcter which matched the vowels to a empty array and then read from the array the last character pushed. 
// Not sure I get what is being done in the gist method either.

// let myString = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
// const vowels = ["a", "e", "i", "o", "u"]
// let vowelFound = []

// for(i = 0; i < vowels.length; i++){
//     indexOfVowel = myString.lastIndexOf(vowels[i])
//     if(indexOfVowel[i] === vowels.includes()){
//         vowelFound.push(i)
//         console.log(`The index of the first vowel from the end is ${vowelFound[-1]}`);
//     } else {
//         console.log("There are no vowels in this string...")
//     }
// }

// ***ANSWER***
// let string = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';
// let vowelArr = ['a', 'e', 'i', 'o', 'u'];
// let highestIndex =0;

// for (let i = 0; i < vowelArr.length; i++){
//   console.log(string.lastIndexOf(vowelArr[i]));

//     index = string.lastIndexOf(vowelArr[i]);

// if (index >= highestIndex ){

//     highestIndex = index;

//     lastVowel = vowelArr[i];
// }
// }

// console.log(lastVowel); 
// console.log(highestIndex)

// ----------------------------------------------------------------------------------------------------------------
// Activity 9:
// -----------------------------------
// Main task: Create a variable called word that takes a string. Create an if statement that checks if the last letter is the same as 
// the first. If it is return true, otherwise return false.
// -----------------------------------

// **COMMENT** - This one i found hard, had to use gist to help. Even though I found all the elements needed during research, i couldnt piece it together properly. 
// e.g. I still dont understand why we can say "word.charAt(0)" in the if statement, then say "word.charAt(word.length-1)" after.
// "word.charAt(-1)"" causes the statement to be false even if the letters are the same (this is where i got stuck and had to use gist).

// let word = "agga";

// if (word.charAt(0) === word.charAt(word.length-1)){
//     console.log(`True, the first letter '${word.charAt(0)}' is the same as the last letter '${word.charAt(word.length-1)}'.`)
// } else {
//     console.log(`False, the first letter '${word.charAt(0)}' is NOT the same as the last letter '${word.charAt(word.length-1)}'.`)
// }

// ----------------------------------------------------------------------------------------------------------------
// Activity 10:
// -----------------------------------
// Main task: Create two variables called num1 and num2. Create an if statement that checks if the result of the sum is even. 
// If it is return the number, otherwise return the numbers multiplied together.
// -----------------------------------

// let num1 = 4
// let num2 = 4


// if ((num1 + num2)% 2 == 0){
//     console.log("The result was even...here is the sum of the numbers ",(num1 + num2))
// } else {
//     console.log("The result was odd...here are the numbers multiplied ", (num1 * num2))
// }
