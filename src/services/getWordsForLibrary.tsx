export default async function getWordsForLibrary() {
  const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${localStorage.getItem('userId')}/aggregatedWords`, {
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

export async function getWordsForLibraryHard() {
  // const filterHard = JSON.stringify({ 'userWord.difficulty': 'hard' });
  const filterHard = JSON.stringify({ $and: [{ 'userWord.difficulty': 'hard' }, { userWord: null }] });
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
  const filterHard = JSON.stringify({ $or: [{ 'userWord.optional.active': false }, { userWord: null }] });
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
