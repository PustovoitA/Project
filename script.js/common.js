const defaultInitialLife = 3;
const defaultInitialAmmo = 200;
const defaultAmmoInWeapon = 12;
const defaultMonsterHealth = 10;
const timeoutStep = 1000;
const monsterAliveChance = 0.1;
const monstersPerLevel = 10;
const minMonsterPerLevel = 10;
const maxMonsterPerLevel = 20;
const variableMonsterPerLevel = true;
const debug = true;

const reloadLevel = document.getElementById('levelReload');
const returnToFirstPage = document.getElementById('returnToFirstPage');
const exit = document.getElementById('exit');
const exit1 = document.getElementById('exit1');
const startGame = document.getElementById('start-game');
const nextLevel = document.getElementById('nextLevel');

let level = 0;
let ammo = defaultInitialAmmo;
let life = defaultInitialLife;
let ammoInWeapon = defaultAmmoInWeapon;
let killedMonsters = 0;
let finishedLevels = 0;
let userName = '';
let handType = 1;


function getRandomInt(multiplier) {
    return Math.floor(Math.random() * multiplier)
}


function getMonsterPerLevel() {
    if (variableMonsterPerLevel) {
        return getRandomInt(maxMonsterPerLevel - minMonsterPerLevel) + minMonsterPerLevel;
    }
    else {
        return monstersPerLevel
    }
}


function getRandomLevel() {
    return getRandomInt(3) + 1;
}

function getNextLevel() {
    return debug ? 1:getRandomLevel();
}

function saveToLocalStorage() {
    localStorage.setItem('username', userName);
    localStorage.setItem('handType', handType);
    localStorage.setItem('life', life);
    localStorage.setItem('ammo', ammo);
    localStorage.setItem('ammoInWeapon', ammoInWeapon);
    localStorage.setItem('killedMonsters', killedMonsters);
    localStorage.setItem('finishedLevels', finishedLevels)
}

function createPerson (person_form){
    userName = person_form.username.value;
    handType = person_form.hand_type.value;
    level = getNextLevel();
    ammo = defaultInitialAmmo;
    life = defaultInitialLife;
    ammoInWeapon = defaultAmmoInWeapon;
    killedMonsters = 0;
    finishedLevels = 0;
    saveToLocalStorage();
    window.location.href = "./level" + level + '.html';
}

function loadPerson() {
    if (localStorage.getItem('username')) {
        userName = localStorage.getItem('username');
        handType = Number(localStorage.getItem('handType'));
        life = Number(localStorage.getItem('life'));
        ammo = Number(localStorage.getItem('ammo'));
        ammoInWeapon = Number(localStorage.getItem('ammoInWeapon'));
        killedMonsters = Number(localStorage.getItem('killedMonsters'));
        finishedLevels = Number(localStorage.getItem('finishedLevels'));
        if (life > 0) {
            let btn = document.getElementById('resume-game');
            if (btn) {
                btn.style.display = 'block';
                btn.addEventListener('click',()=> {
                    level = getNextLevel();
                    window.location.href = "./level" + level + '.html';
                })
            }
        }
    }
}

loadPerson();

if (reloadLevel) {
    reloadLevel.addEventListener ('click', ()=> {
        window.location.reload();
    })
}

if (returnToFirstPage) {
    returnToFirstPage.addEventListener ('click', ()=> {
        window.location.href = './index.html';
    })
}

if (exit) {
    exit.addEventListener('click', ()=> {
        window.location.href = './index.html';
    })
}

if (exit1) {
    exit1.addEventListener('click', ()=> {
        window.location.href = './index.html';
    })
}


if (startGame) { 
    startGame.addEventListener ('click', ()=> {
        window.location.href = `./level${getNextLevel()}.html`;
    })
}

if (nextLevel) {
    nextLevel.addEventListener('click', ()=> {
        window.location.href = `./level${getNextLevel()}.html`;
    })
}