"use strict";
const arr = [1, 2, 3, 4, 5];
const double = (array) => {
  for (const i of array) {
    console.log(i * 2);
  }
};
double(arr);

const shout = () => console.log("HELLO THERE!");
shout;
