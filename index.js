import Swiper from "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js";

const topSwiper = new Swiper(".top-swiper", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".top-swiper-button-next",
    prevEl: ".top-swiper-button-prev",
  },
});

const bottomSwiper = new Swiper(".bottom-swiper", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  // navigation: {
  //   nextEl: ".bottom-swiper-button-next",
  //   prevEl: ".bottom-swiper-button-prev",
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  spaceBetween: 25,
  slidesPerView: 3,
});
