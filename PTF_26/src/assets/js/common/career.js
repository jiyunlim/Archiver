/* career.js
 * Data-driven career renderer
 */

const careerGroups = [
  {
    agency: '매디브(프리랜서)',
    items: [
      {
        period: '2026.01 ~ 2026.02',
        company: '일신 비츠온',
        role: 'PC/MO 웹 퍼블리싱 (메가존 사옥 상주)',
        desc: '일신 비츠온 MRO 사이트 리뉴얼 구축',
        link: 'https://vitsonmro.com/mro'
      },
      {
        period: '2024.03 ~ 2025.12',
        company: '잡코리아',
        role: 'UI 웹/모바일 퍼블리싱 (파견)',
        desc: '잡코리아, 게임잡, 알바몬 이벤트 UI 작업 및 사이트 운영'
      }
    ]
  },
  {
    agency: '이모션 글로벌',
    items: [
      {
        period: '2021.10 ~ 2023.12',
        company: 'SKT - T direct Shop',
        role: 'InApp, Web, WebMobile 퍼블리싱',
        desc: 'T direct Shop 개발기획 운영 및 고도화'
      }
    ]
  },
  {
    agency: '유디아이디',
    items: [
      {
        period: '2021.05 ~ 2021.09',
        company: '유디아이디',
        role: 'vue환경, 웹/모바일 퍼블리싱',
        desc: '자사 홈페이지 신규 구축 및 유지보수 UI 담당, 리소스 관리'
      }
    ]
  },
  {
    agency: '코디얼',
    items: [
      {
        period: '2018.03 ~ 2021.05',
        company: '코디얼',
        role: 'UI 웹/모바일 퍼블리싱',
        desc: '\n -고객 맞춤 그룹웨어 UI 퍼블리싱\n -사내 사이트 리뉴얼 및 유지보수\n -"Moim" 2020 내부 솔루션 개발(react,react-native)'
      }
    ]
  }
];

const projectGroups = [
  {
    title: '매디브(프리랜서)',
    items: [
      {
        name: '일신비츠온 MRO 사이트 리뉴얼',
        period: '2026.01 ~ 2026.02',
        details: [
          'PC / MO 웹 퍼블리싱 (메가존 사옥 상주)',
        ]
      }
    ]
  },
  {
    title: '잡코리아 프로젝트 (2024.03 - 2025.12)',
    items: [
      {
        name: '잡코리아 [매디브 소속]',
        period: '2024.03 ~ 2025.12',
        details: [
          '잡코리아 & 게임잡 & 알바몬 PC / MO 상시 운영',
          '2025 게임잡 공고 등록/공고뷰 UI 개선: PC'
        ]
      }
    ]
  },
  {
    title: '이모션 글로벌 프로젝트 (2021.10 - 2023.12)',
    items: [
      {
        name: 'SKT T DirectShop [이모션 글로벌]',
        period: '입사 ~ 2023-12',
        details: [
          '상시 운영 업무: PC / MO / InApp',
          '2022 T DirectShop 판매 기능 고도화: PC',
          '2022 & 2023 T DirectShop 고도화: 모바일(InApp), 1차 무선, 2차 유선'
        ]
      }
    ]
  },
  {
    title: 'UDDI 프로젝트 (2021.05 - 2021.09)',
    items: [
      {
        name: '결제 시스템 사이트 유지보수 [UDDI]',
        period: '입사 ~ 2021-09',
        details: [
          '자사 결제(PG) 시스템 사이트 유지보수',
          '결제 시스템 사이트 퍼블리싱 (vue.js 환경)'
        ]
      }
    ]
  },
  {
    title: '코디얼 프로젝트 (2018.03 - 2021.05)',
    items: [
      {
        name: '사내업무 [코디얼]',
        period: '2020-01-01 ~ 2020-12-31',
        details: [
          '홈페이지 개선 및 유지보수',
          '메인 및 상세 페이지 퍼블리싱: 전체 UI 퍼블리싱 담당'
        ]
      },
      {
        name: "'Moim' 2020 [코디얼]",
        period: '2020-04-13 ~ 2020-10-16',
        details: [
          '내부 협업 솔루션 개발',
          '전체 화면 퍼블리싱: UI 담당, react, react-native으로 작업'
        ]
      },
      {
        name: '정보통신정책연구원 [코디얼]',
        period: '2020-10-05 ~ 2021-04-01',
        details: [
          '업무 종합 관리 시스템(그룹웨어) 고도화',
        ]
      },
      {
        name: '진성티이씨 홈페이지 [코디얼]',
        period: '2020-08-03 ~ 2020-08-31',
        details: [
          '홈페이지 개선 (플래시 제거 및 개편)',
        ]
      },
      {
        name: '대신증권 [코디얼]',
        period: '2020-07-06 ~ 2020-08-31',
        details: [
          '동호회 기능 구축',
          '동호회 화면 퍼블리싱: UI 담당'
        ]
      },
      {
        name: '신용보증기금 차세대 [코디얼]',
        period: '2017-12-04 ~ 2018-11-30',
        details: [
          '그룹웨어 퍼블리싱: UI 담당 (2018.04 투입)'
        ]
      },
      {
        name: 'KBS 한국방송 [코디얼]',
        period: '2018-07-16 ~ 2018-11-30',
        details: [
          'KBS 코비스 그룹웨어 차세대, 기능 개선',
          '그룹웨어 퍼블리싱: UI 담당'
        ]
      },
      {
        name: '애큐온저축은행 [코디얼]',
        period: '2018-08-21 ~ 2018-12-30',
        details: [
          '애큐온저축은행 그룹웨어 재구축',
          '그룹웨어 퍼블리싱: UI 담당'
        ]
      },
      {
        name: '풍산홀딩스 [코디얼]',
        period: '2019-01-02 ~ 2019-07-12',
        details: [
          '풍산그룹 업무 포털 구축',
          '그룹웨어 퍼블리싱: UI 담당'
        ]
      },
      {
        name: '현대해상 [코디얼]',
        period: '2018-12-17 ~ 2019-12-30',
        details: [
          '관리 포털 시스템 구축 (용역 부문)',
          '포털 시스템 및 모바일 퍼블리싱: UI 지원 및 담당'
        ]
      },
      {
        name: '수도권매립지관리공사 [코디얼]',
        period: '2019-06-03 ~ 2019-07-19',
        details: [
          '포털 개선 용역',
          '그룹웨어 퍼블리싱: UI 담당'
        ]
      },
      {
        name: '하이트진로 [코디얼]',
        period: '2019-06-03 ~ 2019-10-04',
        details: [
          '탑피스 및 스마트오피스 고도화 도급 용역',
          '퍼블리싱: UI 수정 작업'
        ]
      },
      {
        name: '기술보증기금 [코디얼]',
        period: '2019-07-29 ~ 2019-09-20',
        details: [
          '동영상 게시판 구축',
          '동영상 게시판 퍼블리싱: UI 담당'
        ]
      },
      {
        name: '한솔 PNS IT 서비스부문 [코디얼]',
        period: '2019-03-05 ~ 2020-02-14',
        details: [
          'ECHO 차세대 재구축 (용역 부문)',
          'ECHO 그룹웨어 및 모바일 퍼블리싱: UI 담당'
        ]
      },
      {
        name: '부산관광공사 [코디얼]',
        period: '2019-03-05 ~ 2020-02-14',
        details: [
          '차세대 그룹웹 재구축 (용역 부문)',
          '그룹웨어 퍼블리싱: UI 담당'
        ]
      }
    ]
  }
];

