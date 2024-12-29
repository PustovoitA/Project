import { enemyDamag } from "./Enemy.js";
import { hit } from "./damageEnemyObserver.js";
import { firstLvl } from "./levels.js";
firstLvl();
hit.subscribe(enemyDamag.damageEnemy);

export const enemyItem = document.querySelector(".enemy-item");

enemyItem.addEventListener("click",()=>{
    hit.broadcast();
});