let playerHealth = 5
let enemyHealth = 5
let countDown = 5
let countUp = 1
let result = 'An evil knight blocks your path. He challenges you to a game of Rock Paper Scissors. beat him and you may pass.'

// displays each round
const round = document.querySelector('#count-up')
round.textContent = 'LV:' + countDown

// displays player health
const hp = document.querySelector('#hp')
hp.textContent = 'HP:' + playerHealth

const mp = document.querySelector('#count-down')
mp.textContent = 'MP:' + countUp

// creates text window
const text = document.querySelector('#text')
text.textContent = result

// plays background music after a button is pressed
function playMusic() {
    const music = document.querySelector("#main-music")
    music.play()
    music.loop = true;
}
start = document.querySelector("button").addEventListener("click", playMusic)

// returns rock paper or scissors
function getEnemyAttack(){
    let choice
    choice = Math.floor(Math.random() * 3)

    switch(choice) {
        case 0:
            return "rock"
            break
        case 1:
            return "paper"
            break
        case 2:
            return "scissors"
            break
    }
}

// plays one round
function playRound(playerAttack){
    let enemyAttack = getEnemyAttack()

    if ((enemyAttack == 'rock' && playerAttack == 'paper') || (enemyAttack == 'paper' && playerAttack == 'scissors') || (enemyAttack = 'scissors' && playerAttack == 'rock')) {
        result = 'The power of your ' + playerAttack + ' overcomes the evil knight\'s ' + enemyAttack + '.'
        enemyHealth -= 1
        countDown -= 1
        countUp += 1
    }
}



