// COMO CRIAR UMA FUNÇÃO?
// function name(parameters){
//     statements
// }


// Função de soma
function sum(number1, number2) {
    return number1 + number2;
};

// Função para pegar número do usuário
function getNumber() {
    var input = prompt("Digite um número");
    input = Number(input);

    while (isNaN(input)) {
        input = Number(prompt("Caractere invalido, digite um número:"));
    };

    return input;
};

// Printar números de 0 a X
function printNumber(x) {
    for (var i = 0; i <= x; i++) {
        console.log(i);
    };
};

function printNumber() {
    for (var i = 0; i <= 10; i++) {
        console.log(i);
    };
};

newFunction(5) 

/* 
Quando criamos uma função só estamos dizendo que ela existe, ela não vai ser executada
Para ela ser executada precisamos chamar ela
*/

var sum = sum(1, 4); // 5
var getNumber = getNumber();
printNumber(10);
var bool = isNaN("1"); // false

/* 
Uma função pode ainda retornar alguma coisa, ou seja, devolver algum valor que foi gerado dentro dela
Como visto nos exemplos anteriores isso é feito com o uso do ** return **.

Toda função em JavaScript devolve ** undefined ** caso não seja especificado
*/
function test() {
    return true;
};

/*
As variáveis definidas no interior de uma função não podem ser acessadas de nenhum lugar fora da função, 
porque a variável está definida apenas no escopo da função. No entanto, uma função pode acessar todas 
variáveis e funções definida fora do escopo onde ela está definida. 

Em outras palavras, a função definida no escopo global pode acessar todas as variáveis definidas no 
escopo global. A função definida dentro de outra função também pode acessar todas as variáveis 
definidas na função hospedeira e outras variáveis ao qual a função hospedeira tem acesso.
*/


function myFunction(escopo) {
    console.log(escopo)
}

var escopo = 10
myFunction(5)

// FUNÇÕES EM OBJETOS
var person = {
    speak: function() {
        alert("Olá");
    },
}

person.speak()

function createPerson(naame, ge) {
    return {
        name: name,
        age: age,
    };
};

var carta1 = {
    imagem: "y"
}

var carta2 = {
    imagem: "x"
}

var pedro = createPerson('Pedro', 29);
var leticia = createPerson('Letícia', 20);