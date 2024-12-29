class Enemy{
    constructor(){
        this.hpEnemy = 100;
        this.enemy = document.querySelector(".enemy");
        this.enemyHpBar = document.querySelector(".enemy-hpBar-item");
    }

    damageEnemy=()=>{
        this.hpEnemy -= 20;
        this.enemyHpBar.style.width = this.hpEnemy + "%"

        if(this.hpEnemy === 0){
            this.killEnemy()
        }
    }

    killEnemy=()=>{
        if(this.enemy){
            this.enemy.remove();
        }

        setTimeout(()=>{
            this.resetEnemy();
        },500);
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
export const Enemy = new Enemy();