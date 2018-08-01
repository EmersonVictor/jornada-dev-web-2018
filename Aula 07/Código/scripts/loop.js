var musics = [
    'Cry Baby',
    'Listen',
    'Bare',
    'My song'
];

// FOR Loop
for (var i = 0; i < musics.length; i++) {
    console.log(musics[i]);
}

for (var i = 0; i <= musics.length - 1; i++) {
    console.log(musics[i]);
}

for (var i = 0; i < 10; i++) {
    console.log(i);
}

for (var music of musics) {
    console.log(music)
}

// WHILE Loop
var i = 10;
while (i > 0) {
    console.log(i);
    i--; // i = i - 1
}

var nomeDeQuatroLetras = ''
while (nomeDeQuatroLetras.length <= 4) {
    nomeDeQuatroLetras += 'a'
}
console.log(nomeDeQuatroLetras)

var number = prompt('Digite um número:');
number = Number(number);

// while (isNaN(number)) {
//     number = prompt('Você digitou uma letra, digite um número:')
//     number = Number(number);
// }