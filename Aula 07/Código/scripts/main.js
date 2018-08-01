// FizzBuzz
// for (var i = 0; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz');
//     } else if (i % 3 === 0 && i % 5 !== 0) {
//         console.log('Fizz');
//     } else if (i % 5 === 0 && i % 3 !== 0) {
//         console.log('Buzz');
//     } else {
//         console.log(i)
//     }
// }

// // Sum
// // Crio a variável que vai guardar a soma
// var sum = 0;
// // Recebo o input do usuário
// var input = prompt('Digite um número:');
// input = Number(input)
// // Pergunto um número até o usuário escrever zero
// while (input !== 0) {
//     if (isNaN(input)) {
//         var input = prompt('Caractere inválido, digite um número:');
//         input = Number(input)
//     } else {
//         sum += input // sum = sum + input
//         // Pede o número de novo
//         input = prompt('Digite um número:');
//         input = Number(input)
//     } 
// }
// alert(sum);

// // É primo?
// var number = prompt('Digite um número:');
// number = Number(number);
// var isPrime = true;

// for (var num = number - 1; num > 1; num--) {
//     if (number % num === 0) {
//         isPrime = false;
//     }
// }

// if (isPrime) {
//     console.log("É primo");
// } else {
//     console.log("Não é primo");
// }

// // Tirar repetição de array
// var arrayRepeat = [1, 2, 5, 2, 7, 8, 9, 1]
// var arrayNoRepeat = []

// for(var count = 0; count < arrayRepeat.length; count++) {
//     var addNumber = arrayRepeat[count];
//     var exist = arrayNoRepeat.includes(addNumber);
//     // var x = [1,2,3]    x.includes(2)   true
//     // var x = [1,2,3]    x.includes(5)   false
   
//     if (!(exist)) {
//         arrayNoRepeat.push(addNumber)
//     }
// }

// console.log(arrayRepeat)
// console.log(arrayNoRepeat)