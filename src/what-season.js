const { NotImplementedError } = require('../extensions/index.js');


function getSeason(date) {

  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (!(date instanceof Date)) {
    throw Error('Invalid date!');
  }

  if (Object.getOwnPropertyNames(date).length > 0) {
    throw Error('Invalid date!');
  }


  let a = date.getMonth();
  if (a == 0) {
    return 'winter'
  }
  if (a == 1) {
    return 'winter'
  }
  if (a == 2) {
    return 'spring'
  }
  if (a == 3) {
    return 'spring'
  }
  if (a == 4) {
    return 'spring'
  }
  if (a == 5) {
    return 'summer'
  }
  if (a == 6) {
    return 'summer'
  }
  if (a == 7) {
    return 'summer'
  }
  if (a == 8) {
    return 'autumn'
  }
  if (a == 9) {
    return 'autumn'
  }
  if (a == 10) {
    return 'autumn'
  }
  if (a == 11) {
    return 'winter'
  }

}

module.exports = {
  getSeason
};