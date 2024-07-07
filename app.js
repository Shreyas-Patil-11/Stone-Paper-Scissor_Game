let userScore= 0;
let compScore= 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score")
const CompScorePara = document.querySelector("#comp-score");


//generate choice
const genCompChoice = () => {
    const option = ["rock", "paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];

};

const draw = () =>{
    msg.innerText = "Game Draw. Play Again!!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin , userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        CompScorePara.innerText = compScore;
        msg.innerText = `You Loose. Comp ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

//update score
const playGame=(userChoice)=> {
    //generate computer choice
    const compChoice= genCompChoice();
    if (userChoice === compChoice) {
        //draw game
        draw();
    }else{
        let userWin = true;
        if (userChoice === "rock") {
            //paper,scissor
            userWin= compChoice==="paper" ? false : true;
        }else if(userChoice ==="paper"){
            //rock,scissor
            userWin = compChoice ==="rock" ? true : false;
        }else {
            //rock,paper
            userWin =compChoice==="rock" ? false :true;
        }
        showWinner(userWin ,userChoice, compChoice);

    }
};

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.id;
        playGame(userChoice);
    });
});