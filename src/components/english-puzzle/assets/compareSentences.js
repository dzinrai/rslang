import compareArrays from './compareArrays';
import compareForMistakes from './compareForMistakes';

function compareSentences(sentence1, sentence2, includePos) {
  const sentence1_ = [...sentence1];
  const sentence2_ = [...sentence2];
  if (!includePos) {
    sentence1_.forEach((word, i) => { // [{text: 'blabla', id: 0}] => ['blabla']
      sentence1_[i] = word.text;
    });
    sentence2_.forEach((word, i) => { // [{text: 'blabla', id: 0}] => ['blabla']
      sentence2_[i] = word.text;
    });
  } else if (includePos) {
    sentence1_.forEach((word, i) => { // [{text: 'blabla', id: 0}] => ['blabla']
      sentence1_[i] = word.text + word.id;
    });
    sentence2_.forEach((word, i) => { // [{text: 'blabla', id: 0}] => ['blabla']
      sentence2_[i] = word.text + word.id;
    });
  }
  return {
    isSentenceRight: compareArrays(sentence1_, sentence2_),
    mistakes: compareForMistakes(sentence1_, sentence2_),
  };
}

export default compareSentences;
