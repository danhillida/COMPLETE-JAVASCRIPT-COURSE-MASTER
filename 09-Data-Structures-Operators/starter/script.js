'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name1: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 Enhanced object literals
  openingHours,

  //ES 6 method
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your deliecious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delievered to ${address}`
    );
  },
};

//1. Receive information from the text area
//2. Convert to array
//3. convert text from underscore to camel case
// 3.1 Split at the underscore. destructure string?
// 3.2 Uppercase at the n2[0]
//4. return camel case on new line
//5. Add emoji

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const input = document.querySelector('textarea').value;
  let check = [];
  const underScoreArr = input.toLowerCase().replaceAll(' ', '').split('\n');
  const camelCaseArr = [];
  for (const v of underScoreArr) {
    const [a, b] = v.split('_');
    check.push('✅');
    console.log(
      (a + b[0].toUpperCase() + b.slice(1)).padEnd(20, ' ') +
        check.toString().replaceAll(',', ' ')
    );
  }
});

// document.querySelector('textarea');

/*
//--------------------SPLIT AND JOIN----------------------//
console.log('a+very+nice+string'.split('+'));
console.log('Dan Thomas Hill'.split(' '));

const [firstName, lastName] = 'Daniel Hill'.split(' '); //split creates an array

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const nameArr = name.split(' ');
  const finalNameArr = [];
  for (const nme of nameArr) {
    // const lowName = nme.toLowerCase();
    // const fName = lowName[0].toUpperCase() + lowName.slice(1);
    // finalNameArr.push(fName);
    finalNameArr.push(nme.replace(nme[0], nme[0].toUpperCase())); //different shorter approach
  }
  console.log(finalNameArr.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('kelsea mae carlsen hill');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));
console.log('jonas'.padStart(20, '$').padEnd(40, '$'));

const maskcreditcard = function (num) {
  const str = num + ''; //Hacky way of doing strings
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskcreditcard(1236547894747896));

// Repeat
const message2 = 'Bad Weather... All depatrues delayed ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'plane '.repeat(n)}`);
};

planesInLine(6);

// const nameL = name.toLowerCase();
// const nameC = nameL[0].toUpperCase() + nameL.slice(1);



const airline = 'TAP air Portugal';
// const plane = 'A320';

console.log(airline.toLowerCase());
console.log('dan'.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAs';
const passengerLower = passenger.toLowerCase();
const passengercorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengercorrect);

const passengerNameFunc = function (name) {
  const nameL = name.toLowerCase();
  const nameC = nameL[0].toUpperCase() + nameL.slice(1);
  console.log(nameC);
};

passengerNameFunc('DaNieL');
passengerNameFunc('KeLsEA');

//comparing Emails

const email = 'hello@place.io';
const loginEmail = '  Hello@Place.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(loginEmail === email);
console.log(email === normalizedEmail);

//replacing
const priceGB = '?288,97';
const priceUS = priceGB.replace('?', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23.  Boarding door 23!';

// console.log(announcement.replaceAll('door', 'gate'));
//replace all has replaced it, but the /string/g works.  g = global
console.log(announcement.replaceAll(/door/g, 'gate'));

// Booleans

const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the new AirBus Family');
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome Aboard!');
  }
};
checkBaggage('I have a laptop, some Food, and a Pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('I have snacks and a gun.');


console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline);
console.log(airline.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ')));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat');
  } else {
    console.log('You got lucky');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');



const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
const eventsSet = [...new Set(gameEvents.values())];
console.log(eventsSet);

gameEvents.delete(64);
console.log(gameEvents);

const avgEvent = 90 / gameEvents.size;
console.log(`An event happened, on average, every ${avgEvent} minutes`);

for (const [minute, event] of gameEvents) {
  const half = minute < 45 ? 'First' : 'Second';
  console.log(`[${half} Half] ${minute}: ${event}`);
}
//This is a better solution because it doesn't repeat code.  I need to remember DRY

// Simple list: Array or a Set --> Arrays for ordered list and/or to manipulate.  Sets when speed is important or unique values
// Need key/value pairs? Object or Maps --> Objects easier to use or need functions (methods).  Maps have better performance, good for just if you need key/values, key not a string
// API data comes to JSON, similar to Object


////////////////////////////////////
// Advanced Maps

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'c'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'correct!'],
  [false, 'Try Again :('],
]);
console.log(question);

// convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your answer'));
console.log(answer);

console.log(question.get(answer === question.get('correct')));

//convert map to array
console.log(...question);
console.log([...question.keys()]);
console.log([...question.values()]);


/////////////////////////////////////
// Maps-- Rundatmentals

