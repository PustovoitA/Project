import { initLocalStorage, loadPerson } from "./common.js"

const defaultInitialLife = 3;

function createPerson (person_form){
    initLocalStorage(person_form.username.value);
    window.location.href = './level1.html'
}

document.querySelector("#userForm").addEventListener("submit", function() {
    event.preventDefault();
    createPerson(event.target.elements)
})

if (!localStorage.getItem('username') || Number(localStorage.getItem('life')) < 1) {
    document.getElementById('resume-game').style.display = "none"
}

document.getElementById('resume-game').addEventListener("click", function() {
    window.location.href = './level1.html'
})