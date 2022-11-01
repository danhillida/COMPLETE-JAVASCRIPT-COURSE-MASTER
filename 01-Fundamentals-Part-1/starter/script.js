/* let js = "amazing";
console.log(10 + 8);
console.log("Jonas")

let firstName = "Bob";
console.log(firstName)

*/
/*
let country = "USA";
let continent = "North America";
let population = 300000000;

console.log(country);
console.log(continent);
console.log(population);


let javascriptIsFun = true;
console.log(typeof javascriptIsFun);
console.log(typeof 32);

javascriptIsFun = "Yes!";
console.log(typeof javascriptIsFun);

let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof language);


const now = 2037;

const ageDan = now - 1988;
const ageKelsea = now - 2020;
console.log(ageDan, ageKelsea);
console.log(ageDan % 2);

console.log(3 ** 3)

const firstName = 'Jonas';
const lastName = "Hill";

console.log(firstName + ' ' + lastName)

let x = 10 + 5;
x += 10;
x++;
console.log(x);

console.log(ageDan > ageKelsea);
console.log(ageKelsea >= 18);

const isFullAge = ageKelsea >= 18;

console.log(population / 2);
console.log(population + 1000000);

const finlandPopulation = 6000000;
console.log(population > finlandPopulation);

const averagePopulation = 33000000;
console.log(population > averagePopulation);

console.log("The " + country + " is in " + continent + " and its " + population + " people speak english");

console.log(`The ${country} is in ${continent} and its ${population} people speak english.`)

*/
/*
const markWeight = 78;
const markHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

console.log(markBMI, johnBMI);

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

if (markBMI > johnBMI) {
    console.log(`Mark has a higher BMI (${markBMI})! Mark's BMI is ${markBMI - johnBMI} higher.`)
} else {
    console.log(`John has a higher BMI (${johnBMI})!  John's BMI is ${johnBMI - markBMI} higher.`)
}
*/


/*
const firstName = "Dan";
const job = "teacher";
const birthYear = 1988;
const year = 2022;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + " years old " + job + '!';
console.log(jonas);

const dan = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
console.log(dan);
*/
/*
const age = 15;


if (age >= 18) {
    console.log('Sarah can start driving license :)')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young.  Wait another ${yearsLeft} years :)`)
}

const birthYear = 1988;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);

let country = "USA";
let continent = "North America";
let population = 13000000;

if (population > 33000000) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33000000 - population} below average.`)
}
*/
/*
// type conversion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));

console.log(String(23));

// type coercion
console.log('I am ' + 23 + ' years old.')
console.log('23' / 10 - '3');

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Dan'));
console.log(Boolean({}));

const money = 5;
if (money) {
    console.log("don't spend it all")
} else {
    console.log('You should get a job')
}

let height;
if (height) {
    console.log("Yay! Height is defined")
} else {
    console.log("height is undefined.")
}


const age = 18;
if (age === 18) console.log('You Just became and adult :D');

const favorite = Number(prompt("What's your favorite number?"))
console.log(favorite)
console.log(typeof favorite)

if (favorite === 23) {
    console.log('Cool, 23 is an amazing number.')
} else if (favorite === 7) {
    console.log('7 is also a cool number')
} else {
    console.log('Number is not 23 or 7')
}

if (favorite !== 23) console.log('Why not 23?!')


const numNeighbors = Number(prompt('How many neighbor countires does your country have?'));

if (numNeighbors === 1) {
    console.log("Only 1 border!")
} else if (numNeighbors > 1) {
    console.log("More than 1 border")
} else {
    console.log("No Borders")
}
*/
/*
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense || hasGoodVision);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log('Sarah is able to drive')
// } else {
//     console.log('Someone else should drive')
// }

const isTired = true;
if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive.')
}

const dolphinsScore = (100 + 100 + 100) / 3;
const koalasScore = (95 + 95 + 95) / 3;

// if (dolphinsScore > koalasScore) {
//     console.log('Dolphins Win!')
// } else if (dolphinsScore === koalasScore) {
//     console.log("It is a draw")
// } else {
//     console.log("Koalas Win!")
// }

if (dolphinsScore >= 100 && dolphinsScore > koalasScore) {
    console.log("Dolphins win! 🎊");
} else if (koalasScore >= 100 && dolphinsScore < koalasScore) {
    console.log("Koalas Win!")
} else if (dolphinsScore >= 100 && koalasScore > 100 && dolphinsScore === koalasScore) {
    console.log("it is a draw");
} else {
    console.log("No team wins :'(");
}

const day = 'sundady';

switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('enjoy the weekend');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'monday') {
    console.log('Monday');
} else if (day === 'tuesday') {
    console.log('Tuesday');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Its a day alright');
} else if (day === 'friday') {
    console.log('TGIF');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend');
} else {
    console.log('Invalid day');
}

const age = 23;
age >= 18 ? console.log("i like to drink beer") :
    console.log("I Like to drink water")

const drink = age >= 18 ? 'Wine' : 'water';
console.log(drink)

let drink2;
if (age >= 21) {
    drink2 = "wine";
} else {
    drink2 = 'water';
}
console.log(drink2)

console.log(`I like to drink ${age >= 18 ? 'Wine' : 'water'}`);

const populationUSA = 330;

populationUSA > 33 ? console.log("USA's population is above average") : console.log("USA's population is below average");
*/
const bill = 430;

const percent = bill >= 50 && bill <= 300 ? 0.15 : 0.20;
const tip = bill * percent;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);