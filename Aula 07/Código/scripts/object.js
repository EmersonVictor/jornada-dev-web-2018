// Criando um objeto
var player = {
    isPlaying: true,
    currentPlaying: 'Rivers of tears',
    nextSongs: ['Cry Baby', 'Listen', 'Bare', 'My song'],
    numberOfSongsInList: this.nextSongs.lenght
}

// Acessando um objeto
player.isPlaying // true
player['currentPlaying'] // 'River of tears'

// Colocando novos valores
player.isPlaying = false;
player['favorite'] = true;
player.favorite = true;

// Deletando
delete player.isPlaying;


// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes