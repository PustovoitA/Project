const debug = true;

let killedMonsters = 0;
let finishedLevels = 0;
let userName = '';
let life = 0;

const life3 = document.getElementById('life_3');
const life2 = document.getElementById('life_2');
const life1 = document.getElementById('life_1');
const elmFinishedLevels = document.getElementById('finished-levels');
const elmKilledMonsters = document.getElementById('killed-monsters');
const elmModalTitle = document.getElementById('modal-title')

export function saveProgress(monsterCounter) {
    loadPerson();
    killedMonsters += monsterCounter;
    finishedLevels += 1;
    saveToLocalStorage(monsterCounter);
    if (elmFinishedLevels) {
        elmFinishedLevels.innerText = finishedLevels;
        elmKilledMonsters.innerText = killedMonsters;
        elmModalTitle.innerText = 'Congratulations!'
    }
    modifyLifes(life);
}

export function defeat() {
    let body = document.getElementById('container');
    // if (body) {
    //     body.style.backgroundColor = 'red';
    //     body.style.opacity = 0.5;
    // }
    life = Number(localStorage.getItem('life'));
    life -= 1;
    localStorage.setItem('life', life);
    modifyLifes(life);
    if (elmModalTitle) {
        elmModalTitle.innerText = life ? 'Defeat!': 'Game over!'
    }
    if (life < 1) {
        document.querySelector('.button-repeat').style.display = 'none';
        document.querySelector('.button-next').style.display = 'none';
    }
    showModal('.modal-window')
}

export function showModal(qs) {
    document.querySelector(qs).style.display = "flex";
}

function modifyLifes(life) {
    if (life1 && life2 && life3) {
        if (life === 2) {
            life3.hidden = true;
        }
        else if (life === 1) {
            life3.hidden = true;
            life2.hidden = true;
        }
        else if (life === 0) {
            life3.hidden = true;
            life2.hidden = true;
            life1.hidden = true;
        }
    }
}

export function getRandomInt(multiplier) {
    return Math.floor(Math.random() * multiplier)
}

export function saveToLocalStorage(killed) {
    localStorage.setItem('killedMonsters', killed + Number(localStorage.getItem('killedMonsters')));
    localStorage.setItem('finishedLevels', 1 + Number(localStorage.getItem('finishedLevels')));
}

export function initLocalStorage(user) {
    localStorage.setItem('username', user);
    localStorage.setItem('killedMonsters', 0);
    localStorage.setItem('finishedLevels', 0);
    localStorage.setItem('life', 3)
}

export function loadPerson() {
    if (localStorage.getItem('username')) {
        userName = localStorage.getItem('username');
        life = Number(localStorage.getItem('life'));
        killedMonsters = Number(localStorage.getItem('killedMonsters'));
        finishedLevels = Number(localStorage.getItem('finishedLevels'));
    }
}