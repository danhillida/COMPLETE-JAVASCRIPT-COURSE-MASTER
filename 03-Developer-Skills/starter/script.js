// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const x = '23';
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;
console.log(calcAge(1959));

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([2, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);


const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degrees celsius')),
  };

  console.log(measurement);
  console.log(measurement.value);
  console.table(measurement);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
*/

/*
Problems:
I need to concatinate two stings
I need to list the temperature with an acending day
How do I increment the day? 
*/

const temps1 = [17, 21, 23];
const temps2 = [12, 5, -5, 0, 4];

const printForecast = function (arr1, arr2) {
  const tempArray = arr1.concat(arr2);
  console.log(tempArray);
  const stringArray = [];
  for (let i = 0; i < tempArray.length; i++) {
    stringArray.push(`${tempArray[i]}C in ${i + 1} days`);
  }
  return stringArray.join(' ... ');
};

console.log('... ' + printForecast(temps1, temps2) + ' ...');

const temps1New = [17, 21, 23];
const temps2New = [12, 5, -5, 0, 4];

const printForecastNew = function (arr1, arr2) {
  const tempArray = arr1.concat(arr2);
  console.log(tempArray);
  let string = '... ';
  for (let i = 0; i < tempArray.length; i++) {
    string += `${tempArray[i]}°C in ${i + 1} days ... `;
  }
  return string;
};

console.log(printForecastNew(temps1New, temps2New));
