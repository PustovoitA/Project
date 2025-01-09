import { stamina } from "./stamina.js";
import { newLevel } from "./levels.js";
import { modal } from "./modal.js";
import { saveProgress } from "../common.js";
class Enemy{
    constructor(){
        this.hpEnemy = 100;
        this.counter = 0;
        this.timout = 0;
        this.damage = 0;
        this.Killcounter = document.querySelector(".kill-counter-item");
        this.enemy = document.querySelector(".enemy");
        this.enemyHpBar = document.querySelector(".enemy-hpBar-item");
    }

    damageEnemy=()=>{
        this.hpEnemy -= this.damage;
        this.enemyHpBar.style.width = this.hpEnemy + "%";

        if(this.hpEnemy <= 0){
            this.killEnemy();
        }
    }

    killEnemy=()=>{

        if(this.enemy){
            this.enemy.remove();
            stamina();
        }


        let id = setTimeout(()=>{
            this.resetEnemy();
        },this.timout);


        this.counter +=1;
        if(this.counter === 5){
            newLevel.secondLvl();
        }
        if(this.counter === 10){
            newLevel.thirdLvl();
        }
        if(this.counter === 15){
            clearTimeout(id);
            saveProgress(this.counter);
            modal();
        }
        this.Killcounter.textContent = this.counter;
    }

    resetEnemy=()=>{
        this.hpEnemy = 100;
        this.enemyHpBar.style.width = this.hpEnemy + "%";

        let left = Math.floor(Math.random()*80);
        let top = Math.floor(Math.random()*80);

        if(this.enemy){
            this.enemy.style.left = left + "%";
            this.enemy.style.top = top + "%";
            document.querySelector(".main").append(this.enemy);
        }
    }
}
export const enemyDamag = new Enemy();