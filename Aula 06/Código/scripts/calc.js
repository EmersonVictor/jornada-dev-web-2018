// Variáveis
var inputNumberOne = prompt('Digite o primeiro número:');
var inputNumberTwo = prompt('Digite o segundo número:');
var operator = prompt('Digite o operador:');
var error = false;

// Transformar em número
inputNumberOne = Number(inputNumberOne);
inputNumberTwo = Number(inputNumberTwo);

if (isNaN(inputNumberOne)) {
    error = true
} 

if (isNaN(inputNumberTwo)) {
    error = true
} 

if (error === false) {
    // Calcular
    if (operator === '+') {
        alert(inputNumberOne + inputNumberTwo);
    } else if (operator === '-') {
        alert(inputNumberOne - inputNumberTwo);
    } else if (operator === '*') {
        alert(inputNumberOne * inputNumberTwo);
    } else if (operator === '/') {
        alert(inputNumberOne / inputNumberTwo);
    } else {
        alert('Operador invalido');
    }
} else {
    alert('Você tentou digitar uma letra');
}





