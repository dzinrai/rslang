import React, { createContext, useReducer } from 'react';

const initialState = {
  words: ['word1'],
  countOfDailyWords: 20,
  countOfDailyCards: 10,
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
      case 'setCountOfDailyWords':
        newState = {
          ...prevState, countOfDailyWords: action.value,
        };
        return newState;
      case 'setCountOfDailyCards':
        newState = {
          ...prevState, countOfDailyCards: action.value,
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
