const express = require('express');
const path = require('path');
const app = express();

// 🔧 EJS 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 🔧 정적 파일 설정 (CSS, JS, 이미지 등)
app.use(express.static(path.join(__dirname, 'public')));

// ✅ 라우팅 (예시)
app.get('/', (req, res) => {
	res.render('index');
});

app.get('/about', (req, res) => {
	res.render('about');
});

// 🚀 Render용 포트 (환경변수 PORT가 없을 경우 3000 사용)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
