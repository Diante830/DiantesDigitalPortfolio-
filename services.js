const hamburger = document.querySelector(".ham-menu");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");
}

let mybutton = document.getElementById("myBtn");

function hideNav() {
  $(".main-navigation-scroll").removeClass("is-visible").addClass("is-hidden");
}
function showNav() {
  $(".main-navigation-scroll").removeClass("is-hidden").addClass("is-visible");
  $(".main-navigation-scroll").addClass("shadow");
}

window.onload = (event) => {
  const carousel = document.querySelector(".carousel");
  const cardWidth = document.querySelector(".carousel-card").offsetWidth + 20; // Including margin
  const scrollRightBtn = document.getElementById("scroll-right");
  const scrollLeftBtn = document.getElementById("scroll-left");

  function scrollLeft() {
    carousel.scrollBy({ top: 0, left: -cardWidth, behavior: "smooth" });
  }

  function scrollRight() {
    carousel.scrollBy({ top: 0, left: cardWidth, behavior: "smooth" });
  }

  scrollRightBtn.addEventListener("click", () => scrollRight());
  scrollLeftBtn.addEventListener("click", () => scrollLeft());
};
