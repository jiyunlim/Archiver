//document.addEventListener('DOMContentLoaded', function () {

// title 속성 값을 가져와 <h2> 태그 내부에 삽입
/*
setTimeout(() => {
  var components = document.querySelectorAll(".component-in");
  components.forEach(function (component) {
    var titleValue = component.getAttribute("title"); // title 속성 값 가져오기
    var heading = component.querySelector("h2.text-title");
    if (heading && titleValue) {
      heading.textContent = titleValue; // 값 삽입
    }
  });
}, 1300);
*/


// Swiper 초기화 함수 따로 분리
function initSwiper() {
  new Swiper('.main-swiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    speed: 800,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
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
}

//var _navBtn = document.querySelectorAll('nav button');
//_navBtn.addEventListener("click", () => {
//  var _this = document.querySelector('nav');
////  _navBtn.forEach(function (nav) {
//    _this.classList.addClass("active");
////  });
//});


// Code to run after the DOM is ready
console.log("DOM is fully loaded and parsed!");

//});
