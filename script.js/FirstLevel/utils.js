import * as settings from './settings.js'

export function drawHpBar(cb) {
    cb.healthbar_block.style.width = `${cb.width}vw`;
    cb.healthbar_block.style.left = `calc(${cb.left}vw)`;
    cb.healthbar_block.style.bottom = `calc(${cb.bottom}vh + ${cb.element.offsetHeight}px + 10px)`;
    cb.healthbar_block.style.height = `${cb.healthbar_height}px`;
    cb.red_healthbar.style.width = `calc(${cb.width}vw / ${settings.defaultMonsterHealth} * ${cb.health})`;
}