import { enemyDamag } from "./Enemy.js";
import { enemyItem } from "./enemyHit.js";
import {Interval} from "./IntervalDamage.js";
import { idInterval } from "./IntervalDamage.js";

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
        Interval(5000, 5);
    }

    secondLvl=()=>{
        clearInterval(idInterval);
        enemyItem.src = "./img/DeathLevel.img/enemy2.gif";
        enemyDamag.timout = 500;
        enemyDamag.damage = 25;
        this.lvl.textContent = this.counterLvl;
        this.counterLvl += 1;
        Interval(3700, 10);

    }

    thirdLvl=()=>{
        clearInterval(idInterval);
        enemyItem.src = "./img/DeathLevel.img/enemy3.gif";
        enemyDamag.timout = 300;
        enemyDamag.damage = 20;
        this.lvl.textContent = this.counterLvl;
        this.counterLvl += 1;
        Interval(3000, 15);
    }
}
export const newLevel = new Levels();