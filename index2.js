const { nextISSTimesForMyLocation } = require('./iss_promised');
const { convertPassTimes } = require('./index')

nextISSTimesForMyLocation()
  .then((passTimesArray) => {
    convertPassTimes(passTimesArray);
  })
  .catch((error) => {
    console.log("It Did not work: ", error.message)
  });