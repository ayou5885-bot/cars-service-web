import fs from 'fs';
import path from 'path';

const srcDir = path.resolve(process.cwd(), 'public/assets');
const destDir = path.resolve(process.cwd(), 'assets');

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else if (exists) {
    fs.copyFileSync(src, dest);
  }
}

if (fs.existsSync(srcDir)) {
  copyRecursiveSync(srcDir, destDir);
  console.log('Successfully synced public/assets to root assets/');
}
