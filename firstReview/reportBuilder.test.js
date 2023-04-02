const reportBuilder = require('./reportBuilder');

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

  it('excludes values different from Red, Green or Amber', () => {
    const report = 'Green, Amber, zebra, horse, Red';
    expect(reportBuilder(report)).toBe('Green: 1\nAmber: 1\nRed: 1\n');
  });

  it('prints the report for an input of one value', () => {
    expect(reportBuilder('Green')).toBe('Green: 1\n');
  })

  it ('prints each value on a new line for an input of two values', () => {
    expect(reportBuilder('Amber, Green')).toBe('Amber: 1\nGreen: 1\n');   
  })

  it ('prints each value, followed by : and its number of occurnces in the text on a new line', () => {
    expect(reportBuilder('Amber, Green, Red, Red')).toBe('Amber: 1\nGreen: 1\nRed: 2\n');   
  })

  it ('formats output to capitalised value', () => {
    expect(reportBuilder('Amber, green, red, Red')).toBe('Amber: 1\nGreen: 1\nRed: 2\n');  
  })
})
