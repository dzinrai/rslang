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
}: propsType) => {
  /* eslint-disable */
    useEffect(() => {
        const timeoutID = window.setTimeout(() => {
            setIsFalling(false);
            const array = statistic;
            if (currentWord.info.word) {
                array.push({...currentWord, guessed: false});
            }
            setStatistic(array);
            preloadWords();
        }, 4000);

        return () => {
            window.clearTimeout(timeoutID);
        };
    }, []);
    /* eslint-enable */
  return <></>;
};
