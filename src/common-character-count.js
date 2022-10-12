const { NotImplementedError } = require('../extensions/index.js');


function getCommonCharacterCount(s1, s2) {

  let arr = s2.split('');
  let len = arr.length;
  for (let i = 0; i < s1.length; i++) {
    if (arr.includes(s1[i])) {
      let c = arr.indexOf(s1[i]);
      arr.splice(c, 1);
    }
  }
  let len2 = arr.length;
  return len - len2
}

module.exports = {
  getCommonCharacterCount
};