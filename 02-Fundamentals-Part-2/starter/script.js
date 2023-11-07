'use strict';

// let hasDriversLicense = false;
// const passTest = true; 

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive')
 
// function declaration
// function calcAge(birthYear) {
//     return 2023 - birthYear
// }
// const age = calcAge(1978)
// console.log(age)

// function expression
// const calcAge = function(birthYear) {
//     return 2023 - birthYear
// }
// const age = calcAge(1978)
// console.log(age)

// Arrow functions
// const calcAge = birthYear => 2023 - birthYear
// const age = calcAge(1978)
// console.log(age)

// one more arrow functions with several parameters
// const yearsUntilRetirement = (birthYear, firstname) => {
//     const age = 2023 - birthYear;
//     const retirement = 65 - age;
//     return `${firstname} is retiring in ${retirement} years`
// }
// console.log(yearsUntilRetirement(1978, 'Robert'))

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }
// function fruitProcessor(apples, oranges) {
//     const appleNr = cutFruitPieces(apples)
//     const orangeNr = cutFruitPieces(oranges)
//     const juice = `juice with ${appleNr} apple pieces and ${orangeNr} orange pieces.`;
//     return juice
// }
// const juice = fruitProcessor(2, 4);
// console.log(juice)

// const calcAge = function(birthYear) {
//     return 2023 - birthYear;
// }

// const yearsUntilRetirement =  function(birthYear, firstname) {
//     const age = calcAge(birthYear)
//     const retirement = 65 - age;

//     if(retirement > 0) {
//         console.log(`${firstname} is retiring in ${retirement} years`)
//         return retirement;
//     } else {
//         console.log(`${firstname} is retired`)
//         return -1;
//     }
    
// }
// console.log(yearsUntilRetirement(1958, 'Robert'))

// //Function declaration
// //Function that can be used before it's declared
// function calcAge(birthYear) {
//     return 2023 - birthYear;
// }

// //Function expression
// //Essentially a function value stored in a variable
// const calcAge = function(birthYear) {
//     return 2023 - birthYear;
// }
// //Arrow function 
// //Great for a quick one-line functions.
// //Has no t h i s keyword
// const calcAge = birthYear => 2023 - birthYear;

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams

// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'scoreKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"

// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores �

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas)

// function checkWinner(avgDolphins, avgKoalas) {
//     if(avgDolphins >= 2 * avgKoalas){
//      console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
// }   else if (avgKoalas >= 2 * avgDolphins){
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
// } else {
//     console.log("No team wins")
// }
// }
// checkWinner(scoreDolphins, scoreKoalas);

// scoreDolphins = calcAverage(85, 154, 41);
// scoreKoalas = calcAverage(23, 34, 27);

// checkWinner(scoreDolphins, scoreKoalas);







// const age1 = calcAge(years[1])
// const age2 = calcAge(years[years.length -2])

// console.log(age1, age2)

// const ages = [calcAge(years[0]), calcAge(years[years.length -2])]
// console.log(ages)

// const friends = ['peter', 'johannes', 'stefan', 'daniel', 'bengt']
// const newLength = friends.push('Greger')
// friends.push('Elener')
// const pop = friends.pop()
// friends.unshift('Body')
// console.log(friends)
// console.log(newLength)
// console.log(pop)

// const firstName = 'Robert';
// const robert = [firstName, 'tyborn', 2023 - 1978, friends];
// console.log(robert)

// const calcAge = function(birthYear) {
//     return 2023 - birthYear;
// }
// const years = [1990, 1967, 1978, 1986, 2014]; 

// const age1 = calcAge(years[0])
// const age2 = calcAge(years[2])
// console.log(age1, age2)

// const ages = [calcAge(years[0]), calcAge(years[2]), calcAge(years[years.length - 2])]
// console.log(ages)

// console.log(years.indexOf(1978))
// console.log(years.includes(1978 ))


// const tipCalculated = calcTip(100);
// console.log(tipCalculated);

// function calcTip(bill) {
//     if(bill <= 300 && bill >= 50){
//         return bill * 0.15;
//     } else {
//         return bill * 0.20;
//     }
// };
// Alternativ function och jämförelse istället för if-sats
// const calcTip = function(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const totals = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];
// console.log(totals);


// const interestedIn = prompt('Ask about firstName, lastName, job, age or friends.');

// if (robert[interestedIn]) {
//     console.log(robert[interestedIn])
// } else {
//     console.log('Wrong request')
// }



// const robert = {
//     firstName: 'Robert',
//     lastName: 'Tyborn',
//     birthYear: 1978,
//     job: 'QA testare',
//     friends: ['Stefan L', 'Johannes A', 'Johannes Å', 'Jonas K'],
//     hasDriversLicense: true,

    // calcAge: function(birthYear) {
    //     return 2023 - birthYear;
    // }

    // calcAge: function() {
    //     return 2023 - this.birthYear;
    // }

//     calcAge: function() {
//         this.age = 2023 - this.birthYear
//         return this.age
//     }, 
//     getSummary: function() {
//      return `Robert är en ${this.calcAge()}-årig ${this.job} och han ${this.hasDriversLicense ? 'har' : 'har inte'} körkort`
//     }
// };


// console.log(`${robert.firstName} har ${robert.friends.length} vänner, 
// och hans bäste vän är ${robert.friends[2]}`);

// robert.stad = 'Göteborg';
// robert['twitter'] = '@tanzkraft';
// robert.hemstad = 'Alingsås';

// robert.age = (robert.calcAge());
// console.log(robert.age)

// console.log(`Robert är en ${robert.age}-årig ${robert.job} och han ${robert.hasDriversLicense ? 'har' : 'har inte'} körkort`);

// console.log(robert.getSummary())

// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:

// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)

// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method

// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.

const mark = {
    fullName: 'Mark Miller',
    mass: '78',
    height: '1.69',

    calcBmi: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};
const john = {
    fullName: 'John Smith',
    mass: '92',
    height: '1.95',

    calcBmi: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

mark.pets = 'dog'
console.log(mark)
mark.calcBmi();
john.calcBmi();
console.log(mark, john);
console.log(mark.bmi, john.bmi);

// console.log(`${mark.bmi > john.bmi ? "Mark's" : "John's"} BMI (${mark.bmi > john.bmi ? mark.bmi : john.bmi}) is higher than ${mark.bmi > john.bmi ? "John's" : "Mark's"} (${mark.bmi > john.bmi ? john.bmi : mark.bmi}!)`);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI ${john.bmi}`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI ${mark.bmi}`)
}
