const { NotImplementedError } = require('../extensions/index.js');


function createDreamTeam(members) {
  let arr = [];
  if (members) {
    for (let i = 0; i < members.length; i++) {
      if (typeof(members[i]) == 'string') {
        let letter = members[i].trim();
        arr.push(letter[0].toUpperCase());
      }
    }
  }
  arr.sort();
  return arr.join('');
}

module.exports = {
  createDreamTeam
};