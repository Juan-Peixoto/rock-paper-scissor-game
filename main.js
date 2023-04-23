const playerOptions = document.getElementsByName('player');
const opponentOptions = document.getElementsByName('opponent');

startGame();


function startGame()
{
    let playerChoice = "";
    let opponentChoice = "";

    playerOptions.forEach(option => {
        option.addEventListener('click', playerPlay);
    });

    return console.log('Game running!');;
}


function playerPlay(evt)
{
    for(let i = 0; i < playerOptions.length; i++)
    {
        if(playerOptions[i] === evt.target)
        {
            playerOptions[i].classList.add('selected')
            playerChoice = playerOptions[i].id;
        }
        else
        {
            playerOptions[i].classList.add('hidden')
        }
    }

    return opponentPlay();
}


function opponentPlay()
{   
    let randomNum = Math.floor(Math.random() * 3);
    opponentChoice = opponentOptions[randomNum];

    for(let i = 0; i < opponentOptions.length; i++)
    {
        if(opponentOptions[i] === opponentChoice)
        {
            opponentOptions[i].classList.add('selected')
            opponentChoice = opponentOptions[i].id;
        }
        else
        {
            opponentOptions[i].classList.add('hidden')
        }
    }

    return verifyWinner(playerChoice, opponentChoice);
}


function verifyWinner(playerChoice, opponentChoice)
{
    let winner = '';
    let winnerHand = '';

    switch(playerChoice)
    {
        case 'rock':

            if(opponentChoice === 'opponent-rock')
            {
                winner = 'Draw';
            }
            else if(opponentChoice === 'opponent-paper')
            {
                winner = 'Opponent';
                winnerHand = 'paper';
            }
            else
            {
                winner = 'Player';
                winnerHand = 'rock';
            }

            break;

        case 'paper':

            if(opponentChoice === 'opponent-rock')
            {
                winner = 'Player';
                winnerHand = 'paper';
            }
            else if(opponentChoice === 'opponent-paper')
            {
                winner = 'Draw';
            }
            else
            {
                winner = 'Opponent';
                winnerHand = 'scissor';
            }

            break;

        case 'scissor':

            if(opponentChoice === 'opponent-rock')
            {
                winner = 'Opponent';
                winnerHand = 'rock';
            }
            else if(opponentChoice === 'opponent-paper')
            {
                winner = 'Player';
                winnerHand = 'scissor';
            }
            else
            {
                winner = 'Draw';
            }

            break;
    }

    return showWinner(winner, winnerHand);
}


function showWinner(winner, winnerHand)
{
    const label = document.getElementById('winner-label');
    const winnerHandBox = document.getElementById('winner-hand');
    const playerWins = document.getElementById('player-wins');
    const opponentWins = document.getElementById('opponent-wins');

    switch(winner)
    {
        case 'Draw':
            winnerHandBox.style.display = 'none';
            return label.innerHTML = "It's a Draw!";

        case 'Player':
            winnerHandBox.setAttribute('src', `./images/${winnerHand}.png`);
            return label.innerHTML = "Player won the game!";

        case 'Opponent':
            winnerHandBox.setAttribute('src', `./images/${winnerHand}.png`);
            return label.innerHTML = "Opponent won the game!";
    }

    //count and show number of wins of both
}


function restartGame()
{   
    // ask for play again
    //  if yes
    //      sum and interates the total of wins of the winner
    //      show it in the botton
    //      then restart the game
    //  else
    //      restart the game

    return null;
}