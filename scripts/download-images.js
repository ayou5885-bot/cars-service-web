import fs from 'fs';
import path from 'path';
import https from 'https';

const baseDir = path.resolve(process.cwd(), 'public/assets/images');

const folders = ['hero', 'services', 'testimonials', 'logos', 'icons', 'gallery'];

folders.forEach(folder => {
  const dirPath = path.join(baseDir, folder);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

// We use curated, high-res Unsplash photography matching exact automotive requirements
const imagesToDownload = [
  // Hero
  { folder: 'hero', name: 'hero-main.jpg', url: 'https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=1600&q=85' },
  { folder: 'hero', name: 'hero-floating.jpg', url: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80' },
  { folder: 'hero', name: 'workshop-banner.jpg', url: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1600&q=80' },
  
  // Services (matching exact service descriptions)
  { folder: 'services', name: 'servicing.jpg', url: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80' },
  { folder: 'services', name: 'mot.jpg', url: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=800&q=80' },
  { folder: 'services', name: 'brakes.jpg', url: 'https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?auto=format&fit=crop&w=800&q=80' },
  { folder: 'services', name: 'diagnostics.jpg', url: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80' },
  { folder: 'services', name: 'tyres.jpg', url: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80' },
  { folder: 'services', name: 'ac.jpg', url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80' },
  { folder: 'services', name: 'engine.jpg', url: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=800&q=80' },
  { folder: 'services', name: 'clutch.jpg', url: 'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=800&q=80' },
  { folder: 'services', name: 'timing-belt.jpg', url: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80' },
  { folder: 'services', name: 'battery.jpg', url: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&w=800&q=80' },
  { folder: 'services', name: 'exhaust.jpg', url: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c359?auto=format&fit=crop&w=800&q=80' },
  { folder: 'services', name: 'fleet.jpg', url: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80' },
  { folder: 'services', name: 'suspension.jpg', url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80' },
  { folder: 'services', name: 'bodywork.jpg', url: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80' },

  // Testimonials
  { folder: 'testimonials', name: 'customer-1.jpg', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80' },
  { folder: 'testimonials', name: 'customer-2.jpg', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80' },
  { folder: 'testimonials', name: 'customer-3.jpg', url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80' },
  { folder: 'testimonials', name: 'customer-4.jpg', url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80' },
  { folder: 'testimonials', name: 'customer-5.jpg', url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80' },
  { folder: 'testimonials', name: 'customer-6.jpg', url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80' },

  // Gallery (repository only)
  { folder: 'gallery', name: 'workshop-1.jpg', url: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80' },
  { folder: 'gallery', name: 'workshop-2.jpg', url: 'https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=1200&q=80' },
  { folder: 'gallery', name: 'workshop-3.jpg', url: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80' },
  { folder: 'gallery', name: 'equipment-1.jpg', url: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=1200&q=80' },
];

function downloadImage(img) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(baseDir, img.folder, img.name);
    if (fs.existsSync(filePath)) {
      resolve(`Exists: ${img.folder}/${img.name}`);
      return;
    }
    const file = fs.createWriteStream(filePath);
    https.get(img.url, (response) => {
      if (response.statusCode === 200 || response.statusCode === 302) {
        if (response.headers.location) {
          https.get(response.headers.location, (res2) => {
            res2.pipe(file);
            file.on('finish', () => {
              file.close();
              resolve(`Downloaded: ${img.folder}/${img.name}`);
            });
          }).on('error', err => {
            fs.unlink(filePath, () => {});
            reject(err);
          });
        } else {
          response.pipe(file);
          file.on('finish', () => {
            file.close();
            resolve(`Downloaded: ${img.folder}/${img.name}`);
          });
        }
      } else {
        file.close();
        fs.unlink(filePath, () => {});
        resolve(`Failed (${response.statusCode}): ${img.folder}/${img.name}`);
      }
    }).on('error', (err) => {
      fs.unlink(filePath, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log('Downloading high-res automotive photography...');
  try {
    const results = await Promise.all(imagesToDownload.map(img => downloadImage(img)));
    console.log(`Successfully processed ${results.length} images.`);
  } catch (err) {
    console.error('Error downloading images:', err);
  }
}

run();
