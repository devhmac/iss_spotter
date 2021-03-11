
// Makes a single API request to retrieve the user's IP address.
// * Input:
// *   - A callback (to pass back an error or the IP string)
// * Returns (via Callback):
// *   - An error, if any (nullable)

const request = require("request");

// *   - The IP address as a string (null if error). Example: "162.245.144.188"
const fetchMyIp = (callback) => {
  //request to ipify api
  request('https://api.ipify.org?format=json', (error, response, body) => {
    //if error, pass it into callback
    if (error) return callback(error);
    if (response.statusCode !== 200) return callback('There was a problem with your request, status code not 200');
    //turn JSON into object
    const ipReturn = JSON.parse(body);
    //successful, pass ipReturn.ip into callback in the ip arg spot
    return callback(error, ipReturn.ip);
  });
};

//fetchMyIp()
module.exports = { fetchMyIp };