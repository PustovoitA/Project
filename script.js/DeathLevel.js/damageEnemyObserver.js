class damageEnemyObserver {
    constructor(){
        this.subscribers = [];
    }

    broadcast(){
        this.subscribers.forEach(callback => callback());
    }

    subscribe(callback){
        this.subscribers.push(callback);
    }

    unsubscribe(funck){
        this.subscribers = this.subscribers
        .filter(callback => callback !== funck);
    }
}
export const hit = new damageEnemyObserver();