import { UserWord } from './create-user-word';

export interface WordsGetter {
  page: number;
  group: number;
  wordsPerExampleSentenceLTE: number,
  wordsPerPage: number
}

export interface WordsFromBack {
  filter: string;
  cardsDayAmount: number;
}

export interface UpdatedWord {
 wordId: string;
 word: UserWord;
}

export async function getWords({
  page, group, wordsPerExampleSentenceLTE, wordsPerPage,
}: WordsGetter) {
  const url = `https://afternoon-falls-25894.herokuapp.com/words?group=${group}&page=${page}&wordsPerExampleSentenceLTE=${wordsPerExampleSentenceLTE}&wordsPerPage=${wordsPerPage}`;
  const rawResponse = await fetch(url);
  if (rawResponse.status !== 200) return { error: 'Failed to get words' };
  const content = await rawResponse.json();
  return content;
}

export async function getWordsFromBackend({ filter, cardsDayAmount }: WordsFromBack) {
  const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${localStorage.getItem('userId')}/aggregatedWords?filter=${filter}&wordsPerPage=${cardsDayAmount}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
      Accept: 'application/json',
    },
  });
  if (rawResponse.status !== 200) return { error: 'Failed to get words' };
  const content = await rawResponse.json();
  console.log(content);
  return content;
}

export async function getWordById({ wordId, word }:UpdatedWord) {
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
