// ----------------------------------------------------------------------------------------------------------------
// Functions Syntax
// ----------------------------------------------------------------------------------------------------------------

// -----------------------
// Const => function declaration method
// -----------------------
// const cashWithdrawl = (account, accnum) => {
//     console.log(`withdrawing from ${account} from ${accnum}`)
// }

// cashWithdrawl(30,123456)


// const addUp = (num1,num2) =>{
//     return num1 + num2;
// }
// console.log(addUp(10,20))

// ---------------------------------------------------------------------------------------------------------------
// Activity 1:
// -----------------------------------
// Main task: Take this code and turn it into arrow function syntax:
// function factorial (n) {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     } else {
//         return (n * factorial(n-1))
//     }
// }
// console.log(factorial(33))
// -----------------------------------

// const factorial = (n) => {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     } else {
//         return (n * factorial(n-1))
//     }
// }
// console.log(factorial(33))

// ----------------------------------------------------------------------------------------------------------------
// Activity 2:
// -----------------------------------
// Main task: Edit the below snippet to include two parameters and a running order count updated when the function is called:
// let orderCount = 0;

// const takeOrder = (topping) => {
//     console.log(`Pizza with ${topping}`);
//     orderCount++;
// }

// takeOrder("Pineapple");
// -----------------------------------

// let orderCount = 0;

// const takeOrder = (topping1, topping2) => {
//     orderCount++;
//     console.log("Order number", orderCount)
//     console.log(`Pizza with ${topping1} and ${topping2}`);
// }

// takeOrder("Ham","Pineapple");
// takeOrder("Chicken","Bacon","Ground beef")

// ----------------------------------------------------------------------------------------------------------------
// Activity 3:
// -----------------------------------
// Main-task: Cash machine time! Let’s create one that: Dispenses cash if your pin number is correct and your balance is 
// equal to, or more than, the amount you’re trying to withdraw!
// -----------------------------------

// accNum = 12345678
// pin = 1234
// balance = 100

// const cashWithdrawl = (accnum, enteredPin,withdraw) => {
//     if (accnum === accNum && pin === enteredPin){
//         console.log("The pin and account number are correct...")
//         if (balance >= withdraw){
//             console.log(`withdrawing ${withdraw} from ${accnum}`)
//         } else{
//             console.log(`Unable to withdraw ${withdraw} from ${accnum}, insufficient funds.`)
//         }
//     } else{
//         console.log(`The account number ${accnum} and entered pin ${enteredPin} are not correct. Try again.`)
//     }
// }

// cashWithdrawl(12345678,1236,500);

// ----------------------------------------------------------------------------------------------------------------
