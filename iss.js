
// Makes a single API request to retrieve the user's IP address.
// * Input:
// *   - A callback (to pass back an error or the IP string)
// * Returns (via Callback):
// *   - An error, if any (nullable)

const request = require("request");

// *   - The IP address as a string (null if error). Example: "162.245.144.188"
const fetchMyIp = (callback) => {
  //request to ipify api
  request('https://api.ipify.org/?format=json', (error, response, body) => {
    //if error, pass it into callback
    if (error) return callback(error, null); //null represents the ip arg being unsuccessful
    if (response.statusCode !== 200) {
      callback(Error(`There was a problem with your request, status code: ${response.statusCode}`), null);
      return;
    }
    //turn JSON into object
    const ipReturn = JSON.parse(body).ip;
    //successful, pass ipReturn.ip into callback in the ip arg spot
    callback(null, ipReturn);
  });
};

const fetchCoordsByIP = (ip, callback) => {
  request('https://freegeoip.app/json/', (error, response, body) => {
    if (error) return callback(error, null);
    if (response.statusCode !== 200) {
      callback(Error(`There was a problem with your request, status code: ${response.statusCode}`), null);
      return;
    }
    const latLongReturn = JSON.parse(body);

    const { latitude, longitude } = latLongReturn;

    callback(null, { latitude, longitude });
  });
};

const fetchISSFlyOverTimes = (coords, callback) => {
  request(`http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`, (error, response, body) => {
    if (error) return callback(error, null);
    const flyOverReturn = JSON.parse(body)
    if (response.statusCode !== 200) {
      callback(Error(`There was a problem with your request, status code: ${response.statusCode}, ${flyOverReturn.reason}`), null);
      return;
    }

    callback(null, flyOverReturn.response)
  })


}



module.exports = {
  fetchMyIp,
  fetchCoordsByIP,
  fetchISSFlyOverTimes
};