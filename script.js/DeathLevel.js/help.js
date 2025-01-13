

export let helpItem = document.createElement("div");
export function help(){
    helpItem.textContent = "Heal - H";
    document.querySelector(".help").append(helpItem);
}