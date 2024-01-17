
// criando tipos
type input = number | string

function somarValores(number1: input, number2: input) {
    if (typeof number1 === 'string' || typeof number2 === 'string') {
        return number1.toString() + number2.toString()
    }
    return number1 + number2;
}