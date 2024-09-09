const { readFile, writeFile } = require("fs");
console.log("start!");
readFile("./content/first.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  //console.log(data);

  const first = data;
  readFile("./content/second.txt", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = data;
    writeFile(
      "./content/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err, data) => {
        if (err) {
          console.log(err);
        }
        console.log("done with this task.");
      }
    );
  });
});
console.log("move on to the next one.");

/*
不會按照由上而下等他做完才跑下面的
若中間async的部分要跑很久
則可以省下時間因為不用等上述區塊跑完才繼續執行
*/
