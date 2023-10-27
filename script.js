const dinosaur = document.getElementById("dinosaur");
const cactus = document.getElementById("cactus");
const cloud = document.getElementById("cloud");
const gameOver = document.getElementById("game-over");

document.addEventListener('keydown', function(event) {
        jump();
});

function jump () {
    if (dinosaur.classList != "jump") {
        dinosaur.classList.add("jump")
    }
    setTimeout( function() {
        dinosaur.classList.remove("jump")
    }, 525)
};

// function gameOver () {
//     gameOverr.style.backgroundImage = "/images/game_over.png"
// }

let isAlive = setInterval ( function() {
    let dinoTop = parseInt(window.getComputedStyle(dinosaur).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        // alert("GAME OVER!")
        cactus.style.animation = "none"

        cactus.style.left = "570px"
        dinosaur.style.opacity = 0
        gameOver.style.opacity = 1


    }
}, 10)