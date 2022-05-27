function clickMode(){
    document.querySelector('.mode-container').style.background = 'red';
}

function startGame() {
    window.location.href = ('gamepage.html?category=' + ['animals','technology','country','fruits','sports'][document.getElementById('chooseCategory').selectedIndex])
}
