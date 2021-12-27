// challenge 1

function ageInDays() {
    // general calculation
    const currentYear = 2021;
    const days = 365;
    var birthYear = prompt('What year were you born?');
    var yearInDays = (currentYear - birthYear) * days;
    // create html element and append child inside section
    var h2 = document.createElement('h2');
    var Answer = document.createTextNode('You are ' + yearInDays + ' days old.');
    h2.setAttribute('id', 'h2-answer');
    h2.appendChild(Answer);
    document.getElementById('ch1-sec').appendChild(h2);
}

function reset() {
    document.getElementById('h2-answer').remove();
}

// challenge 2

function generateCat() {
    var div = document.createElement('div');
    div.setAttribute('id', 'cat-container');
    document.getElementById('ch2-sec').appendChild(div);
    var image = document.createElement('img');
    image.src = 'images/cat.gif';
    image.setAttribute('class', 'cat');
    image.setAttribute('width', '100px');
    image.setAttribute('height', '100px');
    document.getElementById('cat-container').appendChild(image);
}

function Delete() {
    document.getElementById('cat-container').remove();
}

// challenge 3

function rpsMain(playerChoice) {
    var humanChoice = playerChoice.id;
    var botChoice = numConvertSelection();
    var results = rpsDatabase(humanChoice, botChoice);
    // console.log(humanChoice);
    // console.log(botChoice); 
    // console.log(results);
    var message = decideWinner(results);
    newMessage(message);
}

function rpsRand() {
    return Math.floor(Math.random() * 3);
}

function numConvertSelection() {
    var rpsRandNum = rpsRand();
    const selections = ['rock', 'paper', 'scissors'];
    var compChoice = selections[rpsRandNum];
    return compChoice;
}

function rpsDatabase(humanChoice, botChoice) {
    
    const rpsData = {
        'rock': {'scissors': 3, 'rock': 2, 'paper': 1},
        'paper': {'rock': 3, 'paper': 2, 'scissors': 1},
        'scissors': {'paper': 3, 'scissors': 2, 'rock': 1},
        }

     var result1 = rpsData[humanChoice][botChoice];
     var result2 = rpsData[botChoice][humanChoice];
     var finalResult = [result1, result2];
     return finalResult;
}

function decideWinner(results) {
    if (results[0] == results[1]) {
        return 'tie';
    }

    else if (results[0] > results[1]) {
        return 'win';
    }
    else {
        return 'lost';
    }
}

function newMessage(message) {
    document.getElementById('rps-container').remove();
    var div = document.createElement('div');
    div.setAttribute('id', 'result-container');
    document.getElementById('ch3-sec').appendChild(div);
    // console.log(message);
    switch (message) {
        case 'tie':
            var h2 = document.createElement('h2');
            var textResult = document.createTextNode('You Tied!');
            h2.setAttribute('id', 'result-tie');
            h2.setAttribute('class', 'result');
            h2.appendChild(textResult);
            document.getElementById('result-container').appendChild(h2);
            break;
        case 'win':
            var h2 = document.createElement('h2');
            var textResult = document.createTextNode('You Won!');
            h2.setAttribute('id', 'result-player');
            h2.setAttribute('class', 'result');
            h2.appendChild(textResult);
            document.getElementById('result-container').appendChild(h2);
            break;
        case 'lost':
            var h2 = document.createElement('h2');
            var textResult = document.createTextNode('Bot Won!');
            h2.setAttribute('id', 'result-bot');
            h2.setAttribute('class', 'result');
            h2.appendChild(textResult);
            document.getElementById('result-container').appendChild(h2);
    }
}

// challenge 4

function colorSelection() {
    var x = document.getElementById('dropdown-menu');
    var option = x.value;
    changeColor(option);
}

function changeColor(x) {
    var num = parseInt(x);
    switch (num) {
            case 1:
            var totalButtons = document.getElementsByTagName('button');
            let buttonCount = totalButtons.length;
            const colors = ['red', 'blue', 'orange', 'green'];
            for (let i = 0; i < buttonCount; i++) {
            let x = Math.floor(Math.random() * 4);
            totalButtons[i].classList.add(colors[x]);
        }
            
            break;
        case 2:
            var style = document.createElement('style');
            style.innerHTML = `button {
                background-color: red !important;
            }`;
            document.head.appendChild(style);
            break;
        case 3:
            var style = document.createElement('style');
            style.innerHTML = `button {
                background-color: green !important;
            }`;
            document.head.appendChild(style);
            break;
        case 4:
            var element = document.getElementsByTagName("style"), index;
            for (index = element.length - 1; index >= 0; index--) {
                document.head.removeChild(element[index]);
            }

            break; 
        }
    }














