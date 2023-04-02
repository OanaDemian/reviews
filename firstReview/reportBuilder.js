
// school reports company
// help teachers find out how students did on tests
// input: comma separated strings (one string with many values)
// build a programme that generates a report from this string
// "no result given" - if empty string
// Input: "Green, Green, Red, Amber, Red"
// Output: "Green: 2\nAmber: 1\nRed: 2""

const reportBuilder = (studentResults) => {
  if (studentResults === '') {
    throw new Error('no results given');
  };

  if (typeof studentResults !== 'string') {
    throw new Error('input must be text');
  };
  const results = studentResults.split(',').join('\n');
  return results;

}

module.exports = reportBuilder;
