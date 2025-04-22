const includes = async () => {
  const elements = document.querySelectorAll('[data-include]');
  for (let el of elements) {
    const file = el.getAttribute('data-include');

    // GitHub Pages에서도 동작하게 경로 처리
    const basePath = window.location.pathname.replace(/\/[^\/]*$/, '/');
    const fullPath = basePath + file;

    try {
      const res = await fetch(fullPath);
      if (!res.ok) throw new Error(`Fetch 실패: ${res.status} ${fullPath}`);

      const html = await res.text();
      el.innerHTML = html;

      if (html.includes('swiper')) {
        setTimeout(() => {
          initSwiper();
        }, 0);
      }
    } catch (err) {
      console.error('Include 에러:', err);
    }
  }
};

document.addEventListener('DOMContentLoaded', includes);
