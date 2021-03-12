const { nextISSTimesForMyLocation } = require('./iss');

const convertPassTimes = (passTime) => {
  for (const pass of passTime) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    console.log(`Next pass on ${datetime} for ${pass.duration} seconds!`);
  }
};


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log('It didnt work: ', error);
  }
  convertPassTimes(passTimes);
});

module.exports = { convertPassTimes };