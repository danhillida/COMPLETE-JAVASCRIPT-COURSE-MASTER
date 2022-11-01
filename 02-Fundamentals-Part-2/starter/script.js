'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

function logger(fucker) {
    console.log(`My name is ${fucker}`)
}

logger('dick wheat');
logger("penis star");
logger("weiner");

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const applejuice = fruitProcessor(5, 0);
console.log(applejuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

function describeCountry(country, population, capitalCity) {
    const countryStr = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
    return countryStr
}

console.log(describeCountry('USA', 330, 'Washington DC'));
console.log(describeCountry('Canada', 38, 'Ottawa'));
console.log(describeCountry('Mexico', 129, 'Mexico City'));

//function declaration -- can be called before it is defined
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1988);
console.log(age1);

//function expression -- must be defined before it is called
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1988);
console.log(age1, age2);

function percentageOfWorld1(population) {
    return Math.trunc(population / 7900 * 100)
}
const usa = percentageOfWorld1(330);
const mexico = percentageOfWorld1(129);
const canada = percentageOfWorld1(38);

console.log(usa, mexico, canada);

const percentageOfWorld2 = function (population) {
    return Math.trunc(population / 7900 * 100)
}

const usa2 = percentageOfWorld2(330);
const mexico2 = percentageOfWorld2(129);
const canada2 = percentageOfWorld2(38);

console.log(usa2, mexico2, canada2);


//Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1988);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 50 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`
}

console.log(yearsUntilRetirement(1988, 'Dan'))

const percentageOfWorld3 = population => Math.trunc(population / 7900 * 100);
const usa3 = percentageOfWorld3(330);
const mexico3 = percentageOfWorld3(129);
const canada3 = percentageOfWorld3(38);

console.log(usa3, mexico3, canada3);

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

//Practice assignment
const percentageOfWorld3 = population => Math.trunc(population / 7900 * 100);

const describePopulation = (country, population) => `${country} has ${population} million people, which is about ${percentageOfWorld3(population)}% of the world.`;

console.log(describePopulation('USA', 330));


const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    // if (retirement > 0) {
    //     return `${firstName} retires in ${retirement} years`;
    // } else {
    //     return `${firstName} has already retired`;
    // }
    if (retirement > 0) {
        return retirement;
    } else {
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1965, 'Bob'));

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const dolphinsScore = calcAverage(85, 54, 41);
const koalasScore = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
    const avgDolphinsDbld = avgDolphins * 2;
    const avgKoalasDbld = avgKoalas * 2;
    if (avgDolphins >= avgKoalasDbld) {
        return `Dolphins win ${avgDolphins} to ${avgKoalas}.`
    } else if (avgKoalas >= avgDolphinsDbld) {
        return `Koalas win ${avgKoalas} to ${avgDolphins}`
    } else {
        return "No teams win"
    }
}

console.log(checkWinner(dolphinsScore, koalasScore));

const friends = ['Micheal', 'Steven', 'Peter'];
console.log(friends);

const ye = new Array(1991, 1988, 1985, 1996);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends)

const firstName = "Dan"
const dan = [firstName, 'Hill', 2037 - 1988, 'teacher', friends];

console.log(dan);

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

//Arrays Practice Lesson
const populations = [330, 18, 38, 130];
console.log(populations.length === 4);

const percentageOfWorld3 = population => Math.trunc(population / 7900 * 100);

const percentageOfWorld1 = [percentageOfWorld3(populations[0]), percentageOfWorld3(populations[1]), percentageOfWorld3(populations[2]), percentageOfWorld3(populations[3])];
console.log(percentageOfWorld1);

const friends = ['Micheal', 'Steven', 'Peter'];
const newLength = friends.push('Jay'); //add element to end
console.log(friends);
console.log(newLength)

friends.unshift('John'); //add an element in front
console.log(friends);

friends.pop(); //last element is removed
console.log(friends);
const popped = friends.pop(); //last element is removed
console.log(friends);
console.log(popped);

friends.shift(); //last element removed
console.log(friends);

console.log(friends.indexOf('Micheal'));
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}

const neighbors = ['Canada', 'Mexico', 'Cuba'];

neighbors.push('Utopia');
console.log(neighbors);
neighbors.pop();
console.log(neighbors);

if (!neighbors.includes('Germany')) {
    console.log('Probably not a central European Country');
}

neighbors[1] = "Republic of Mexico";
console.log(neighbors);

let percentTip;
const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        percentTip = 0.15
    } else {
        percentTip = 0.20
    }
    return bill * percentTip;
}

console.log(calcTip(100));
console.log(calcTip(25));

const bills = [125, 55, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);

const myCountry = {
    country: 'Usa',
    capital: 'Washington D.C.',
    language: 'English',
    population: 330,
    neighbors: ['Candada', 'Mexico', 'Cuba']
}


