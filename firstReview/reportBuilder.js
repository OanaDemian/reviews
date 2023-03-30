class ReportBuilder{
  constructor(studentResults) {
    this.studentResults = studentResults;
  }

  getReport = () => {
    const resultsArray = this.studentResults.split(' ');
    if (this.studentResults == '') {
      return 'no results given';
    } else if (resultsArray.length === 1) {
      return `${resultsArray[0]}: ${resultsArray.length}\n`
    } else if (resultsArray.length > 1) {
      return countResultOccurances();
    } else {
      return this.studentResults;
    }
  }

  countResultOccurances = () => {
    const results = this.studentResults.split(' ');
    const count = {};
    return results.forEach((result) => {
      if (count[result]) {
        count[result] += 1;
      } else {
        count[result] = 1;
      }
      return `${result}: ${count.result}\n`;
    });
  }
}
module.exports = ReportBuilder;