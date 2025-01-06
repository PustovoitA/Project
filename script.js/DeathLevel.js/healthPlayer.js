import { MainPlayer } from "./MainPlayer.js";
import { staminaItem, setValue, getValue } from "./stamina.js";

    export function heal(){
    document.addEventListener("keydown",(event)=>{
        if(event.key === "h"){
            MainPlayer.hpPlayer = 100;
            MainPlayer.hpBarPlayer.style.width = MainPlayer.hpPlayer + "%";

            setValue(0);
            staminaItem.style.width = getValue() + "%";
        }
    });
}