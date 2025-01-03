
const imgBlaster = document.querySelector('.img-blaster');
export function animationOfShot(){
    imgBlaster.classList.add('shooting');

    setTimeout(() => {
        imgBlaster.classList.remove('shooting');
      }, 200);
}