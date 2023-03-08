/* Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
Print the result. */

const sqrSumAvr = (arr) => {
  const sqrArr = arr.map((num) => num * num);
  const sum = sqrArr.reduce((prev, current) => prev + current);
  const avr = sum / arr.length;
  return avr;
};

// console.log(sqrSumAvr([2,3]));