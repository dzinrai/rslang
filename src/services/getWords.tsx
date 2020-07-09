// eslint-disable-next-line
import { UserWord } from './create-user-word';
import { UserSettings } from './settings';

export interface WordsGetter {
  page?: number;
  group?: number;
  wordsPerExampleSentenceLTE: number,
  wordsPerPage: number
}

export interface WordsFromBack {
  filter?: string;
  settings?: UserSettings;
}

export async function getWords({
  wordsPerExampleSentenceLTE, wordsPerPage,
}: WordsGetter) {
  const url = `https://afternoon-falls-25894.herokuapp.com/words?wordsPerExampleSentenceLTE=${wordsPerExampleSentenceLTE}&wordsPerPage=${wordsPerPage}`;
  const rawResponse = await fetch(url);
  if (rawResponse.status !== 200) return { error: 'Failed to get words' };
  const content = await rawResponse.json();
  return content;
}

export async function getWordsFromBackend({ filter }: WordsFromBack, wordPerPage:number) {
  const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${localStorage.getItem('userId')}/aggregatedWords?filter=${filter}&wordsPerPage=${wordPerPage}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
      Accept: 'application/json',
    },
  });
  if (rawResponse.status !== 200) return { error: 'Failed to get words' };
  const content = await rawResponse.json();
  console.log('back:', content);
  return content;
}

export async function updateWordById(wordId :string, word : UserWord) {
  console.log(word);
  const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${localStorage.getItem('userId')}/words/${wordId}`,
    {
      method: 'PUT',
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

export async function getWordById(wordId:string) {
  const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${localStorage.getItem('userId')}/words/${wordId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
      Accept: 'application/json',
    },
  });
  if (rawResponse.status !== 200) return { error: 'Failed to get words' };
  const content = await rawResponse.json();
  return content;
}
