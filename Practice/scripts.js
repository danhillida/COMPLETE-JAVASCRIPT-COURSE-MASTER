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

document.getElementById("changeme").textContent = "Welcome to my practice page";

document.getElementById("changeme").style.color = "green";

const newObj = {
  firstName: "Dan",
  lastName: "Hill",
  middleName: "Thomas",

  fullName: function () {
    console.log(`${this.firstName} ${this.middleName} ${this.lastName}`);
  },
};

document
  .getElementById("btn")
  .addEventListener("click", newObj.fullName.bind(newObj));
