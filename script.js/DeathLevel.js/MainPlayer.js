import { enemyDamag } from "./Enemy";


class Player {
    constructor(){
        this.hpPlayer = 100;
        this.damage = 0;
        this.intervalDamage = 0;
        this.hpBarPlayer = document.querySelector(".health-bar-item");
    }

    damagePlayer=()=>{
        if(enemyDamag.enemy){
            setInterval(()=>{
                this.hpPlayer -= this.damage;
                this.hpBarPlayer.style.whidth = this.hpPlayer + "%"
            },this.intervalDamage);
        }

        if(this.hpPlayer === 0){
            this.killPlayer();
        }
    }

    killPlayer=()=>{
        
    }
}

export const MainPlayer = new Player();