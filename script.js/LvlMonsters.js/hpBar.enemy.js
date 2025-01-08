class ObserverEnemy{
    constructor(){
        this.subscribers =[];
    }
    //виклик оповістити всіх хто підписаний
    broadcast(){
        this.subscribers.forEach(cb => cb());
    }
    subscribe(callback){
        this.subscribers.push(callback);
    }
    unsubscribe(callback){
    this.unsubscribers = this.subscribers
    .filter(cb => cb !== callback)
}

}
export const observEnemy = new ObserverEnemy()
