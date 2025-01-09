 let bgSound = document.createElement("audio");
 bgSound.src = "./audio/DeathLevel/backgroundAudio.mp3";

 function backgroundAudio(){
     bgSound.volume = 0.10;
     bgSound.loop = true;
     bgSound.play();
 }
 
const message = document.createElement("div");
message.innerText = "Кликните чтобы включить музыку!";
message.style.position = "fixed";
message.style.top = "10px";
message.style.left = "30px";
message.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
message.style.color = "white";
message.style.padding = "20px";
message.style.borderRadius = "10px";
document.body.appendChild(message);

message.addEventListener("click", () => {
    backgroundAudio();
    message.remove();
}, { once: true });
