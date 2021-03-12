const request = require('request-promise-native');
//request-promise-native automatically returns a promise

const fetchMyIP = () => {
  return request('https://api.ipify.org?format=json');
};
const fetchCoordsByIP = (data) => { //this will take in json data for an ip
  const ip = JSON.parse(data).ip;
  return request(`https://freegeoip.app/json/${ip}`);
};
const fetchISSFlyOverTimes = (data) => { //takes in coordinate json data
  const coords = JSON.parse(data);
  return request(`http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`);
}


module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };