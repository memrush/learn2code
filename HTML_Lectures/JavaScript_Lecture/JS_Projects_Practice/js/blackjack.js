// Challenge 5

//the database

let dataBase = {
    'you': {'score': 0, 'div': '#player-cards', 'scoreSpan': '#player-score'},
    'dealer': {'score': 0, 'div': '#dealer-cards', 'scoreSpan': '#dealer-score'},
    'cards': ['1c', '1d', '1h', '1s', '2c', '2d', '2h', '2s', '3c', '3d', '3h', '3s', '4c', '4d', '4h', '4s', '5c', '5d', '5h', '5s', '6c', '6d', '6h', '6s', '7c', '7d', '7h', '7s', '8c', '8d', '8h', '8s', '9c', '9d', '9h', '9s', '10c', '10d', '10h', '10s', 'jc', 'jd', 'jh', 'js', 'qc', 'qd', 'qh', 'qs', 'kc', 'kd', 'kh', 'ks'],
    'cardMap': {'2c': 2, '2d': 2, '2h': 2, '2s': 2, '3c': 3, '3d': 3, '3h': 3, '3s': 3, '4c': 4, '4d': 4, '4h': 4, '4s': 4, '5c': 5, '5d': 5, '5h': 5, '5s': 5, '6c': 6, '6d': 6, '6h': 6, '6s': 6, '7c': 7, '7d': 7, '7h': 7, '7s': 7, '8c': 8, '8d': 8, '8h': 8, '8s': 8, '9c': 9, '9d': 9, '9h': 9, '9s': 9, '10c': 10, '10d': 10, '10h': 10, '10s': 10, 'jc': 10, 'jd': 10, 'jh': 10, 'js': 10, 'qc': 10, 'qd': 10, 'qh': 10, 'qs': 10, 'kc': 10, 'kd': 10, 'kh': 10, 'ks': 10, '1c': [1, 11], '1s': [1, 11], '1d': [1, 11], '1h': [1, 11]},
}

//button call functions on hit
document.querySelector('#hit').addEventListener('click', hitCard);

//button call functions on deal
document.querySelector('#deal').addEventListener('click', dealCard);

//button call functions on stand
document.querySelector('#stand').addEventListener('click', stand);

//mapping variables to database

const YOU = dataBase['you'];
const DEALER = dataBase['dealer'];
const CARDS = dataBase['cards'];
const CARDMAP = dataBase['cardMap'];

function hitCard() {
    let randNumber = randNum();
    let pickRandCard = CARDS[randNumber];
    let returnCardValue = CARDMAP[pickRandCard];
    scoreTrack_player(returnCardValue, pickRandCard);
    updatePlayerScore();
    showCard_player(pickRandCard);
    if (YOU['score'] > 21) {
        let scoreChart_loss = parseInt(document.querySelector('#losses').textContent);
        scoreChart_loss++;
        document.querySelector('#losses').textContent = scoreChart_loss;
    } 
}

function dealCard() {
    let index = document.querySelector('#player-cards').querySelectorAll('img');
    let dindex = document.querySelector('#dealer-cards').querySelectorAll('img');
    for (let i = 0; i < index.length; i++) {
        index[i].remove();
        document.querySelector('#player-score').textContent = 0;
        YOU['score'] = 0;
    }

    for (let i = 0; i < dindex.length; i++) {
        dindex[i].remove();
        document.querySelector('#dealer-score').textContent = 0;
        DEALER['score'] = 0;
    }

    for (let i = 0; i < 2; i++) {
        let randNumber = randNum();
        let pickRandCard = CARDS[randNumber];
        let returnCardValue = CARDMAP[pickRandCard];
        scoreTrack_player(returnCardValue, pickRandCard);
        updatePlayerScore();
        showCard_player(pickRandCard);

    }

    for (let i = 0; i < 2; i++) {
        let randNumber = randNum();
        let pickRandCard = CARDS[randNumber];
        let returnCardValue = CARDMAP[pickRandCard];
        scoreTrack_dealer(returnCardValue, pickRandCard);
        showCard_dealer(pickRandCard);
    }


}


