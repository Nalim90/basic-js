const { NotImplementedError } = require('../extensions/index.js');


function transform(arr) {
  if (!(arr instanceof Array)) {
    throw Error(`'arr' parameter must be an instance of the Array!`);
  }
  else {
  
  let newArr = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] == `--discard-next`) {
      i = i + 2;
    }
    else if (arr[i] == `--discard-prev`) {
      if (count !== 0) {
        newArr.pop();      
        count--;
      }
      
    }
    else if (arr[i] == `--double-next`) {
      if (i !== arr.length - 1) {
        newArr[count] = arr[i+1];
        count++;
      }
    }
    else if (arr[i] == `--double-prev`){
      if ( i !== 0) {
        if (arr[i-2] !== `--discard-next`) {
          newArr[count] = arr[i-1];
          count++;
        }
      }
    }
    else {
      newArr[count] = arr[i];
      count++;
    }
    
  }
  return newArr;
}
}

module.exports = {
  transform
};