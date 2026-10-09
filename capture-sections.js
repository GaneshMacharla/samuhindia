import puppeteer from 'puppeteer-core';

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const URL = process.env.TEST_URL || 'http://localhost:5174/';

async function captureSections() {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ['--no-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  await page.goto(URL, { waitUntil: 'networkidle0' });

  // Capture About section
  const aboutEl = await page.$('#about');
  if (aboutEl) await aboutEl.screenshot({ path: 'public/images/test-section-about.png' });

  // Capture Programs section
  const programsEl = await page.$('#programs');
  if (programsEl) await programsEl.screenshot({ path: 'public/images/test-section-programs.png' });

  // Capture Faculty section
  const facultyEl = await page.$('#faculty-recruitment');
  if (facultyEl) await facultyEl.screenshot({ path: 'public/images/test-section-faculty.png' });

  // Capture Reviews section
  const reviewsEl = await page.$('#reviews');
  if (reviewsEl) await reviewsEl.screenshot({ path: 'public/images/test-section-reviews.png' });

  // Capture Location section
  const locationEl = await page.$('#location');
  if (locationEl) await locationEl.screenshot({ path: 'public/images/test-section-location.png' });

  await browser.close();
  console.log('✓ Section screenshots captured');
}

captureSections();
