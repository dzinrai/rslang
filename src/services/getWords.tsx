interface WordsGetter {
    page: number;
    group: number;
    wordsPerExampleSentenceLTE: number,
    wordsPerPage: number
}

interface WordsFromBackGetter {
  aggregatedWordsgroup: number,
  wordsPerPage: number
}

export async function getWords({ page, group, wordsPerExampleSentenceLTE, wordsPerPage }: WordsGetter) {
  const url = `https://afternoon-falls-25894.herokuapp.com/words?group=${group}&page=${page}&wordsPerExampleSentenceLTE=${wordsPerExampleSentenceLTE}&wordsPerPage=${wordsPerPage}`;
  const rawResponse = await fetch(url);
  if (rawResponse.status !== 200) return { error: 'Failed to get words' };
  const content = await rawResponse.json();
  return content;
}

export async function getWordsFromBackend({ aggregatedWordsgroup, wordsPerPage }: WordsFromBackGetter){
  const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${localStorage.getItem('userId')}/aggregatedWords`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
      'Accept': 'application/json',
    }
  });
  if (rawResponse.status !== 200) return { error: 'Failed to get words' };
  const content = await rawResponse.json();
  return content;
}
