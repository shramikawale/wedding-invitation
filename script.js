// Open Video Popup
const gif = document.getElementById("gifPreview");
const modal = document.getElementById("videoModal");
const closeBtn = document.querySelector(".close");

gif.addEventListener("click", () => {
modal.style.display = "flex";
});

// Close Video
closeBtn.addEventListener("click", () => {
modal.style.display = "none";
});

// Play Music When User Clicks Anywhere
document.body.addEventListener("click", function(){
const music = document.getElementById("bgMusic");
music.play();
}, { once: true });
