/* eslint-disable */
async function getPages({ group }) {
  const url = `https://afternoon-falls-25894.herokuapp.com/words/count?group=${group}&wordsPerExampleSentenceLTE=10&wordsPerPage=10`;
  const rawResponse = await fetch(url);
  if (rawResponse.status !== 200) return { error: 'Failed to get pages' };
  const content = await rawResponse.json();
  return content;
}

export default getPages;
