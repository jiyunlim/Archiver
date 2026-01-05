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
	/**/
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

	// 메모 기능
	const memoStorageKey = 'userMemos';
	
	// 메모 저장 함수
	function saveMemo(text) {
		if (!text.trim()) {
			alert('메모 내용을 입력해주세요.');
			return;
		}
		
		const memos = getMemos();
		const newMemo = {
			id: Date.now(),
			text: text.trim(),
			date: new Date().toISOString()
		};
		memos.push(newMemo);
		localStorage.setItem(memoStorageKey, JSON.stringify(memos));
		renderMemos();
		document.getElementById('memoInput').value = '';
	}
	
	// 메모 불러오기 함수
	function getMemos() {
		const stored = localStorage.getItem(memoStorageKey);
		return stored ? JSON.parse(stored) : [];
	}
	
	// 메모 삭제 함수
	function deleteMemo(id) {
		if (confirm('이 메모를 삭제하시겠습니까?')) {
			const memos = getMemos();
			const filtered = memos.filter(memo => memo.id !== id);
			localStorage.setItem(memoStorageKey, JSON.stringify(filtered));
			renderMemos();
		}
	}
	
	// 메모 목록 렌더링 함수
	function renderMemos() {
		const memoList = document.getElementById('memoList');
		const memos = getMemos();
		
		if (memos.length === 0) {
			memoList.innerHTML = '<p class="memo-empty">저장된 메모가 없습니다.</p>';
			return;
		}
		
		memoList.innerHTML = memos.map(memo => {
			const date = new Date(memo.date);
			const formattedDate = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
			return `
				<div class="memo-item">
					<div class="memo-item-content">
						<p class="memo-text">${memo.text.replace(/\n/g, '<br>')}</p>
						<span class="memo-date">${formattedDate}</span>
					</div>
					<button class="memo-delete-btn" onclick="deleteMemo(${memo.id})">삭제</button>
				</div>
			`;
		}).reverse().join('');
	}
	
	// 전역 함수로 등록 (HTML에서 onclick으로 사용하기 위해)
	window.deleteMemo = deleteMemo;
	
	// 저장 버튼 이벤트
	const saveMemoBtn = document.getElementById('saveMemoBtn');
	const memoInput = document.getElementById('memoInput');
	
	if (saveMemoBtn && memoInput) {
		saveMemoBtn.addEventListener('click', () => {
			saveMemo(memoInput.value);
		});
		
		// Enter 키로 저장 (Shift+Enter는 줄바꿈)
		memoInput.addEventListener('keydown', (e) => {
			if (e.key === 'Enter' && !e.shiftKey) {
				e.preventDefault();
				saveMemo(memoInput.value);
			}
		});
		
		// 모달이 열릴 때 메모 목록 로드
		const memoModal = document.getElementById('modalExample');
		if (memoModal) {
			const observer = new MutationObserver((mutations) => {
				mutations.forEach((mutation) => {
					if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
						if (!memoModal.classList.contains('hide')) {
							renderMemos();
						}
					}
				});
			});
			observer.observe(memoModal, { attributes: true });
		}
		
		// 초기 로드
		renderMemos();
	}

	console.log("I am Ready");

});
