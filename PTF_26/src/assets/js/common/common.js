/**
 * Common JavaScript
 * 공통으로 사용되는 자바스크립트 함수 및 기능
 */

// DOM이 완전히 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded');
  initCommon();
});

// 공통 초기화 함수
function initCommon() {
  // 공통 기능 초기화
  initSmoothScroll();
  initMobileMenu();
  initPopupModal();
}

function initPopupModal() {
  const popupButtons = document.querySelectorAll('.btn-popup');
  const modals = document.querySelectorAll('.popup-modal');
  const closeElements = document.querySelectorAll('[data-modal-close]');

  if (!popupButtons.length || !modals.length || !closeElements.length) return;

  const getTargetModal = (button) => {
    const targetSelector = button.dataset.modalTarget;
    if (targetSelector) {
      return document.querySelector(targetSelector);
    }
    return modals[0];
  };

  const toggleModal = (modal, show) => {
    if (!modal) return;
    modal.classList.toggle('active', show);
    modal.setAttribute('aria-hidden', show ? 'false' : 'true');
    document.body.style.overflow = show ? 'hidden' : '';
  };

  popupButtons.forEach(button => {
    const modal = getTargetModal(button);
    button.addEventListener('click', () => toggleModal(modal, true));
  });

  closeElements.forEach(element => {
    element.addEventListener('click', () => {
      const modal = element.closest('.popup-modal');
      toggleModal(modal, false);
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      modals.forEach(modal => {
        if (modal.classList.contains('active')) {
          toggleModal(modal, false);
        }
      });
    }
  });
}

// Smooth Scroll
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}

// Mobile Menu Toggle
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
    });
  }
}

// 유틸리티 함수들
const Utils = {
  // 클래스 토글
  toggleClass: (element, className) => {
    if (element) {
      element.classList.toggle(className);
    }
  },
  
  // 클래스 추가
  addClass: (element, className) => {
    if (element) {
      element.classList.add(className);
    }
  },
  
  // 클래스 제거
  removeClass: (element, className) => {
    if (element) {
      element.classList.remove(className);
    }
  },
  
  // HTTP GET 요청
  get: (url) => {
    return fetch(url).then(response => response.json());
  },
  
  // HTTP POST 요청
  post: (url, data) => {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => response.json());
  }
};
