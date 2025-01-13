import { MainPlayer } from "./MainPlayer.js";
import { staminaItem, setValue, getValue, staminaCounter } from "./stamina.js";

    export function heal(){
    document.addEventListener("keydown",(event)=>{
        if(event.code === "KeyH"){
            if(staminaCounter >= 100){
                MainPlayer.hpPlayer = 100;
                MainPlayer.hpBarPlayer.style.width = MainPlayer.hpPlayer + "%";

                setValue(0);
                staminaItem.style.width = getValue() + "%";
                console.log(staminaCounter);
            }
        }
    });
}