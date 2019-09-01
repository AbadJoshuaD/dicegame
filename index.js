function rollDice(){
    var array = [];
    for(i=0;i<2;i++){
        var randomNum = Math.random();
        randomNum = Math.floor((randomNum * 6)) + 1;
        array.push(randomNum);
    }
    document.querySelector(".dice1").setAttribute("src","images/dice"+array[0].toString()+".png");
    document.querySelector(".dice2").setAttribute("src","images/dice"+array[1].toString()+".png");
    if(array[0]>array[1]){
        document.querySelector("#big-heading").textContent = "Player 1 is Winner!!!!";
        document.querySelector(".winner-flag").style.visibility = "visible";

    }else if(array[0]<array[1]){
        document.querySelector("#big-heading").textContent = "Player 2 is Winner!!!!";
        document.querySelector(".winner-flag").setAttribute("src","images/red-flag.png");
        document.querySelector(".winner-flag").style.visibility = "visible";
    }else{
        document.querySelector("#big-heading").textContent = "Draw!";
    }
}
document.onload = rollDice();