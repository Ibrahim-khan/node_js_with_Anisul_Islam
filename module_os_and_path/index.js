// os, path

// const os = require("os");
// const {totalmem, freemem} = require("os");

// console.log(os.userInfo());
// console.log(os.homedir());
// console.log(os.hostname());

// console.log(os.totalmem());
// console.log(os.freemem());

// console.log(totalmem());
// console.log(freemem());


const path = require("path");

// const extensionName = path.extname("index.html");
// console.log(extensionName);

const joinName = path.join(__dirname + "/views");
// const joinName = path.join(__dirname + "/../views");
console.log(joinName);