const soundwavesFilter = (soundwaves, min, max) => {
  if (soundwaves.length === 0) {
    throw new Error('no frequencies have been supplied');
  };

  if (!isNumber(min) || !isNumber(max)) {
    throw new Error('min and max must be numberic values');
  }

  if (!soundwaves.every(isNumber)) {
    throw new Error('array must contain only numberic values');
  }
  
  const sanitisedSoundwaves = soundwaves.map(soundwave => {
    if (soundwave < min) {
      return min;
    } 
    if (soundwave > max) {
      return max;
    }
      return soundwave;
  });
  return sanitisedSoundwaves;
} 

const isNumber = (number) => {
  return typeof(number) === 'number';
}

module.exports = soundwavesFilter;