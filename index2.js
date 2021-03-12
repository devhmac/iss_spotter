const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss_promised');

fetchMyIP()
  //.then((ip) => { console.log(ip); })
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(body => console.log(body))