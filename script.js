const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

// Original GIF URL
const originalGifUrl = "https://media.giphy.com/media/FTGah7Mx3ss04PcasF/giphy.gif";

// New GIF URL for "Yes" response
const newGifUrl = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, I like you too!!";
  gif.src = newGifUrl; // Change the GIF to a new one
});

noBtn.addEventListener("mouseover", () => {
  moveNoBtn();
});

noBtn.addEventListener("click", () => {
  moveNoBtn();
});

function moveNoBtn() {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}
