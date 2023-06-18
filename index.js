// Your code here
function mapToNegativize(sourceArray) {
  return sourceArray.map(num => num * -1);
}

function mapToNoChange(sourceArray) {
  return sourceArray.map(item => item);
}

function mapToDouble(sourceArray) {
  return sourceArray.map(num => num * 2);
}

function mapToSquare(sourceArray) {
  return sourceArray.map(num => num * num);
}

function reduceToTotal(sourceArray, startingPoint=0) {
  return sourceArray.reduce((total, num) => total + num, startingPoint);
}

function reduceToAllTrue(sourceArray) {
  return sourceArray.reduce((accumulator, currentValue) => !!accumulator && !!currentValue);
}

function reduceToAnyTrue(sourceArray) {
  return sourceArray.some(value => !!value);
}
