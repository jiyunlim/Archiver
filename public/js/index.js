document.addEventListener('DOMContentLoaded', function () {

	// ----
	const divHistories = document.querySelectorAll('.div-history');

	document.addEventListener('click', (e) => {
		divHistories.forEach(div => {
			const hiddenDiv = div.querySelector('.hidden_div');
			if (!hiddenDiv) return;

			if (div.contains(e.target)) {

				hiddenDiv.classList.toggle('active');
			} else {
				//영역 외 클릭 닫기
				hiddenDiv.classList.remove('active');
			}
		});
	});

	// ----
	const modalButtons = document.querySelectorAll("[data-pop]");

	modalButtons.forEach(button => {
		button.addEventListener("click", () => {
			const targetClass = button.dataset.pop; // data-pop 값
			const targetEl = document.querySelector(`.modal-root.${targetClass}`);

			if (targetEl) {
				targetEl.classList.remove("hide"); // 보이기
			}
		});
	});
	// ----
	const divModalRoot = document.querySelectorAll('.modal-root');

	divModalRoot.forEach(modal => {
		const _tsBtnClose = modal.querySelector('.modal-close');
		const _tsContDiv = modal.querySelector('.modal');
		if (_tsBtnClose && _tsContDiv) {
			_tsBtnClose.addEventListener('click', (e) => {
				e.stopPropagation();
				_tsContDiv.parentElement.classList.add("hide");
			});
		}
	});
	// ----
	const swiperCard = new Swiper('.swiper.card', {
		slidesPerView: 1,
		spaceBetween: 10,
		speed: 400,
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		observeParents: true,
		observer: true,
	});

	var swiperAuto = new Swiper(".swiper.auto", {
		grabCursor: true,
		effect: "creative",
		speed: 500,
		loop: true,
		creativeEffect: {
			prev: {
				shadow: true,
				translate: [0, 0, -400],
			},
			next: {
				translate: ["100%", 0, 0],
			},
		},
		observeParents: true,
		observer: true,
	});

	/*
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
	}*/

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

	/*
	var _navBtn = document.querySelectorAll('nav button');
	_navBtn.addEventListener("click", () => {
	  var _this = document.querySelector('nav');
	//  _navBtn.forEach(function (nav) {
	    _this.classList.addClass("active");
	//  });
	});
	*/

	// Code to run after the DOM is ready
	console.log("I am Ready");

});
