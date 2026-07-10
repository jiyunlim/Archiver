const express = require('express');
const path = require('path');
const app = express();

// EJS 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// 🔹 공통 변수
app.locals.assetPath = '';
app.locals.assetVersion = process.env.RENDER_GIT_COMMIT || 'dev';

// 캐시 방지
app.use((req, res, next) => {
  if (req.path === '/' || req.path.endsWith('.html')) {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
  }
  next();
});

// 라우트
app.get('/', (req, res) => res.render('index'));
app.get('/index.html', (req, res) => res.render('index'));

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