function randNum() { 
    return Math.floor(Math.random() * 52);
}

function scoreTrack_player(x, y) {
    if (YOU['score'] <= 21) {
        if (y === '1c' || y === '1h' || y ==='1s' || y === '1d') {
            if (YOU['score'] + x[1] <= 21) {
                return YOU['score'] += x[1];
            }

            else {
                return YOU['score'] += x[0];
            }
        } else {
        return YOU['score'] += x;
        }
    } else {
        return null;
    }
}

function scoreTrack_dealer(x, y) {
    if (DEALER['score'] <= 21) {
        if (y === '1c' || y === '1h' || y ==='1s' || y === '1d') {
            if (DEALER['score'] + x[1] <= 21) {
                return DEALER['score'] += x[1];
            }

            else {
                return DEALER['score'] += x[0];
            }
        } else {
        return DEALER['score'] += x;
        }
    } else {
        return null;
    }
}

function updatePlayerScore() {
    if (YOU['score'] > 21) {
        document.querySelector('#player-score').textContent = 'BUST!';
    } else {
    document.querySelector('#player-score').textContent = YOU['score'];
    }

}

function updateDealerScore() {
    if (DEALER['score'] > 21) {
        document.querySelector('#dealer-score').textContent = 'BUST!';
    } else {
    document.querySelector('#dealer-score').textContent = DEALER['score'];
    }

}

function showCard_player(x) {
    if (YOU['score'] > 21) {
        return 0;
    } else {
    let image = document.createElement('img');
    image.src = `images/cards/${x}.png`;
    image.setAttribute('class', 'cards');
    document.querySelector('#player-cards').appendChild(image);
    }
}

function showCard_dealer(x) {
    if (DEALER['score'] > 21) {
        return 0;
    } else {
    let image = document.createElement('img');
    image.src = `images/cards/${x}.png`;
    image.setAttribute('class', 'cards');
    document.querySelector('#dealer-cards').appendChild(image);
    }
}

function stand() {
    let scoreChart_wins = parseInt(document.querySelector('#wins').textContent);
    let scoreChart_loss = parseInt(document.querySelector('#losses').textContent);
    let scoreChart_draw = parseInt(document.querySelector('#draws').textContent);
    revealCard();
    updateDealerScore();
    while (DEALER['score'] < 16) {
        hitDealer();
    }

    if (YOU['score'] <= 21 && YOU['score'] > DEALER['score']) {
        scoreChart_wins++;
        document.querySelector('#wins').textContent = scoreChart_wins;
        // if (YOU['score'] === DEALER['score']) {
        //     scoreChart_draw++;
        //     document.querySelector('#draws').textContent = scoreChart_draw;
        // }
    }  if (DEALER['score'] > 21) {
        scoreChart_wins++;
        document.querySelector('#wins').textContent = scoreChart_wins;
    } else if (YOU['score'] === DEALER['score']) {
        scoreChart_draw++;
        document.querySelector('#draws').textContent = scoreChart_draw;
    } else if (DEALER['score'] > YOU['score'] && DEALER['score'] <=21) {
        scoreChart_loss++;
        document.querySelector('#losses').textContent = scoreChart_loss;
    }

   

    // if (YOU['score'] > DEALER['score']) {
        //     scoreChart_wins++;
        //     document.querySelector('#wins').textContent = scoreChart_wins;
        // } if (YOU['score'] === DEALER['score']) {
        //     scoreChart_draw++;
        //     document.querySelector('#draws').textContent = scoreChart_draw;
        // } else {
        //     scoreChart_loss++;
        //     document.querySelector('#losses').textContent = scoreChart_loss;
        // }

    
}

function hitDealer() {
    let randNumber = randNum();
    let pickRandCard = CARDS[randNumber];
    let returnCardValue = CARDMAP[pickRandCard];
    showCard_dealer(pickRandCard);
    scoreTrack_dealer(returnCardValue, pickRandCard);
    updateDealerScore();
}

function revealCard() {
    let element = document.querySelector('#dealer-cards').querySelectorAll('img');
    element[0].style.setProperty('visibility', 'visible');
}

