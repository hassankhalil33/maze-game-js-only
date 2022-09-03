
var score = 0;

function startGame() {
    document.querySelector(".example").style.textAlign = "center";
    document.querySelector(".example").textContent = "Score: " + score;
    document.querySelector("#status").textContent = "Game Started!";
    document.querySelector("#end").addEventListener("mouseover", winEvent);

    for (var i = 0; i < document.querySelectorAll(".boundary").length; i++) {
        document.querySelectorAll(".boundary")[i].addEventListener("mouseover", touchedBorder);
    };

    for (var i = 0; i < document.querySelectorAll(".boundary").length; i++) {
        document.querySelectorAll(".boundary")[i].classList.remove("youlose");
    };
};

function winEvent() {
    document.querySelector("#status").textContent = "Good Job!";

    for (var i = 0; i < document.querySelectorAll(".boundary").length; i++) {
        document.querySelectorAll(".boundary")[i].removeEventListener("mouseover", touchedBorder);
    };

    score += 5;
};

function touchedBorder() {
    document.querySelector("#status").textContent = "Too Bad :(";
    document.querySelector("#end").removeEventListener("mouseover", winEvent);

    //- 1 is a weird way of solving the problem but .not() didnt work and we cant edit css/html :(
    for (var i = 0; i < document.querySelectorAll(".boundary").length - 1; i++) {
        document.querySelectorAll(".boundary")[i].classList.add("youlose");
    };

    score -= 10;
};

addEventListener("load", function () {
    document.querySelector("#start").addEventListener("mouseover", startGame); 
    
    document.querySelector("#start").addEventListener("click", function() {
        alert("Reset!");
    });
});
