import { drawHpBar } from './utils.js'

class ResizeHpBarObserver{
    constructor(){
        this.subscribers =[];
    }
    //виклик оповістити всіх хто підписаний
    broadcast(){
        this.subscribers.forEach(cb => {
            drawHpBar(cb);
        });
    }
    subscribe(callback){
        this.subscribers.push(callback);
    }
    unsubscribe(callback){
    this.unsubscribers = this.subscribers
    .filter(cb => cb !== callback)
}


}

export const HpBarObserver = new ResizeHpBarObserver()