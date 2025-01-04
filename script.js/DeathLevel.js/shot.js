import { animationOfShot } from "./animationOfShot.js";
import { shot } from "./shotObserver.js";
import { soundOfShot } from "./soundOfShot.js";

shot.subscribe(soundOfShot);
shot.subscribe(animationOfShot);

document.querySelector(".main").addEventListener("click", ()=>{
    shot.broadcast();
});