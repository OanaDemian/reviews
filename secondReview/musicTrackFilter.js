soundwavesFilter = (soundwaves) => {
  if (soundwaves.length === 0) {
  return 'no frequencies have been supplied';
  } else {
    return soundwaves;
  }
} 

module.exports = soundwavesFilter;