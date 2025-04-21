function initFunction() {
  
  var swiperMain = new Swiper('.main-swiper', {
    autoplay: true,
    speed: 600,
    loop: true,
    effect: 'fade',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
//  return;
} 
//initFunction();