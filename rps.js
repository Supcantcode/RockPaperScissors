let countUp = 1
let playerHealth = 5
let enemyHealth = 5
let countDown = 5
let result = ''

const buttons = document.querySelectorAll('button')
// display  for each round
const round = document.querySelector('#count-up')

// display for player health
const hp = document.querySelector('#hp')

// display count down
const mp = document.querySelector('#count-down')

// display for text window
const text = document.querySelector('#text')

// plays background music after a button is pressed
function playMusic() {
    const music = document.querySelector("#main-music")
    music.play()
    music.loop = true;
}
start = document.querySelector("button").addEventListener("click", playMusic)

// returns rock paper or scissors
function getEnemyAttack(){
    let choice = ''
    choice = Math.floor(Math.random() * 3)

    if (choice == 0) return 'rock'
    else if (choice == 1) return 'paper'
    else if (choice == 2) return 'scissors'
}

// plays one round
function playRound(playerAttack){
    let enemyAttack = getEnemyAttack()

    // won round
    if ((enemyAttack == 'rock' && playerAttack == 'paper') || (enemyAttack == 'paper' && playerAttack == 'scissors') || (enemyAttack == 'scissors' && playerAttack == 'rock')){
        result = 'The power of your ' + playerAttack + ' overcomes the evil knight\'s ' + enemyAttack + '.'
        enemyHealth -= 1 
        countDown -= 1
        countUp += 1
        text.textContent = result
        round.textContent = 'LV:' + countUp
        hp.textContent = 'HP:' + playerHealth
        mp.textContent = 'MP:' + countDown   
        gameOver()    
    }

    // lost round
    else if ((enemyAttack == 'rock' && playerAttack == 'scissors') || (enemyAttack == 'paper' && playerAttack == 'rock') || (enemyAttack == 'scissors' && playerAttack == 'paper')){
        result = 'The power of your ' + playerAttack + ' was no match for the evil knight\'s ' + enemyAttack + '.'
        playerHealth -= 1
        countDown -= 1
        countUp += 1
        text.textContent = result
        round.textContent = 'LV:' + countUp
        hp.textContent = 'HP:' + playerHealth
        mp.textContent = 'MP:' + countDown
        gameOver()
    }

    // tie
    else {
        result = 'The two ' + playerAttack + 's cancel eachother out.'
        countDown -= 1
        countUp += 1
        text.textContent = result
        round.textContent = 'LV:' + countUp
        mp.textContent = 'MP:' + countDown
        gameOver()
    }
}

// if rounds reach 0
function gameOver() {
    if (countDown <= 0){
        buttons.forEach(elem => {
            elem.disabled = true
        })
        
        if (enemyHealth > playerHealth){
            result = 'The knight wins, and soon darkness consumes the world.'
        }
        else if (enemyHealth < playerHealth){
            result = 'You defeat the knight! The world is saved!'
        }
        else {
            result = 'It\'s a tie. Try again.'
        }

        text.textContent = result
    }
}


