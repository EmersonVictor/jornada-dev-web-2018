// Colocar "Hello world!" na tag h1
var title = document.querySelector('input');
title.innerHTML = 'Hello world!';

// TYPES
var number = 10;
var string = '10';
var titleContent = 'Um conteúdo';
var minhaLindaVariavel;
var myVar;
// var true = 'verdadeiro'; ERRADO
var valorNulo = null;


// CONVERSÃO DE TIPOS
var a = Boolean('');  // FALSO - false
var b = Boolean('false21') // VERDADEIRO - true
var c = Boolean(0)
var d = Boolean(1)
var e = Boolean(false)
var f = Boolean(valorNulo); // FALSE
var g = Number('3');
var h = String(38121);
var i = Number('87') + Number('13');
var j = Number(null)
console.log(j)

// EXPRESSÕES
var ola = 'olá, '; 
var olaConcat = ola + "pessoas"; // 'olá, pessoas'
var resultadoDoisStrings = 'pessoas' === 'pessoas' // true
var resultadoDoisStrings2 = 'pessoa' === 'pessoas' // false

// OPERADORES
var texto1 = "Oi, ";
var texto2 = "meu nome é";
var texto3 = " Emerson";
var apresentacao = texto1 + texto2 + texto3


// PARA MOSTRAR
// alert(1 + 3 + "texto");
// console.log("Oi, gente");

// CONDICIONAIS
var number1 = 100
var number2 = 50
var operator = "-"


// if (operator === "+") {
//     alert(number1 + number2)
// } else if (operator === "-") {
//     alert(number1 - number2)
//     if (number1 < number2) {
//         alert("O número " + number1 + " é menor que o número " + number2)
//     }
// } else {

// }


// var inputNumberOne = prompt('Digite um número:');
// alert(typeof inputNumberOne)
// alert(Number('x')) // NaN

// var a = Number('x')
// if (typeof 3 === 'number') {
//     alert("Error: IT IS A NUMBER")
// }
