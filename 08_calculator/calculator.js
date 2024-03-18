const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
  return a - b;
};

const sum = function(array) {
  if(array.length === 0){
    return 0;
  }
	return array.reduce((total, elem) => total += elem );
};

const multiply = function(array) {
  return array.reduce((total, elem) => total *= elem );
};

const power = function(base,potencia) {
	return Math.pow(base,potencia);
};

const factorial = function(num) {
  if(num === 0){
    return 1;
  }

  return num * factorial(num-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
