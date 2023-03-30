soundwavesFilter = (soundwaves) => {
  if (soundwaves.length === 0) {
  return 'no frequencies have been supplied';
  } else {
    const filteredSoundwaves = soundwaves
    .map(soundwave => {
      let defaultSoundwave = soundwave;
      console.log(soundwave)
      if (soundwave < 40) {
        defaultSoundwave = 40;
      } else if (soundwave > 1000) {
        defaultSoundwave = 1000;
      } else {
        defaultSoundwave = soundwave;
    }
      return defaultSoundwave;
    });
        return filteredSoundwaves;
  }
} 

module.exports = soundwavesFilter;