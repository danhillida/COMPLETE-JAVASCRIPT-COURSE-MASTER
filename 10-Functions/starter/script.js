'use strict';
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);

const flight = 'LH234';
const dan = {
  name: 'Daniel Hill',
  passport: 23456789,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 23456789) {
    alert('Checked In');
  } else {
    alert('Wrong Passport!');
  }
};

// checkIn(flight, dan);
// console.log(flight);
// console.log(dan);

// const flightNum = flight;
// const passenger = dan;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(dan);
checkIn(flight, dan);

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order Function
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

// Just passed in the value, not calling
transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

// JS uses callbacks all the time--can create abstraction
const high5 = function () {
  console.log('hand');
};

// .addEventListener is the higher-order function
document.body.addEventListener('click', high5);

['Dan', 'Stacy', 'Adam'].forEach(high5);



const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');

greeterHey('Jonas');
greeterHey('Steven');
// This works because of closers.  Maybe research that later

greet('Hello')('Jonas');

// Challenge
const greet2 = greeting => name => console.log(`${greeting} ${name}`);

greet2('Sup')('Dan');


const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

lufthansa.book(239, 'Daniel Hill');
lufthansa.book(625, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// book(23, 'Sara Williams');
// Call method manipulates the 'This' keyword
book.call(eurowings, 23, 'Ben Dover');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Pooper');

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 457, 'Pat MeeCrevas');

// Apply method

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

//Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Dan Hill');
bookEW23('Martha Cooper');

// With Even Listners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.37);

console.log(addVAT(100));
console.log(addVAT(77));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVat2 = addTaxRate(0.23);
console.log(addVat2(100));
*/

// 1: Create prompt that desplays the question

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  registerNewAnswer: function () {
    let answer = prompt(
      parseInt(`${poll.question}
    ${poll.options[0]}
    ${poll.options[1]}
    ${poll.options[2]}
    ${poll.options[3]}
    (Write Option Number)`)
    );
    console.log(answer);
  },
  //  This generates [0, 0, 0, 0].  More in the next section
  answers: new Array(4).fill(0),
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer);