const rest = new Map();
rest.set('name', 'classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

console.log(rest);

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest.has('categories'));
console.log(rest.size);
// rest.clear();
// console.log(rest);

const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest);
console.log(rest.get(arr));


/////////////////////////////////////
//  SETS

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Water', 'chef', 'Waiter', 'Manager', 'chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['Water', 'chef', 'Waiter', 'Manager', 'chef', 'Waiter']).size
);

console.log(new Set('Danhill').size);


//Property NAMES--Object Keys
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

// Property VALUES--Key Values
const values = Object.values(openingHours);
console.log(values);

//Entire Object

const entries = Object.entries(openingHours);
console.log(entries);

// [key, value]
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}


if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

//Optional chaining 
// Usually used with the knowledge coalescing operator

console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours.fri?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', `day-${2 + 4}`, 'Sun'];
for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Dan', email: 'dan@hello.com' }];

console.log(users[0]?.name ?? 'User array empty');

//////////////////////////////////////////////////
// ENHANCED OBJECT LITERALS



//////////////////////////////////////////////////
// FOR-OF LOOP

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

console.log(...menu.entries());


//////////////////////////////////////////////////
//LOGICAL ASSIGNMENT OPERATORS

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests = rest1.numGuests || 10;

//OR ASSIGNMENT OPERATOR
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// NULLISH ASSIGNMENT OPERATOR
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//AND ASSIGNMENT OPERATOR
rest1.owner &&= '<Annonymous>';
rest2.owner &&= '<Annonymous>';

console.log(rest1);
console.log(rest2);


//////////////////////////////////////////////
// Knowledge collesing operator
// restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

//Nullish: null and undefined (NOT 0 or '').  Only will nullish values short ciruit
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);





console.log('---------Or-----------');

// Logical operators can use any data type, eturn any data type, and short-circuiting;
console.log(3 || 'Jonas'); //If first value is truthy, it is returned.
console.log('' || 'jonas');
console.log(true || 3);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'hello' || 23 || null);

// restaurant.numGuests = 30;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('------------AND------------');
//And returns the first falsy value
console.log(0 && 'Jonas');
console.log(1 && 'Jonas' && null && 'dan');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('Mushroom', 'cheese');

//SPREAD because on the right side of =
// const arr = [1, 2, ...[3, 4]];

//REST because on the left side of =
//REST must be the last, and can only be one
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// //objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(5, 2, 3, 7);
// add(6, 5, 4, 3, 2, 6, 7, 4, 3, 5);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onien', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('2'),
//   prompt('3'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// //objects
// const newRestaurant = { founded: 1998, ...restaurant, founder: 'Jim bob' };
// console.log(newRestaurant);

// const arr = [7, 8, 9];
// const badNewArr = [1, 3, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);
// //Join 2 arrays

// //Iterables: arrays, strings, maps, sets but NOT OBJECTS
// const str = 'Jonas';
// const letters = [...str, '', 'S.'];
// console.log(letters);
// console.log(...str);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: '107 E point',
//   staterIndex: 1,
// });

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , , secondary] = restaurant.categories;
console.log(main, secondary);

// SWITCHING VARIABLES
// const temp = main;
// main = secondary;
// secondary = temp;

[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested Destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default Values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

/*
const { name1, openingHours, categories } = restaurant;
console.log(name1, openingHours, categories);

//Default Values
const {
  name1: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating Variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

//Nested Objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

//////////////////////////////////////////
//////////////////////////////////////////
//Coding Challenge 1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*
// const players1 = game.players[0];
// const players2 = game.players[1];
// console.log(players1, players2);
const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = function (...names) {
  let sum = 0;
  for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
    sum++;
  }
  console.log(sum);
};

printGoals('Jeremy', 'Peter', 'Ron');
printGoals(...game.scored);

team1 < team2 && console.log('Team 1 is more likely to win');
team2 < team1 || console.log('Team 2 is more likely to lose');

//////////////////////////////////////////////////////////
//  CODING CHALLENGE 2
const goalObj = Object.entries(game.scored);
console.log(goalObj);

for (const [goal, player] of goalObj) {
  console.log(`Goal ${parseInt(goal) + 1}: ${player}`);
}

const oddValues = Object.values(game.odds);
console.log(oddValues);
let sum = 0;
let avg = 0;

for (const odd of oddValues) {
  sum += odd;
  console.log(sum / oddValues.length);
}

console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
console.log(`Odd of Draw: ${game.odds.x}`);
console.log(`Odd of Victory ${game.team2}: ${game.odds.team2}`);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamString = team === 'x' ? 'Draw' : `Victory ${game[team]}`;
  console.log(`Odd of victory ${teamString} ${odd}`);
}
*/
