export default async function getWordsForLibrary(active: boolean) {
  const filterHard = JSON.stringify({ $or: [{ 'userWord.optional.active': active }, { 'userWord.optional.active': active }] });
  const url = `https://afternoon-falls-25894.herokuapp.com/users/${localStorage.getItem('userId')}/aggregatedWords?wordsPerPage=20&filter=${filterHard}`;
  // const url = `https://afternoon-falls-25894.herokuapp.com/users/${localStorage.getItem('userId')}/aggregatedWords`;
  const rawResponse = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
      Accept: 'application/json',
    },
  });
  if (rawResponse.status !== 200) return { error: 'Failed to get words' };
  const content = await rawResponse.json();
  console.log(content[0]);
  return content;
}

export async function getWordsForLibraryHard() {
  // const filterHard = JSON.stringify({ 'userWord.difficulty': 'hard' });
  const filterHard = JSON.stringify({ $and: [{ 'userWord.difficulty': 'hard' }] });
  const url = `https://afternoon-falls-25894.herokuapp.com/users/${localStorage.getItem('userId')}/aggregatedWords?filter=${filterHard}`;
  const rawResponse = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
      Accept: 'application/json',
    },
  });
  if (rawResponse.status !== 200) return { error: 'Failed to get words' };
  const content = await rawResponse.json();
  console.log(content[0]);
  return content;
}

export async function getWordsForLibraryDeleted() {
  // const filterHard = JSON.stringify({ 'userWord.difficulty': 'hard' });
  const filterHard = JSON.stringify({ $and: [{ 'userWord.optional.active': false } ] });
  const url = `https://afternoon-falls-25894.herokuapp.com/users/${localStorage.getItem('userId')}/aggregatedWords?filter=${filterHard}`;
  const rawResponse = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
      Accept: 'application/json',
    },
  });
  if (rawResponse.status !== 200) return { error: 'Failed to get words' };
  const content = await rawResponse.json();
  console.log(content[0]);
  return content;
}
