const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const fse = require('fs-extra');

const distDir = path.join(__dirname, 'dist');
fse.emptyDirSync(distDir);

// public 폴더 복사
fse.copySync(path.join(__dirname, 'public'), path.join(distDir, 'public'));

const viewsDir = path.join(__dirname, 'views');
fs.readdirSync(viewsDir).forEach(file => {
  const filePath = path.join(viewsDir, file);
  const stat = fs.statSync(filePath);

  if (stat.isFile() && path.extname(file) === '.ejs') {
    const content = fs.readFileSync(filePath, 'utf-8');

    // 🔹 assetPath 전달
    const html = ejs.render(content, { assetPath: 'public' }, { filename: filePath });

    const outFile = path.join(distDir, path.basename(file, '.ejs') + '.html');
    fs.writeFileSync(outFile, html);
    console.log(`✅ Converted: ${file} → ${outFile}`);
  }
});
