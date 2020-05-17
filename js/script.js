const land = document.querySelectorAll(".land"); //!Tangkap Element Tanah
const rat = document.querySelectorAll(".rat"); //!Tangkap Element Tikus
const scoreBoard = document.querySelector(".score-board"); //!Tangkap Elemen scoreboard
const pop = document.querySelector("#pop"); //!Tangkap audio

let landForward; //todo, Variable untuk mengecek.
let end = false; //todo, variable untuk menyatakan selesai.
let score = 0; //todo, variable score

//todo, Memunculkan Tikus Secara Random dan Tidak Mengulang 2 kali
function randomLand(land) {
  const l = Math.floor(Math.random() * land.length);
  const lRandom = land[l];
  if (lRandom == landForward) {
    randomLand(land);
  }
  landForward = lRandom;
  return lRandom;
}

//todo, Merandom Waktu
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

//Todo, Memunculkan Tikus
function popUpRat() {
  const lRandom = randomLand(land);
  const tRandom = randomTime(300, 1000);
  lRandom.classList.add("popup");

  setTimeout(() => {
    lRandom.classList.remove("popup");
    if (!end) {
      popUpRat();
    }
  }, tRandom);
}

//todo, Fungsi insialisasi mulai ,menambah durasi dan nilai
function play() {
  end = false;
  score = 0;
  scoreBoard.textContent = 0;
  popUpRat();
  setTimeout(() => {
    end = true;
  }, 10000);
}

//todo, fungsi papan skor ketika di hit
function hit() {
  score++;
  scoreBoard.textContent = score;
  pop.play();
  this.parentNode.classList.remove("popup");
}

rat.forEach((r) => {
  r.addEventListener("click", hit);
});
