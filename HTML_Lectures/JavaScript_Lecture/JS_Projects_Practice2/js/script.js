// Challenge 1: Click Me Button

let days = 365;
let currentYear = 2021;

function ageDays() {
    var element = document.getElementById('ageDays');
    if(typeof(element) != 'undefined' && element != null) {
        document.getElementById('ageDays').remove();
        var birthYear = prompt('What year were you born?')
        var birthYear = parseInt(birthYear);
        var totalYear = currentYear - birthYear;
        var totalDays = totalYear * days;
        var h2 = document.createElement('h2')
        var textAnswer = document.createTextNode('You are ' + totalDays + ' days old.');
        h2.setAttribute('id', 'ageDays');
        h2.appendChild(textAnswer);
        document.getElementById('challenge1-result').appendChild(h2)
    }

    else {
        var birthYear = prompt('What year were you born?')
        var birthYear = parseInt(birthYear);
        var totalYear = currentYear - birthYear;
        var totalDays = totalYear * days;
        var h2 = document.createElement('h2')
        var textAnswer = document.createTextNode('You are ' + totalDays + ' days old.');
        h2.setAttribute('id', 'ageDays');
        h2.appendChild(textAnswer);
        document.getElementById('challenge1-result').appendChild(h2)
    }
}
// Challenge 1: Reset Button
function reset() {
    document.getElementById('ageDays').remove();
}

function generateCat() {
    var image = document.createElement('img');
    image.src = 'images/cats.gif';
    image.setAttribute('id', 'cat');
    image.setAttribute('alt', 'cat gif');
    document.getElementById('cat-container').appendChild(image);
}

function reset2() {
    document.getElementById("cat").remove();
}

function playerSelect(playerChoice) {
    var humanChoice = playerChoice.id;
    var humanChoice, botChoice;
    botChoice = numbToChoice(randInt()); 
    results = decideWinner(humanChoice, botChoice);
    message = finalMessage(results);
    rpsFrontEnd(humanChoice, botChoice, message);

}
function randInt() {
    return Math.floor(Math.random() * 3);  
}

function numbToChoice(number) {
    return ['rock', 'paper', 'scissor'][number]
}

