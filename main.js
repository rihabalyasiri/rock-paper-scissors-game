let roundsOpt = document.querySelector('.rounds-options');
let roundsResult = document.querySelector('.rounds-result')
let moveOpt = document.querySelector('.icon-block');
let roundsMin = document.querySelector('#rounds-min')
let roundsMax = document.querySelector('#rounds-max')
let userResult = document.getElementById('user-result')
let computerResult = document.getElementById('computer-result')
let rounds = 0;
let userScore = 0;
let computerScore = 0;


let playObject = {
    rounds: 0,
    moves: [document.querySelector('.fa-hand-rock'), document.querySelector('.fa-hand-paper'), document.querySelector('.fa-hand-scissors')]
}


// to get the numbers of rounds
roundsOpt.addEventListener('click', function (e) {
    playObject.rounds = Number(e.target.defaultValue);
});

// to select the move of the hand for the user
moveOpt.addEventListener('click', function (e) {
    let icon = e.target;
    function winner() {
        icon.classList.remove('win')
    }

    function lose() {
        icon.classList.remove('lose')
    }

    function equal() {
        icon.classList.remove('equal')
    }
    rounds++
    if (rounds <= playObject.rounds) {
        roundsOpt.style.display = "none";
        roundsResult.style.opacity = "1"
        roundsMin.innerHTML = rounds;
        roundsMax.innerHTML = " / " + playObject.rounds;
        let gameHeading = document.querySelector('.game-heading');

        playObject.userMove = e.target.className;
        playObject.computerMove = randomSelect().className
        console.log(playObject)

        if (playObject.userMove === "far fa-hand-rock" && playObject.computerMove === "far fa-hand-rock") {
            gameHeading.innerHTML = "It was a draw, both choose Rock"
            icon.classList.add('equal')
            setTimeout(equal, 1000)

        }
        if (playObject.userMove === "far fa-hand-rock" && playObject.computerMove === "far fa-hand-paper") {
            gameHeading.innerHTML = "computer: Paper beats user: Rock"
            computerScore++;
            icon.classList.add('lose')
            setTimeout(lose, 1000)

        }
        if (playObject.userMove === "far fa-hand-rock" && playObject.computerMove === "far fa-hand-scissors") {
            gameHeading.innerHTML = "user: Rock beats computer: Scissors"
            userScore++;
            icon.classList.add('win')
            setTimeout(winner, 1000)

        }
        if (playObject.userMove === "far fa-hand-paper" && playObject.computerMove === "far fa-hand-rock") {
            gameHeading.innerHTML = "user: Paper beats computer: Rock"
            userScore++;
            icon.classList.add('win')
            setTimeout(winner, 1000)

        }
        if (playObject.userMove === "far fa-hand-paper" && playObject.computerMove === "far fa-hand-paper") {
            gameHeading.innerHTML = "It was a draw, both choose Paper"
            icon.classList.add('equal')
            setTimeout(equal, 1000)

        }
        if (playObject.userMove === "far fa-hand-paper" && playObject.computerMove === "far fa-hand-scissors") {
            gameHeading.innerHTML = "computer: Scissors beats user: Paper"
            computerScore++;
            icon.classList.add('lose')
            setTimeout(lose, 1000)

        }
        if (playObject.userMove === "far fa-hand-scissors" && playObject.computerMove === "far fa-hand-rock") {
            gameHeading.innerHTML = "computer: Rock beats user: Scissors"
            computerScore++;
            icon.classList.add('lose')
            setTimeout(lose, 1000)

        }
        if (playObject.userMove === "far fa-hand-scissors" && playObject.computerMove === "far fa-hand-paper") {
            gameHeading.innerHTML = "user: Scissors beats computer: Paper"
            userScore++;
            icon.classList.add('win')
            setTimeout(winner, 1000)

        }
        if (playObject.userMove === "far fa-hand-scissors" && playObject.computerMove === "far fa-hand-scissors") {
            gameHeading.innerHTML = "It was a draw, both choose Scissors"
            icon.classList.add('equal')
            setTimeout(equal, 1000)

        }
        // showing the result on the result board
        userResult.innerHTML = userScore;
        computerResult.innerHTML = computerScore;

        // checking who is the winner
        if (rounds === playObject.rounds) {
            if (userScore > computerScore) {
                gameHeading.innerHTML = "User is the winner"
            } else {
                gameHeading.innerHTML = "computer is the winner"
            }
        }

    }

})

// make random select of the hands moves for the computer
function randomSelect() {
    return playObject.moves[parseInt(Math.random() * 3)]
}

// restart btn
let btn = document.getElementById('btn');
btn.addEventListener('click', function () {
    window.location.reload()
});





