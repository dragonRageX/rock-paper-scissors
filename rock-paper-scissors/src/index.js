let userChoiceDisplay = document.querySelector("#user-choice");
let computersChoiceDisplay = document.querySelector("#computer-choice");
let resultDisplay = document.querySelector("#result");
let buttonChoices = document.querySelectorAll("button");

let userChoice;
buttonChoices.forEach(button => button.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputersChoice();
}))

let computerChoice;
function generateComputersChoice()
{
    let randomNumber = Math.ceil(Math.random() * buttonChoices.length);
    if(randomNumber === 1)
    {
        computerChoice = "rock";
    }
    else if(randomNumber === 2)
    {
        computerChoice = "paper";
    }
    else if(randomNumber === 3)
    {
        computerChoice = "scissors";
    }
    computersChoiceDisplay.innerHTML = computerChoice;
    getResult();
}

function getResult()
{
    if(userChoice == computerChoice)
    {
        resultDisplay.innerHTML = "It's a Draw!";
    }
    else if(userChoice == "rock" && computerChoice == "paper")
    {
        resultDisplay.innerHTML = "You Lose!";
    }
    else if(userChoice == "rock" && computerChoice == "scissors")
    {
        resultDisplay.innerHTML = "You Win!";
    }
    else if(userChoice == "paper" && computerChoice == "scissors")
    {
        resultDisplay.innerHTML = "You Lose!";
    }
    else if(userChoice == "paper" && computerChoice == "rock")
    {
        resultDisplay.innerHTML = "You Win!";
    }
    else if(userChoice == "scissors" && computerChoice == "rock")
    {
        resultDisplay.innerHTML = "You Lose!";
    }
    else if(userChoice == "scissors" && computerChoice == "paper")
    {
        resultDisplay.innerHTML = "You Win!";
    }
}
