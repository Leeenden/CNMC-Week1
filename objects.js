// ----------------------------------------------------------------------------------------------------------------
// Objects Syntax
// ----------------------------------------------------------------------------------------------------------------

// const object name = { --> determines that this is an Object not a variable or array.
    // key: value,      ---> keys and values are separated by a colon. after each pair use a , (excluding the last key)
    // key: value
// }

// -----------------------
// Values 
// -----------------------

// Values can be any data type. They can even be arrays or functions!

// ---------------------------------------------------------------------------------------------------------------
// Activity practice:
// -----------------------------------
// Create an object called person with a key called name and set the value to your name.
// Add another key called age.
// -----------------------------------

// const person = {
//     name: "Linden",
//     age: 24,
//     favSongs: [
//         "song 1 - Artist 1",
//         "song 2 - Artist 2",
//         "song 3 - Artist 3"
//     ]
// };
// console.log(person)
// console.log(person.name)
// console.log(person.favSongs)

// ---------------------------------------------------------------------------------------------------------------
// Activity practice:
// -----------------------------------
// Let’s create an alarm. Create a key called weekendAlarm, with a value saying “no alarm needed” and a key called 
// weekdayAlarm, with a value saying “get up at 7am”. Create a variable called day and one called alarm.
// If day is Saturday or Sunday, set alarm to weekendAlarm. If day is a weekday, set alarm to weekdayAlarm.
// -----------------------------------

// let day = "Monday";

// const alarmSettings = {
//     weekendAlarm: "no alarm needed",
//     weekdayAlarm: "Get up at 7:00 am"
// };

// if (day === "Saturday" || day == "Sunday"){
//     alarm = alarmSettings.weekendAlarm;
//     console.log(alarm)
// } else {
//     alarm = alarmSettings.weekdayAlarm
//     console.log(alarm)
// } 

// ---------------------------------------------------------------------------------------------------------------
// Activity 1:
// -----------------------------------
// Main task:Let’s edit our person object to include…A function called sayHi and when it’s called, it should 
// return “Hello my name is ${this.name}”
// -----------------------------------
// const person = {
//     name: "Linden",
//     age: 24,
//     favSongs: [
//         "song 1 - Artist 1",
//         "song 2 - Artist 2",
//         "song 3 - Artist 3"
//     ],
//     sayHi(){
//         console.log(`Hello my name is ${this.name}`)
//     },
// };

// person.sayHi()

// ---------------------------------------------------------------------------------------------------------------
// Activity 2:
// -----------------------------------
// Main task: Create an object called pet with the key values of: name, typeOfPet, age, colour 
// And methods called eat and drink. They should return a string saying [Your Pet Name] is eating/drinking.
// -----------------------------------
// const pet = {
//     name: "Jimmy",
//     typeOfPet: "Mouse",
//     age: 2,
//     colour: "Grey",

//     eat(){
//         return `${pet.name} is eating`
//     },
//     drink(){
//         return `${pet.name} is drinking`
//     }
// }
// console.log(pet.eat())
// console.log(pet.drink())

// ---------------------------------------------------------------------------------------------------------------
// Activity 3:
// -----------------------------------
// Main task: Create an object called coffeeShop with key values of: branch, drinks with prices, food with prices
// And methods called drinksOrdered and foodOrdered.
// They should return a string saying [Your order] is … with all items chosen with costs and total costs. 
// -----------------------------------


orderList = []

const coffeeShop = {
    branch: "North-west",
    "tea":  1,
    "latte": 1.50,
    "mocha": 2.00,
    "orangeJuice": 2.50,
    "toast": 0.4,
    "cupcakes": 1.50,
    "baconButty": 3.00,
    "fullEnglish": 5.00,

    drinksOrder(drink){
        console.log(`You ordered the following drinks...${drink}`)
        orderList.push(drink)
        if (drink == coffeeShop.key){
        console.log(orderList.values)
        } else {
            console.log("ERRORRR")
        }
    },
    foodOrder(food){
        console.log(`You ordered the following food...${food}`)
        console.log(orderList)
    }
}

coffeeShop.drinksOrder("latte")


