// import {level, ammo, life, ammoInWeapon, handType} from "./common.js"
const life3 = document.getElementById('life_3');
const life2 = document.getElementById('life_2');
const elmAmmoInWeapon = document.getElementById('ammoInWeapon');
const elmAmmo = document.getElementById('ammo');

class Monster {
    constructor(elm_id, left) {
        this.isAlive = false;
        this.left = left;
        this.element = document.getElementById(elm_id) 
    }

    spawn() {
        this.isAlive = true;
        this.health = defaultMonsterHealth;
        this.width = 5;
    }

    kill() {
        this.isAlive = false;
        levelKilledMonsters += 1;
        if (levelKilledMonsters === monstersPerLevel) {
            finishedLevels()
        }
    }

    move() {
        if (this.width === 30) {
            defeat();
        }
        else {
            this.width += 1;
            this.element.style.width = `${this.width}vw`;
            this.element.style.left = `calc(${this.left}vw - ${this.width / 2}vw)`;
        }
    }
}

function defeat() {
    defeat_game = true;
    let body = document.getElementsById('container');
    body.style.backgroundColor = 'red';
    body.style.opacity = 0.3;
    if (life === 1) {
        alert('Ви програли остаточно')
    }
    else {
        prompt("")
    }
}

function finishLevel() {
    alert("Вітаю. Всіх монстрів вбито!");
    killedMonsters += monstersPerLevel;
    finishedLevels += 1;
    saveToLocalStorage();
    // level = getRandomLevel();
    level = 1;
    window.location.href = "./level_" + level + '.html';
}

function modifyLifes() {
    if (life === 2) {
        life3.hidden = true;
    }
    else if (life === 1) {
        life3.hidden = true;
        life2.hidden = true;
    }
}

function modifyAmmo() {
    elmAmmoInWeapon.innerHTML = ammoInWeapon;
    elmAmmo.innerHTML = ammo;
}

function modifyHands() {
    document.getElementById('hands').src = `./clickerImgs/skin/hand${handType}.png`;
}

let monster1 = new Monster(elm_id="monster1", left=20);
let monster2 = new Monster(elm_id="monster2", left=50);
let monster3 = new Monster(elm_id="monster3", left=70);
let levelMonsters = 0;
let levelKilledMonsters = 0;
let defeat_game = false;

function init() {
    modifyHands();
    modifyLifes();
    modifyAmmo();
}

init();
console.log(2222)

while (!defeat_game) {
    console.log(11111)
    setTimeout(() => {
        if (!(monster1.isAlive)) {
            if (Math.random() <= monsterAliveChance) {
                monster1.spawn()
            }
        }
        else {
            monster1.move();
        }
        if (!(monster2.isAlive)) {
            if (Math.random() <= monsterAliveChance) {
                monster2.spawn()
            }
        }
        else {
            monster2.move();
        }
        if (!(monster3.isAlive)) {
            if (Math.random() <= monsterAliveChance) {
                monster3.spawn()
            }
        }
        else {
            monster3.move();
        }
      }, timeoutStep);
}