const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;


function dateSample(sampleActivity) {

  if (typeof(sampleActivity) !== 'string') {
    return false;
  }
/*   if (+sampleActivity < 0) {
    return false;
  } */

  if (isNaN(+sampleActivity)) {
    return false;
  }
  else {
    let rez = Math.ceil((HALF_LIFE_PERIOD * Math.log(MODERN_ACTIVITY/(+sampleActivity)))/0.693);
    if (rez == Infinity) return false;
    if (rez == -Infinity) return false;
    if (isNaN(rez)) return false;
    if (rez < 0) return false;
    return rez;
  }
}

module.exports = {
  dateSample
};