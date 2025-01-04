let bgSound = document.createElement("audio");
bgSound.src = "./audio/DeathLevel/backgroundAudio.mp3";
function backgroundAudio(){
    bgSound.play();
    bgSound.volume = 0.20;
    bgSound.loop = true;
}
backgroundAudio();
