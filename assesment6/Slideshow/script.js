let index = 0
let images = document.querySelectorAll(".pics")

function showimages() {
  images[index].classList.remove("active");
  index = (index + 1) % images.length;
  images[index].classList.add("active")
}

setInterval(showimages,2000)


