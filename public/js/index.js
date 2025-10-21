document.addEventListener('DOMContentLoaded', function () {

  // ----
  const divHistories = document.querySelectorAll('.div-history');

  divHistories.forEach(div => {
    const hiddenDiv = div.querySelector('.hidden_div');
    const h2 = div.querySelector('h2');

    h2.addEventListener('mouseenter', () => {
      // alert();
      hiddenDiv.classList.add('active');
    });

    div.addEventListener('mouseleave', () => {
      hiddenDiv.classList.remove('active');
    });
  });
  
  // ----
  const divModalRoot = document.querySelectorAll('.modal-root');
  divModalRoot.forEach( modal =>{
    const _tsBtnClose = modal.querySelector('.modal-close');
    const _tsContDiv = modal.querySelector('.modal');
    if (_tsBtnClose && _tsContDiv){
      _tsBtnClose.addEventListener('click', (e)=>{
        e.stopPropagation();
        _tsContDiv.parentElement.classList.add("hide");
      });
    }
  });
  // ----
  const assetPath = "../";

  // 슬라이드 데이터만 배열로 관리
  const slideData = [
    { img: `${assetPath}images/new-error-img.png`, text: "Slide 1 설명" },
    { img: `${assetPath}images/new-error-img.png`, text: "Slide 2 설명" },
    { img: `${assetPath}images/new-error-img.png`, text: "Slide 3 설명" },
  ];

  const swiper = new Swiper('.swiper.card', {
    slidesPerView: 1,
    speed: 500,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    virtual: {
      slides: slideData.map(data => `
        <div class="slide-content">
          <img src="${data.img}" alt="">
          <p>${data.text}</p>
        </div>
      `),
    },
  });




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
console.log("I am Ready");

});
