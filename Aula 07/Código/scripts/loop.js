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
    i -= 1
}