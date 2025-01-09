let mainCub=document.getElementById("main")

mainCub.addEventListener("click", () => {
    let aud = document.getElementById("audioShock")
    aud.play()
    aud.volume = 0.30;
})

export const hpAudio = () => {
    let hpAud = document.getElementById("hpAudio")
    hpAud.play()
    hpAud.volume = 0.30;
}

let audioFon = document.getElementById("audioFon")

const play = () => {
    audioFon.play()
    audioFon.volume = 0.05;
    audioFon.loop = true;
}
play()



