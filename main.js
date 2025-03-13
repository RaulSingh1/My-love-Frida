let score = 0;
let timeLeft = 30;
let timer;
let gameArea = document.getElementById("game-area");

function startGame() {
    score = 0;
    timeLeft = 30;
    document.getElementById("score").innerText = "Hjerter funnet: " + score;
    document.getElementById("timer").innerText = "Tid igjen: " + timeLeft + " sek";
    gameArea.innerHTML = "";
    timer = setInterval(countDown, 1000);
    spawnHearts();
}

function countDown() {
    timeLeft--;
    document.getElementById("timer").innerText = "Tid igjen: " + timeLeft + " sek";
    if (timeLeft <= 0) {
        clearInterval(timer);
        gameArea.innerHTML = "<h2>Spillet er over! Du fant " + score + " hjerter ❤️</h2>";
    }
}

function spawnHearts() {
    for (let i = 0; i < 10; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.top = Math.random() * 270 + "px";
        heart.style.left = Math.random() * 90 + "%";
        heart.onclick = function () {
            score++;
            document.getElementById("score").innerText = "Hjerter funnet: " + score;
            heart.remove();
            spawnNewHeart();
        };
        gameArea.appendChild(heart);
    }
}

function spawnNewHeart() {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.top = Math.random() * 270 + "px";
    heart.style.left = Math.random() * 90 + "%";
    heart.onclick = function () {
        score++;
        document.getElementById("score").innerText = "Hjerter funnet: " + score;
        heart.remove();
        spawnNewHeart();
    };
    gameArea.appendChild(heart);
}
