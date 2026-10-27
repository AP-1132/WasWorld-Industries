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
