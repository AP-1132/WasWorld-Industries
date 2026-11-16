document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    type: "loop",
    perPage: 1,
    autoplay: true,
    pauseOnHover: false,
    interval: 7000,
    arrows: false,
  });
  splide.mount();
});

document
  .getElementById("hamburger-icon")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const mobileLinks = document.querySelector(".mobile-links");
    mobileLinks.classList.toggle("show");
    const hamburgerIcon = document.getElementById("hamburger-icon");
    hamburgerIcon.classList.toggle("open");
    const header = document.querySelector("header");
    header.classList.toggle("expanded");
  });
