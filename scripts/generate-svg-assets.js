import fs from 'fs';
import path from 'path';

const logosDir = path.resolve(process.cwd(), 'public/assets/images/logos');
const iconsDir = path.resolve(process.cwd(), 'public/assets/images/icons');

[logosDir, iconsDir].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

const logos = {
  'rac.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" rx="6" fill="#f97316"/><text x="60" y="27" font-family="Arial, sans-serif" font-weight="900" font-size="24" fill="#ffffff" text-anchor="middle" letter-spacing="2">RAC</text></svg>`,
  'aa.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" rx="6" fill="#fbbf24"/><text x="60" y="28" font-family="Arial, sans-serif" font-weight="900" font-size="26" fill="#000000" text-anchor="middle">AA</text></svg>`,
  'trustpilot.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 40"><path d="M20 5l4.5 9.5 10.5 1.5-7.5 7.5 1.8 10.5L20 29l-9.3 5 1.8-10.5-7.5-7.5 10.5-1.5L20 5z" fill="#00b67a"/><text x="45" y="27" font-family="Arial, sans-serif" font-weight="800" font-size="22" fill="#191919">Trustpilot</text></svg>`,
  'motor-codes.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 40"><rect width="140" height="40" rx="6" fill="#1e3a8a"/><text x="70" y="25" font-family="Arial, sans-serif" font-weight="700" font-size="14" fill="#ffffff" text-anchor="middle">MOTOR CODES</text></svg>`,
  'michelin.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 40"><text x="70" y="26" font-family="Arial, sans-serif" font-weight="900" font-size="20" fill="#1d4ed8" text-anchor="middle" letter-spacing="1">MICHELIN</text></svg>`,
  'castrol.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" rx="6" fill="#15803d"/><text x="60" y="26" font-family="Arial, sans-serif" font-weight="900" font-size="20" fill="#ffffff" text-anchor="middle">Castrol</text></svg>`,
  'bosch.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><text x="60" y="27" font-family="Arial, sans-serif" font-weight="900" font-size="24" fill="#dc2626" text-anchor="middle" letter-spacing="1">BOSCH</text></svg>`,
  'press-bbc.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect x="15" y="8" width="26" height="24" fill="#0f172a"/><text x="28" y="25" font-family="Arial, sans-serif" font-weight="bold" font-size="16" fill="#fff" text-anchor="middle">B</text><rect x="47" y="8" width="26" height="24" fill="#0f172a"/><text x="60" y="25" font-family="Arial, sans-serif" font-weight="bold" font-size="16" fill="#fff" text-anchor="middle">B</text><rect x="79" y="8" width="26" height="24" fill="#0f172a"/><text x="92" y="25" font-family="Arial, sans-serif" font-weight="bold" font-size="16" fill="#fff" text-anchor="middle">C</text></svg>`,
  'press-autoexpress.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 40"><text x="80" y="25" font-family="Arial, sans-serif" font-weight="900" font-size="17" fill="#dc2626" text-anchor="middle" font-style="italic">AUTO EXPRESS</text></svg>`,
  'press-whatcar.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 40"><rect width="140" height="40" rx="4" fill="#2563eb"/><text x="70" y="26" font-family="Arial, sans-serif" font-weight="900" font-size="19" fill="#ffffff" text-anchor="middle">WHAT CAR?</text></svg>`
};

const icons = {
  'shield.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  'wrench.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  'star.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#eab308" stroke="#eab308" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  'check.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  'clock.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  'map-pin.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`
};

Object.entries(logos).forEach(([filename, svg]) => {
  fs.writeFileSync(path.join(logosDir, filename), svg);
});

Object.entries(icons).forEach(([filename, svg]) => {
  fs.writeFileSync(path.join(iconsDir, filename), svg);
});

console.log('Successfully generated SVG logos and icons in public/assets/images/logos and icons');
