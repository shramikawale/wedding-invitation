// Play music when user clicks anywhere (browser required)

document.addEventListener("click", function () {
  const music = document.getElementById("bgMusic");
  music.play();
}, { once: true });
