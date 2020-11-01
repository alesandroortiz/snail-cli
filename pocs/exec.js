const fetch = require('node-fetch');

(async function () {
  try {
    const res = await fetch(`https://api.glitch.com/projects/${process.env.G_PROJECT_ID}/exec`, {
      method: 'POST',
      headers: {
        'Authorization': process.env.G_PERSISTENT_TOKEN,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        command: process.argv.slice(2).join(' '),
      }),
    });
    console.log(res);
    console.log(res.headers);
    if (!res.ok) throw new Error('response not ok ' + res.status)
    const body = await res.json();
    console.log(body);
  } catch (e) {
    console.error(e);
  }
})();
