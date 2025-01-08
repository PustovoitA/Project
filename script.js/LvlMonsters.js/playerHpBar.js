import { playerObserv } from "./playerHpObserv.js"


let playerHP = 300;
const playerHPBar = document.getElementById("hpBar");

const updateHPBar = () => {
    playerHPBar.style.width = (playerHP > 0 ? playerHP : 0) + "px";
};

const decreaseHP = (damage) => {
    playerHP -= damage;
    updateHPBar()

    if (playerHP <= 0) {
        document.getElementById("modal-window").style.display = "flex";
    }
};

const increaseHP = (heal) => {
    playerHP += heal;
    if (playerHP > 300) playerHP = 300; 
    updateHPBar();
};

document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        increaseHP(50)
    }
})


setInterval(() => decreaseHP(20), 1500);

playerObserv.subscribe(updateHPBar)


