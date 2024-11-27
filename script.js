const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const container = document.querySelector('.container');
const play = document.querySelector('#play');
const msg = document.querySelector('.msg');

function moveNoButton() {
  const containerdiv = container.getBoundingClientRect();//to get the boundries of the container div
  const btnWidth = noBtn.offsetWidth; //get width of no button
  const btnHeight = noBtn.offsetHeight; // get the height of no button

  const randomX = Math.random() * (containerdiv.width - btnWidth);
  const randomY = Math.random() * (containerdiv.height - btnHeight);

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

yesBtn.addEventListener("click",()=>{
    msg.classList.remove("hidden");
    container.classList.add("hidden");
});
play.addEventListener("click",() =>{
    msg.classList.add("hidden");
    container.classList.remove("hidden");
})
noBtn.addEventListener('mouseover', moveNoButton);
