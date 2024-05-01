"use strict";
function power(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result = result * base;
    }
    return result;
}
let result = power(10, 2);
console.log(result);
//# sourceMappingURL=powerfunc.js.map