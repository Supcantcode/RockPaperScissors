let playerHealth = 5
let enemyHealth = 5

// plays background music after a button is pressed
function playMusic() {
    const music = document.querySelector("#main-music");
    music.play();
    music.loop = true;
}
start = document.querySelector("button").addEventListener("click", playMusic);

