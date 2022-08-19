// // creating arrays
// // const numbers = [1, 2, 3];
// // const num = new Array();
// // const nums = Array();

// // const moreSpltv = Array.from("HI!");
// // //console.log(moreSpltv);

// // // creates a Nodelist, Array like structure
// // const listOfItems = document.querySelectorAll("li");
// // //console.log(listOfItems);

// // //create an Array
// // const arrayListItems = Array.from(listOfItems);
// // //console.log(arrayListItems);

// // //arrays can have all kinds of data i.e objects,
// // //multi-dimensional arrays
// // const analyticsData = [
// //   [1, 2, 3.4],
// //   [5, 5.6, 7, 8],
// // ];
// // for (const data of analyticsData) {

// //   //console.log(data);
// //   //Pulls out single arrays
// //   for (const dataPt of data) {
// //     //Pulls out single elements
// //     console.log(dataPt);
// //   }
// // }

// const hobbies = [3, "sleeping", "cooking", "bake"];
// //hobbies.unshift("code");
// //console.log(hobbies);

// //hobbies[0] = 3
// console.log(hobbies);

// //to add elements
// hobbies.splice(0, 0, "stuff");
// // to delete elems
// hobbies.splice(1, 1, "build");
// console.log(hobbies);
// hobbies.splice(0, 2);
// console.log(hobbies);

// //delete elems from the right
// hobbies.splice(-2, 1);
// console.log(hobbies);

// copying an array
// const testResult = [1, 2.3, { name: "nate" }, 6, 5, 0];

// const strdResult = testResult.slice(0, 3);

// testResult.push(99);

// console.log(testResult, strdResult);

// const num = [1, 2, 3, 4, 5, 6];

// const morenum = num.slice(2);
// console.log(morenum);

// const lessnum = num.slice(-3, -2);
// console.log(lessnum);

//const manuel = personData.find((person, idx, persons) => {
//   return person.name === 'Manuel';
// });

// manuel.name = 'Anna';

// console.log(manuel, personData);

// const maxIndex = personData.findIndex((person, idx, persons) => {
//   return person.name === 'Max';
// });

// console.log(maxIndex);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for (const price of prices) {
// //   taxAdjustedPrices.push(price * (1 + tax));
// // }

// prices.forEach((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//   taxAdjustedPrices.push(priceObj);
//});

// console.log(taxAdjustedPrices);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;

// const taxAdjustedPrices = prices.map((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//   return priceObj;
// });

// // console.log(prices, taxAdjustedPrices);

// const sortedPrices = prices.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else if (a === b) {
//     return 0;
//   } else {
//     return 1;
//   }
// });
// // console.log(sortedPrices.reverse());
// console.log(sortedPrices);

// filter returns brand new array i.e boolean that meets the condition fed into the function e.g
//const prices = [10.99, 5.99, 3.99, 6.59];
// const filteredArray = prices.filter((price, index, prices) => {
//   // index and prices args are rarely used
//   return price < 6;
// });
// console.log(filteredArray);

// let total = 0;
// prices.forEach((price) => {
//   total = price + total;
// });
// console.log(total);
// //const prices = [10.99, 5.99, 3.99, 6.59];
// // reduce iterates over each elem in the array and executes the fn passed to it
// const sum = prices.reduce((prevValue, currValue, currIndex, prices) => {
//   return prevValue + currValue;
// }, 0);

// const sumz = prices.reduce((prevValue, currValue) => prevValue + currValue, 0);

// console.log(sum);
// //console.log(sumz);

//split method splits a string into individual elems to an array
// const data = "newyork;88;people";
// const transformData = data.split(";");
// console.log(transformData);

// //join joins elems into one long name
// const nameFragment = ["Max", "Miller"];
// const named = nameFragment.join(" ");
// console.log(named);

// // pulls out elems from an array
// const copiedNF = [...nameFragment];
// console.log(copiedNF);

// console.log(Math.min(...prices));

// // reference types work with addresses and memory e.g
// const people = [
//   { word: "Max", age: 23 },
//   { word: "Ema", age: 25 },
// ];
// const copiedPeople = [...people];

// people.push({ word: "Ana", age: 27 });
// people[0].age = 45;
// console.log(people, copiedPeople);

//Array destructuring
const nameData = ["Ema", "Kafeero", "Mr", 45];
const [firstName, lastName, ...otherData] = nameData;
console.log(firstName, lastName, otherData);

// const numbers = [1, 5, 3, 5, 87, 9, 11];

// const bigNumbs = numbers.filter((num) => num > 5);
// console.log(bigNumbs);

// const mapNum = numbers.map((item) => {
//   const numObj = { num: item };
//   return numObj;
// });
// console.log(mapNum);

// const redNum = numbers.reduce((prevNum, currNum) => {
//   return prevNum * currNum;
// }, 1);
// console.log(redNum);

// const findMax = () => {
//   // const [big, small] = numbers
//   const big = Math.max(...numbers);
//   //   return [big];
//   const small = Math.min(...numbers);
//   return [big, small];
// };

// console.log(findMax());

const numbers = [1, -22, 100, 4, 5, 6];

const numsGreater5 = numbers.filter((val) => val > 5);
console.log(numsGreater5);

const mappedNumbers = numbers.map((val) => ({ num: val }));
console.log(mappedNumbers);

const multiplication = numbers.reduce(
  (curResult, curValue) => curResult * curValue,
  1
);
console.log(multiplication);

function findMax(...nums) {
  let curMax = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
  }
  return curMax;
}

console.log(findMax(...numbers));

function findMinMax(...nums) {
  let curMax = nums[0];
  let curMin = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
    if (num < curMin) {
      curMin = num;
    }
  }
  return [curMin, curMax];
}

const [min, max] = findMinMax(...numbers);

console.log(min, max);

// set is a data structure for ensuring uniqueness, the second -5 would be ignored
const userIds = new Set();
userIds.add(10);
userIds.add(-5);
userIds.add(-5);

console.log(userIds);
