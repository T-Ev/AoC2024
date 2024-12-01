//TJ Evarts
//12/1/24
//Dictionary Approach
//Elapsed: 1.345ms
//Final Answer: 27732508

import { prompt } from "./prompt.js";

function getNumbers() {
  let l = prompt.split("\n");
  let x = [[], []];
  l.forEach((o, i) => {
    [x[0][i], x[1][i]] = o.split("   ");
  });
  return x;
}
function createDict([a, b]) {
  let dict = {};
  b.forEach((o, i) => {
    if (!dict[o]) dict[o] = 0;
    dict[o] += 1;
  });
  return [a, dict];
}
function getScore([a, dict]) {
  let score = 0;
  a.forEach((o) => {
    if (dict[o]) score += dict[o] * parseInt(o);
  });
  return [score, dict];
}
console.time("Elapsed");
const n = getNumbers();
const [s, dict] = getScore(createDict(n));
console.timeEnd("Elapsed");
// console.log("Final Dict: ", dict);
console.log("Final Answer:", s);
