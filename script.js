const gif = document.getElementById("gifPreview");
const modal = document.getElementById("videoModal");
const closeBtn = document.querySelector(".close");
const video = document.getElementById("weddingVideo");

gif.onclick = function(){
modal.style.display = "flex";
video.play();
}

closeBtn.onclick = function(){
modal.style.display = "none";
video.pause();
}

window.onclick = function(e){
if(e.target == modal){
modal.style.display = "none";
video.pause();
}
}
