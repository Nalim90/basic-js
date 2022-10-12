const { NotImplementedError } = require('../extensions/index.js');


function deleteDigit(n) {

  let num = n.toString();
  let arr = [];
  for (let i = 0; i < num.length; i++) {
    let str = '';
    for (let j = 0; j < num.length; j++) {
      if (j !== i)
      str = str + num[j];
    }
    arr[i] = +str;
  }
  return Math.max(...arr);
}

module.exports = {
  deleteDigit
};