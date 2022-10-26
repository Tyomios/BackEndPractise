const os = require("os");
const greeting = require("./greeting");
var userName = os.userInfo().username;
console.log(`���� �������: ${greeting.date}`);
console.log(greeting.getMessage(userName));
//# sourceMappingURL=os.js.map