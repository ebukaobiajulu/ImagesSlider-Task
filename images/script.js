const slides = document.querySelectorAll(".slides");
const carouselImages = document.querySelectorAll(".slides img");
const totalSlides = slides.length;

// Buttons
const previousBtn = document.querySelector("#previous");
const nextBtn = document.querySelector("#next");

let slidePosition = 0;

nextBtn.addEventListener("click", function () {
  moveToNextSlide();
});

previousBtn.addEventListener("click", function () {
  moveToPreviousSlide();
});

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove("visible");
    slide.classList.add("hidden");
  }
  slides[slidePosition].classList.add('visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlidePosition();
}

function moveToPreviousSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  updateSlidePosition();
}
