function checkScope() {
    "use strict";
    if (true) {
        var i = "block scope";
        console.log("BlockScope i = ", i);
    };
    console.log("FunctionScope i = ", i);
    return i; };
const check = checkScope();
console.log(check);