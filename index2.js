const { nextISSTimesForMyLocation } = require('./iss_promised');

const convertPassTimes = (passTime) => {
  for (const pass of passTime) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    console.log(`Next pass on ${datetime} for ${pass.duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then((passTimesArray) => {
    convertPassTimes(passTimesArray);
  })
  .catch((error) => {
    console.log("It Did not work: ", error.message);
  });