function decideWinner(humanChoice, botChoice) {
    const rpsDatabase = {
        'rock': {'scissor': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissor': 0},
        'scissor': {'paper': 1, 'scissor': 0.5, 'rock': 0},
    }

    var yourScore = rpsDatabase[humanChoice][botChoice]
    var botScore = rpsDatabase[botChoice][humanChoice]

    return [yourScore, botScore];
}

function finalMessage(results) {
    
    if (results[0] == results[1]) {
    
        return message = 'tie';
    }
    else if (results[0] > results[1]) {
        
        return message = 'win';
    }
    else {
        
        return message = 'lost';
    }
}

function showResult() {
    document.getElementById('player-container').remove();
    var div = document.createElement('div');
    div.setAttribute('id', 'result-container');
    div.setAttribute('class', 'images');
    document.getElementById('challenge3').appendChild(div);
}

function rpsFrontEnd(humanChoice, botChoice, message) {
    showResult();

    switch (humanChoice) {
        case 'rock':
            var image = document.createElement('img');
            image.setAttribute('id', 'player');
            image.setAttribute('width', '100px');
            image.setAttribute('height', '100px');
            image.setAttribute('class', 'ch3image');
            image.src = 'images/rock.png';
            document.getElementById('result-container').appendChild(image);
            break;
        case 'paper':
            var image = document.createElement('img');
            image.setAttribute('id', 'player');
            image.setAttribute('width', '100px');
            image.setAttribute('height', '100px');
            image.setAttribute('class', 'ch3image');
            image.src = 'images/paper.png';
            document.getElementById('result-container').appendChild(image);
            break;
        case 'scissor':
            var image = document.createElement('img');
            image.setAttribute('id', 'player');
            image.setAttribute('width', '100px');
            image.setAttribute('height', '100px');
            image.setAttribute('class', 'ch3image');
            image.src = 'images/scissor.png';
            document.getElementById('result-container').appendChild(image);
    }

    switch (message) {
        case 'tie':
            var h3 = document.createElement('h3')
            var textArea = document.createTextNode('You Tied!');
            h3.setAttribute('id', 'finalresult-yellow');
            h3.appendChild(textArea);
            document.getElementById('result-container').appendChild(h3);
            break;
        case 'win':
            var h3 = document.createElement('h3')
            var textArea = document.createTextNode('You Win!');
            h3.setAttribute('id', 'finalresult-green');
            h3.appendChild(textArea);
            document.getElementById('result-container').appendChild(h3);
            break;
        case 'lost':
            var h3 = document.createElement('h3')
            var textArea = document.createTextNode('You Lost!');
            h3.setAttribute('id', 'finalresult-red');
            h3.appendChild(textArea);
            document.getElementById('result-container').appendChild(h3);
    }

    switch (botChoice) {
        case 'rock':
            var image = document.createElement('img');
            image.setAttribute('id', 'bot');
            image.setAttribute('width', '100px');
            image.setAttribute('height', '100px');
            image.setAttribute('class', 'ch3image');
            image.src = 'images/rock.png';
            document.getElementById('result-container').appendChild(image);
            break;
        case 'paper':
            var image = document.createElement('img');
            image.setAttribute('id', 'bot');
            image.setAttribute('width', '100px');
            image.setAttribute('height', '100px');
            image.setAttribute('class', 'ch3image');
            image.src = 'images/paper.png';
            document.getElementById('result-container').appendChild(image);
            break;
        case 'scissor':
            var image = document.createElement('img');
            image.setAttribute('id', 'bot');
            image.setAttribute('width', '100px');
            image.setAttribute('height', '100px');
            image.setAttribute('class', 'ch3image');
            image.src = 'images/scissor.png';
            document.getElementById('result-container').appendChild(image);
    }

}

function restart() {
    var element = document.getElementById('player-container');
        if (typeof(element) != 'undefined' && element != null) {
            document.getElementById('player-container').remove();
            var div = document.createElement('div')
            div.setAttribute('id', 'player-container');
            div.setAttribute('class', 'images');
            document.getElementById('challenge3').appendChild(div);
            // input images inside player-container

            // rock
            var div1 = document.createElement('div');
            div1.setAttribute('class', 'rock');
            document.getElementById('player-container').appendChild(div1);
            var image1 = document.createElement('img');
            image1.src = 'images/rock.png';
            image1.setAttribute('id', 'rock');
            image1.setAttribute('class', 'rpsimages');
            image1.setAttribute('width', '100px');
            image1.setAttribute('height', '100px');
            image1.setAttribute('onclick', 'playerSelect(this)');
            document.getElementsByClassName('rock')[0].appendChild(image1);
            // paper
            var div2 = document.createElement('div');
            div2.setAttribute('class', 'paper');
            document.getElementById('player-container').appendChild(div2);
            var image2 = document.createElement('img');
            image2.src = 'images/paper.png';
            image2.setAttribute('id', 'paper');
            image2.setAttribute('class', 'rpsimages');
            image2.setAttribute('width', '100px');
            image2.setAttribute('height', '100px');
            image2.setAttribute('onclick', 'playerSelect(this)');
            document.getElementsByClassName('paper')[0].appendChild(image2);

            // scissor
            var div3 = document.createElement('div');
            document.getElementById('player-container').appendChild(div3);
            div3.setAttribute('class', 'scissor');
            var image3 = document.createElement('img');
            image3.src = 'images/scissor.png';
            image3.setAttribute('id', 'scissor');
            image3.setAttribute('class', 'rpsimages');
            image3.setAttribute('width', '100px');
            image3.setAttribute('height', '100px');
            image3.setAttribute('onclick', 'playerSelect(this)');
            document.getElementsByClassName('scissor')[0].appendChild(image3);      
        }
        else {
            document.getElementById('result-container').remove();
            var div = document.createElement('div')
            div.setAttribute('id', 'player-container');
            div.setAttribute('class', 'images');
            document.getElementById('challenge3').appendChild(div);
            // input images inside player-container

            // rock
            var div1 = document.createElement('div');
            div1.setAttribute('class', 'rock');
            document.getElementById('player-container').appendChild(div1);
            var image1 = document.createElement('img');
            image1.src = 'images/rock.png';
            image1.setAttribute('id', 'rock');
            image1.setAttribute('class', 'rpsimages');
            image1.setAttribute('width', '100px');
            image1.setAttribute('height', '100px');
            image1.setAttribute('onclick', 'playerSelect(this)');
            document.getElementsByClassName('rock')[0].appendChild(image1);
            // paper
            var div2 = document.createElement('div');
            div2.setAttribute('class', 'paper');
            document.getElementById('player-container').appendChild(div2);
            var image2 = document.createElement('img');
            image2.src = 'images/paper.png';
            image2.setAttribute('id', 'paper');
            image2.setAttribute('class', 'rpsimages');
            image2.setAttribute('width', '100px');
            image2.setAttribute('height', '100px');
            image2.setAttribute('onclick', 'playerSelect(this)');
            document.getElementsByClassName('paper')[0].appendChild(image2);

            // scissor
            var div3 = document.createElement('div');
            document.getElementById('player-container').appendChild(div3);
            div3.setAttribute('class', 'scissor');
            var image3 = document.createElement('img');
            image3.src = 'images/scissor.png';
            image3.setAttribute('id', 'scissor');
            image3.setAttribute('class', 'rpsimages');
            image3.setAttribute('width', '100px');
            image3.setAttribute('height', '100px');
            image3.setAttribute('onclick', 'playerSelect(this)');
            document.getElementsByClassName('scissor')[0].appendChild(image3);   
        }
    
}






