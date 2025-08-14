 let userScore=0;
 let compScore=0;

 const choices=document.querySelectorAll(".choice");
 const msg=document.querySelector("#msg");
 const user=document.querySelector("#user-score");
 const comp=document.querySelector("#comp-score");

 let countU=0;
 let countC=0;

const genCompChoice =() => {
    const option=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];
}

 const drawGame=()=>{
    // console.log("Game Draw");
    msg.innerText="Game Draw. Paly Again"
    msg.style.backgroundColor="#081b31";
}

const showWinner = (userWin,userChoice,compChoice) =>{
    if (userWin){
        // console.log(" You Win");
        msg.innerText=`You win your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        countU++;
        user.innerText = `${countU}`;
    }
    else{
        // console.log("You Lose");
        msg.innerText= `You lose ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        countC++;
        comp.innerText=`${countC}`;
    }
}

 const playGame=(userChoice)=>{
    console.log("User choice= ",userChoice);
    const compChoice=genCompChoice();
    console.log("Comp choice= ",compChoice);
    
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper" ? false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors"? false:true;
        }
        else{
            userWin=compChoice==="rock"? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

 }

 choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
 })