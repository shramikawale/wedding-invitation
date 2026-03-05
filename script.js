const music = document.getElementById("bgMusic");

/* 🎵 Start Music on Tap */
document.addEventListener("click", () => {
  music.play();
}, { once: true });

/* 🌸 Create Falling Petals */
const petalContainer = document.querySelector(".petals");

function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");
  petal.innerHTML = "🌸";

  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = (5 + Math.random() * 5) + "s";
  petal.style.fontSize = (15 + Math.random() * 15) + "px";

  petalContainer.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 10000);
}

setInterval(createPetal, 300);

/* 💖 Hearts + ✨ Sparkles On Touch */
document.addEventListener("click", function (e) {

  // Heart at tap position
  const heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.classList.add("tap-heart");

  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 1000);

  // Sparkles
  for (let i = 0; i < 5; i++) {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");

    sparkle.style.left = (e.clientX + (Math.random()*20 - 10)) + "px";
    sparkle.style.top = (e.clientY + (Math.random()*20 - 10)) + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 800);
  }

});
