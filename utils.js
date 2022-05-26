function isValidNumber(num) {
  return typeof num === 'number' && Number.isFinite(num);
}

function validateString(str, min, max) {
  return typeof str === 'string' && str.length >= min && str.length <= max;
}

function validateNumber(num, min, max, lastIncluded = false) {
  const isValid = isValidNumber(num) && num >= min;

  if (lastIncluded) {
    return isValid && num <= max;
  }

  return isValid && num < max;
}

module.exports = {
  isValidNumber,
  validateString,
  validateNumber,
};
