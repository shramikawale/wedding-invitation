// Play music when user taps anywhere (mobile optimized)

document.addEventListener("touchstart", playMusic, { once: true });
document.addEventListener("click", playMusic, { once: true });

function playMusic() {
  const music = document.getElementById("bgMusic");
  music.play();
}
