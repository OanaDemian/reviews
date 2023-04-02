
// school reports company
// help teachers find out how students did on tests
// input: comma separated strings (one string with many values)
// build a programme that generates a report from this string
// "no result given" - if empty string
// Input: "Green, Green, Red, Amber, Red"
// Output: "Green: 2\nAmber: 1\nRed: 2""
// test if word is not red, green or amber

const reportBuilder = (studentResults) => {
  if (studentResults === '') {
    throw new Error('no results given');
  };

  if (typeof studentResults !== 'string') {
    throw new Error('input must be text');
  };

  const results = studentResults.split(',');

  const filtered = Object.entries(countOccurrences(results)).map(([key, value]) => {
    return `${key}: ${value}\n`; 
  }).join('');
  return filtered;
}

const countOccurrences = (arr) => {
  return arr.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = accumulator[currentValue] + 1 || 1
    return accumulator;
  }, {});
}

module.exports = reportBuilder;
