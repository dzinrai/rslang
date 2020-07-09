import React, { useEffect } from 'react';

interface propsType {
    setIsFalling: any,
    statistic: any,
    setStatistic: any,
    currentWord: any,
    preloadWords: any
}

export default ({
  preloadWords, setIsFalling, statistic, setStatistic, currentWord,
} : propsType) => {
  useEffect(() => {
    const timeoutID = window.setTimeout(() => {
      setIsFalling(false);
      const array = statistic;
      array.push({ ...currentWord, guessed: false });
      setStatistic(array);
      console.log('start timeOut');
      preloadWords();
    }, 4000);

    return () => {
      window.clearTimeout(timeoutID);
      console.log('clean timeOut');
    };
  }, []);
  return <></>;
};
