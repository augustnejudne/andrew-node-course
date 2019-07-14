const request = require('request');
const readline = require('./readline.js');

const getGeoCode = (address, callback) => {
  const mapbox_accessToken = 'pk.eyJ1IjoiYXVndXN0bmVqdWRuZSIsImEiOiJjankxNml4aDUwYXJuM2pteDU4N2VmeDNuIn0.RDelID7nCOhCfcQ83bCZVQ';
  const mapbox_URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address,
  )}.json?access_token=${mapbox_accessToken}&limit=5&types=place`;

  request({ url: mapbox_URL, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to location services!', undefined);
      readline.close();
      return;
    }
    if (response.body.features.length === 0) {
      callback(`Unable to locate address: ${address}. Try another search.`, undefined);
      readline.close();
      return;
    }
    response.body.features.forEach((feature, index) => {
      console.log(`${index + 1}, ${feature.place_name}`);
    });
    readline.question('\nPick Location: ', choice => {
      choice = parseInt(choice - 1);
      // console.log('========================');
      // console.log('getGeoCode.js');
      // console.log('choice');
      // console.log(choice);
      // console.log('========================');
      if (isNaN(choice) || choice > response.body.features.length - 1 || choice < 0) {
        console.log('Invalid choice');
        readline.close();
        return;
      }
      callback(undefined, {
        latitude: response.body.features[choice].center[0],
        longitude: response.body.features[choice].center[1],
        location: response.body.features[choice].place_name,
      });
      readline.close();
    });

    return;
  });
};

module.exports = getGeoCode;
