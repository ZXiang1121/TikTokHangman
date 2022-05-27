const categories = {
    "animals": ["Cat", "Lion", "Fish", "Crocodile", "Fox", "Goat", "Goose", "Gorilla", "Grasshopper", "Elephant", "Rhinoceros", "Chameleon", "Hippopotamus", "Tiger", "Dolphin", "Chicken", "Spider", "Deer", "Horse", "Koala", "Frog", "Mouse", "Owl", "Octopus", "Wolf", "Butterfly", "Jackal"],
    "technology": ["Internet", "Computer", "Blockchain", "Cybersecurity", "Cryptocurrency", "Telephone", "Networking"],
    "country": ["Singapore", "Malaysia", "Vietnam", "China", "Greece", "France", "Mexico", "Spain", "Ireland", "Japan", "India", "Australia", "Fiji", "Ethiopia"],
    "fruits": ["Watermelon", "Banana", "Durian", "Mango" ,"Cranberry", "Blueberry", "Pomegranate", "Orange", "Grapefruit", "Grapes", "Coconut" , "Persimmon"],
    "sports": ["Rugby", "Football", "Swimming", "Fencing", "Basketball", "Golf", "Hockey", "Gymnastics" , "Skating", "Archery", "Netball", "Baseball", "Softball", "Cricket", "Tennis"],
}

let answer = randomWord();
let maxWrong = 7;
let mistakes = 1;
let guessed = [];


function randomWord() {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category") || 'animals';
    return categories[category][Math.floor(Math.random() * categories[category].length)].toUpperCase();
}

function handleGuess(chosenLetter){
    
    // if (guessed.indexOf(chosenLetter) === -1) {
    //     guessed.push(chosenLetter);
    //     mistakes++;
    // }

    document.getElementById(`letter_${chosenLetter}`).setAttribute('disabled', true);

    if (answer.indexOf(chosenLetter.toUpperCase()) >= 0) {
        
        if (guessed.indexOf(chosenLetter) === -1) {
            guessed.push(chosenLetter);
        }


       const wordStatus = guessedWord();
        if (wordStatus === answer) { // game over, winner
            window.location.replace("endpage.html?result=won");
        }
        
    } else if (answer.indexOf(chosenLetter) === -1) {
        
        if (guessed.indexOf(chosenLetter) === -1) {
            guessed.push(chosenLetter);
            mistakes++;
        }

        document.getElementById('tries-remaining').innerHTML = maxWrong - mistakes;
        
        if (mistakes === maxWrong) { // game over, loser
            window.location.replace("endpage.html?result=lost&answer=" + answer);
      }    
        // update hangman picture
        document.getElementById('hangman-image').src = './Images/Hangman/hangman' + mistakes + '.png';
     }
}

function guessedWord(){
    const wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : "_")).join('');
    document.querySelector('.word-to-guess-container').innerHTML = wordStatus;
    return wordStatus;
}

guessedWord();

window.addEventListener("keydown", e => {
    handleGuess(e.key.toUpperCase());
})

document.getElementById('input-box').addEventListener('input', e => {
    handleGuess(e.target.value[e.target.value.length-1].toUpperCase());
})
