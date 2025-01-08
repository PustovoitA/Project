import {ObserverKill} from "./killEnemObserv.js"
let num = 0
const score = ()=>{
    num ++
    document.getElementById("killedEnemy").textContent = num
}
let numKill = 0;
const numLocal =()=>{
    numKill += 1
    localStorage.setItem(numKill,"hh")
    console.log(localStorage)
    document.getElementById("scoreTxt").textContent = localStorage.length;
}

ObserverKill .subscribe(numLocal)
ObserverKill .subscribe(score )

