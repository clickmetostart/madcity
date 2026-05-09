import fs from 'fs';

async function run() {
  const url = 'https://madcityhomeloans.com/veterans-america-on-tmj4s-the-morning-blend-2-6-2025/';
  const res = await fetch(url);
  const html = await res.text();
  fs.writeFileSync('temp_html_2.html', html, 'utf-8');
}

run();
