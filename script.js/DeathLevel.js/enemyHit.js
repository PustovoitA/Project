import { enemyDamag } from "./Enemy.js";
import { hit } from "./damageEnemyObserver.js";
import { newLevel } from "./levels.js";
newLevel.firstLvl();
hit.subscribe(enemyDamag.damageEnemy);

export const enemyItem = document.querySelector(".enemy-item");

enemyItem.addEventListener("click",()=>{
    hit.broadcast();
});