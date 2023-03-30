// band pass filter 
// input: soundwaves: an array of frequencies, each frequency is an integer
// output: soundwaves: an array of the same length
// default upper limit:1000 
// default lower limit:40
// empty array: 'no frequencies have been supplied'
// check if values are integers
//next: practice on smth fun, like building a game in the console

const soundwavesFilter = require ('./musicTrackFilter');
describe ('band pass filter ', () => {
  it ('returns message no frequencies have been supplied when the input is an empty array', () => {
    const soundwaves = [];
    expect(soundwavesFilter(soundwaves)).toEqual('no frequencies have been supplied');
  });

  it ('returns an array containing a value of 40 for an array containing one sound of 40 Hz frequency', () => {
    const soundwaves = [40];
    expect(soundwavesFilter(soundwaves)).toEqual([40]);
  });

  it ('returns an array containing a value of 40 for an array containing one sound of 10 Hz frequency', () => {
    const soundwaves = [10];
    expect(soundwavesFilter(soundwaves)).toEqual([40]);
  });

  it ('returns an array containing a value of 1000 for an array containing one sound of 1500 Hz frequency', () => {
    const soundwaves = [1500];
    expect(soundwavesFilter(soundwaves)).toEqual([1000]);
  });

  it ('returns an array containing 2 values: 40 and 1000 for an array containing one sound of 40 & one of 1500 Hz frequency', () => {
    const soundwaves = [10, 1500];
    expect(soundwavesFilter(soundwaves)).toEqual([40, 1000]);
  });


  it ('filters an array of 5 frequencies with values between 10 and 12000', () => {
    const soundwaves = [10, 40, 80, 12000, 1500];
    expect(soundwavesFilter(soundwaves)).toEqual([40, 40, 80, 1000, 1000]);
  });

  it ('throws an error if the array contains anything but numeric values', () => {
    const soundwaves = [10, 40, 'sounds', 12000, false];
    expect(soundwavesFilter(soundwaves)).toEqual('array must contain only numberic values');
  });
  it ('has a minimum default value', () => {
    const soundwaves = [10, 20];
    const min = 40;
    expect(soundwavesFilter(soundwaves, min)).toEqual([40, 40]);
  });

});