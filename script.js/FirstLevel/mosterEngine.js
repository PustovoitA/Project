import * as settings from './settings.js'
import { defeat, saveProgress, getRandomInt, showModal } from '../common.js';
import { HpBarObserver } from './HpBarObserver.js';
import { drawHpBar } from './utils.js';

let ammo = settings.defaultInitialAmmo;
let ammoInWeapon = settings.defaultAmmoInWeapon;

const elmAmmoInWeapon = document.getElementById('ammoInWeapon');
const elmAmmo = document.getElementById('ammo');
const body = document.getElementById('container');

let namePlayer = document.getElementById('name');

let audioHit = 'clickerImgs/music/pistolet-vystrel-6.mp3';
let audioReload = 'clickerImgs/music/zvuk-perezariadki-pistoleta-435.mp3';
let audioEmpty = 'clickerImgs/music/7b68ed3d8095bba.mp3';
let audio;
let monstersPerThisLevel = 0;
const handType = 1;


class AmmoBox {
    constructor() {
        this.isActive = false;
        this.time = 0;
        this.ammo = settings.boxAmmo;
        this.element = document.getElementById('ammo_box');
    }
    tic() {
        this.time += 1;
        if (this.time === settings.boxLiveTime) {
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
    constructor(elm_id=1, left=20) {
        this.elm_id = elm_id;
        this.isAlive = false;
        this.initial_left = this.left = left;
        this.bottom = 30;
        this.element = document.getElementById(`monster${elm_id}`);
        this.healthbar_block = document.getElementById(`monster_healthbar_block_${elm_id}`);
        this.red_healthbar = document.getElementById(`health_red_${elm_id}`);
        HpBarObserver.subscribe(this);
    }

    spawn() {
        if (levelMonsters === monstersPerThisLevel) {
            return
        }
        levelMonsters += 1;
        this.isAlive = true;
        this.health = settings.defaultMonsterHealth;
        this.width = 5;
        this.bottom = 25;
        this.left = this.initial_left;
        this.healthbar_height = 10;
        drawHpBar(this);

        this.draw();

        this.element.src = `clickerImgs/lvl1/${getRandomInt(3) + 1}.png`
        this.element.style.display = 'block';
        drawHpBar(this);
        this.healthbar_block.style.display = 'block';
    }

    hit() {
        this.health -= 1;
        if (this.health === 0) {
            this.kill()
        }
        drawHpBar(this)
    }

    kill() {
        this.isAlive = false;
        this.element.style.display = 'none';
        this.healthbar_block.style.display = 'none';
        levelKilledMonsters += 1;
        if (levelKilledMonsters === monstersPerThisLevel) {
            clearInterval(progressMonsterMove);
            saveProgress(monstersPerThisLevel);
            showModal('.modal-window');
        }
    }

    draw() {
        this.element.style.width = `${this.width}vw`;
        this.element.style.left = `${this.left}vw`;
        this.element.style.bottom = `${this.bottom}vh`;
    }

    horizontalShift() {
        switch (this.elm_id) {
            case 1:
                return 0
            case 2:
                return -0.5
            case 3:
                return -1
        }

    }

    move() {
        if (this.width === 30) {
            clearInterval(progressMonsterMove);
            defeat();
        }
        else {
            this.width += 1;
            this.left += this.horizontalShift();
            this.bottom -= 0.5;
            this.healthbar_height += 1;
            this.draw()
        }
    }
}

let monster1 = new Monster(1, 20);
let monster2 = new Monster(2, 50);
let monster3 = new Monster(3, 70);

let ammoBox = new AmmoBox();
let levelMonsters = 0;
let levelKilledMonsters = 0;

function getMonsterPerLevel() {
    if (settings.variableMonsterPerLevel) {
        return getRandomInt(settings.maxMonsterPerLevel - settings.minMonsterPerLevel) + settings.minMonsterPerLevel;
    }
    else {
        return settings.monstersPerLevel
    }
}

function modifyAmmo() {
    elmAmmoInWeapon.innerHTML = ammoInWeapon;
    elmAmmo.innerHTML = ammo;
}

function modifyHands() {
    document.getElementById('hands_img').src = `clickerImgs/skin/hand${handType}.png`;
}

function modifyName(userName){
    namePlayer.innerHTML=userName;
  
}

function preloadAudio() {
    [audioHit, audioEmpty, audioReload].forEach(src => {
        audio = new Audio(src);
    })
}

body.addEventListener('click', (e) => {
    if (e.target.id === 'ammo_box') {
        ammoBox.hit()
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
    audio.play();
    modifyAmmo();

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
        ammoInWeapon = Math.min(ammo, settings.defaultAmmoInWeapon);
        ammo -= ammoInWeapon;
        audio = new Audio(audioReload);
        audio.currentTime = 0.4;
        audio.play();
        modifyAmmo()
    }
}, false);

function init() {
    if (!Number(localStorage.getItem('life'))) {
        window.location.href = './index.html'
    }
    modifyHands();
    modifyAmmo();
    let userName = localStorage.getItem('username');
    modifyName(userName);
    monstersPerThisLevel = getMonsterPerLevel();
    preloadAudio();
}

init();

let progressMonsterMove = setInterval(monsterMove, settings.timeoutStep);

function monsterMove() {
    [monster1, monster2, monster3].forEach(monster => {
        if (!(monster.isAlive)) {
            if (Math.random() <= settings.monsterAliveChance) {
                monster.spawn()
            }
        }
        else {
            monster.move();
        }
    })
    HpBarObserver.broadcast();
    if (!ammoBox.isActive) {
        if (Math.random() <= settings.boxSpawnChance) {
            ammoBox.spawn()
        }
    } else {
        ammoBox.tic()
    }
}