const dan = {
    keyProperty: 'Value Property',
    firstName: 'Dan',
    lastName: 'Hill',
    age: 2037 - 1988,
    job: 'teacher',
    friends: ['Stacy', 'Jack', 'Tim']
};

console.log(dan);

console.log(dan.lastName);
console.log(dan['lastName']);

const nameKey = 'Name';
console.log(dan['first' + nameKey]);
console.log(dan['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Dan? Choose between stuff.')

console.log(dan[interestedIn])

if (dan[interestedIn]) {
    console.log(dan[interestedIn]);
} else {
    console.log('404 Error. Choose real thing');
}

dan.location = 'USA';
dan['twitter'] = '@danhillida';
console.log(dan);

//challenge "Dan Has three friends and his best friend is called Michael";

console.log(`${dan.firstName} has ${dan.friends.length} friends and his best friend is called ${dan.friends[0]}.`);

const myCountry = {
    country: 'Usa',
    capital: 'Washington D.C.',
    language: 'English',
    population: 330,
    neighbors: ['Candada', 'Mexico', 'Cuba']
}

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);

console.log(`${myCountry.country} has ${myCountry['population']} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}.`)


const dan = {
    keyProperty: 'Value Property',
    firstName: 'Dan',
    lastName: 'Hill',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Stacy', 'Jack', 'Tim'],
    hasDriverLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },



    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old teacher, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`
    }
};

console.log(dan.calcAge());

console.log(dan.age);
console.log(dan.age);
console.log(dan.age);

console.log(dan.getSummary())

const myCountry = {
    country: 'Usa',
    capital: 'Washington D.C.',
    language: 'English',
    population: 330,
    neighbors: ['Candada', 'Mexico', 'Cuba'],
    describe: function () {
        return `${this['country']} has ${this.population} million ${this.language} speaking people, ${this.neighbors.length} neightboring countries, and a capital called ${this.capital}.`;
    },
    checkIsIsland: function () {
        this.isIsland = this.neighbors.length === 0 ? true : false;
    }
};

console.log(myCountry.describe());

myCountry.describe();
myCountry.checkIsIsland();
console.log(myCountry);
console.log(myCountry.isIsland);


const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
}

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 130,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2)
        return this.bmi;
    }
}

mark.calcBMI();
john.calcBMI();
console.log(john.bmi, mark.bmi)

const bmiComp = mark.bmi > john.bmi ? console.log(`${mark["firstName"]} ${mark.lastName}'s BMI (${mark.bmi} is higher than ${john.firstName} ${john.lastName}'s ${john.bmi}!`) : console.log(`${john["firstName"]} ${john.lastName}'s BMI (${john.bmi} is higher than ${mark.firstName} ${mark.lastName}'s ${mark.bmi}!`);


// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights rep ${rep}`);
}

for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is voting`);
}


const jonas = ['jonas', 'Schmedtmann', 2037 - 1991, 'teacher', ['Micheal', 'Peter', 'Steven'], true];

const types = [];

for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);
    types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 1988, 1969, 2020];

const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages)

//continue and break

//continue passes the value and heads on the next
console.log('----only strings-----')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}

console.log('----Break with number-----')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}

//Practice

const populations = [330, 18, 38, 130];
function percentageOfWorld1(population) {
    return Math.trunc(population / 7900 * 100)
}

let percentages2 = [];
for (let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);
console.log(percentageOfWorld1(330));

const jonas = [
    'jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Micheal', 'Peter', 'Steven']
];

for (let i = jonas.length; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`----------------Starting Excercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`${exercise}Lifint weights repititon ${rep}!`)
    }
}

//Practice
const listOfNeighbors = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
for (let i = 0; i < listOfNeighbors.length; i++) {
    for (let j = 0; j < listOfNeighbors[i].length; j++) {
        console.log(listOfNeighbors[i][j]);
    }
}


//while loop is more versitile, does not need a counter, like if you don't know how many iterations you are going to need
// let rep = 1;
// while (rep <= 10) {
//     console.log(`Lifting weights repitition ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//     console.log(`You Rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is about to end...')
// }

const populations = [330, 18, 38, 130];
function percentageOfWorld1(population) {
    return Math.trunc(population / 7900 * 100)
}

let percentages2 = [];
for (let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);
console.log(percentageOfWorld1(330));

const percentages3 = [];
let i = 0;
while (i < populations.length) {
    const perc = percentageOfWorld1(populations[i]);
    percentages3.push(perc);
    i++
}

console.log(percentages3);
*/

//code challenge
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15
    } else {
        return bill * 0.20
    }
}

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}

console.log(tips, totals);

function calcAverage(arr) {
    let ave = 0
    for (let i = 0; i < arr.length; i++) {
        ave = ave + arr[i];
        // ave += arr[i]; <-- more correct way to write it
    }
    return ave / arr.length;
}

console.log(calcAverage(totals));