let bgSound = document.createElement("audio");
bgSound.src = "./audio/DeathLevel/backgroundAudio.mp3";

export function backgroundAudio(){
    bgSound.play();
    bgSound.volume = 0.10;
    bgSound.loop = true;
}
backgroundAudio();
