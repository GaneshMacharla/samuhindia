import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const URL = process.env.TEST_URL || 'http://localhost:5174/';

async function runTests() {
  console.log('🚀 Starting Automated Verification on Edge...');
  
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  const consoleErrors = [];
  const pageErrors = [];

  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  page.on('pageerror', err => {
    pageErrors.push(err.toString());
  });

  // 1. Desktop Test
  console.log('\n--- 1. Testing Desktop View (1280x900) ---');
  await page.setViewport({ width: 1280, height: 900 });
  await page.goto(URL, { waitUntil: 'networkidle0' });

  const title = await page.title();
  console.log('✓ Page Title:', title);

  // Check Schema JSON-LD
  const schemaExists = await page.evaluate(() => {
    const el = document.querySelector('script[type="application/ld+json"]');
    return el ? JSON.parse(el.textContent) : null;
  });
  console.log('✓ EducationalOrganization Schema Present:', schemaExists ? `${schemaExists.name} (${schemaExists['@type']})` : 'FAILED');

  // Check Hero Headline
  const heroText = await page.evaluate(() => {
    const h1 = document.querySelector('h1');
    return h1 ? h1.innerText.replace(/\s+/g, ' ').trim() : '';
  });
  console.log('✓ Hero Headline:', heroText);

  // Take Full Desktop Screenshot
  await page.screenshot({ path: 'public/images/test-desktop-full.png', fullPage: true });
  console.log('✓ Full page desktop screenshot saved to public/images/test-desktop-full.png');

  // Check CTA Links
  const links = await page.evaluate(() => {
    return {
      callLinks: Array.from(document.querySelectorAll('a[href^="tel:"]')).map(a => a.href),
      waLinks: Array.from(document.querySelectorAll('a[href*="wa.me"]')).map(a => a.href),
      googleFormLinks: Array.from(document.querySelectorAll('a[href*="forms.gle"]')).map(a => a.href),
      mapsLinks: Array.from(document.querySelectorAll('a[href*="maps.app.goo.gl"], a[href*="google.com/maps"]')).map(a => a.href),
    };
  });

  console.log(`✓ Verified ${links.callLinks.length} Phone CTA links:`, links.callLinks[0]);
  console.log(`✓ Verified ${links.waLinks.length} WhatsApp CTA links:`, links.waLinks[0]);
  console.log(`✓ Verified ${links.googleFormLinks.length} Google Form links:`, links.googleFormLinks[0]);
  console.log(`✓ Verified ${links.mapsLinks.length} Google Maps / Directions links`);

  // 2. Testing Tablet View
  console.log('\n--- 2. Testing Tablet View (768x1024) ---');
  await page.setViewport({ width: 768, height: 1024 });
  await page.goto(URL, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'public/images/test-tablet.png', fullPage: false });
  console.log('✓ Tablet screenshot saved to public/images/test-tablet.png');

  // 3. Testing Mobile View
  console.log('\n--- 3. Testing Mobile View (390x844) ---');
  await page.setViewport({ width: 390, height: 844 });
  await page.goto(URL, { waitUntil: 'networkidle0' });

  // Check Horizontal Overflow
  const hasHorizontalScroll = await page.evaluate(() => {
    return document.documentElement.scrollWidth > document.documentElement.clientWidth;
  });
  console.log('✓ Mobile Horizontal Overflow Check:', hasHorizontalScroll ? 'FAILED (Overflow detected)' : 'PASSED (Zero overflow)');

  // Check Mobile Sticky Bar Links
  const mobileBar = await page.evaluate(() => {
    const callBtn = document.querySelector('div.fixed.bottom-0 a[href^="tel:"]');
    const waBtn = document.querySelector('div.fixed.bottom-0 a[href*="wa.me"]');
    const formBtn = document.querySelector('div.fixed.bottom-0 a[href*="forms.gle"]');
    return { callBtn: !!callBtn, waBtn: !!waBtn, formBtn: !!formBtn };
  });
  console.log('✓ Mobile Sticky Bottom Bar (Call | WhatsApp | Google Form):', mobileBar);

  await page.screenshot({ path: 'public/images/test-mobile.png', fullPage: false });
  console.log('✓ Mobile screenshot saved to public/images/test-mobile.png');

  // Diagnostics Summary
  console.log('\n--- 4. Diagnostics Summary ---');
  console.log('Console Errors count:', consoleErrors.length);
  if (consoleErrors.length > 0) {
    consoleErrors.forEach(e => console.log('  [Console Error]:', e));
  }
  console.log('Page Errors count:', pageErrors.length);
  if (pageErrors.length > 0) {
    pageErrors.forEach(e => console.log('  [Page Error]:', e));
  }

  await browser.close();

  if (consoleErrors.length === 0 && pageErrors.length === 0 && !hasHorizontalScroll) {
    console.log('\n✅ All automated verification tests completed successfully!');
  } else {
    console.log('\n⚠️ Some checks reported errors.');
  }
}

runTests().catch(err => {
  console.error('Test execution failed:', err);
  process.exit(1);
});
