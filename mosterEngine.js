// import {level, ammo, life, ammoInWeapon, handType} from "./common.js"
const life3 = document.getElementById('life_3');
const life2 = document.getElementById('life_2');
const elmAmmoInWeapon = document.getElementById('ammoInWeapon');
const elmAmmo = document.getElementById('ammo');
const body = document.getElementById('container');
let namePlayer = document.getElementById('name');
const elmFinishedLevels = document.getElementsByClassName('finished_levels');
const elmKilledMonsters = document.getElementsByClassName('killed_monsters');
let audioHit = './clickerImgs/music/pistolet-vystrel-6.mp3';
let audioReload = './clickerImgs/music/zvuk-perezariadki-pistoleta-435.mp3';
let audioEmpty = './clickerImgs/music/7b68ed3d8095bba.mp3';
let h = 0;
let audio;
let monstersPerThisLevel = 0;


class AmmoBox {
    constructor() {
        this.isActive = false;
        this.time = 0;
        this.ammo = 10;
        this.element = document.getElementById('ammo_box');
    }
    tic() {
        this.time += 1;
        if (this.time === 10) {
            this.isActive = false;
            this.element.style.display = 'none';
        }
    }
    spawn() {
        this.isActive = true;
        this.time = 0;
        this.element.style.left = `calc(10vw + ${Math.random() * 80}vw)`;
        this.element.style.top = `calc(10vh + ${Math.random() * 30}vh)`;
        this.element.style.display = 'block';
    }
    hit() {
        this.isActive = false;
        this.element.style.display = 'none';
        ammo += this.ammo;
        modifyAmmo()
    }

}

class Monster {
    constructor(elm_id, left) {
        this.isAlive = false;
        this.left = left;
        this.bottom = 30;
        this.element = document.getElementById(`monster${elm_id}`);
        this.healthbar_block = document.getElementById(`monster_healthbar_block_${elm_id}`);
        this.red_healthbar = document.getElementById(`health_red_${elm_id}`);
        this.grey_healthbar = document.getElementById(`health_grey_${elm_id}`);
    }

    spawn() {
        if (levelMonsters === monstersPerThisLevel) {
            return
        }
        levelMonsters += 1;
        this.isAlive = true;
        this.health = defaultMonsterHealth;
        this.width = 5;
        this.bottom = 25;
        this.healthbar_height = 10;
        this.red_healthbar.style.width = `${this.width}vw`;
        this.grey_healthbar.style.width = 0;

        this.draw();

        this.element.src = `./clickerImgs/lvl1/${getRandomInt(3) + 1}.png`
        this.element.style.display = 'block';
        h = this.element.offsetHeight;
        this.healthbar_block.style.bottom = `calc(${this.bottom}vh + ${h}px + 10px)`;
        this.healthbar_block.style.display = 'block';
    }

    hit() {
        this.health -= 1;
        if (this.health === 0) {
            this.kill()
        }
        this.red_healthbar.style.width = `calc(${this.width}vw / ${defaultMonsterHealth} * ${this.health})`;
        this.grey_healthbar.style.width = 
        `calc(${this.width}vw / ${defaultMonsterHealth} * (${defaultMonsterHealth} - ${this.health}))`;
    }

    kill() {
        this.isAlive = false;
        this.element.style.display = 'none';
        this.healthbar_block.style.display = 'none';
        levelKilledMonsters += 1;
        if (levelKilledMonsters === monstersPerThisLevel) {
            finishLevel();
        }
    }

    draw() {
        this.element.style.width = `${this.width}vw`;
        this.element.style.left = this.healthbar_block.style.left = `calc(${this.left}vw - ${this.width / 2}vw)`;
        this.element.style.bottom = `${this.bottom}vh`;
        h = this.element.offsetHeight;
        this.healthbar_block.style.bottom = `calc(${this.bottom}vh + ${h}px + 10px)`;
        this.healthbar_block.style.height = `${this.healthbar_height}px`;
        this.red_healthbar.style.width = `calc(${this.width}vw / ${defaultMonsterHealth} * ${this.health})`;
        this.grey_healthbar.style.width = 
        `calc(${this.width}vw / ${defaultMonsterHealth} * (${defaultMonsterHealth} - ${this.health}))`;
    }

    move() {
        if (this.width === 30) {
            defeat();
        }
        else {
            this.width += 1;
            this.bottom -= 0.5;
            this.healthbar_height += 1;
            this.draw()
        }
    }
}


function showModal(id) {
    document.getElementById(id).style.display = 'block';
}

function defeat() {
    clearInterval(progressMonsterMove);
    body.style.backgroundColor = 'red';
    body.style.opacity = 0.3;
    loadPerson();
    life -= 1;
    saveToLocalStorage();
    if (life === 0) {
        modifyScore();
        showModal('modal_1');
    }
    else {
        showModal('modal_2');
    }
}

function finishLevel() {
    clearInterval(progressMonsterMove);
    killedMonsters += monstersPerThisLevel;
    finishedLevels += 1;
    saveToLocalStorage();
    modifyScore();
    showModal('modal_3');
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

function modifyScore() {
    Array.from(elmFinishedLevels).forEach(elm => {
        elm.innerHTML = finishedLevels;
    })
    Array.from(elmKilledMonsters).forEach(elm => {
        elm.innerHTML = killedMonsters;
    })
}

function modifyHands() {
    document.getElementById('hands_img').src = `./clickerImgs/skin/hand${handType}.png`;
}
function modifyName(){
    namePlayer.innerHTML=userName;
  
}


let monster1 = new Monster(elm_id=1, left=20);
let monster2 = new Monster(elm_id=2, left=50);
let monster3 = new Monster(elm_id=3, left=70);
let ammoBox = new AmmoBox();
let levelMonsters = 0;
let levelKilledMonsters = 0;

function preloadAudio() {
    [audioHit, audioEmpty, audioReload].forEach(src => {
        audio = new Audio(src);
        audio.play()
        audio.pause()
    })
}

function init() {
    loadPerson();
    modifyHands();
    modifyLifes();
    modifyAmmo();
    modifyName();
    monstersPerThisLevel = getMonsterPerLevel();
    preloadAudio();
}

init();

body.addEventListener('click', (e) => {
    if (e.target.id === 'ammo_box') {
        ammoBox.hit()
        return
    }
    if (e.target.id === 'life_box') {
        return
    }

    if (ammoInWeapon === 0) {
        audio = new Audio(audioEmpty);
        audio.play();
        return
    }

    ammoInWeapon -= 1;
    audio = new Audio(audioHit);
    audio.currentTime = 0.2;
    audio.play()
    modifyAmmo()

    switch (e.target.id) {
        case 'monster1':
            monster1.hit();
            break;
        case 'monster2':
            monster2.hit();
            break;
        case 'monster3':
            monster3.hit();
            break;
    }
});

window.addEventListener('keydown', function (e) {
    if (e.code === 'Space') {
        ammoInWeapon = Math.min(ammo, defaultAmmoInWeapon);
        ammo -= ammoInWeapon;
        audio = new Audio(audioReload);
        audio.currentTime = 0.4;
        audio.play();
        modifyAmmo()
    }
}, false);

let progressMonsterMove = setInterval(monsterMove, timeoutStep);

function monsterMove() {
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
    if (!ammoBox.isActive) {
        if (Math.random() <= monsterAliveChance) {
            ammoBox.spawn()
        }
    } else {
        ammoBox.tic()
    }

}