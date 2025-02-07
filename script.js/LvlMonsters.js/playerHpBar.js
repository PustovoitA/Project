import { playerObserv } from "./playerHpObserv.js"
import { hpAudio } from "./audioBg.js"
import { defeat } from "../common.js";
import { spawnEnemiesProcess } from "./enemy.js";



let playerHP = 300;
const playerHPBar = document.getElementById("hpBar");

const updateHPBar = () => {
    playerHPBar.style.width = (playerHP > 0 ? playerHP : 0) + "px";
};

const decreaseHP = (damage) => {
    playerHP -= damage;
    updateHPBar()

    if (playerHP <= 0) {
        defeat();
        document.getElementById("modal-window").style.display = "flex";
        clearInterval(spawnEnemiesProcess);
        clearInterval(playerHpInterval);
    }
};
export const playerHpInterval = setInterval(() => decreaseHP(20), 1500);

const increaseHP = (heal) => {
    playerHP += heal;
    if (playerHP > 300) playerHP = 300; 
    updateHPBar();
};

document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        increaseHP(50)
        hpAudio()
    }
})



playerObserv.subscribe(updateHPBar)



