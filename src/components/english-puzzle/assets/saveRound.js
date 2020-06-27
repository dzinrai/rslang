import settingsStored from '../localStorage/settings';

function saveRound(difficulty, page) {
  settingsStored.save('difficulty', difficulty);
  settingsStored.save('page', page);
}

export default saveRound;
