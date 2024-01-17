"use strict";
let buttonSum = document.querySelector("#button");
let input1Sum = document.querySelector("#input1");
let input2Sum = document.querySelector("#input2");
function somarNumeros(input1Sum, input2Sum, devPrintar, frase) {
    return input1Sum + input2Sum;
}
let devPrintar = true;
let frase = 'O valor é: ';
if (buttonSum) {
    buttonSum.addEventListener('click', () => {
        if (input1Sum && input2Sum) {
            console.log(somarNumeros(Number(input1Sum.value), Number(input2Sum.value), devPrintar, frase));
        }
    });
}
