const request = require('request-promise-native');
//request-promise-native automatically returns a promise

const fetchMyIP = () => {
  return request('https://api.ipify.org?format=json');
};
const fetchCoordsByIP = (data) => { //this will take in json data for an ip
  const ip = JSON.parse(data).ip;
  return request(`https://freegeoip.app/json/${ip}`);
};


module.exports = { fetchMyIP, fetchCoordsByIP };