const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

const distDir = path.join(__dirname, 'dist');
const viewsDir = path.join(__dirname, 'views');

// 1️⃣ dist 폴더 초기화
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
} else {
  fs.readdirSync(distDir).forEach((file) => {
    const target = path.join(distDir, file);
    if (fs.existsSync(target)) {
      fs.rmSync(target, { recursive: true, force: true });
    }
  });
}

// 2️⃣ views 폴더에서 EJS 파일 변환 (루트의 .ejs만, partials 제외)
if (!fs.existsSync(viewsDir)) {
  console.error('❌ views 폴더가 없습니다.');
  process.exit(1);
}

let converted = 0;
fs.readdirSync(viewsDir).forEach((file) => {
  const filePath = path.join(viewsDir, file);
  const stat = fs.statSync(filePath);
  if (!stat.isFile() || path.extname(file) !== '.ejs') return;

  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const html = ejs.render(content, {
      assetPath: 'public',
      assetVersion: process.env.RENDER_GIT_COMMIT || 'dev'
    }, { filename: filePath });
    const outFile = path.join(distDir, path.basename(file, '.ejs') + '.html');
    fs.writeFileSync(outFile, html);
    console.log(`✅ Converted: ${file} → ${path.basename(outFile)}`);
    converted++;
  } catch (err) {
    console.error(`❌ 변환 실패 ${file}:`, err.message);
  }
});

console.log(`🎉 EJS 변환 완료 (${converted}개 파일)`);
