'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);

  function printAge() {
    let output = `${firstName} is the age of ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial, ${firstName}.`;
      //Steven will be called because Steven in closer in scope than Dan
      console.log(str);
    }
    // console.log(str);
    output = 'New Output!';
    console.log(millenial);
    console.log(output);

    function add(a, b) {
      return a + b;
    }
  }
  printAge();

  return age;
}

const firstName = 'Dan';
calcAge(1988);

console.log(me);
// console.log(job);
// console.log(year);

var me = 'dan';
let job = 'teacher';
const year = 1988;

//functions
console.log(addDec(2, 3));
// console.log(addExpr(2, 7));
// console.log(addArrow(15, 17));

function addDec(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All Products Deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(z === window.z);

console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1988);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1988);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matlida = {
  year: 2017,
};

matlida.calcAge = jonas.calcAge;
matlida.calcAge();

const f = jonas.calcAge;
f();

// var firstName = 'Matilda';

const jonas = {
  firstName: 'Dan',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
    // const self =
    //   this; /* Get access to "this" inside functions -- Old solution */
// const isMillenial = function () {
//   console.log(this);
//   console.log(self.year >= 1981 && self.year <= 1996);
// };
/*
    //Use Arrow functions if you want the parent scope with this
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  //don't use arrow function as a method
  // greet: () => console.log(`hey ${this.firstName}`),
  greet: function () {
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);


let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Dan',
  age: 34,
};
const friend = me;
friend.age = 27;
console.log('freinds', friend);
console.log('me', me);
*/

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log(jessica);
console.log(marriedJessica);

// marriedJessica = {};  can't reassign marriedJessica

const jessica2 = {
  firstName: 'Jessica',
  family: ['alice', 'bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.firstName = 'Joe';

console.log(jessicaCopy);
console.log(jessica2);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log(jessicaCopy);
console.log(jessica2);
