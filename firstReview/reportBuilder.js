
// school reports company
// help teachers find out how students did on tests
// input: comma separated strings (one string with many values)
// build a programme that generates a report from this string
// "no result given" - if empty string
// Input: "Green, Green, Red, Amber, Red"
// Output: "Green: 2\nAmber: 1\nRed: 2""
// test if word is not red, green or amber
// split, trim, downcase

const reportBuilder = (studentResults) => {
  if (studentResults === '') {
    throw new Error('no results given');
  };

  if (typeof studentResults !== 'string') {
    throw new Error('input must be text');
  };

  const results = studentResults.toLowerCase().replaceAll(' ', '').split(',');
  console.log(results);
  const filteredResults = results.filter((word) => 
    (word === 'red' || word === 'amber' || word === 'green')
  );

  const eachResultOccurences = Object.entries(countOccurrences(filteredResults)).map(([key, value]) => {
    return `${capitaliseFirstLetter(key)}: ${value}\n`; 
  }).join('');

  return eachResultOccurences;
}

const countOccurrences = (arr) => {
  return arr.reduce((eachOccurance, currentValue) => {
    eachOccurance[currentValue] = eachOccurance[currentValue] + 1 || 1
    return eachOccurance;
  }, {});
}

const capitaliseFirstLetter = (word) => {
  const formattedWord = word.charAt(0).toUpperCase() + word.slice(1);
  return formattedWord;
}
module.exports = reportBuilder;
