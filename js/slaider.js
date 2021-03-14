const slides = document.querySelectorAll(".MySlides");
const rightBtn = document.querySelector(".next");
const lefttBtn = document.querySelector(".prev");
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;

function showContent() {
  if (currentSlide > slides.length - 1) {
    currentSlide = 0;
  }
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  slides.forEach((slide) => {
    slide.classList.remove(".slaider_show");
    slide.classList.add("slaider_hide");
  });
  slides[currentSlide].classList.remove("slaider_hide");
  slides[currentSlide].classList.add("slaider_show");

  dots.forEach((dot) => {
    dot.classList.remove("active_slaider");
  });
  dots[currentSlide].classList.add("active_slaider");
}
showContent();

rightBtn.addEventListener("click", () => {
  currentSlide++;
  showContent();
});

lefttBtn.addEventListener("click", () => {
  currentSlide--;
  showContent();
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    dots.forEach((dot) => {
      dot.classList.remove("active_slaider");
    });
    showContent(index);
    dot.classList.add("active_slaider");
  });
});
