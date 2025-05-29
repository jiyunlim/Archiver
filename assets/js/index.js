'use strict';
// title 속성 값을 가져와 <h2> 태그 내부에 삽입
setTimeout(() => {
  var components = document.querySelectorAll(".component-in"); // 모든 요소 선택
  components.forEach(function (component) {
    var titleValue = component.getAttribute("title"); // title 속성 값 가져오기
    var heading = component.querySelector("h2.text-title"); // 해당 요소 내 <h2> 찾기
    if (heading && titleValue) {
      heading.textContent = titleValue; // 값 삽입
    }else { }
  });
}, 1500);


// Swiper 초기화 함수 따로 분리
function initSwiper() {
  new Swiper('.main-swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 800,
    loop: true,
    /**/
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    scrollbar: {
      el: ".swiper-pagination"
    }
  });
  return;
}
