const express = require('express');
const path = require('path');
const app = express();

// EJS 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// 🔹 공통 변수
app.locals.assetPath = '';

// 라우트
app.get('/', (req, res) => res.render('index'));
app.get('/index.html', (req, res) => res.render('index'));

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
