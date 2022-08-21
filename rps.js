var wins = 0;

function game(string){
    var computer;


    computer = Math.floor(Math.random() * 3);

    if(computer == 0 && string == 'rock')
        document.getElementById("showdown").innerHTML = 'Tie! The computer chose rock.';
    else if(computer == 1 && string == 'rock')
        document.getElementById("showdown").innerHTML = 'You Lose! The computer chose paper.';
    else if(computer == 2 && string == 'rock')
        document.getElementById("showdown").innerHTML = 'You Win! The computer chose scissors';

    else if(computer == 0 && string == 'paper')
        document.getElementById("showdown").innerHTML = 'You Win! The computer chose rock.';
    else if(computer == 1 && string == 'paper')
        document.getElementById("showdown").innerHTML = 'Tie! The computer chose paper.';
    else if(computer == 2 && string == 'paper')
        document.getElementById("showdown").innerHTML = 'You Lose! The computer chose scissors';

    else if(computer == 0 && string == 'scissors')
        document.getElementById("showdown").innerHTML = 'You Lose! The computer chose rock.';
    else if(computer == 1 && string == 'scissors')
        document.getElementById("showdown").innerHTML = 'You Win! The computer chose paper.';
    else if(computer == 2 && string == 'scissors')
        document.getElementById("showdown").innerHTML = 'Tie! The computer chose scissors';
}