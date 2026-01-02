const https = require('https');

const urls = [
  'https://images.unsplash.com/photo-1501117716987-c8e0b6b4f0b0?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1505691723518-36a3d0d8b6d6?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1505691723519-7c6ecb9f3a7a?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1549187774-b4e9b0445b9b?auto=format&fit=crop&w=800&q=60'
];

function check(url) {
  return new Promise((resolve) => {
    const req = https.request(url, { method: 'HEAD' }, (res) => {
      resolve({ url, status: res.statusCode });
    });
    req.on('error', (err) => resolve({ url, error: err.message }));
    req.end();
  });
}

(async function () {
  for (const u of urls) {
    const r = await check(u);
    if (r.error) console.log(`${r.url} -> ERROR: ${r.error}`);
    else console.log(`${r.url} -> ${r.status}`);
  }
})();
