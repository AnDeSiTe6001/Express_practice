const names = require("./4-names");
const sayHi = require("./5-util");
const data = require("./6-moduleExportAlt");

console.log(names);

sayHi("susan");
sayHi(names.James);
sayHi(names.John);
sayHi(data.singlePerson.name);
