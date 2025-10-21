## 2025.04 - 파일생성
https://jiyunlim.github.io/Archiver/
## 2025.10 - ejs 환경세팅
Archive/ 3000 실행
└─ npm start
## !important
Archive/
│
├─ package.json
├─ app.js
│
├─ views/
│   ├─ index.ejs
│   └─ partials/
│       ├─ header.ejs
│       ├─ history_01.ejs
│       ├─ history_02.ejs
│				├─ history_03.ejs
│				└─ history_04.ejs
│						└─ modal/
│				       ├─_modal_history_01.ejs
└─ public/
    ├─ css/
    ├─ scss/
    ├─ js/
		├─ font/
    └─ images/
		
## scss 컴파일 실행 명령어 
- npm run scss
## 터미널 실행 위치 
- /Archive/public/css
## notice
- 외부 플러그인 오픈 소스 사용 할 경우 scss 생성할 필요 없음 (assets/css/css 직접저장)
- 최초 깃에서 클론 받을 경우 npm install 필요

ex) css/
├── scss/
│   └── style.scss
├── css/
│   └── style.css   (자동 생성될 파일)
└── package.json

