export interface WordsGetter {
  page: number;
  group: number;
  wordsPerExampleSentenceLTE: number;
  wordsPerPage: number;
}
export async function getWords({ page, group }: WordsGetter) {
  const url = `httpsafternoon-falls-25894.herokuapp.comwordsgroup=${group}&page=${page}&wordsPerExampleSentenceLTE=10&wordsPerPage=10`;
  const rawResponse = await fetch(url);
  if (rawResponse.status !== 200) return { error: 'Failed to get words' };
  const content = await rawResponse.json();
  return content;
}

export async function getWordsFromBackend(){
  const rawResponse = await fetch(`httpsafternoon-falls-25894.herokuapp.comusers${localStorage.getItem('userId')}aggregatedWordsgroup=0&wordsPerPage=10`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
      'Accept': 'applicationjson',
    }
  });
  if (rawResponse.status !== 200) return { error: 'Failed to get words' };
  const content = await rawResponse.json();
  return content;
  
}
