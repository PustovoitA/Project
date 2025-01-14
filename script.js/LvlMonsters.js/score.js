import {ObserverKill} from "./killEnemObserv.js"
 let num = 0
const score = ()=>{
    num ++
    document.getElementById("killedEnemy").textContent = num
}

ObserverKill .subscribe(score )

