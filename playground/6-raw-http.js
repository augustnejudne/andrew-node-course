const https = require('https');

const darksky_accessToken = 'a1abd6d2c4c77d88dffa69c7a0825a37';
const darksky_URL = `https://api.darksky.net/forecast/${darksky_accessToken}/40,-75?units=si`;

const request = https.request(darksky_URL, (response) => {
  let data = '';
  response.on('data', (chunk) => {
    data = data + chunk.toString();
  });

  response.on('end', () => {
    const body = JSON.parse(data, undefined, 2);
    console.log(body);
  });
});

request.on('error', (error) => {
  console.log('========================');
  console.log('6-raw-http.js');
  console.log('ERROR');
  console.log(error);
  console.log('========================');
});

request.end();