const express = require('express');
const app = express();
const PORT = 3000;

// EJS 설정
app.set('view engine', 'ejs');

// 정적 파일 경로 설정
app.use(express.static('public'));

// 라우팅
app.get('/', (req, res) => {
	res.render('index');
});

app.get('/about', (req, res) => {
	res.render('about');
});

// 서버 실행
app.listen(PORT, () => {
	console.log(`🚀 Server running on http://localhost:${PORT}`);
});
