const params = new URLSearchParams(window.location.search);

if (!params.has('result')) {
    window.location.replace('startpage.html')
}

document.getElementById('result').innerHTML = "You " + params.get('result') + "!";
if (params.has('answer')) {
    document.getElementById('answer').style.display = 'block';
    document.getElementById('answer').innerHTML = `The word was <q><strong>${params.get("answer")}</strong></q>`
}

function newGame() {
    window.location.replace('startpage.html')
}
