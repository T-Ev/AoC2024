//TJ Evarts
//12/1/24
//Basic Approach
// Elapsed: 1.345ms
// Final Answer: 27732508

import { prompt } from "./prompt.js";
function getNumbers() {
  let l = prompt.split("\n");
  let x = [[], []];
  l.forEach((o, i) => {
    [x[0][i], x[1][i]] = o.split("   ");
  });
  return x;
}
function sortNumbers([a, b]) {
  return [a.sort((x, y) => parseInt(x) - parseInt(y)), b.sort((x, y) => parseInt(x) - parseInt(y))];
}
function compareNumbers([a, b]) {
  let acc = 0;
  a.forEach((o, i) => {
    acc += Math.abs(o - b[i]);
  });
  return acc;
}
console.time("Elapsed");
let s = compareNumbers(sortNumbers(getNumbers()));
console.timeEnd("Elapsed");
console.log("Final Answer:", s);

//Alternate Technique: add all the numbers then subtract the results (DOESN'T WORK BUT I DONT KNOW WHY?)

function addNumbers([a, b]) {
  return [a.reduce((acc, o) => acc + parseInt(o), 0), b.reduce((acc, o) => acc + parseInt(o), 0)];
}
function subtractNumbers([totalA, totalB]) {
  return Math.abs(totalA - totalB);
}
let l = subtractNumbers(addNumbers(getNumbers()));
console.log("Alternate Approach:", l);
