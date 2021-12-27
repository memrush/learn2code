let dataBase = {
    'player': {'score': 0},
    'dealer': {'score': 1},
}

const player = dataBase['player'];
let score = player['score'];


document.querySelector('#hit').addEventListener('click', hit);

function trackScore() {
    let num = (function () { return Math.floor(Math.random() * 32);}) ();
    console.log(num);
    return score += num;
}

function hit() {
    console.log(trackScore());
}



