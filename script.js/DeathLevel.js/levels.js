import { enemyDamag } from "./Enemy.js";
import { enemyItem } from "./enemyHit.js";
import { MainPlayer } from "./MainPlayer.js";

class Levels {
    constructor(){
        this.lvl = document.querySelector(".level-counter-item");
        this.counterLvl = 1;
    }

    firstLvl=()=>{
        enemyDamag.timout = 700;
        enemyDamag.damage = 50;
        this.lvl.textContent = this.counterLvl;
        this.counterLvl += 1;
        MainPlayer.damage = 10;
        MainPlayer.intervalDamage = 3500;
    }

    secondLvl=()=>{
        enemyItem.src = "./img/DeathLevel.img/enemy2.gif";
        enemyDamag.timout = 500;
        enemyDamag.damage = 25;
        this.lvl.textContent = this.counterLvl;
        this.counterLvl += 1;
    }

    thirdLvl=()=>{
        enemyItem.src = "./img/DeathLevel.img/enemy3.gif";
        enemyDamag.timout = 300;
        enemyDamag.damage = 20;
        this.lvl.textContent = this.counterLvl;
        this.counterLvl += 1;
    }
}
export const newLevel = new Levels();