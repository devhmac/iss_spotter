const { fetchMyIp } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss')

// fetchMyIp((error, ip) => {
//   if (error) {
//     console.log('There was an Error: ', error);
//     return;
//   }
//   console.log('It worked! IP returned', ip);

// });

// fetchCoordsByIP('96.52.15.154', (error, data) => {
//   if (error) {
//     console.log('There was an Error: ', error);
//     return;
//   }
//   console.log('It worked here are the coordinates: ', data);

// });

fetchISSFlyOverTimes({ latitude: 53.5185, longitude: -113.6579 }, (error, data) => {
  if (error) {
    console.log('There was an Error: ', error);
    return;
  }
  console.log('It worked here are the flyOvers: ', data);
})