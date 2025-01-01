import { enemyDamag } from "./Enemy.js";


class Player {
    constructor(){
        this.hpPlayer = 100;
        this.damage = 0;
        this.TimerDamage = 0;
        this.id = 0;
        this.hpBarPlayer = document.querySelector(".health-bar-item");
    }

    killPlayer=()=>{
        
    }
}

export const MainPlayer = new Player();