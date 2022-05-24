
var animals =[
    "Cat",
    "Lion",
    "Fish",
    "Crocodile",
    "Fox",
    "Goat",
    "Goldfinch",
    "Goldfish",
    "Goose",
    "Gorilla",
    "Goshawk",
    "Grasshopper",
]



let answer = '';
let maxWrong = 7;
let mistakes = 0;
let guessed = [];


function randomWord() {
    answer = animals[Math.floor(Math.random() * animals.length)];

    // alert(answer);
}


function handleGuess(chosenLetter){
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled', true);
}

function guessWord(){
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

    document.querySelector('.word-to-guess-container').innerHTML = wordStatus;
}











randomWord()
guessWord()
