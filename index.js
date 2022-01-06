
let answersArray = [];
let score = 0;
let moves = 20;

window.onload = function gameStart() {
    for(let i = 0;i < 6; i++){
        for(let k = 0; k < 2;k++){

            let num =  Math.floor(Math.random() * 6) + (1 + i * 6);

            while(true){

                if(!answersArray.includes(num)){

                    answersArray.push(num);

                    break;

                }else {

                    num =  Math.floor(Math.random() * 6) + (1 + i * 6);

                } 
            }
        }
    }
    console.log(answersArray);
    answersArray.map((i) => {
        document.getElementById(i).className = "cardBackTrue";
    })

}


function clickFunction() {
    window.event.srcElement.offsetParent.classList.add('flippedCard');
    if(answersArray.includes(Number(window.event.srcElement.nextSibling.id))){
        score = score + 10;
        document.getElementById("scoreBoard").innerHTML = "Score: " + score;
    }
    moves = moves - 1;
    document.getElementById("movesLeft").innerHTML = "Moves Left: " + moves;

    if(moves == 0 || score == 120){
        document.getElementById('gameOver').classList.add('displayTrue');
    }
}

function playAgain() {
   location.reload();
}



