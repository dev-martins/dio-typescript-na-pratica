"use strict";
function somarValores(number1, number2) {
    if (typeof number1 === 'string' || typeof number2 === 'string') {
        return number1.toString() + number2.toString();
    }
    return number1 + number2;
}
