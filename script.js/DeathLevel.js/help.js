

let helpItem = document.createElement("p");
export function help(){
    helpItem.textContent = "Heal - H";
    document.querySelector(".help").append(helpItem);
}