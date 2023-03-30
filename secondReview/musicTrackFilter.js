const soundwavesFilter = (soundwaves) => {
  if (soundwaves.length === 0) {
  return 'no frequencies have been supplied';
  } else if (soundwaves.every(isNumber)) {
    const sanitisedSoundwaves = soundwaves.map(soundwave => {
      if (soundwave < 40) {
        return 40;
      } 
      if (soundwave > 1000) {
        return 1000;
      }
        return soundwave;
    });
  return sanitisedSoundwaves;
  } else {
    return 'array must contain only numberic values';
  }
} 

const isNumber = (number) => {
  return typeof(number) === 'number';
}

module.exports = soundwavesFilter;