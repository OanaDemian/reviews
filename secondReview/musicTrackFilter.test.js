// band pass filter 
// input: soundwaves: an array of frequences, each frequency is an integer
// output: soundwaves: an array of the same length
// default upper limit:1000 
// default lower limit:40
// empty array: 'no frequencies have been supplied'

const soundwavesFilter = require ('./musicTrackFilter');
describe ('band pass filter ', () => {
  it ('returns message no frequencies have been supplied when the input is an empty array', () => {
    const soundwaves = [];
    expect(soundwavesFilter(soundwaves)).toEqual('no frequencies have been supplied');
  });
});