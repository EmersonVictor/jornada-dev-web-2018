// SELECIONAR ELEMENTOS 
// Selecionar elemento pela ID
var idElement = document.getElementById('home');

// Selectionar elemento pela classe
var classElement = document.getElementsByClassName('input-name');

// Selecionar elemento pela tag
var tagElement = document.getElementsByTagName('p');

// Nova versão
var querySelector1 = document.querySelector('#home');
var querySelector2 = document.querySelector('.input-name'); // Primeira tag com a class .input-name
var querySelector2 = document.querySelectorAll('.input-name'); // Todos as tags com class .input-name
var querySelector3 = document.querySelector('p');

// EVENTOS
/* Quando se clica no botão, o navegador emite o que é conhecido como evento. 
Saber que algo aconteceu é apenas uma parte da equação, reagir a isso é a 
outra parte e, em algum lugar do site, é preciso que haja algum código que 
esteja escutando ativamente este evento. Quando o evento de clique é emitido 
pelo navegador, o código fica escutando para verificar se esse evento é executado.

A primeira coisa é aprender a escutar a eventos que são disparados. 
Como mencionado anteriormente, quase tudo que é feito dentro de um site
resulta em um evento sendo disparado. 

Às vezes, o site dispara eventos automaticamente, como quando a página é carregada; 
às vezes, o aplicativo dispara eventos como uma reação a interações. */
var title = document.querySelector("h1");

title.addEventListener('click', function () {
    console.log("Olha esse título:" + title.innerHTML);
    title.innerHTML = "NOVO TÍTULO";
});

// tag.addEventListener('evento', função, true/false)

// https://developer.mozilla.org/en-US/docs/Web/Events



// Event Bubbling and Event Capturing
/*
Existem duas maneiras de propagar um evento: bubbling e captuing

A propagação é a forma como é definido a ordem quem os eventos ocorrem. Por exemplo:
<div>
    <p> CLICK ME! </p>
</div>

Se ocorrer um click ocorre a propagação bubbling, que vai do mais interno ao mais externo
p >>>> div

O default é true ou seja (bubbling), já se o valor for false a propagação ocorre de fora para dentro
div >>>>> p
*/

var inside = document.querySelector(".inside-p");
var outside = document.querySelector(".outside-div");

inside.addEventListener("click", function() {
    preventDefault()
    console.log("Dentro");
}, false);

outside.addEventListener("click", function () {
    console.log("Fora");
});