
var score = 0;

function defaultState() {
    document.querySelector("#start").addEventListener("mouseover", startGame); 
    document.querySelector("#start").addEventListener("click", resetGame);
    document.querySelector("#game").removeEventListener("mouseleave", cheaterCaught);
    document.querySelector("#end").removeEventListener("mouseover", winEvent);

    for (var i = 0; i < document.querySelectorAll(".boundary").length; i++) {
        document.querySelectorAll(".boundary")[i].removeEventListener("mouseover", touchedBorder);
    };
};

function startGame() {
    document.querySelector(".example").style.textAlign = "center";
    document.querySelector("#status").textContent = "Game Started!";
    document.querySelector(".example").textContent = "Score: " + score;
    document.querySelector("#end").addEventListener("mouseover", winEvent);
    document.querySelector("#game").addEventListener("mouseleave", cheaterCaught);

    for (var i = 0; i < document.querySelectorAll(".boundary").length; i++) {
        document.querySelectorAll(".boundary")[i].addEventListener("mouseover", touchedBorder);
    };

    for (var i = 0; i < document.querySelectorAll(".boundary").length; i++) {
        document.querySelectorAll(".boundary")[i].classList.remove("youlose");
    };
};

function winEvent() {
    document.querySelector("#status").textContent = "Good Job!";
    document.querySelector("#game").removeEventListener("mouseleave", cheaterCaught);

    for (var i = 0; i < document.querySelectorAll(".boundary").length; i++) {
        document.querySelectorAll(".boundary")[i].removeEventListener("mouseover", touchedBorder);
    };

    score += 5;
    document.querySelector(".example").textContent = "Score: " + score;
};

function touchedBorder() {
    document.querySelector("#status").textContent = "Too Bad :(";
    document.querySelector("#end").removeEventListener("mouseover", winEvent);
    document.querySelector("#game").removeEventListener("mouseleave", cheaterCaught);

    //- 1 is a weird way of solving the problem but .not() didnt work and we cant edit css/html :(
    for (var i = 0; i < document.querySelectorAll(".boundary").length - 1; i++) {
        document.querySelectorAll(".boundary")[i].classList.add("youlose");
    };

    score -= 10;
    document.querySelector(".example").textContent = "Score: " + score;
};

function cheaterCaught() {
    alert("Where are you going?\nSCORES RESET NOOB!");
    resetGame();
};

function resetGame() {
    score = 0;
    document.querySelector(".example").textContent = "Score: " + score;
    document.querySelector("#status").textContent = 'Begin by moving your mouse over the "S".';
    defaultState();
};

addEventListener("load", defaultState);
