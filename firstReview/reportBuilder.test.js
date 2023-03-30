const ReportBuilder = require('./reportBuilder');

describe('ReportBuilder', () => {
  xit ('gives output no results given if no string is provided', () => {
    const report = new ReportBuilder('');
    expect (report.getReport()).toEqual('no results given')
  });

  xit ('gives output of string if the string is provided', () =>{
    const report = new ReportBuilder('Green');
    expect (report.getReport()).toEqual('Green');
  });

  xit ('gives output of one result, followed by 1 and newline if one result is provided', () =>{
    const report = new ReportBuilder('Green');
    console.log(report.getReport())
    expect (report.getReport()).toEqual('Green: 1\n');
  });

 xit ('gives output of one result, followed by 2 and newline if one result is provided twice', () =>{
    const report = new ReportBuilder('Green, Green')
    console.log(report.getReport())
    expect (report.getReport()).toEqual('Green: 2\n');
  });

  xit ('counts the number of times a word appears in an array', () =>{
    const report = new ReportBuilder('Green, Green')
    expect (report.countResultOccurances()).toEqual('Green: 2');
  });
  
  
})