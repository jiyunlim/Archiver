function initFunction() {
  return;
}

// Swiper 초기화 함수 따로 분리
function initSwiper() {
  new Swiper('.main-swiper', {
    autoplay: true,
    speed: 1000,
    loop: true,
    effect: 'fade',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
}
