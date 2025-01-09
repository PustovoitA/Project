import { modal } from "./modal.js";
import { defeat } from "../common.js"

class Player {
    constructor(){
        this.hpPlayer = 100;
        this.hpBarPlayer = document.querySelector(".health-bar-item");
    }

    killPlayer=()=>{
        // defeat();
        modal();
    }
}

export const MainPlayer = new Player();