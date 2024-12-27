const defaultInitialLife = 3;
const defaultInitialAmmo = 30;
const defaultAmmoInWeapon = 10;
const defaultMonsterHealth = 10;
const timeoutStep = 200;
const monsterAliveChance = 0.1;
const monstersPerLevel = 10;

let level = 1;
let ammo = defaultInitialAmmo;
let life = defaultInitialLife;
let ammoInWeapon = defaultAmmoInWeapon;
let killedMonsters = 0;
let finishedLevels = 0;
let username = '';
let handType = 1;


function getRandomLevel() {
    return Math.floor(Math.random() * 3) + 1;
}

function saveToLocalStorage() {
    localStorage.setItem('username', username);
    localStorage.setItem('handType', handType);
    localStorage.setItem('life', life);
    localStorage.setItem('ammo', ammo);
    localStorage.setItem('ammoInWeapon', ammoInWeapon);
    localStorage.setItem('killedMonsters', killedMonsters);
    localStorage.setItem('finishedLevels', finishedLevels)
}

function createPerson (username, hand_type){
    // level = getRandomLevel();
    level = 1;
    ammo = defaultInitialAmmo;
    life = defaultInitialLife;
    ammoInWeapon = defaultAmmoInWeapon;
    saveToLocalStorage();
    window.location.href = "./level_" + level + '.html';
}

function loadPerson() {
    if (localStorage.getItem('username')) {
        username = localStorage.getItem('username');
        handType = Number(localStorage.getItem('handType'));
        life = Number(localStorage.getItem('life'));
        ammo = Number(localStorage.getItem('ammo'));
        ammoInWeapon = Number(localStorage.getItem('ammoInWeapon'));
        killedMonsters = Number(localStorage.getItem('killedMonsters'));
        finishedLevels = Number(localStorage.getItem('finishedLevels'));
    }
}

loadPerson();