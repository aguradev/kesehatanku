let sliderVaksin = new Swiper(".vaksin-slider", {
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerGroup: 3,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
