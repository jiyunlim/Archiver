document.addEventListener('DOMContentLoaded', function () {

	// ----
	//	const divHistories = document.querySelectorAll('.div-history');
	//
	//	document.addEventListener('click', (e) => {
	//		divHistories.forEach(div => {
	//			const hiddenDiv = div.querySelector('.hidden_div');
	//			if (!hiddenDiv) return;
	//
	//			if (div.contains(e.target)) {
	//
	//				hiddenDiv.classList.toggle('active');
	//			} else {
	//				//영역 외 클릭 닫기
	//				hiddenDiv.classList.remove('active');
	//			}
	//		});
	//	});

	// ----
	/*
	const modalButtons = document.querySelectorAll("[data-pop]");

	modalButtons.forEach(button => {
		button.addEventListener("click", () => {
			const targetClass = button.dataset.pop; // data-pop 값
			const targetEl = document.querySelector(`.modal-root.${targetClass}`);
			const _tsBody = document.querySelector('body');

			if (targetEl) {
				targetEl.classList.remove("hide"); // 보이기
				_tsBody.setAttribute('style', 'overflow: hidden;');
			} else {
				_tsBody.setAttribute('style', 'overflow: auto;');
			}
		});
	});
	// ----
	const divModalRoot = document.querySelectorAll('.modal-root');

	divModalRoot.forEach(modal => {
		const _tsBtnClose = modal.querySelector('.modal-close');
		const _tsContDiv = modal.querySelector('.modal');
		const _tsBody = document.querySelector('body');

		if (_tsBtnClose && _tsContDiv) {
			_tsBtnClose.addEventListener('click', (e) => {
				e.stopPropagation();
				_tsContDiv.parentElement.classList.add("hide");
				_tsBody.setAttribute('style', 'overflow: auto;');
			});
		}
	}); */
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

	const swiperAuto = new Swiper(".swiper.auto", {
		grabCursor: true,
		effect: "creative",
		speed: 500,
		loop: true,
		pagination: {
			el: '.swiper-fraction',
			type: 'fraction',
			clickable: true,
		},
		autoplay: {
			delay: 3500,
			disableOnInteraction: false
		},
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
	// div-acodiant
	const accodiantEls = document.querySelectorAll(".div-accodiant");
	if (!accodiantEls.length) return;

	accodiantEls.forEach((el) => {
		const slideCount = el.querySelectorAll(".swiper-slide").length;
		const existingInstance = el.swiper; // Swiper가 DOM 노드에 보관하는 인스턴스

		if (slideCount > 1) {
			if (existingInstance) existingInstance.destroy(true, true);
			new Swiper(el, {
				slidesPerView: 1,
				spaceBetween: 20,
				breakpoints: {
					640: { slidesPerView: 1.5, spaceBetween: 20 },
					768: { slidesPerView: 1.5, spaceBetween: 20 },
					1024: { slidesPerView: 3.5, spaceBetween: 20 },
				},
				pagination: { el: el.querySelector(".swiper-fraction"), type: "fraction", clickable: true },
				navigation: {
					nextEl: el.querySelector('.swiper-button-next'),
					prevEl: el.querySelector('.swiper-button-prev'),
				},
			});
		} else {
			if (existingInstance) {
				existingInstance.destroy(true, true);
			}
			// 슬라이드가 1개 이하일 때 클래스명 추가
			const slides = el.querySelectorAll(".swiper-slide");
			slides.forEach(slide => {
				slide.classList.add("single-slide");
			});
		}
	});
	// ----
	const today = new Date();

	const day = today.getDate();
	const month = today.getMonth() + 1;
	const year = today.getFullYear();

	const formattedDate = `<div class="date-mm-yy">${year}.${month < 10 ? '0' : ''}${month}</div> 
												<div class="date-dd">Today ${day < 10 ? '0' : ''}${day}</div> `;

	document.getElementById('current-date').innerHTML = formattedDate;

	// ----


	console.log("I am Ready");

});
