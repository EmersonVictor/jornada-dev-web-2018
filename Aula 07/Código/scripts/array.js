// COMO CRIAR UM ARRAY?
var musics = [
    'Cry Baby',
    'Listen',
    'Bare',
    'My song'
];

// FUNÇÕES DE ARRAY

// Pegar um elemnto do array
var melaineMartinez = musics[0];  // 'Cry Baby'

// Ver o tamanho do array
var qntdMusics = musics.length; // 4

// Ordenar o array
var orderedMusics = musics.sort(); // ['Bare', 'Cry Baby', 'Listen', 'My song']
musics.sort(function(a, b) { return a.length > b.length });   // ['Bare', 'teste', 'My Song', 'Cry baby']

// Adicionar novo elemento ao array
var newQntdMusics = musics.push('Obsessed');
musics.splice(2, 0, "APESHIT", "Solo");

// Remover elemento do array
var musicRemovedEnd = musics.pop(); // Remove último elemento
var musicRemovedStart = musics.shift(); // Remove primeiro elemento
musics.splice(0, 2); // Remover 2 elementos apartir da posição que esta no primeiro parâmetro
musics.splice(2, 1);


// Saber se uma variável é um array
var isAnArray = Array.isArray(musics); // true

// Saber o index de um elemento
musics.indexOf('Bare'); // 2
musics.indexOf('She loves control'); // -1

// Concatenar array
var myMusic = musics.concat([ 'Girls Girls', 'Boys' ]);

// Criar um pedaço de um array a partir de outro
var newMusics = musics.slice(2); // ['Bare', 'My Song']