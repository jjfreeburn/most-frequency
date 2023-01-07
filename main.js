const findFrequency = function (array) {
  let maxCount = 0;
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let count = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j]) count++;
    }
    if (count > maxCount) {
      maxCount = count;
      result = array[i];
    }
  }
  return result;
};

const array = [7, 8, 9, 7, 7];
console.log(findFrequency(array));
