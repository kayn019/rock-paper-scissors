
const rps = ["rock", "paper", "scissors"];
let scoreP = 0;
let scoreC = 0;
let attempts = 0;


function getComputerChoice(){
    const rand = Math.floor((Math.random()*rps.length));
    return rps[rand];
}

function round(playerSelection, computerSelection){
    //print lose or win
    console.log(playerSelection, computerSelection);
    if((playerSelection == "rock" && computerSelection == "paper") ||
       (playerSelection == "paper" && computerSelection == "scissors") ||
       (playerSelection == "scissors" && computerSelection == "rock")){
                scoreC += 1;
                return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }else if((playerSelection == "rock" && computerSelection == "scissors") ||
             (playerSelection == "paper" && computerSelection == "rock") ||
             (playerSelection == "scissors" && computerSelection == "paper")){
                scoreP += 1;
                return `You Win! ${playerSelection} beats ${computerSelection}`;
    }else{
        return "It's a tie!";
    }
}
   
function btnClick(btnClicked){
    btnClicked.addEventListener("click", function clicky(){
        if(scoreC >= 5 || scoreP >= 5){
            //Game over
        }else{
            attempts++;
            let cs = getComputerChoice();
            let resString = round(btnClicked.textContent, cs);
            showImage(btnClicked.textContent, cs);
            displayCurResult(resString);
            }
        }
    )

}

function showImage(ps, cs){
    const playImg = document.querySelector('.playerImg');
    const compImg = document.querySelector('.compImg');
    switch(ps){
            case "rock":
                playImg.style.cssText = "background-image: url(images/rock.png);"
                break;
            case "paper":
                playImg.style.cssText = "background-image: url(images/hand.png);"
                break;
            case "scissors":
                playImg.style.cssText = "background-image: url(images/scissor.png);"
                break;
            default:
                console.log("Enter rock, paper or scissors only");
    }
    switch(cs){
            case "rock":
                compImg.style.cssText = "background-image: url(images/compRock.png);"
                break;
            case "paper":
                compImg.style.cssText = "background-image: url(images/compHand.png);"
                break;
            case "scissors":
                compImg.style.cssText = "background-image: url(images/compScissor.png);"
                break;
            default:
                console.log("Enter rock, paper or scissors only");
    }
}

function displayCurResult(resString){
    const res = document.querySelector('.result');
    const stat = document.querySelector('.status');
    const att = document.querySelector('.attempts');

    att.textContent = "Attempts: " + attempts;
    res.textContent = resString;     
    stat.textContent = "Player: " + scoreP + " | Computer: " + scoreC ;

    if(scoreC >= 5 || scoreP >= 5){
            
            const fin = document.querySelector('.final');
            
            if(scoreP > scoreC){
                    fin.textContent = "YOU WIN THIS MATCH!!!";
            }else{
                    fin.textContent = "YOU LOSE THIS MATCH!!!";
            }
            
        }

}

//playGame();
const btn = document.querySelectorAll('button');
const btnRematch = document.querySelector('.btnRematch');

btn.forEach((item) =>{
        btnClick(item);             
        
});   

btnRematch.addEventListener("click",() => location.reload());


