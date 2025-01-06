import { MainPlayer } from "./MainPlayer.js";
import { enemyDamag } from "./Enemy.js";

export let idInterval = 0;
export function Interval(intervalDamage, damage){
    if(enemyDamag.enemy){
        console.log(enemyDamag.enemy);
        idInterval = setInterval(()=>{
            MainPlayer.hpPlayer -= damage;
            MainPlayer.hpBarPlayer.style.width = MainPlayer.hpPlayer + "%";

            if(MainPlayer.hpPlayer <= 0){
                MainPlayer.killPlayer();
            }
        },intervalDamage);
    }
}