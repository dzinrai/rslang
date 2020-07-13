/* eslint-disable no-underscore-dangle */
import moment from 'moment';
// eslint-disable-next-line
import { getWordsFromBackend } from './getWords';

interface WordsSetter {
  userId: string;
  wordId: string;
  word: UserWord;
}

export interface UserWord {
  difficulty: 'easy' | 'normal' | 'hard';
  optional: {
    newWord: boolean;
    active: boolean;
    views: number;
    errors: number;
    repeat: boolean;
    wordId: string;
    lastView: string;
    nextView: string;
    correct: number;
    interval: number;
    wordIndicator: number;
  }
}

export async function createUserWord({ userId, wordId, word }: WordsSetter) {
  const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${userId}/words/${wordId}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('userToken')}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(word),
    });
  if (rawResponse.status !== 200) return { error: 'Failed to get words' };
  const content = await rawResponse.json();
  console.log('createUserWords', content);
  return content;
}

export async function preloadWordsOnBackend(wordsPerDay: number) {
  const nullFilter = JSON.stringify({ userWord: null });
  const wordsForBackend = await getWordsFromBackend(
    nullFilter, wordsPerDay,
  );
  wordsForBackend[0].paginatedResults.forEach((oneWord: any) => {
    createUserWord({
      userId: `${localStorage.getItem('userId')}`,
      wordId: oneWord._id,
      word: {
        difficulty: 'normal',
        optional: {
          newWord: true, views: 0, errors: 0, repeat: false, active: true, wordIndicator: 1, correct: 0, interval: 2, wordId: oneWord._id, lastView: moment().format('DD/MM/YY'), nextView: moment().format('DD/MM/YY'),
        },
      },
    });
  });
}
