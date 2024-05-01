"use strict";
//local variable scope
function scopeloc() {
    let message = "Hello";
    alert(message);
}
scopeloc(); //hello
//alert(message); uncaught reference error
//------------------------------
//outer variable scope
let message = "Hello";
function scopeglo() {
    alert(message);
    message = "hello again";
}
scopeglo();
alert(message); //hello again
//--------------------------------
//outter scope but not overriding the function
let mess = "Hello";
function scopeglob() {
    let mess = "Hello From Function";
    alert(mess); //hello from function
}
scopeglob();
alert(mess); //hello no change here
//# sourceMappingURL=scope.js.map