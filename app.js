const express = require('express');
const path = require('path');
const app = express();

// EJS 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 정적 파일 경로
app.use(express.static(path.join(__dirname, 'public')));

// 🔹 모든 EJS에서 쓸 공통 변수
// 서버 실행 시: '', 정적 HTML 변환 시: 'public'
app.locals.assetPath = process.env.NODE_ENV === 'production' ? 'public' : '';

app.get('/', (req, res) => {
	res.render('index');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));