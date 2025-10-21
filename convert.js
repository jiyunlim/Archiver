const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

// 1️⃣ dist 폴더 초기화
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir);
fs.readdirSync(distDir).forEach(file => {
  fs.rmSync(path.join(distDir, file), { recursive: true, force: true });
});

// 2️⃣ views 폴더에서 EJS 파일 변환
const viewsDir = path.join(__dirname, 'views');
fs.readdirSync(viewsDir).forEach(file => {
  const filePath = path.join(viewsDir, file);
  const stat = fs.statSync(filePath);

  // 파일이면서 .ejs인 경우
  if (stat.isFile() && path.extname(file) === '.ejs') {
    const content = fs.readFileSync(filePath, 'utf-8');

    // 🔹 assetPath 전달 (정적 HTML용)
    const html = ejs.render(content, { assetPath: 'public' }, { filename: filePath });

    const outFile = path.join(distDir, path.basename(file, '.ejs') + '.html');
    fs.writeFileSync(outFile, html);
    console.log(`✅ Converted: ${file} → ${outFile}`);
  }
});

console.log('🎉 All EJS files converted to HTML!');
