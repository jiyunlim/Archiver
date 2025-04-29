'use strict';

function initFunction() {
  return;
}

// Swiper 초기화 함수 따로 분리
function initSwiper() {
  new Swiper('.main-swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 500,
    loop: true,
    //mousewheel: true,
    //effect: 'fade',
    /*
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },*/
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar"
    },
    on: {
      init: function () {
        var _elFill = document.querySelector('.swiper-pagination-progressbar span');
        var _addEl = document.createElement("em");
        _elFill.append(_addEl);
      }
    }
  });
  return;
}
