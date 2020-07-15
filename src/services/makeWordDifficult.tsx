export default async function makeWordDifficultyTo(wordId: string, value: string) {
  const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${localStorage.getItem('userId')}/words/${wordId}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('userToken')}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        difficulty: value,
      }),
    });
  if (rawResponse.status !== 200) return { error: 'Failed' };
  const content = await rawResponse.json();
  console.log(`updated to ${value}`, content);
  return content;
}

export async function toggleWordActivity(wordId: string, prevOptional: any, active: boolean) {
  const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${localStorage.getItem('userId')}/words/${wordId}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('userToken')}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        optional: {
          ...prevOptional,
          active,
        },
      }),
    });
  if (rawResponse.status !== 200) return { error: 'Failed' };
  const content = await rawResponse.json();
  console.log('updated', content);
  return content;
}

export async function hardDelete(wordId: string) {
  // use this ONLY to hard deletion word on back
  const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${localStorage.getItem('userId')}/words/${wordId}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('userToken')}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  if (rawResponse.status !== 204) return { error: 'Failed' };
  const content = await rawResponse.json();
  console.log('updated', content);
  return content;
}