let careerSwiperInstance = null;
let projectSwiperInstance = null;

function renderCareerList(containerId = 'career-list') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = careerGroups.map(group => `
    <div class="swiper-slide">
      <div class="career-slide">
        <h3>소속회사 : ${escapeHtml(group.agency)}</h3>
        ${group.items.map(item => `
          <article class="career-item">
            <p class="career-period">${escapeHtml(item.period)}</p>
            <p class="career-company"><span class="title">회사:</span> ${escapeHtml(item.company)}</p>
            <p class="career-role"><span class="title">직무:</span> ${escapeHtml(item.role)}</p>
            <p class="career-desc"><span class="title">업무:</span> ${formatDesc(item.desc)}${item.link ? `<br><a href="${escapeAttr(item.link)}" target="_blank" rel="noopener">${escapeHtml(item.link)}</a>` : ''}</p>
          </article>
        `).join('')}
      </div>
    </div>
  `).join('');

  initCareerSwiper();
}

function initCareerSwiper() {
  const swiperElement = document.querySelector('.career-swiper');
  if (!swiperElement || typeof Swiper === 'undefined') return;

  if (careerSwiperInstance) {
    careerSwiperInstance.update();
    return;
  }

  careerSwiperInstance = new Swiper(swiperElement, {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: false,
    pagination: {
      el: swiperElement.querySelector('.swiper-pagination'),
      type: 'fraction'
    },
    navigation: {
      nextEl: swiperElement.querySelector('.swiper-button-next'),
      prevEl: swiperElement.querySelector('.swiper-button-prev')
    },
    breakpoints: {
      768: {
        slidesPerView: 1
      },
      1024: {
        slidesPerView: 1
      }
    },
    autoplay: {
      delay: 3000,
      speed: 500,
      disableOnInteraction: false
    }
  });
}

function renderProjectList(containerId = 'project-list') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = projectGroups.flatMap(group =>
    group.items.map(item => `
      <div class="swiper-slide">
        <div class="project-slide">
          
          <article class="project-item">
            <p class="project-name"><span class="title">프로젝트:</span> ${escapeHtml(item.name)}</p>
            <p class="project-period"><span class="title">기간:</span> ${escapeHtml(item.period)}</p>
            <div class="project-desc"><span class="title">업무:</span> ${formatProjectDetails(item.details)}</div>
          </article>
        </div>
      </div>
    `)
  ).join('');

  initProjectSwiper();
}

function initProjectSwiper() {
  const swiperElement = document.querySelector('.project-swiper');
  if (!swiperElement || typeof Swiper === 'undefined') return;

  if (projectSwiperInstance) {
    projectSwiperInstance.update();
    return;
  }

  projectSwiperInstance = new Swiper(swiperElement, {
    direction: 'vertical',
    slidesPerView: 'auto',
    centerInsufficientSlides: false,
    spaceBetween: 8,
    loop: true,
    pagination: {
      el: swiperElement.querySelector('.swiper-pagination'),
      type: 'fraction'
    },
    navigation: {
      nextEl: swiperElement.querySelector('.swiper-button-next'),
      prevEl: swiperElement.querySelector('.swiper-button-prev')
    },
    speed: 5000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false
    }
  });
}

function formatProjectDetails(details) {
  if (!details) return '';
  if (Array.isArray(details)) {
    return `<ul class="project-detail-list">${details.map(detail => `<li>${escapeHtml(detail)}</li>`).join('')}</ul>`;
  }
  return escapeHtml(details).replace(/\n/g, '<br>');
}

function formatDesc(text) {
  if (!text) return '';
  return escapeHtml(text).replace(/\n/g, '<br>');
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeAttr(str) {
  return escapeHtml(str).replace(/"/g, '%22');
}

document.addEventListener('DOMContentLoaded', function() {
  renderCareerList();
  renderProjectList();
});
