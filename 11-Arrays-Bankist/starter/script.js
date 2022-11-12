'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  //.textContent = 0;

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
     <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int);
  labelSumInterest.textContent = `${interest}€`;
};

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const user = 'Steven Thomas Williams'; //stw

// Event Handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent from form submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  //This is a great usecase for optional chaining with the "?"
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcom back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    //Clear fields
    inputLoginUsername.value = inputLoginPin.value = '';
    containerApp.style.opacity = 100;
    inputLoginPin.blur();
    // Display movements
    displayMovements(currentAccount.movements);

    // Display balance
    calcDisplayBalance(currentAccount.movements);
    // Display summary
    calcDisplaySummary(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(amount, recieverAcc);

  if(amount > 0 && )
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE -- copies part of the array, doesn't mutate it
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));

// Shallow Copy
console.log(arr.slice());
console.log([...arr]);

// SPLICE -- deletes the part of array that is returned
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE -- does change the array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT -- doesn't mutate original array
const letters = arr.concat(arr2);
console.log(letters);
console.log(...arr, ...arr2);

console.log(letters.join(' - '));


// AT METHOD --
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// If we didn't know the last number
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
console.log(arr.at(-2));
// At method best for last number or method chaining, quick value you should use bracket notation
console.log('Daniel'.at(0)); //at works on strings too


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`); //abs is absolute value
  }
}

console.log('------------ For Each -------------');

movements.forEach(function (movement, i, arr) {
  // forEach gives us the (value, index, array) in that order
  if (movement > 0) {
    console.log(`Movement ${i + 1} You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`); //abs is absolute value
  }
});
// Continue and break statments do not work with forEach loop
// How for each works
// 0: function(200)
// 1: function(450)
// 2: function(400)


// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'Eur', 'Eur']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});


// ---- Coding Challenge 1 -----
// 1. Copy arrays removing cats
// 2. Decide if dogs is adult or puppy
const juliasDogs = [3, 5, 2, 12, 7];
const katesDogs = [4, 1, 15, 8, 3];

const juliasDogsNew = juliasDogs.slice(1, -2);

const checkDogs = function (arr1, arr2) {
  const dogArr = arr1.concat(arr2);
  dogArr.forEach(function (value, i) {
    const type = value >= 3 ? 'an adult' : 'still a puppy';
    console.log(`Dog number ${i} is ${type} and is ${value} years old.`);
  });
};

checkDogs(juliasDogsNew, katesDogs);


// Data Transoformations
// MAP will create a new Array with an operator (like map currentArr * 2)
// FILTER will filter elements in an array (like currentArr > 2)
// REDUCE will boil down elements into a single value (accumlatorVariable + currentArr)

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

// const movementsUsd = movements.map(function (mov) {
//   return mov * eurToUsd;
// });
const movementsUsd = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUsd);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescriptions);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const withdrawls = movements.filter(function (mov) {
  return mov < 0;
});

console.log(withdrawls);


// REDUCE

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

//different arguements in reduce.  Accumlator is the "snowball"
const balance = movements.reduce(function (accumulator, current, index, array) {
  console.log(`itteration ${index}: ${accumulator}`);
  return accumulator + current;
}, 0); //this part specifies where we start counting)

const balance2 = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance2);

console.log(balance);

// Maximum value

const max = movements.reduce(
  (acc, cur) => (acc > cur ? acc : cur),
  movements[0]
);
console.log(max);

const dogAges1 = [5, 2, 4, 1, 15, 8, 3];

const calcAverageHumanAge = function (ages) {
  const dogsHumanYears = ages.map(function (dogAge) {
    // This could have been a terninary operator, though I don't think that is as pretty
    if (dogAge > 2) {
      return 16 + dogAge * 4;
    } else {
      return 2 * dogAge;
    }
  });
  const dogsHumanYearsFiltered = dogsHumanYears.filter(age => age >= 18);
  const averageHumanAge =
    dogsHumanYearsFiltered.reduce((acc, age) => acc + age, 0) /
    dogsHumanYearsFiltered.length;
  console.log(averageHumanAge);
};

calcAverageHumanAge(dogAges1);

// PIPELINE
const totalDepostitsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * 1.1)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepostitsUSD);

//------- Challege 2----------

const calcAverageHumanAge2 = ages =>
  ages
    .map(age => (age > 2 ? age * 4 + 16 : age * 2))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

console.log(calcAverageHumanAge2(dogAges1));


// FIND method -- Will not return an array, just the first element that is true
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

let acnt;
for (const acc of accounts) {
  if (acc.owner === 'Jessica Davis') {
    acnt = acc;
    break;
  }
}

console.log(acnt);
*/
