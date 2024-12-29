import { enemyDamag } from "./Enemy.js";
import { enemyItem } from "./enemyHit.js";
const lvl = document.querySelector(".level-counter-item");
let counterLvl = 1


export const firstLvl=()=>{
    enemyDamag.timout = 700;
    enemyDamag.damage = 50;
    lvl.textContent = counterLvl;
    counterLvl += 1;
}
export const secondLvl=()=>{
    enemyItem.src = "./img/DeathLevel.img/enemy2.gif";
    enemyDamag.timout = 500;
    enemyDamag.damage = 25;
    lvl.textContent = counterLvl;
    counterLvl += 1;
}
export const therdLvl=()=>{
    enemyItem.src = "./img/DeathLevel.img/enemy3.gif";
    enemyDamag.timout = 300;
    enemyDamag.damage = 20;
    lvl.textContent = counterLvl;
    counterLvl += 1;
}