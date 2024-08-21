document.addEventListener("copy", function (event) {
  // Prevent the default action of copying the content when Ctrl + C is pressed
  event.preventDefault();
});

const swiper = new Swiper('.slider-wrapper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{
    450:{
      slidesPerView:1,
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 30,
    },
    1024: {
        slidesPerView: 3,
        spaceBetween: 20,
    },
  },
});