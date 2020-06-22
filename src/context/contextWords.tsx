import React, { createContext, useReducer } from 'react';

const initialState = {
  words: ['word1'],
};

const ContextWords = createContext<any>(undefined);
export type Props = {
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
      default:
        throw new Error();
    }
  }, initialState);

  return (
    <ContextWords.Provider value={{ state, dispatch }}>
      {children}
    </ContextWords.Provider>
  );
};

export { ContextWords, WordsProvider };
