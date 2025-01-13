import { idInterval } from "./IntervalDamage.js";

export function modal(){
    document.querySelector(".modal-window").style.display = "flex";
    clearInterval(idInterval);
}