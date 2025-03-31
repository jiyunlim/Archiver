$(document).ready(function () {
  "use strict";
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

  // HTML 요소의 높이 변수에 저장
  var contentsElement = document.getElementById('contents');
  var contentsHeight = contentsElement.offsetHeight;
  var style = $('#contents').attr('style');
  $(contentsElement).attr('style', contentsHeight + 'px');

  //Menu to section
  var _singleMenu = document.querySelectorAll('#nav>ul>li>a');
  $(_singleMenu).on('click', function (event) {
    event.preventDefault();
    $('#nav').addClass('fixed');
    var targetId = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(targetId).offset().top
    }, 450);
  });

  //Add,remove fixed class
  window.addEventListener('scroll', function () {
    requestAnimationFrame(function () {
      var targetElement = document.getElementById('contents');
      var lastScrollTop = 0;
      window.addEventListener('scroll', function () {
        var currentScrollTop = $(this).scrollTop();

        if (currentScrollTop > 260) {
          $('#nav').addClass('fixed');
        } else {
          // Scrolling up
          $('#nav').removeClass('fixed');
        }
        lastScrollTop = currentScrollTop;
      });
    });
  });
});
