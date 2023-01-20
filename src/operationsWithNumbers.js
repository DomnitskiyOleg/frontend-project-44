export const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const checkIsNumberEven = (number) => number % 2 === 0;
export const findGcd = (a, b) => {
  if (a === 0 || b === 0) {
    return a || b;
  }
  let divider;
  const iteration = a < b ? a : b;
  for (let i = 1; i <= iteration; i += 1) {
    if (a % i === 0 && b % i === 0) {
      divider = i;
    }
  }
  return divider;
};
export const generateProgression = (startNumber, growIndex, progressionLength) => {
  let iteration = 1;
  const result = [];
  for (let i = startNumber; iteration <= progressionLength; i += growIndex) {
    iteration += 1;
    result.push(i);
  }
  return result;
};
export const checkIsNumberPrime = (number) => {
  if (number === 1) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0 || number === 1) {
      return false;
    }
  }
  return true;
};
