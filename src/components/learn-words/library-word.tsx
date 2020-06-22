import React, { useContext } from 'react';
import { storeWords } from '../../context/contextWords';
// import styles from './learn-words.module.css';
interface LibraryWordProps {
  index: number;
}

function LibraryWord({ index }: LibraryWordProps) {
  const wordsState = useContext(storeWords);
  const stateWords = wordsState.state;
  const word = stateWords.words ? stateWords.words[index] : null;

  if (!word) return null;

  return (
    <div className="">
      <span>{`${word.word} (${word.wordTranslate}): `}</span>
      <img className="" src={`https://raw.githubusercontent.com/dzinrai/rslang-data/master/${word.image}`} alt={word.word} />
      <span dangerouslySetInnerHTML={{ __html: word.textExample }} />
    </div>
  );
}

export default LibraryWord;
