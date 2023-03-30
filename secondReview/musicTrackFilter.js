soundwavesFilter = (soundwaves) => {
  if (soundwaves.length === 0) {
  return 'no frequencies have been supplied';
  } else if (soundwaves[0] < 40) {
    const filteredSoundwaves = soundwaves
      .map(soundwave => soundwave < 40 ? 40 : soundwave);
      return filteredSoundwaves;
  } else {
    return soundwaves;
  }
} 

module.exports = soundwavesFilter;