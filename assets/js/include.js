// include.js
const includes = async () => {
  const elements = document.querySelectorAll('[data-include]');
  for (let el of elements) {
    const file = el.getAttribute('data-include');
    const res = await fetch(file);
    if (res.ok) {
      const html = await res.text();
      el.innerHTML = html;

      if (html.includes('swiper')) {
        setTimeout(() => {
          initSwiper();
        }, 0); 
      }
    }
  }
};

document.addEventListener('DOMContentLoaded', includes);
