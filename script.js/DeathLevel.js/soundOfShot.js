let audioShot = document.createElement("audio");
audioShot.src = "./audio/DeathLevel/shot.mp3";

export function soundOfShot(){
    audioShot.play();
    audioShot.valume = 0.20;
}