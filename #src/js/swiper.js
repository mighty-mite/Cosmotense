const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 19
    },
    // when window width is >= 480px
    1200: {
      slidesPerView: 3,
      spaceBetween: 19
    },
    // when window width is >= 640px
    1440: {
      slidesPerView: 4,
      spaceBetween: 19
    }
  }
});
