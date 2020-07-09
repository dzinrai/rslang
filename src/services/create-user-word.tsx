import { getWords } from './getWords';
import moment from 'moment';

interface WordsGetter {
  page?: number;
  group?: number;
  wordsPerExampleSentenceLTE: number,
  wordsPerPage: number
}

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
    nextView:string;
    correct: number;
    interval:number;
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
  return content;
}

export async function preloadWords({
  wordsPerExampleSentenceLTE, wordsPerPage,
}: WordsGetter) {
  const wordsFromBackend = await getWords({
    wordsPerExampleSentenceLTE, wordsPerPage
  });
  wordsFromBackend.forEach((oneWord: any) => {
    createUserWord({
      userId: `${localStorage.getItem('userId')}`,
      wordId: oneWord.id,
      word: {
        difficulty: 'normal',
        optional: {
          newWord: true, views: 0, errors: 0, repeat: false, active: true, correct: 0, interval:2, wordId: oneWord.id, lastView:moment().format('DD/MM/YY') , nextView: moment().format('DD/MM/YY'),
        },
      },
    });
  });
}
