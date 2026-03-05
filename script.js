const music = document.getElementById("bgMusic");

/* =================================================
   🎵 AUTO PLAY MUSIC (Best Browser Compatible Way)
================================================= */

window.addEventListener("load", async () => {
  try {
    await music.play();
  } catch (err) {
    // Autoplay blocked → wait for user interaction
    document.addEventListener("click", playMusicOnce, { once: true });
    document.addEventListener("touchstart", playMusicOnce, { once: true });
  }
});

function playMusicOnce() {
  music.play();
}

/* =================================================
   🌸 CREATE FALLING ROSE PETALS
================================================= */

const petalContainer = document.querySelector(".petals");

function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");
  petal.innerHTML = "🌸";

  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = (5 + Math.random() * 5) + "s";
  petal.style.fontSize = (15 + Math.random() * 15) + "px";

  petalContainer.appendChild(petal);

  setTimeout(() => petal.remove(), 10000);
}

setInterval(createPetal, 300);

/* =================================================
   💖 HEARTS + ✨ SPARKLES ON TOUCH
================================================= */

document.addEventListener("click", function (e) {

  // 💖 Heart
  const heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.classList.add("tap-heart");

  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 1000);

  // ✨ Sparkles
  for (let i = 0; i < 6; i++) {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");

    sparkle.style.left = (e.clientX + (Math.random() * 20 - 10)) + "px";
    sparkle.style.top = (e.clientY + (Math.random() * 20 - 10)) + "px";

    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 800);
  }

});
