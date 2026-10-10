import puppeteer from 'puppeteer-core';

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const URL = 'http://localhost:5173/';

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ['--no-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  await page.goto(URL, { waitUntil: 'networkidle0' });

  const s1 = await page.$('#students');
  if (s1) await s1.screenshot({ path: 'public/images/test-segment1.png' });

  const s2 = await page.$('#faculty');
  if (s2) await s2.screenshot({ path: 'public/images/test-segment2.png' });

  const s3 = await page.$('#classrooms');
  if (s3) await s3.screenshot({ path: 'public/images/test-segment3.png' });

  const s4 = await page.$('#contact');
  if (s4) await s4.screenshot({ path: 'public/images/test-contact.png' });

  await browser.close();
  console.log('✓ All segment screenshots saved');
}

capture().catch(console.error);
