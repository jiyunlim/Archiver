const includes = async () => {
  const elements = document.querySelectorAll('[data-include]');
  for (let el of elements) {
    const file = el.getAttribute('data-include');

    // 현재 파일 위치 기준 상대 경로 만들기
    const currentPath = window.location.pathname;
    const basePath = currentPath.substring(0, currentPath.lastIndexOf('/') + 1);
    const fullPath = basePath + file;

    try {
      const res = await fetch(fullPath);
      if (!res.ok) throw new Error(`Fetch 실패: ${res.status} (${res.url})`);

      const html = await res.text();
      el.innerHTML = html;

      if (html.includes('swiper')) {
        setTimeout(() => initSwiper(), 0);
      }
    } catch (err) {
      console.error('Include 에러:', err);
    }
  }
};

document.addEventListener('DOMContentLoaded', includes);