const { fetchMyIP, fetchCoordsByIP } = require('./iss_promised');

fetchMyIP()
  //.then((ip) => { console.log(ip); })
  .then(fetchCoordsByIP)
  .then(coords => console.log(coords))