const { NotImplementedError } = require('../extensions/index.js');


function getSumOfDigits(n) {
  

  let sum = 0;
  let str = '' + n;
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    sum = sum + +arr[i];
    
    console.log(sum)
  }
  let rez = sum;
  if (rez < 10) {
    return rez;
  }
  else {
    return getSumOfDigits(rez)
  }  
}

module.exports = {
  getSumOfDigits
};