const os = require("os");
const greeting = require("./greeting");

var userName = os.userInfo().username;
console.log(`Дата запроса: ${greeting.date}`);
console.log(greeting.getMessage(userName));