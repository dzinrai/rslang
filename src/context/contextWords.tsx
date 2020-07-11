import React, { createContext, useReducer } from 'react';

const initialState = {
  words: ['word1'],
  userSettings: {
    wordsPerDay: 10,
    optional: {
      cardsPerDay: 10,
      wordTranscription: true,
      spellingOutSentence: true,
      picture: true,
      sentenceExample: true,
      translateDescription: true,
      showResultButton: true,
      moveToDifficult: true,
      deleteWord: true,
      difficultyButtons: true,
    },
  },
};

const storeWords = createContext<any>(undefined);
const { Provider } = storeWords;

type Props = {
  children: any;
};

const WordsProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer((prevState: any, action: { type: any, value: any }) => {
    let newState;
    switch (action.type) {
      case 'setWords':
        newState = {
          ...prevState, words: action.value,
        };
        return newState;
      case 'setUserSettings':
        newState = {
          ...prevState, userSettings: action.value,
        };
        return newState;
      default:
        throw new Error();
    }
  }, initialState);

  return (
    <Provider value={{ state, dispatch }}>
      {children}
    </Provider>
  );
};

export { storeWords, WordsProvider };
