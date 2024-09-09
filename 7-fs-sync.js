const { readFileSync, writeFileSync } = require("fs");
/*--------SAME-------
const fs = require("fs");
fs.readFileSync*/

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
console.log("start!");

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" }
);
console.log("done with this task.");
console.log("move on to the next one.");
/*
按照由上而下等他做完才跑下面的

*/
