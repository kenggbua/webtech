function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log ("BlockScope i = ", i);
    };
    console.log("Function scope i = ", i);
    return i; };
const check = checkScope();
console.log(check);
