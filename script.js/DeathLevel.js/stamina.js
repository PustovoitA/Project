import { staminaPlayerObserver } from "./staminaPlayerObserver.js";
import { heal } from "./healthPlayer.js";
import { help } from "./help.js";

staminaPlayerObserver.subscribe(heal);
staminaPlayerObserver.subscribe(help);

export const staminaItem = document.querySelector(".stamina-item");
export let staminaCounter = 0;
export function stamina(){
    staminaCounter += 10;
    staminaItem.style.width = staminaCounter + "%";

    if(staminaCounter === 100){
        staminaPlayerObserver.broadcast();
    }
}
export function setValue(value){
    staminaCounter = value;
}
export function getValue(){
    return staminaCounter;
}