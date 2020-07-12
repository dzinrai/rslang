async function getWords({ page, group }) {
  const url = `https://afternoon-falls-25894.herokuapp.com/words?group=${group}&page=${page}&wordsPerExampleSentenceLTE=10&wordsPerPage=10`;
  const rawResponse = await fetch(url);
  if (rawResponse.status !== 200) return { error: 'Failed to get words' };
  const content = await rawResponse.json();
  return content;
}

export default getWords;
