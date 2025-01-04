import { modal } from "./modal.js";

class Player {
    constructor(){
        this.hpPlayer = 100;
        this.hpBarPlayer = document.querySelector(".health-bar-item");
    }

    killPlayer=()=>{
        modal();
    }
}

export const MainPlayer = new Player();