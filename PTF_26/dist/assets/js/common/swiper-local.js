(function (global) {
  class Swiper {
    constructor(element, options = {}) {
      this.element = element;
      this.options = options;
      this.wrapper = element.querySelector('.swiper-wrapper');
      this.slides = this.wrapper ? Array.from(this.wrapper.children) : [];
      this.currentIndex = 0;
      this.direction = options.direction || 'horizontal';
      this.loop = Boolean(options.loop);
      this.transitionDuration = typeof options.speed === 'number' ? options.speed : 500;
      const rawDelay = options.autoplay && typeof options.autoplay.delay === 'number' ? options.autoplay.delay : 0;
      this.autoplayDelay = rawDelay > 0 ? rawDelay : 1500;
      this.autoplayTimer = null;
      this.paginationEl = options.pagination && options.pagination.el ? options.pagination.el : null;
      this.paginationType = options.pagination && options.pagination.type ? options.pagination.type : null;
      this.nextEl = options.navigation && options.navigation.nextEl ? options.navigation.nextEl : null;
      this.prevEl = options.navigation && options.navigation.prevEl ? options.navigation.prevEl : null;

      if (!this.wrapper || this.slides.length === 0) return;

      this.bindEvents();
      this.update();
      this.startAutoplay();
    }

    bindEvents() {
      if (this.nextEl) {
        this.nextEl.addEventListener('click', () => this.slideNext());
      }
      if (this.prevEl) {
        this.prevEl.addEventListener('click', () => this.slidePrev());
      }
      if (this.element) {
        this.element.addEventListener('mouseenter', () => this.stopAutoplay());
        this.element.addEventListener('mouseleave', () => this.startAutoplay());
      }
    }

    update() {
      this.recalculate();
      this.updatePagination();
      this.updateNavigation();
    }

    recalculate() {
      if (!this.wrapper || this.slides.length === 0) return;

      const slideSize = this.direction === 'vertical'
        ? this.slides[0]?.offsetHeight || this.element.offsetHeight || 0
        : this.slides[0]?.offsetWidth || this.element.offsetWidth || 0;

      this.wrapper.style.transition = `transform ${this.transitionDuration}ms ease`;
      this.wrapper.style.display = 'flex';
      this.wrapper.style.flexDirection = this.direction === 'vertical' ? 'column' : 'row';

      if (this.direction === 'vertical') {
        this.wrapper.style.transform = `translateY(-${this.currentIndex * slideSize}px)`;
      } else {
        this.wrapper.style.transform = `translateX(-${this.currentIndex * slideSize}px)`;
      }
    }

    slideNext() {
      const total = this.slides.length;
      if (!total) return;
      this.currentIndex = this.loop ? (this.currentIndex + 1) % total : Math.min(this.currentIndex + 1, total - 1);
      this.recalculate();
      this.updatePagination();
      this.updateNavigation();
    }

    slidePrev() {
      const total = this.slides.length;
      if (!total) return;
      this.currentIndex = this.loop ? (this.currentIndex - 1 + total) % total : Math.max(this.currentIndex - 1, 0);
      this.recalculate();
      this.updatePagination();
      this.updateNavigation();
    }

    updatePagination() {
      if (!this.paginationEl || !this.paginationType) return;

      if (this.paginationType === 'fraction') {
        const total = this.slides.length;
        this.paginationEl.textContent = `${this.currentIndex + 1} / ${total}`;
      }
    }

    updateNavigation() {
      if (!this.nextEl || !this.prevEl) return;
      this.nextEl.classList.toggle('swiper-button-disabled', !this.loop && this.currentIndex >= this.slides.length - 1);
      this.prevEl.classList.toggle('swiper-button-disabled', !this.loop && this.currentIndex <= 0);
    }

    startAutoplay() {
      if (!this.autoplayDelay || this.autoplayDelay <= 0) return;
      if (this.autoplayTimer) clearInterval(this.autoplayTimer);
      this.autoplayTimer = setInterval(() => this.slideNext(), this.autoplayDelay);
    }

    stopAutoplay() {
      if (this.autoplayTimer) {
        clearInterval(this.autoplayTimer);
        this.autoplayTimer = null;
      }
    }
  }

  global.Swiper = Swiper;
})(window);
