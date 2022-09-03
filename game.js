console.log("Didnt Work");

addEventListener("load", function () {
    console.log("Worked");

    document.querySelector("#start").addEventListener("mouseover", function() {
        alert("Game Starts!");
    });
    
    document.querySelector("#start").addEventListener("click", function() {
        alert("Reset!");
    });
    
    for (var i = 0; i < document.querySelectorAll(".boundary").length; i++) {
        document.querySelectorAll(".boundary")[i].addEventListener("mouseover", function() {
            alert("Lose!");
        });
    };
    
    document.querySelector("#end").addEventListener("mouseover", function() {
        alert("Win!");
    });
});
