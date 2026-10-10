import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const URL = process.env.TEST_URL || 'http://localhost:5173/';

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
  console.log('✓ Schema JSON-LD Present:', schemaExists ? `${schemaExists.name}` : 'FAILED');

  // Check Metro Mention
  const metroText = await page.evaluate(() => {
    return document.body.innerText.includes('Exit-D, New Market Metro station');
  });
  console.log('✓ Mentions "Exit-D, New Market Metro station":', metroText ? 'PASSED' : 'FAILED');

  // Check 3 Segments
  const segments = await page.evaluate(() => {
    return {
      segment1: !!document.querySelector('#students'),
      segment2: !!document.querySelector('#faculty'),
      segment3: !!document.querySelector('#classrooms'),
      contact: !!document.querySelector('#contact'),
    };
  });
  console.log('✓ 3 Segments present:', segments);

  // Check Classroom details in Segment III
  const classroomDetails = await page.evaluate(() => {
    const text = document.body.innerText;
    return {
      tenToThirty: text.includes('10 to 30') || text.includes('10–30'),
      singleSlot120To150: text.includes('120 to 150') || text.includes('120–150'),
      computerLab: text.toLowerCase().includes('computer lab'),
      counselingRooms: text.toLowerCase().includes('counseling room'),
      pantry: text.toLowerCase().includes('pantry'),
      separateWashrooms: text.toLowerCase().includes('separate washrooms for girls and boys') || text.toLowerCase().includes('separate washrooms for girls & boys'),
    };
  });
  console.log('✓ Segment III Facilities verified:', classroomDetails);

  // Check CTA Links (No tel links, has email, whatsapp, insta, x)
  const links = await page.evaluate(() => {
    return {
      callLinks: Array.from(document.querySelectorAll('a[href^="tel:"]')).map(a => a.href),
      emailLinks: Array.from(document.querySelectorAll('a[href^="mailto:"]')).map(a => a.href),
      waLinks: Array.from(document.querySelectorAll('a[href*="wa.me"]')).map(a => a.href),
      googleFormLinks: Array.from(document.querySelectorAll('a[href*="forms.gle"]')).map(a => a.href),
      instaLinks: Array.from(document.querySelectorAll('a[href*="instagram.com/silt.hub"]')).map(a => a.href),
      xLinks: Array.from(document.querySelectorAll('a[href*="x.com/ProfSMH"]')).map(a => a.href),
      mapIframe: !!document.querySelector('iframe[src*="openstreetmap.org"], iframe[src*="maps.google.com"]'),
    };
  });

  console.log(`✓ Phone 'tel:' CTA links count: ${links.callLinks.length} (Expected 0) -> ${links.callLinks.length === 0 ? 'PASSED' : 'FAILED'}`);
  console.log(`✓ Email CTA links count: ${links.emailLinks.length}:`, links.emailLinks[0]);
  console.log(`✓ WhatsApp CTA links count: ${links.waLinks.length}:`, links.waLinks[0]);
  console.log(`✓ Google Form links count: ${links.googleFormLinks.length}:`, links.googleFormLinks[0]);
  console.log(`✓ Instagram links count: ${links.instaLinks.length}:`, links.instaLinks[0]);
  console.log(`✓ X (Twitter) links count: ${links.xLinks.length}:`, links.xLinks[0]);
  console.log(`✓ Embedded Google Maps Iframe:`, links.mapIframe ? 'PASSED' : 'FAILED');

  // Take Full Desktop Screenshot
  await page.screenshot({ path: 'public/images/test-desktop-full.png', fullPage: true });
  console.log('✓ Full page desktop screenshot saved to public/images/test-desktop-full.png');

  // 2. Testing Mobile View (390x844)
  console.log('\n--- 2. Testing Mobile View (390x844) ---');
  await page.setViewport({ width: 390, height: 844 });
  await page.goto(URL, { waitUntil: 'networkidle0' });

  // Check Horizontal Overflow
  const hasHorizontalScroll = await page.evaluate(() => {
    return document.documentElement.scrollWidth > document.documentElement.clientWidth;
  });
  console.log('✓ Mobile Horizontal Overflow Check:', hasHorizontalScroll ? 'FAILED (Overflow detected)' : 'PASSED (Zero overflow)');

  // Check Mobile Sticky Bar Links (Email | WhatsApp | Student Form)
  const mobileBar = await page.evaluate(() => {
    const callBtn = document.querySelector('div.fixed.bottom-0 a[href^="tel:"]');
    const emailBtn = document.querySelector('div.fixed.bottom-0 a[href^="mailto:"]');
    const waBtn = document.querySelector('div.fixed.bottom-0 a[href*="wa.me"]');
    const formBtn = document.querySelector('div.fixed.bottom-0 a[href*="forms.gle"]');
    return { callBtn: !!callBtn, emailBtn: !!emailBtn, waBtn: !!waBtn, formBtn: !!formBtn };
  });
  console.log('✓ Mobile Sticky Bottom Bar (Email | WhatsApp | Student Form):', mobileBar);

  await page.screenshot({ path: 'public/images/test-mobile.png', fullPage: false });
  console.log('✓ Mobile screenshot saved to public/images/test-mobile.png');

  // Diagnostics Summary
  console.log('\n--- 3. Diagnostics Summary ---');
  console.log('Console Errors count:', consoleErrors.length);
  if (consoleErrors.length > 0) {
    consoleErrors.forEach(e => console.log('  [Console Error]:', e));
  }
  console.log('Page Errors count:', pageErrors.length);
  if (pageErrors.length > 0) {
    pageErrors.forEach(e => console.log('  [Page Error]:', e));
  }

  await browser.close();

  if (consoleErrors.length === 0 && pageErrors.length === 0 && !hasHorizontalScroll && links.callLinks.length === 0) {
    console.log('\n✅ All automated verification tests completed successfully!');
  } else {
    console.log('\n⚠️ Some checks reported issues.');
  }
}

runTests().catch(err => {
  console.error('Test execution failed:', err);
  process.exit(1);
});
