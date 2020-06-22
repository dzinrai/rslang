import React, { useContext, useEffect, useState } from 'react';
// import styles from './learn-words.module.css';
import { ContextWords } from '../../context/contextWords';
import getWords from '../../services/getWords';
import LibraryWord from './library-word';

function LearnWords() {
  const wordsState = useContext(ContextWords);
  const dispatchWords = wordsState.dispatch;
  // const stateWords = wordsState.state;

  const [words, setWords] = useState([]);

  useEffect(() => {
    const preloadWords = async () => {
      // подгрузка слов для 1ой группы (0-5), 1ой страницы
      const wordsFromBackend = await getWords({ page: 1, group: 0 });
      setWords(wordsFromBackend);
      dispatchWords({ type: 'setWords', value: wordsFromBackend });
    };
    preloadWords();
  }, []);

  // рендерю LibraryWord только с index для наглядности использования потом контекстного stateWords
  // правильнее просто прокинуть ему элемент word
  return (
    <div>
      <div>Levels of word learning</div>
      <div>
        {words.length > 0 && words.map((word: any, i: number) => (
          <LibraryWord
            key={word.id}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}

export default LearnWords;
