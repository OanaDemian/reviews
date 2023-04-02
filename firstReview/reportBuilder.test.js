const reportBuilder = require('./reportBuilder');
const ReportBuilder = require('./reportBuilder');

describe('reportBulider', () =>{
  it('throws error no results given if no string is provided', () => {
    const report = '';
    try {
      reportBuilder(report);
      throw new Error('studentReport should have thrown an error');
    } catch (error) {
      expect(error.message).toBe('no results given');
    }
  });

  it('throws error input must be text if input is of other type', () => {
    const report = true;
    try {
      reportBuilder(report);
      throw new Error('studentReport should have thrown an error');
    } catch (error) {
      expect(error.message).toBe('input must be text');
    }
  });

  it('prints the report for an input of one value', () => {
    expect(reportBuilder('Green')).toBe('Green');
  })

  it ('prints each value of the string on a new line for an input of two values', () => {
    expect(reportBuilder('Amber,Green')).toBe('Amber\nGreen');   
  })

})
