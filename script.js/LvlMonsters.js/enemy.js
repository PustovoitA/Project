import { observEnemy } from "./hpBar.enemy.js"
import { ObserverKill } from "./killEnemObserv.js"
import { playerObserv } from "./playerHpObserv.js"

class Enemy {
    constructor(imageSrc, initialHP = 100) {
        this.hp = initialHP;
        this.maxHP = initialHP;
        this.imageSrc = imageSrc;
        this.element = null;
        this.hpBarElement = null;

    }

    createElement(numEnemy) {
        let randomTop = Math.floor(Math.random() * 70);
        let randomLeft = Math.floor(Math.random() * 70);

        let imgBox = document.createElement("span");
        imgBox.id = "imgBox" + numEnemy;
        imgBox.className = "imgBox flex column";
        imgBox.style.top = randomTop + "%";
        imgBox.style.left = randomLeft + "%";

        let hpBarContainer = document.createElement("span");
        hpBarContainer.className = "hpBarContainer";

        let hpBar = document.createElement("span");
        hpBar.className = "hpBar";

        let hpBarColor = document.createElement("span");
        hpBarColor.className = "hpBar hpColor";
        hpBarColor.style.width = (this.hp / this.maxHP) * 100 + "%";

        hpBar.appendChild(hpBarColor);
        hpBarContainer.appendChild(hpBar);

        let img = document.createElement("img");
        img.src = this.imageSrc;
        img.className = "imgEnemy";
        img.dataset.enemyId = numEnemy;

        imgBox.appendChild(hpBarContainer);
        imgBox.appendChild(img);

        img.addEventListener("click", () => {
            this.takeDamage(20)
        });
        img.addEventListener("contextmenu", (event) => {
            event.preventDefault()
            this.takeDamage(40)
        });

        this.element = imgBox;
        this.hpBarElement = hpBarColor;
        return imgBox;
    }

    takeDamage(damage) {
        observEnemy.broadcast()
        playerObserv.broadcast()
        this.hp -= damage;

        if (this.hp < 0) this.hp = 0;
        this.updateHPBar();

        if (this.hp <= 0) {
            this.element.remove();

            ObserverKill.broadcast()
        }
    }

    updateHPBar() {
        if (this.hpBarElement) {
            this.hpBarElement.style.width = (this.hp / this.maxHP) * 100 + "%";
        }
    }

}
let numEnemy = 1;

const enemyImages = {
    1: "img/enemy1.png", 2: "img/enemy3.png", 3: "img/enemy4.png", 4: "img/enemy5.png", 5: "img/enemy6.png",
    6: "img/enemy1.png", 7: "img/enemy3.png", 8: "img/enemy4.png", 9: "img/enemy5.png", 10: "img/enemy6.png",
    11: "img/enemy1.png", 12: "img/enemy3.png", 13: "img/enemy4.png", 14: "img/enemy5.png", 15: "img/enemy6.png",
};

const spawnEnemies = () => {
    if (numEnemy < 16) {
        let enemy = new Enemy(enemyImages[numEnemy] || "default_enemy.png");
        document.getElementById("BoxEnemy").appendChild(enemy.createElement(numEnemy));
        numEnemy++;
    } else {
        document.getElementById("modal-window").style.display = "flex";
    }

};

setInterval(spawnEnemies, 2000);
