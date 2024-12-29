import { Enemy } from "./Enemy.js";
import { hit } from "./damageEnemyObserver.js";
hit.subscribe(Enemy.damageEnemy);

const enemyItem = document.querySelector(".enemy-item");

enemyItem.addEventListener("click",()=>{
    hit.broadcast();
});