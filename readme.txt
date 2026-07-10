## 2025.04 - 파일생성
## 2025.10 - ejs 환경세팅
## Archive/ 3333 실행 + scss 컴파일 : npm start
##
## 중요
Archiver/
├─ app.js                # 기존 서버용
├─ package.json
├─ views/
│  ├─ index.ejs
│  └─ partials/
├─ public/
│  ├─ scss/
│  └─ css/
├─ convert.js            # new 스크립트
└─ dist/                 # 변환된 HTML 폴더

# 스크립트
- `npm start`      : 로컬 개발 (convert + sass watch + nodemon)
- `npm run serve`  : 서버만 실행 (배포용, Render 등)
- `npm run convert`: EJS → HTML 변환만
- `npm run sass`   : SCSS watch만


# notice
- 변환된 HTML을 위해 모든 ejs 경로 <%= assetPath %> 삽입 
- 외부 플러그인 오픈 소스 사용 할 경우 scss 생성할 필요 없음 (/css 직접저장)
- 최초 깃에서 클론 받을 경우 npm install 필요


